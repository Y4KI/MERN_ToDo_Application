const asyncHandler = require("express-async-handler");

// @desc Get Goal
// @route Get /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc Set Goal
// @route Post /api/goals
// @access private
const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please fill a text field");
  }

  res.status(200).json({ message: "Set Goal" });
});

// @desc Update Goal
// @route Put /api/goals/:id
// @access private
const putGoals = asyncHandler(
  async("/:id", (req, res) => {
    res.status(200).json({ message: `Update Goal ${req.params.id}` });
  })
);

// @desc Delete Goal
// @route Delete /api/goals/"id"
// @access private
const deleteGoals = asyncHandler(
  async("/:id", (req, res) => {
    res.status(200).json({ message: `Delete Goal ${req.params.id}` });
  })
);

module.exports = {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
};
