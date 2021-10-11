import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cupon-widget',
  templateUrl: './cupon-widget.component.html',
  styleUrls: ['./cupon-widget.component.scss']
})
export class CuponWidgetComponent implements OnInit {
  @Input() cupon: BehaviorSubject<any[]>;
  constructor() {
    this.cupon = new BehaviorSubject<any[]>([]);
  }

  ngOnInit(): void {
  }

}
