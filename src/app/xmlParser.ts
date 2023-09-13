export class XmlParser {

    static parseNode = (node: Node) => {    
        const childNodes = node.childNodes;
        if (childNodes.length === 0) {
            return node.nodeValue;
        } else if (childNodes.length === 1 && childNodes[0].nodeType === Node.TEXT_NODE) {
            return childNodes[0].nodeValue;
        } else {
            const obj:any = {};
            childNodes.forEach(childNode => {
                const childName = childNode.nodeName;
                let childValue = obj[childName];
                if (childName == "precoMedio") {
                    return;
                }
                if (childValue !== undefined) {
                    if (Array.isArray(childValue)) {
                        childValue.push(XmlParser.parseNode(childNode));
                    } else {
                        obj[childName] = [childValue, XmlParser.parseNode(childNode)];
                    }
                } else {
                    obj[childName] = XmlParser.parseNode(childNode);
                }
            });
            return obj;
        }
    };

    static xmlToObj = (str: string) => {
        const dom = (new DOMParser()).parseFromString(str, 'text/xml')
        const result = {[dom.nodeName]: XmlParser.parseNode(dom)};
        return result;
    }
}