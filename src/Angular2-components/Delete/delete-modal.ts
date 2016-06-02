import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'delete',
  inputs: ['lg'],
  templateUrl: 'src/Angular2-components/Delete/delete-modal.html',
  styleUrls: ['src/app.css']
})
export class Delete implements OnInit {
  @Output() deleteFun = new EventEmitter();
  @Input() lg: boolean = false;
  @Input() BName: string = null;
  @Input() disable: boolean = false;

  private static cmpId = 0;
  private IDD: number;

  constructor() { }

  ngOnInit() {
    this.IDD = ++Delete.cmpId;
    // console.log('Delete called', this.pk, Delete.cmpId, this.IDD);
  }

  DeleteFunction() {
    this.deleteFun.emit('emit');
  }
}