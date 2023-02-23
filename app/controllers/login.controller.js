const ApiError = require("../api-error");
const MongoDB = require("../utils/mongodb.util");
const LoginService = require("../services/login.service");

exports.access = (req, res) => {
  res.json({ message: "You are in Login Page" });
};
exports.login = async (req, res, next) => {
  try {
    const loginService = new LoginService(MongoDB.client);
    const document = await loginService.findByName(req.body.username);
    if (!document) {
      return next(new ApiError(404, "Username not found"));
    }
    if(req.body.password === document.password){
        return res.json("Login Successful");
    }
    return res.json("Login Fail!!");
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `Error login with username=${req.body.username}`)
    );
  }
};
