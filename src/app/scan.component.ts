import {Component} from '@angular/core';

@Component({
  templateUrl: './scan.component.html',
  styleUrls: []
})
export class ScanComponent {

  scanSuccess(result: string) {
    alert(result);
  }
}
