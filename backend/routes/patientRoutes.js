const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");
const Bed = require("../models/Bed");

router.get("/", async (req, res) => {
    const patients = await Patient.find().populate("bedId");
    res.json(patients);
});

router.post("/", async (req, res) => {
    const { name, age, disease } = req.body;

    const freeBed = await Bed.findOne({ isOccupied: false });
    if (!freeBed) {
        return res.status(400).json({ message: "No beds available" });
    }

    const patient = new Patient({ name, age, disease, bedId: freeBed._id });
    freeBed.isOccupied = true;

    await patient.save();
    await freeBed.save();

    res.json(patient);
});

router.delete("/:id", async (req, res) => {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
        return res.status(404).json({ message: "Patient not found" });
    }

    const bed = await Bed.findById(patient.bedId);
    if (bed) {
        bed.isOccupied = false;
        await bed.save();
    }

    await patient.deleteOne;
    res.json({ message: "Patient discharged" });
});

module.exports = router;

