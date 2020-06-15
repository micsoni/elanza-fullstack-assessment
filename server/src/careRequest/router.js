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

router.get("/api/careRequest", function (req, res) {
  return res.json(careRequests);
});

router.put("/api/careRequest", function (req, res) {
  if (!req.body.id) {
    return res.status(400).json({ message: "id is mandatory" });
  }
  if (!req.body.careGiver) {
    return res.status(400).json({ message: "careGiver is mandatory" });
  }
  const careRequest = careRequests.find(
    (careRequest) => careRequest.id === req.body.id
  );
  if (careRequest == null) {
    return res.status(404).json({ message: "care request not found" });
  }

  careRequest.status = "closed";
  careRequest.careGiver = req.body.careGiver;
  careRequests[careRequest.id - 1] = careRequest;

  return res.json(careRequest);
});

module.exports = router;
