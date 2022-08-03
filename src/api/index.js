const express = require("express");
const router = express.Router();
const live = require("./routes/live");
const sandbox = require("./routes/sandbox");

require("./configs/db").connect();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/live", live);
// router.use("/sandbox", sandbox);

module.exports = router;
