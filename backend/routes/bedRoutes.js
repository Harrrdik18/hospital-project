const express = require("express");
const router = express.Router();
const Bed = require("../models/Bed");

router.get("/", async (req, res) => {
    const beds = await Bed.find();
    res.json(beds);
});

router.post("/", async (req, res) => {
    const { bedNumber } = req.body;

    const bed = new Bed({ bedNumber });
    await bed.save();

    res.json(bed);
});

module.exports = router;