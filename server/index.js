const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Configurar CORS para permitir solicitudes desde el frontend
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Configurar transporte de nodemailer para IONOS
const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.mx', // Servidor SMTP de IONOS
  port: 465, // Puerto para TLS
  secure: true, // Cambiar a true si usas SSL en el puerto 465
  auth: {
    user: process.env.IONOS_USER, // Tu correo en IONOS
    pass: process.env.IONOS_PASS, // Tu contraseña de correo
  },
});

// Ruta para manejar el envío del formulario
app.post('/send-email', (req, res) => {
  const { name, email, feedback } = req.body;

  // Configuración del correo con formato HTML
  const mailOptions = {
    from: process.env.IONOS_USER, // Dirección del remitente (tu cuenta IONOS)
    to: 'info@romboworks.com', // Dirección de destino
    subject: `Nuevo mensaje de contacto: ${name}`,
    html: `
      <h1>Mensaje recibido de formulario de contacto</h1>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Correo Electrónico:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${feedback}</p>
    `,
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).send({ message: 'Error al enviar el correo' });
    } else {
      console.log('Correo enviado:', info.response);
      res.status(200).send({ message: 'Correo enviado exitosamente' });
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
