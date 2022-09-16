const { response } = require("express");
const jwt = require("jsonwebtoken");

const validarJWT=(req,res=response,next)=>{
    const token=req.header('TokenAuth');
    if(!token){
        return res.status(401).json({ok:false,msg:'Error: token no enviado.'});
    }
    try {
       const {uid,nombre,email}=jwt.verify(token,process.env.SECRET_JWT_SEED);
       req.id=uid;
       req.nombre=nombre;
       req.email=email;
    } catch (error) {
        res.status(401).json({ok:false,msg:'Token no válido.'})
    }
    next();
}
module.exports={
    validarJWT
}