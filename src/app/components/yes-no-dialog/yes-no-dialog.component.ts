import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss']
})
export class YesNoDialogComponent implements OnInit {

  constructor(protected dialogRef: NbDialogRef<YesNoDialogComponent>) { }

  ngOnInit(): void {
  }

  close(res): void{
    this.dialogRef.close(res)
  }
}
