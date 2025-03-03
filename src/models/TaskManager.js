"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const Task_1 = require("./Task");
const PriorityTask_1 = require("./PriorityTask");
class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    addTask(title, description, priority = "Normal") {
        const task = priority === "Normal"
            ? new Task_1.Task(this.nextId, title, description)
            : new PriorityTask_1.PriorityTask(this.nextId, title, description, priority);
        this.tasks.push(task);
        this.nextId++;
    }
    getTasks() {
        return this.tasks;
    }
    completeTask(id) {
        const task = this.tasks.find((t) => t.getId() === id);
        if (task) {
            task.markComplete();
        }
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter((t) => t.getId() !== id);
    }
}
exports.TaskManager = TaskManager;
