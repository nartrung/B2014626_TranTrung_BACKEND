const { ObjectId } = require("mongodb");

class LoginService {
  constructor(client) {
    this.Account = client.db().collection("accounts");
  }
  
  async findByName(username) {
    return await this.Account.findOne({
      username: { $regex: new RegExp(username), $options: "i" },
    });
  }
}

module.exports = LoginService;
