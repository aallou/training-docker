const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (request, response) => {
  response.json({ Hello: "world" });
});

app.listen(8081, () => console.info("Application running on port 8081"));
