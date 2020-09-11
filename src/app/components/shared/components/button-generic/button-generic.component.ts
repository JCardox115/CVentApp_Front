import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Utility } from 'src/app/app-core/core/utility';

@Component({
  selector: 'app-button-generic',
  templateUrl: './button-generic.component.html',
  styleUrls: ['./button-generic.component.scss']
})
export class ButtonGenericComponent {
  @Input() ActiveDelete = Utility.DEFAULT_CONFIG_APP.DefaultActiveDelete;
  @Input() isViewUpdate: boolean;
  @Input() isViewData: boolean;
  @Input() disabled: boolean;

  @Input() iconCreate = Utility.DEFAULT_CONFIG_APP.Icon.Create;
  @Input() iconUpdate = Utility.DEFAULT_CONFIG_APP.Icon.Update;
  @Input() iconDelete = Utility.DEFAULT_CONFIG_APP.Icon.Delete;
  @Input() iconCancel = Utility.DEFAULT_CONFIG_APP.Icon.Cancel;

  @Output() cancelClick = new EventEmitter();
  @Output() createClick = new EventEmitter();
  @Output() updateClick = new EventEmitter();
  @Output() deleteClick = new EventEmitter();

  onUpdateClick($event: any): void {
    this.updateClick.emit($event);
  }

  onCreateClick($event: any): void {
    this.createClick.emit($event);
  }

  onCancelClick($event: any): void {
    this.cancelClick.emit($event);
  }

  onDeleteClick($event: any): void {
    this.deleteClick.emit($event);
  }
}
