export class Task {
    protected id: number;
    protected title: string;
    protected description: string;
    protected completed: boolean;
  
    constructor(id: number, title: string, description: string) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.completed = false;
    }
  
    markComplete(): void {
      this.completed = true;
    }
  
    getDetails(): string {
      return `${this.title} - ${this.description} [${this.completed ? "Done" : "Pending"}]`;
    }
  
    getId(): number {
      return this.id;
    }
  
    isCompleted(): boolean {
      return this.completed;
    }
  }
  