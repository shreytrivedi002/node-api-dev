const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Task = require("../modal/task");

router.get("/", (req, res) => {
  //   res.status(200).json({
  //     msg: "student get req",
  //   });
  Task.find()
    .then((result) => {
      res.status(200).json({
        taskList: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// router.get("/:id", (req, res) => {
//   Student.findById(req.params.id)
//     .then((result) => {
//       res.status(200).json({
//         studentList: result,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: err,
//       });
//     });
// });

router.post("/", (req, res) => {
  //   res.status(200).json({
  //     //   msg: "student post req",
  //     // msg: req.body.name,
  //   });
  console.log('in itt')
  const task = new Task({
    _id: new mongoose.Types.ObjectId(),
    task: req.body.task,
  });

  task
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newTask: result,
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
