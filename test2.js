/ membuat fungsi js
function nation(negara,ibukota){
    // return ('negara ' + negara + ' ibukotanya adalah '+ ibukota)
    return (`negara ${negara} ibukotanya adalah ${ibukota}`)
};
let indonesia=nation('indonesia','jakarta');
console.log (indonesia);
let b = nation ('malaysia','Kuala Lumpur');
console.log (b);
for (i in b){
    console.log(i)
};
