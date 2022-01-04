var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var nodemailer = require('nodemailer');

router.get('/novedades', async function(req, res, next) {
    let novedades = await novedadesModel.getNovedades();

    res.json(novedades);
});

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'ManuLeivaOk@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se conecto a traves de la web y quiere más información a este correo: ${req.body.correo} <br/> Además, hizo el siguiente comentario: ${req.body.mensaje}. <br/> Su teléfono es: ${req.body.telefono}: `
    }

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transport.sendMail(mail) 

      res.status(201).json({
          error:false,
          message: 'Mensaje enviado'
      });
});

module.exports = router;
