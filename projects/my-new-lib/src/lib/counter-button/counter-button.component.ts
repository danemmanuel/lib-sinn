import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'sinn-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
  @Input() background: string;
  @Input() cor: string;

  constructor() {}

  ngOnInit() {}
}
