import { Component } from '@angular/core';

import { XmlRead } from './xmlUtils/xmlRead';
import { UploadService } from './service/uploadService';
import { normalizePrecoMedio } from './business/normalize';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upload-files';
  dataToUpload: any = {};
  xmlData: any = "";
  file: any = null;
  isLoading: Boolean = false;
 
  constructor(private uploadService: UploadService,
    private _snackBar: MatSnackBar) {
  }
  
  handleFile = (e:any) => {
    this.file = e.target.files[0];
    XmlRead.xmlReadFile(e.target.files[0]);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  uploadFile = () => {
    this.isLoading = true;
    normalizePrecoMedio();
    this.uploadService.uploadFile(XmlRead.xmlData).subscribe((result) => {
      this.openSnackBar(result.message, "close");
      this.isLoading = false;
    });
  }

}

