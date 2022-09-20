const jwt=require('jsonwebtoken');

const generateJWT=(id,nombre,email,rol)=>{
    return new Promise((resolve,reject)=>{
        const payload={id,nombre,email,rol};
        jwt.sign(payload,process.env.SECRET_JWT_SEED,{
            expiresIn:'8h'
        },(err,token)=>{
            if(err){
                console.log(err);
                reject(err);
            } 
            resolve(token);
        })
    });
}
module.exports={
    generateJWT
}    