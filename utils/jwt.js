import jwt  from "jsonwebtoken";
import "dotenv/config";

export const generateToken= (payload)=>{
    const token = jwt.sign(payload, 'af14', {expiresIn:"2d"})
    return token
}

export const verifyToken= (token)=>{
    const verify = jwt.verify(token, 'af14')
    return verify
}