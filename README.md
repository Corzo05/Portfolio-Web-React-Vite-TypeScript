# Spanish

## Desarrollado con React + Vite + TypeScript

### :book: Dependencias Usadas:

- aos: Librería de animaciones de CSS
- body-parser: Middleware para Node.js que analiza el cuerpo de las solicitudes HTTP.
- bootstrap: Framework de CSS para estilos rápidos.
- concurrently: Usado para correr servidor de Vite y `server.js` al mismo tiempo.
- dotenv: Cargador de variables de entorno (`.env`).
- express: Framework ligero de backend para JS.
- resend: API de envío de Emails.
- sweetalert: Librería de alertas visualmente atractivas. 
- vercel: Para el Build y correr el servidor `server.js`.

### :hammer::wrench: Instalación y uso:

- Clonar repositorio o descargar .zip y extraer.
- Abrir el proyecto e instalar las dependencias con `npm install`.
- Crea el archivo `.env` con las siguientes variables:
  RESEND_API_KEY= (Key de la API de Resend)
  EMAIL_DESTINATARIO= (Email al cual le llegaran los mensajes).
- Enciende el servidor con `npm run dev` y listo, la app estará accesible en http://localhost:3000

# English

## Powered by React + Vite + TypeScript

### :book: Dependencies Used:

- aos: CSS animation library
- body-parser: Node.js middleware that parses HTTP request bodies.
- bootstrap: CSS framework for fast styling.
- concurrently: Used to run Vite server and `server.js` at the same time.
- dotenv: Environment variable loader (`.env`).
- express: Lightweight backend framework for JS.
- resend: Email sending API.
- sweetalert: Visually appealing alert library.
- vercel: To build and run the `server.js` server.

### :hammer::wrench: Installation and Use:

- Clone the repository or download and extract the .zip.
- Open the project and install the dependencies with `npm install`.
- Create the `.env` file with the following variables:
RESEND_API_KEY= (Resend API Key)
EMAIL_DESTINATARIO= (Email address where messages will be sent).
- Start the server with `npm run dev` and that's it! The app will be accessible at http://localhost:3000