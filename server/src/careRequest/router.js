const express = require("express");
const { careRequests } = require("../db");

const router = express.Router();

router.post("/api/careRequest", function (req, res) {
  const id = careRequests.length + 1;
  const status = "open";
  const starDate = new Date(req.body.starDate);
  const endDate = new Date(req.body.endDate);
  const extraInfo = req.body.extraInfo || "No details provided";

  const careRequest = { ...req.body, id, status, starDate, endDate, extraInfo };

  careRequests.push(careRequest);
  return res.json(careRequest);
});

module.exports = router;
