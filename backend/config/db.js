const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://patelhardik999666:9zaNAcOE96aTGKGD@cluster0.dma01.mongodb.net/HospitalDatabase?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("Error: ", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
