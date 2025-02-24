import { Task } from "./Task";
import { PriorityTask } from "./PriorityTask";

export class TaskManager {
  private tasks: Task[] = [];
  private nextId: number = 1;

  addTask(title: string, description: string, priority: string = "Normal"): void {
    const task =
      priority === "Normal"
        ? new Task(this.nextId, title, description)
        : new PriorityTask(this.nextId, title, description, priority);

    this.tasks.push(task);
    this.nextId++;
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  completeTask(id: number): void {
    const task = this.tasks.find((t) => t.getId() === id);
    if (task) {
      task.markComplete();
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.getId() !== id);
  }
}
