const prompt= require("prompt-sync")();
let nbclient= +prompt("nombre: ");
let color= 0;
let array=["jaune", "rose", "marron", "bleu"];

//////////////////////////////////////////////////////////////////
/*function*/
const BestColor= (tab,nb,MaxNb,MaxChoice)=>{
    for (let i=0; i<tab.length; i++){
        let color= tab[i];
            for (let u=i+1; u<tab.length; u++){
                if (color=tab[u]) nb+=1;
            }
            if (nb>MaxNb) {
                MaxNb=nb;
                MaxChoice=color;}
    }
    return MaxChoice;
}


//////////////////////////////////////////////////////////////////
/*input*/

for(let i=0; i<nbclient; i++){
    color= prompt("saisissez votre couleur: ");
    array.push(color);
}
console.log(array);

//////////////////////////////////////////////////////////////////
/*output*/
console.log(BestColor(array,0,0,""));