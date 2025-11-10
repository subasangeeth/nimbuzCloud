const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        background-color: #fff7f0;
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
      h1 {
        color: #ff8c00;
        border: 2px solid #ffa500;
        padding: 20px 40px;
        border-radius: 15px;
        background: white;
      }
    </style>
  </head>
  <body>
    <h1>Hello Nimbuz Cloud!</h1>
  </body>
  </html>
  `;
  res.send(html);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));


  
});


