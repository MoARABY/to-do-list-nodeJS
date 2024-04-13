const express = require("express");
const router = express.Router();
const {
  GetTasks,
  GetTask,
  CreateTasks,
  UpdateTasks,
  DeleteTasks,
} = require("../Controllers/taskControllers");

router.route("/").get(GetTasks).post(CreateTasks);
router.route("/:id").get(GetTask).put(UpdateTasks).delete(DeleteTasks);

module.exports = router;
