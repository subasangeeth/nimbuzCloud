const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orange App</title>
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
        box-shadow: 0 0 10px rgba(255,165,0,0.3);
        background: white;
      }
    </style>
  </head>
  <body>
    <h1> Hello Nimbuz Cloud!</h1>
  </body>
  </html>
  `;
  res.send(html);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
