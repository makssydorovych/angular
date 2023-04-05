import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from "../../services/todos.service";
import {Observable, Subscription} from "rxjs";


@Component({
  selector: 'ang-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$!: Observable<Todo[]>
  error = ''
  subscription: Subscription = new Subscription()

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.todos$ =  this.todosService.todos$
    this.getTodos()
  }



  getTodos() {
   this.todosService.getTodos()
    // this.subscription.add(this.subscription = this.todosService.getTodos().subscribe({
    //   next: (res: Todo[]) => {
    //     this.todos = res
    //   },
    //   error: (error: HttpErrorResponse) => {
    //     this.error = error.message
    //   }
    // }))
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber
    this.todosService.createTodo(title)
    // this.subscription.add(this.todosService.createTodo(title)
    //   .subscribe(res => {
    //     const newTodo = res.data.item
    //     this.todos.unshift(newTodo)
    //   }))
  }

  deleteTodo() {
    const todoId = '8f7aa80e-0d41-423e-8235-e7f4ee5be369'
    this.todosService.deleteTodo(todoId)

  }
}

