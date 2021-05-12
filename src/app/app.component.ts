import { Component } from '@angular/core';
import { Board } from './board.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numCols:number;
  numRows:number;
  generation:number;
  gameStatus:boolean; //-1 no empieza, 0 Activo, 1 Pausado

  board:Board;

  constructor(){
    this.numCols=40;
    this.numRows=40;
    this.generation=0;
    this.gameStatus=false;

    this.board=new Board(this.numCols,this.numRows);
  }

  ngOnInit(){
    setInterval(()=>{
      if(this.gameStatus===true){
        this.board.checkBoard();
        this.generation++;
      }

    },100)
  }

  onClick(pRow,pCol){
    this.board.changeStatus(pRow,pCol);
  }
  onClickPausar(){
    this.gameStatus=!this.gameStatus;
    this.generation=0;
  }
}
