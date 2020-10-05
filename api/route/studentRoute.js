const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Student = require("../modal/student");

router.get("/", (req, res) => {
  //   res.status(200).json({
  //     msg: "student get req",
  //   });
  Student.find()
    .then((result) => {
      res.status(200).json({
        studentList: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/:id", (req, res) => {
  Student.findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        studentList: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/", (req, res) => {
  //   res.status(200).json({
  //     //   msg: "student post req",
  //     // msg: req.body.name,
  //   });
  const student = new Student({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
  });

  student
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newStudent: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
