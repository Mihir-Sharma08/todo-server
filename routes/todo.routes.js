const { Router } = require("express");
const {
  createNote,
  updateNote,
  getTodo,
  deleteNote,
  pageTodos,
} = require("../controller/todo.controller");

const router = Router();

router.route("/create").post(createNote);
router.route("/getTodo").get(getTodo);
router.route("/update/:id").post(updateNote);
router.route("/delete/:id").delete(deleteNote);

module.exports = router;
