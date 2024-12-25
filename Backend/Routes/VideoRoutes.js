const express = require("express");

const { protectRoutes } = require("../Controllers/AuthController");

const VideoRoutes = express.Router();

VideoRoutes.use(protectRoutes)



module.exports = VideoRoutes;