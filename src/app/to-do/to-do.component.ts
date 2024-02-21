import { Component, ChangeDetectionStrategy } from '@angular/core';

class TodoItem {
  isCompleted: boolean;
  name: string;
}

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoComponent {
  public items: Array<TodoItem> = [];
  public todoTitle: string;
  public counter: number = 0;

  public getRemainingCount() {
    return this.items.filter(item => !item.isCompleted).length;
  }

  public add(todoTitle: string) {
    if (!todoTitle || todoTitle === '') {
      return;
    }

    const newToDo: TodoItem = {
      isCompleted: false,
      name: todoTitle
    };
    this.items.push(newToDo);
    this.counter++;

    // Reset input
    this.todoTitle = '';
  }

  public delete(index: number) {
    if (!this.items[index].isCompleted) {
      this.counter--;
    }
    this.items.splice(index, 1);
  }

  /**
   * Toggle item completion and update counter.
   * @param item: TodoItem
   */
  public toggleItem(item: TodoItem) {
    item.isCompleted = !item.isCompleted;
    item.isCompleted ? this.counter-- : this.counter++;
  }
}
