"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "views"));
app.use(express_1.default.static("public"));
app.use(body_parser_1.default.urlencoded({ extended: true }));
const TaskManager_1 = require("./models/TaskManager");
const taskManager = new TaskManager_1.TaskManager();
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
