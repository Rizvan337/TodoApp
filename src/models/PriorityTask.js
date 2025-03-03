"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityTask = void 0;
const Task_1 = require("./Task");
class PriorityTask extends Task_1.Task {
    constructor(id, title, description, priority) {
        super(id, title, description);
        this.priority = priority;
    }
    getDetails() {
        return `[${this.priority}] ${super.getDetails()}`;
    }
}
exports.PriorityTask = PriorityTask;
