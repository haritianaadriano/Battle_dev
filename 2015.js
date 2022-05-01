const prompt= require("prompt-sync")();
let nbword= +prompt("combien de mot: ");
let array=[];
/////////////////////////////////////////
/*function*/
const longer= (tab)=>{
    let maxlength=0;
    for(let u=0; u<tab.length; u++){
        var word= tab[u];
    }
    for (let y=0; y<tab.length; y++){
        if(word.length>maxlength) return maxlength=word;
    }
}
/////////////////////////////////////////
/*input*/
for (let i=0; i<=nbword; i++){
    let mot= prompt("saisissez le mot: ");
   array.push(mot);
}
console.log(array);
/////////////////////////////////////////
/*output*/
console.log(longer(array));