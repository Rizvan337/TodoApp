import { Task } from "./Task";

export class PriorityTask extends Task {
  private priority: string;

  constructor(id: number, title: string, description: string, priority: string) {
    super(id, title, description);
    this.priority = priority;
  }

  getDetails(): string {
    return `[${this.priority}] ${super.getDetails()}`;
  }
}
