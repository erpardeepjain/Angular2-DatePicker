import {Component, OnInit, Output, EventEmitter, Input} from 'angular2/core';

@Component({
  selector: 'delete',
  inputs: ['pk', 'lg'],
  templateUrl: 'src/Angular2-components/Delete/delete-modal.html',
  styleUrls: ['src/app.css']
})
export class Delete implements OnInit {
  @Output() deleteFun = new EventEmitter();
  @Input() pk: any;
  @Input() lg: boolean = false;

  constructor() { }

  ngOnInit() {
    // console.log('Delete called', this.pk);
  }

  DeleteFunction() {
    this.deleteFun.emit('emit');
  }
}