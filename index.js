import cipher from './cipher.js';
console.log(cipher);
let codEnc=document.getElementById("result");
const buttoncod = document.getElementById("btnSubmit");
buttoncod.addEventListener("click",criptografartst);
//.document.getElementById("btnSubmit").addEventListener("click",criptografartst);
function criptografartst(){
    const getWord=document.getElementById("btnText").value;
    const getOffSet=Number(document.getElementById("btnOffSet").value);
    const getResult=cipher.encode(getOffSet, getWord);
    return codEnc.innerText=getResult
}
console.log(cipher);
console.log(cipher);
let codDec=document.getElementById("result");
window.document.getElementById("btnSubmit").addEventListener("click",descriptografartst);
function descriptografartst(){
    const getWord=document.getElementById("btnText").value;
    const getOffSet=Number(document.getElementById("btnOffSet").value);
    const getResult=cipher.decode(getOffSet, getWord);
    return codDec.innerText=getResult
}