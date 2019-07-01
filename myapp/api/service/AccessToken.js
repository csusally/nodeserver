var debug = require("debug")("myapp:server");
var rp = require('request-promise')
var mongoose = require("mongoose");
var accessTokenBD = mongoose.model("AccessToken");

class AccessToken {
  constructor({ appid, secret }) {
    this.appid = appid
    this.secret = secret
  }

  // 获取 access_token
  async getAccessToken() {
    let token_url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + this.appid + '&' + 'secret=' + this.secret;
    const result = await rp({
      url: token_url,
      method: 'GET',
      json: true
    });
    debug(result);
    return result;
  }


  async getCacheToken() {
    let gapTime = 300000; // 5 分钟
    var result = await accessTokenBD.find({});
    debug(result);

    if (result.code) {
      return 'error';
    }
    //数据库没有，获取
    if (result.length === 0) {
      let accessTokenBody = await this.getAccessToken();
      let ein = accessTokenBody.expires_in * 1000;
      await accessTokenBD.create({
        access_token: accessTokenBody.access_token,
        expires_in: ein,
        create_time: Date.now(),
        type: "public_account"
      });
      return accessTokenBody.access_token;
    }
    else {
      let data = result[0];
      let {
        _id,
        access_token,
        expires_in,
        create_time,
        type
      } = data;
      // 判断access_token是否有效
      if (Date.now() < create_time + expires_in - gapTime) {
        return access_token;
      }
      // 失效，重新获取
      else {
        let accessTokenBody = await this.getAccessToken();
        let ein = accessTokenBody.expires_in * 1000;
        await accessTokenBD.update({ type:'public_account'},{
          access_token: accessTokenBody.access_token,
          expires_in: ein,
          create_time: Date.now(),
          type: "public_account"
        }) 
        return accessTokenBody.access_token;
      }
    }
  }

}
module.exports = AccessToken
