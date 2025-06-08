import jwt from "jsonwebtoken";
import userModel from "../Model/userSchema.js";
 const midleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const spilitToken = token.split(" ")[1];
    const tokenVerify = jwt.verify(spilitToken, process.env.key);
    console.log(tokenVerify, "t");

    const findUser = await userModel.findById({ _id: tokenVerify.id });
    console.log(findUser);
    if (findUser.token != spilitToken) {
      return res.json({
        success: false,
        status: 404,
        message: "Please login again",
      });
    } else {
      req.user = findUser;
      next();
    }
  } catch (error) {}
};
export default midleware;