const Todo = require("../models/Todo");

const createNote = async (req, res) => {
  const { title, description } = req.body;
  let note = await Todo.create({ title, description });
  return res.json({ message: "New Not added", success: true, note });
};

const getTodo = async (req, res) => {
  let todo = await Todo.find();
  return res.status(200).json({ message: "all todos", todo });
};
const updateNote = async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json({ message: "updated note", updatedTodo });
};

const deleteNote = async (req, res) => {
  const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
  return res.json({ message: "note deleted", deleteTodo });
};


module.exports = { createNote, updateNote, getTodo, deleteNote };
