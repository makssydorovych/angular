import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class ValueService {
  value = 10;
  add(){
    this.value = this.value +1
  }
  dec(){
    this.value = this.value -1
  }
}
