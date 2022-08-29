const {response}=require('express');
const Rama = require("../Model/Rama");

const createRama=(req,res=response)=>{
    const uid = req.uid;
    const rama = new Rama({Scout:uid,...req.body});

    try{
        ramaDB = await Rama.save();
        res.status(200).json({ok:true,rama:ramaDB})
    }catch(e) {
        console.log(e);
        res.status(500).json({ok:false,msg:"Error interno en el servidor."});
    }
}
const readRamas=(req,res=response)=>{
    const uuid = req.params.uid
    try{
        const ramas_ = await Hospital.find({uuid});
        if(ramas_){
            res.status(200).json({ok:true,ramas_});
        }else{
            res.status(404).json({ok:false,msg:"Not found"});
        }
    }catch(e){
        console.log(e);
        res.status(500).json({ok:false,msg:"Error interno en el servidor."});
    }
}
const readRama=(req,res=response)=>{
    const uid=req.params.uid;
    try{
        const rama_ = await Rama.findById(uid);
        if(scouts){
            return res.status(200).json({
                ok:true,
                rama_ 
            });
            
        }else{
            return res.status(404).json({
                ok:false,
                msg:"Not found"
            });

        }
        
    }catch(e){
        console.log(e);
        return res.status(500).json({ok:false,msg:'Error interno del servidor'})
    }
}
const updateRama = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const rama = await Rama.findById( id );

        if ( !rama ) {
            return res.status(404).json({
                ok: true,
                msg: 'Rama no encontrada por id',
            });
        }

        const cambioRama = {
            ...req.body,
            Scout: uid
        }

        const ramaActualizada = await Rama.findByIdAndUpdate( id, cambioRama, { new: true } );


        res.json({
            ok: true,
            rama:ramaActualizada
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}
const deleteRama=(req,res=response)=>{
    
    const id  = req.params.id;
    
    try {
        
        const rama = await Rama.findById( id );
    
        if ( !rama ) {
            return res.status(404).json({
                ok: true,
                msg: 'Rama no encontrada por id',
            });
        }
    
        await Rama.findByIdAndDelete( id );
    
    
        res.json({
            ok: true,
            msg: 'Rama eliminada'
        });
    
    } catch (error) {
    
        console.log(error);
    
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

module.exports={
    createRama,
    readRama,
    readRamas,
    updateRama,
    deleteRama
}