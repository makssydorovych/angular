import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface Todo {
  addDate: string,
  id: string,
  order: number,
  title: string
}


interface BaseResponse<T = {}>{
  data: T
  message: string[]
  fieldErrors: string[]
  resultCode: number
}


@Component({
  selector: 'ang-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': '27174707-1f72-4acd-871c-461d7e7565ed'
    }
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.httpOptions).subscribe((res) => {
      this.todos = res
    })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber
    this.http.post<BaseResponse<{ item: Todo }>>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, this.httpOptions)
      .subscribe(res => {
        const newTodo = res.data.item
        this.todos.unshift(newTodo)
      })
  }

  deleteTodo() {
    const todoId = '832ebd67-d6f0-4581-b6d6-f83c1034a3dc'
    this.http.delete<BaseResponse>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, this.httpOptions)
      .subscribe(() => {
        this.todos = this.todos.filter((tl) => tl.id !== todoId)
      })
  }
}

