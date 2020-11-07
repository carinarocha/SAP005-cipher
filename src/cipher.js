let firstIdUpp=65;
let lastIdUpp=90;
let firstIdLow=97;
let lastIdLow=122;
let space=32;
let lengthAlph=26;
const cipher = {
  // ...
  encode(getOffSet,getWord){
    let encodeWord= "",cod;
    if (getOffSet == null || !getWord) throw new TypeError("ERRO!");

     // Laço para pegar o index do array,aplicar a logica de pegar o que for menor do que o extensão da minha palavra e add 1
       for (let id=0;id<getWord.length;id++){
       if (getWord.charCodeAt(id)>=firstIdUpp && getWord.charCodeAt(id)<=lastIdUpp){
         cod=((getWord.charCodeAt(id)-firstIdUpp)+getOffSet)%lengthAlph+firstIdUpp;
      }
      else if ((getWord.charCodeAt(id)>=firstIdLow && getWord.charCodeAt(id)<=lastIdLow)){
       cod=((getWord.charCodeAt(id)-firstIdLow)+getOffSet)%lengthAlph+firstIdLow;
      }
      else if((getWord.charCodeAt(id)===space)){
       cod=space;
     }

      encodeWord += String.fromCharCode(cod);
    }
    console.log(encodeWord);
    return encodeWord
  },
  decode(getOffSet,getWord){
    let decodeWord="",cod;
    if (getOffSet == null || !getWord) throw new TypeError("ERRO!");

    for (let id=0;id<getWord.length;id++){
      if(getWord.charCodeAt(id)>=firstIdUpp && getWord.charCodeAt(id)<=lastIdUpp){
        cod=((getWord.charCodeAt(id)+firstIdUpp)-getOffSet)%lengthAlph+firstIdUpp;
      }
      else if ((getWord.charCodeAt(id)>=firstIdLow && getWord.charCodeAt(id)<=lastIdLow)){
       cod=((getWord.charCodeAt(id)+firstIdLow)-getOffSet)%lengthAlph+firstIdLow;
      }
      else if((getWord.charCodeAt(id)===space)){
       cod=space;
     }
   
      decodeWord += String.fromCharCode(cod);
    }
    return decodeWord;
  }
 };
export default cipher;

