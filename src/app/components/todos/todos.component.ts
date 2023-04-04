import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface Todo {
  addDate: string,
  id: string,
  order: number,
  title: string
}

@Component({
  selector: 'ang-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', {
      withCredentials: true,
      headers: {
        'api-key': '27174707-1f72-4acd-871c-461d7e7565ed'
      }
    }).subscribe((res) => {
      this.todos = res
    })
  }
}
