import imageUpload from "../imageUpload/imageUpload.js";
import tokenGen from "../jwt/usertoken.js";
import userModel from "../Model/userSchema.js";
import bcrypt from "bcrypt";

// --> signup start
export const signup = async (req, res) => {
  try {
    const emailFind = req.body.email?.trim();
    const phoneFind = req.body.phone?.trim();
    const query = [];
    if (emailFind) {
      query.push({ email: new RegExp(`^${emailFind}$`, "i") });
    }

    if (phoneFind) {
      query.push({ phone: phoneFind });
    }
    if (query.length === 0) {
      return res.json({
        message: "Email or phone must be provided",
        success: false,
        status: 404,
        body: {},
      });
    } else {
      // console.log(req.files, "req filesssssssssss");
      if (req.files?.image?.name) {
        const photo = req.files.image;
        console.log(photo, "photo callinggggg");
        if (photo) {
          req.body.image = imageUpload(photo);
        }
      }
      const userExists = await userModel.findOne({ $or: query });
      if (userExists) {
        return res.json({
          message: "user already exists",
          success: false,
          status: 400,
          body: {},
        });
      } else {
        console.log(req.body.password, "finding password");
        const passwordEnq = await bcrypt.hash(req.body.password, 10);
        console.log(passwordEnq, "passssssssssssss");

        let data = await userModel.create({
          ...req.body,
          password: passwordEnq,
          image: req.body.image,
        });

        // token---->
        const tokenCall = tokenGen(data._id);
        data.token = tokenCall.myToken;
        data.logintime = tokenCall.verifying.iat;
        data.save();
        // -->Token end
        console.log(tokenGen());

        return res.json({
          message: "user created successfully",
          success: true,
          status: 200,
          body: data,
        });
      }
    }
  } catch (error) {
    console.log(error, "errrrrorrr");
  }
};
// signup end

// --> login start
export const login = async (req, res) => {
  try {
    const emailFind = req.body.email?.trim();
    const phoneFind = req.body.phone?.trim();
    const query = [];
    if (emailFind) {
      query.push({ email: new RegExp(`^${emailFind}$`, "i") });
    }
    if (phoneFind) {
      query.push({ phone: phoneFind });
    }
    if (query.length === 0) {
      return res.json({
        message: "Email or phone must be provided",
        success: false,
        status: 404,
        body: {},
      });
    }
    const user = await userModel.findOne({
      $or: query,
    });

    if (!user) {
      return res.json({
        message: "user Doesn't exists ",
        status: 400,
        success: false,
        body: {},
      });
    } else {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (passwordMatch) {
        return res.json({
          message: "Login Successfullyyyyyyyy ",
          status: 200,
          success: true,
          body: user,
        });
      } else {
        return res.json({
          message: "Password not matched ",
          status: 400,
          success: false,
          body: {},
        });
      }
    }
  } catch (error) {
    console.log(error, "error occured");
  }
};

// --> login end
// -->Find All start
export const findAll = async (req, res) => {
  try {
    const users = await userModel.find();

    const allusers = users.map((e) => {
      return {
        ...e.toObject(),
        pic: `http://localhost:1111/image/${e.image}`,
      };
    });
    console.log(allusers, "allll");

    return res.json({
      message: "Data Fetched",
      status: 200,
      success: true,
      body: allusers,
    });
  } catch (error) {
    console.log(error, "error in findAll");
  }
};
// -->Find All Ended

// -->Find byId start

export const findbyId = async (req, res) => {
  try {
    const byId = await userModel.findById({ _id: req.params.id });
    console.log(byId, "data");
    return res.json({
      message: "user details",
      status: 200,
      success: true,
      body: byId,
    });
  } catch (error) {
    console.log(error, "error in find");
  }
};
// -->Find byId Ended

// -->Find findbybody start
export const findBybody = async (req, res) => {
  try {
    const byId = await userModel.findById({ _id: req.body.id });
    console.log(byId, "data");
    return res.json({
      message: "user details",
      status: 200,
      success: true,
      body: byId,
    });
  } catch (error) {
    console.log(error, "error in find");
  }
};

// -->Find findbybody Ended

// -->update start

export const update = async (req, res) => {
  try {
    const pass = await bcrypt.hash(req.body.password, 10);
    const updateData = await userModel.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { ...req.body, password: pass },
      { new: true }
    );
    return res.json({
      message: "updated succesfully ",
      status: 200,
      success: true,
      body: updateData,
    });
  } catch (error) {
    console.log(error, "error occured");
  }
};
// -->update ended

// delete id start

export const deleteId = async (req, res) => {
  try {
    // const user = await userModel.findByIdAndDelete({ _id: req.params.id });
    const user = await userModel.deleteOne({ _id: req.params.id });
    console.log(user, "user deleted");
    return res.json({
      message: "user deleted successfully",
      status: 200,
      success: true,
      body: user,
    });
  } catch (error) {
    console.log(error, "delete error");
  }
};
// delete id delete

// delete all api
export const deleteAll = async (req, res) => {
  try {
    // let data = await userModel.find()
    let deleteData = await userModel.deleteMany({});
    return res.json({
      message: "All users deleted successfully",
      success: true,
      status: 200,
      body: deleteData,
    });
  } catch (error) {
    console.log(`Error occurred in deleteAll`);
  }
};
//  delete all end
