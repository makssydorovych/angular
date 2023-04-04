import {Component, OnInit} from '@angular/core';
import {ValueService} from "../../services/value.service";
import {BehaviorSubject, Observable} from "rxjs";
import {BeautyLoggerService} from "../../services/beauty-logger.service";


@Component({
  selector: 'ang-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],

})
export class CompAComponent implements OnInit {
  value$ = new Observable();

  constructor(
    private valueService: ValueService,
    private beautyLoggerService: BeautyLoggerService
  ) {
  }

  ngOnInit(): void {
   this.value$ = this.valueService.value$
  }

  addValueHandler() {
    this.valueService.add()
this.beautyLoggerService.log('add value', 'success')
  }
}
