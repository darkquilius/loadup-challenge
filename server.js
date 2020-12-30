require("dotenv").config()
const express = require("express");
const axios = require("axios")
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// STATIC ASSETS
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API ROUTES
app.get("/api/weather/:latitude/:longitude", async (req,res) => {
  let weatherInfo = await axios(`https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=${req.params.latitude}&lon=${req.params.longitude}&appid=${process.env.REACT_APP_API_KEY}`)
  .catch(err => console.log(err));

  res.json(weatherInfo.data)
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
