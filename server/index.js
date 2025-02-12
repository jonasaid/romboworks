// Importación de librerías esenciales para la aplicación
const express = require("express");      // Framework para crear el servidor y manejar rutas
const bodyParser = require("body-parser"); // Permite procesar datos JSON enviados en las solicitudes
const cors = require("cors");            // Habilita peticiones desde dominios diferentes (Cross-Origin)
const nodemailer = require("nodemailer"); // Biblioteca para enviar correos electrónicos
require("dotenv").config();              // Carga variables de entorno definidas en un archivo .env

// Creación de la aplicación Express
const app = express();

// Definición del puerto. Si no existe process.env.PORT, utiliza 5000
const PORT = process.env.PORT || 5000;

// Middlewares
// 1. bodyParser.json() para procesar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());
// 2. cors() para permitir que otros dominios accedan a esta API
app.use(cors());

// Configuración de Nodemailer
// Se crea un "transporter" que define cómo se enviarán los correos
const transporter = nodemailer.createTransport({
  service: "gmail",   // Usar el servicio de Gmail para enviar correos
  auth: {
    user: process.env.EMAIL_USER, // Usuario de Gmail (ejemplo: notificaciones648@gmail.com)
    pass: process.env.EMAIL_PASS  // Contraseña de ese correo (ejemplo: usuario_alan)
  }
});

// Ruta para manejar el formulario y enviar correos electrónicos
// Método POST porque enviamos datos (name, email, feedback) en el cuerpo de la solicitud
app.post("/send-email", async (req, res) => {
  // Extraemos los datos enviados en el cuerpo de la solicitud
  const { name, email, feedback } = req.body;

  // Validación de datos: si falta un campo, se devuelve un error con código 400 (Bad Request)
  if (!name || !email || !feedback) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  // Configuración del contenido del correo
  const mailOptions = {
    from: process.env.EMAIL_USER,    // Dirección del remitente (desde variables de entorno)
    to: "info@romboworks.com",       // Correo destino donde se recibirán los mensajes
    subject: `Nuevo mensaje de ${name}`, // Asunto personalizado con el nombre del remitente
    html: `
      <h1>Nuevo mensaje recibido</h1>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Correo Electrónico:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${feedback}</p>
    `
  };

  // Envío del correo mediante Nodemailer
  try {
    // Se espera (await) la respuesta de sendMail; si se envía con éxito, responde con código 200
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    // Si ocurre un error, se muestra en la consola y se responde con código 500 (Internal Server Error)
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ message: "Error al enviar el correo" });
  }
});

// Inicio del servidor
// Se pone a escuchar en el puerto definido anteriormente. Muestra un log en consola al arrancar.
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
