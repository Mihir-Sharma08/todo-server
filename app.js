const express = require("express");
const createDb = require("./Db/Db");
const app = express();
const cors = require("cors");
const router = require("./routes/todo.routes");

app.use(express.json());

app.use(cors());

createDb();

app.use("/api/todo", router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
