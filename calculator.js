/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"deficit-de-ferro-ganzoni","title":"Déficit de ferro (Ganzoni)","fields":[["peso","Peso","num",{"min":5,"max":250,"step":0.1,"unit":"kg","ph":"70"}],["hb","Hemoglobina atual","num",{"min":3,"max":18,"step":0.1,"unit":"g/dL","ph":"8"}],["alvo","Hemoglobina-alvo","num",{"min":8,"max":16,"step":0.1,"unit":"g/dL","ph":"15"}]],"config":null,"reviewStatus":"restricted","clinicalValidation":"not-performed"});
function calculate(){return {error:'Cálculo suspenso: consulte a revisão e a fonte oficial.',code:'REVIEW_REQUIRED',id:TOOL.id};}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
