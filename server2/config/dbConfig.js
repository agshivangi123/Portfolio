const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    name: String,
});
//Programming isn't about what you know; it's about what you can figure out.

const Test = mongoose.model("Test", testSchema);

const createTestDocument = async () => {
    const test = new Test({ name: "Sample" });
    await test.save();
    console.log("Test document saved");
};

const connection = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URL || "mongodb://localhost:27017/MERN-PORTFOLIO-SHIVANGI",
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("Database connected successfully");
        await createTestDocument(); // Write operation to create the database
    } catch (err) {
        console.error("Database connection error:", err);
    }
};

module.exports = connection;
