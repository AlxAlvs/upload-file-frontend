import { XmlParser } from "./xmlParse";

export class XmlRead {
  static xmlData:any = "";

  static xmlReadFile(file: any): any {
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (evt) => {
      this.xmlData = XmlParser.xmlToObj((evt as any).target.result);
      console.log(this.xmlData)
    };
    reader.readAsText(file);
  }

}
