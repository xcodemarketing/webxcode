import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;

}


@Component({
  selector: 'app-xcodemodcta',
  templateUrl: './xcodemodcta.component.html',
  styleUrls: ['./xcodemodcta.component.css']
})
export class XcodemodctaComponent {

  animal: string;
  name: string;
  keyIdClient: '36626807917-ne372gp6g2o6ec4b2ciekv5ha9ofnf2a.apps.googleusercontent.com';
  keyClientSecret: 'oQzDHQJbN7H_q1Jsh8Bh0yd7';

  constructor(public dialog: MatDialog) { }

  openDialog(): void {

    const dialogRef = this.dialog.open( XcodeModContentComponent, {
      width: '350px',
      height: '350px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}


@Component({
  selector: 'app-xcode-modcontent',
  templateUrl: './xcode-modcontent.html',
  styleUrls: ['./xcodemodcta.component.css']
})
export class XcodeModContentComponent {

  constructor(
    public dialogRef: MatDialogRef<XcodeModContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
