import { XmlRead } from "../xmlUtils/xmlRead";

export function normalizePrecoMedio () {
  let agentes = [].concat(XmlRead.xmlData.agentes.agente)

  agentes.forEach((agente:any) => {
    agente.regiao[0].precoMedio.valor = [];
    agente.regiao[1].precoMedio.valor = [];
    agente.regiao[2].precoMedio.valor = [];
    agente.regiao[3].precoMedio.valor = [];
  });

  XmlRead.xmlData.agentes.agente = agentes;
}
