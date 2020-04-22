import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector : 'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']


})
export class StartComponenet implements OnChanges{

    @Input()rating : number = 3;
    starWidth : number;
    @Output()ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
       
        this.starWidth = this.rating*75/5;
    }

    onClick() : void{
       this.ratingClicked.emit(`The Rating ${this.rating} Was clicked!`);
    }
}