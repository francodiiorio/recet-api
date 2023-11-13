import jwt  from "jsonwebtoken";
import "dotenv/config";

export const generateToken= (payload)=>{
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"2d"})
    return token
}

export const verifyToken= (token)=>{
    const verify = jwt.verify(token, process.env.JWT_SECRET)
    return verify
}