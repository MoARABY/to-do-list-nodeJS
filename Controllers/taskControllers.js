const { Mongoose } = require("mongoose");
const task = require("../Models/tasksModel");
const asyncHandler = require("express-async-handler");

//
const GetTasks = asyncHandler(async (req, res) => {
  const getTasks = await task.find();
  res.status(200).json(getTasks);
});

//
const GetTask = asyncHandler(async (req, res) => {
  const getTask = await task.findById(req.params.id);
  if (!getTask) {
    res.status(401);
    throw new Error("Cannot Find This User Please Check The Id");
  }
  res.status(200).json(getTask);
});

//
const CreateTasks = asyncHandler(async (req, res) => {
  const { title, description, completed } = req.body;
  if (!title) {
    res.status(400);
    throw new Error("Please Fill All Fields");
  } else {
    const createTask = await task.create({
      title,
      description,
      completed,
    });
    res.status(201).json(createTask);
  }
});

//
const UpdateTasks = asyncHandler(async (req, res) => {
  const getTask = await task.findById(req.params.id);
  if (!getTask) {
    res.status(401);
    throw new Error("Cannot Find This User Please Check The Id");
  }
  const updateTask = await task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateTask);
});

//
const DeleteTasks = asyncHandler(async (req, res) => {
  const getTask = await task.findById(req.params.id);
  if (!getTask) {
    res.status(401);
    throw new Error("Cannot Find This User Please Check The Id");
  }
  const deleteTask = await task.deleteOne({ _id: req.params.id });
  res.status(200).json(deleteTask);
});

module.exports = { GetTasks, GetTask, CreateTasks, UpdateTasks, DeleteTasks };
