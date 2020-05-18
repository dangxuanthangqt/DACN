const jwt = require('jsonwebtoken');
var generateToken = (user, secretSignature, tokenLife)=>{
    return new Promise((resolve, reject)=>{
        const user_data ={
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName:user.lastName
        }

        jwt.sign({
            data: user_data
        },
        secretSignature,
        {
            algorithm:"HS256",
            expiresIn:tokenLife
        },
        (err, token) =>{
            if (err) reject(err);
           
            resolve(token);
        })
        
    })
}
var verifyToken=(token, secretKey)=>{
    return new Promise((resolve, reject)=>{
        jwt.verify(token, secretKey, (err, decode)=>{
            if(err) reject(err);
            resolve(decode);
        })
    })
}
module.exports={
    generateToken,
    verifyToken
}