import { Component } from '@angular/core';
import { XmlParser } from './xmlParser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upload-files';
  srcResult: any = {};
  file: any = null;
  
  readFile = (e:any) => {
    this.file = e.target.files[0];
    
    if (!this.file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = (evt) => {
        const xmlData: string = (evt as any).target.result;
        
        this.srcResult = XmlParser.xmlToObj(xmlData);
        console.log(this.srcResult)
    };
    reader.readAsText(this.file);
  }

}

