"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = false;
    }
    markComplete() {
        this.completed = true;
    }
    getDetails() {
        return `${this.title} - ${this.description} [${this.completed ? "Done" : "Pending"}]`;
    }
    getId() {
        return this.id;
    }
    isCompleted() {
        return this.completed;
    }
}
exports.Task = Task;
