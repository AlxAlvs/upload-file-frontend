
export class XmlParser {

    static xmlToObj = (xml: any) => {
        var convert = require('xml-js');
        var result = convert.xml2json(xml, {compact: true, spaces: 4});
        var json = JSON.parse(result);
        return json;
    }
    
}
