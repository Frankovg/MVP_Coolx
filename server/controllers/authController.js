const userControllers = require("./userControllers");
require("dotenv").config();

const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true para 465, false para otros
    auth: {
      user: 'coolx.earthproj@gmail.com', // user
      pass: process.env.EMAIL_PASS, // password de aplicación
    }});

class authController {

    sendMails = (req, res) => {
        console.log("Dentro de sendmail");
        console.log(req.body);
        const {userName, email, phone, userMessage} = req.body;
        let prueba = `<h3>Nueva solicitud de contacto desde coolx.earth</h3>
        <p>Nombre: ${userName}</p>
        <p>Email: ${email}</p>
        <p>Teléfono: ${phone}</p>
        <p>Mensaje: ${userMessage}</p>
        <img src="cid:img" />
        `;
        let maillist = [ // Lista de destinatarios **** CAMBIAR
            'bjgamboa@gmail.com',
            'basjgamboa@gmail.com',
          ];
    
         const mailmsg = {
            from: '"Coolx" <coolx.earthproj@gmail.com>', // Remitente
            to: maillist,
            subject: "Solicitud de Contacto", // Asunto
            html: prueba, // html body
            attachments: [{
                filename: 'CoolxLogo.jpg',
                path: './public/images/CoolxLogo.jpg',
                cid: 'img' // valor que no se repita
            }]
        }; 
        transporter.sendMail(mailmsg).then((trans) => {
            res.status(200).send('E-mail enviado con éxito');
            console.log(trans);
        }).catch((error) => {
            res.status(500).send('Algo ha salido mal!: ' + error);
        });
    }

    sendRegistration = (req, res) => {
        console.log("Dentro de sendmail");
        console.log(req.body);
        const {user_name, email} = req.body;
        let prueba = `<h3>Bienvenido a coolx.earth</h3>
        <p>Hola, ${user_name}.</p>
        <p>Acabas de registrarte con éxito en cool.earth.</p>
        <p>Si no has sido tú, por favor contacta con nosotros.</p>
        <img src="cid:img" />
        `;
        let maillist = [email];
    
         const mailmsg = {
            from: '"Coolx" <coolx.earthproj@gmail.com>', // Remitente
            to: maillist,
            subject: "Usuario registrado", // Asunto
            html: prueba, // html body
            attachments: [{
                filename: 'CoolxLogo.jpg',
                path: './public/images/CoolxLogo.jpg',
                cid: 'img' // valor que no se repita
            }]
        }; 
        transporter.sendMail(mailmsg).then((trans) => {
            res.status(200).send('E-mail enviado con éxito');
            console.log(trans);
        }).catch((error) => {
            res.status(500).send('Algo ha salido mal!: ' + error);
        });
    }



}

module.exports = new authController();