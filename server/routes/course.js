const { Router } = require('express');
const mongoose = require('mongoose');
const Course = require('../models/Course');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const path = require('path');

const router = Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'code-warriors',
    transformation: [{ format: 'mp4' }],
  },
});

function checkFileType(file, cb) {
  const filetypes = /mp4|mov|webm/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Videos only!');
  }
}

const parser = multer({
  fileFilter(req, file, cb) {
    checkFileType(file, cb);
  },
  storage,
});

router.get('/', async (req, res) => {
  const courses = await Course.find({}).limit(7);

  res.send(courses);
});

function notFound(res, category) {
  return res.status(404).send({
    message: `${category} not found`,
  });
}

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  if (!mongoose.isValidObjectId(id)) {
    return notFound(res, 'Course');
  }

  const course = await Course.findById(id);
  if (!course) {
    return notFound(res, 'Course');
  }

  return res.send(course);
});

router.post('/', async (req, res) => {
  try {
    const { title, description, category, video } = req.body;

    if (!video) {
      return res.status(400).send('Video required');
    }
    const duplicateCourse = await Course.findOne({ title });

    if (duplicateCourse) {
      return res.send({ message: 'Course already exists' });
    }

    const course = await Course.create({
      title,
      description,
      category,
      videoUrl: video,
    });

    res.status(201).send(course);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
