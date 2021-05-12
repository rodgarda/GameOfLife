import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() generation:number;
  @Output() startPause = new EventEmitter<null>();
  constructor() { }

  onStartPause() {
    this.startPause.emit(null);
  }

  ngOnInit(): void {
  }

}
