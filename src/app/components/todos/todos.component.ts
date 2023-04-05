import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from "../../services/todos.service";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'ang-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  error = ''

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos().subscribe({
      next: (res: Todo[]) => {
        this.todos = res
      },
      error: (error: HttpErrorResponse) => {
        this.error = error.message
      }
    })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber
    this.todosService.createTodo(title)
      .subscribe(res => {
        const newTodo = res.data.item
        this.todos.unshift(newTodo)
      })
  }

  deleteTodo() {
    const todoId = 'e430ccac-9d00-45ca-aec0-e4f870ba92ad'
    this.todosService.deleteTodo(todoId)
      .subscribe(() => {
        this.todos = this.todos.filter((tl) => tl.id !== todoId)
      })
  }
}

