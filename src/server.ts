import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

import { TaskManager } from "./models/TaskManager";

const taskManager = new TaskManager();

app.get("/", (req, res) => {
  res.render("index", { tasks: taskManager.getTasks() });
});

app.post("/add", (req, res) => {
  const { title, description } = req.body;
  taskManager.addTask(title, description);
  res.redirect("/");
});

app.post("/complete/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  taskManager.completeTask(taskId);
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  taskManager.deleteTask(taskId);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
