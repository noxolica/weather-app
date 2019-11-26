if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY
const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static("public"))

// we only have one endpoint
app.post("/weather", (req, res) => {
  console.log(req.body);
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
})