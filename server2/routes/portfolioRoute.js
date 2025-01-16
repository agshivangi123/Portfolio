const router = require('express').Router();
const { Intro, About, Experience, Project, Course, Contact } = require('../models/portfolioModel');
const fs = require('fs');
const path = require('path');
const mongoose = require("mongoose");

router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intro = await Intro.find({});
        const about = await About.find({});
        const experience = await Experience.find({});
        const projects = await Project.find({});
        const courses = await Course.find({});
        const contact = await Contact.find({});
        //console.log(intro);
        res.status(200).json({ intro, about, experience, projects, courses, contact });
    } catch {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.get('/get-image/:collection/:id', async (req, res) => {
    try {
        const { collection, id } = req.params;

        console.log("Collection:", collection, "ID:", id);

        // Check if the model exists
        let Model;
        if (mongoose.modelNames().includes(collection)) {
            Model = mongoose.model(collection);
        } else {
            Model = mongoose.model(collection, new mongoose.Schema({}, { strict: false }));
        }

        // Fetch the portfolio item by ID
        const portfolioItem = await Model.findById(id);
        if (!portfolioItem || !portfolioItem.image) {
            return res.status(404).json({ message: 'Image not found' });
        }
        console.log("portfolioItem", portfolioItem);
        // Construct the image path
        const imagePath = path.join(__dirname, '../server', portfolioItem.image);
        // Check if the file exists
        if (!fs.existsSync(imagePath)) {
            return res.status(404).json({ message: 'Image file not found' });
        }
        console.log("imagePath", imagePath)
        console.log('File exists:', fs.existsSync(imagePath));
        // Serve the image
        res.status(200).sendFile(imagePath);
    } catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).json({ message: 'Error fetching image' });
    }
});

router.put("/update-intro" , async(req, res) => {
    try {
        const { intro } = req.body;
        const updatedIntro = await Intro.findOneAndUpdate({_id : intro._id}, 
            intro , 
        {new : true});
        res.status(200).json({
            data : updatedIntro,
            success:true,
            message : "Intro Updated Successfully"
            
        });
    } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    }
});



module.exports = router;