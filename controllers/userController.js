import User from "../models/User.js";
import bcrypt from "bcrypt";


export const userLogin = (req, res) => {
return res.status(200).json({message: 'Login successfully'});
}


export const userRegister = async (req, res) => {
    const {username, email, password} = req.body || {};
    try {
        const isExit = await User.findOne({email});
        if(isExit){
            return res.status(409).json({message: "user already exist"})
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        await User.create({username, email, password:hashedPassword});
        return res.status(200).json({message: 'user created'});
        
    } catch (err) {
        return res.status(400).json({message: err.message});
    }

}