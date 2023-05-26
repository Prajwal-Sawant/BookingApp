import User from "../models/User.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//import cookie from "cookie-parser";

export const Register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            ...req.body,
            password: hash,

        })
        //console.log(newUser)
         await newUser.save();
        res.status(200).send("User Has Been Created");


    } catch (err) {
        next(err)
    }
}

export const Login = async (req,res,next) => {
    try{
        const user = await User.findOne({ username: req.body.username });
        if(!user) {
            res.status(500).send("wrong username Credentials")
        }
        console.log(user)
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
          );
        //const iscorrectPassword = await bcrypt.compare(req.body.password, getUser.password);
         console.log(isPasswordCorrect)
        if(!isPasswordCorrect ){
            res.status(500).send("wrong Password Credentials")
        }

        const token = jwt.sign({id : user._id , isAdmin: user.isAdmin}, process.env.JWT)
    const { password, isAdmin, ...otherDetails} = user._doc;
        res.cookie("access token", token, {
            httpOnly: true
        }).status(200).json({otherDetails});

    }catch(err){
        next(err);
    }
}