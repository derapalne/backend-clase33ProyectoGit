const express = require('express')
const app = express()

app.use(express.static("public"));


app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
})

const PORT = process.env.PORT || 8001;

const server = app.listen(PORT, () => {
  console.log("Servidor levantado http://localhost:" + PORT);
})