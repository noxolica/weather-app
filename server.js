if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY
const express = require("express")
const app = express()
const axios = require("axios")

app.use(express.json())
app.use(express.static("public"))

// we only have one endpoint
app.post("/weather", (req, res) => {
  const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${req.body.latitude},${req.body.longitude}?units=si`
  axios({
    url: url,
    responseType: 'json'
  }).then(data => res.json(data.data.currently))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
})