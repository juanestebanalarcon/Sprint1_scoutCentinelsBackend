const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: process.env.OAUTH_ACCESS_TOKEN
    }
});

const mailOptions_=(recipient,password,type,name)=>{
    if(type==1){
        return {
        from: process.env.MAIL_USERNAME,
        to: `${recipient}`,
        subject: `Confirmación de registro de ${name}`,
        html:`
        <html>
        <body>
        <style>
        #text {
            display: flex;
            flex-direction: row;
        }
        #extra {
            height: 20%;
            width: 100%;
            background-color: #00395A;
            margin: 0%;
        
        }
        #conte {display: block;margin: 6%;}
        </style>
        <div id="seg" style="height: fit-content;/* width: 100vh; */ color: #ffff;padding: 0.5em;">
        <div id='img-principal' scr=""></div>
  
        <img style="width: 10%;margin: auto;display: block;" src="https://i.ibb.co/HPNN42R/logo192.png" alt="logo512" >
<div id="seg" style="height: fit-content;/* width: 100vh; */ color: #ffff;padding: 0.5em;">
    <h1 style=" font-family: 'Montserrat';font-style: normal;font-weight: 550;font-size: 1.5em;text-align: center;color: #00395A;margin-top: 0px;margin-bottom: 0px;">¡Hola, ${name}!</h1>
    <hr style="margin: auto;width: 95%;margin-top: 0.5em;margin-bottom: 1em;margin-left: 0px;border: 0;border-top: 1px solid #eee;"/>
    <h3 style="font-family: 'Montserrat';font-style: normal;font-weight: 800;font-size: 1em;text-align: center;color: #00395A;margin-top: 2%;margin-bottom: 2%;
    ">Se habilitó su correctamente su ususario en <b>CENTINELAPP</b></h3>
    
    <h2 style="font-family: 'Montserrat';font-style: normal;font-weight: 500;font-size: 0.8em;text-align: center;color: #00395A;margin-top: 0px;margin-bottom: 0px;"><b>Correo:</b> ${recipient}</h2>
    <h2 style="font-family: 'Montserrat';font-style: normal;font-weight: 500;font-size: 0.8em;text-align: center;color: #00395A;margin-top: 0px;margin-bottom: 0px;"><b>Contraseña:</b> ${password}</h2>

    <a style="font-family: 'Montserrat';font-style: normal;font-weight: 500;font-size: 1em;text-align: center;color: #00395A;margin-top: 5%;display: block;margin-bottom: 5%;" href="">¡Inicia ahora!</a>
    <h4 style=" font-family: 'Montserrat';font-style:normal;font-weight: 300;font-size: 0.5em;text-align: center;color: #00395A;margin-top: 2%;margin-bottom: 2%;">
    Disfruta de todos los servicios que te ofrece <b>CENTINELAPP</b></h4>
</div>
</div>
<footer style="height: fit-content;background-color:#202424;">
<h1 style="color: #909292; font-size: 16px; text-align: center;font-family:Open Sans">&copy; 2022 Powered by  Ascent</h1>
</footer>
</body>
</html>  
   `
        }
    }else if(type ==2){
        return {
        from: process.env.MAIL_USERNAME,
        to: `${recipient}`,
        subject: `Confirmación de cambio de contraseña para ${name}`,
        html:`<p style="color:blue;font-size:20px;font-family:Arial;">
        Hola ${name} esta es tu contraseña nueva: ${password}
        </p>`
        }
    }
    }

module.exports = {
    transporter,
    mailOptions_
}