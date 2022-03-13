const asyncHandler = require("express-async-handler");

const Goal = require("../Models/goalModel");

// @desc Get Goal
// @route Get /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc Set Goal
// @route Post /api/goals
// @access private
const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please fill a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc Update Goal
// @route Put /api/goals/:id
// @access private
const putGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @desc Delete Goal
// @route Delete /api/goals/"id"
// @access private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove();

  res
    .status(200)
    .json({ message: `the Goal by ${req.params.id} id was deleted` });
});

module.exports = {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
};
