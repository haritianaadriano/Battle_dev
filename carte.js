const prompt= require("prompt-sync")();
let array= [];

//////////////////////////////////////////////////////////
/* function */
const longseries= (tab,accum,repetition,maxcard,maxrepetition) => {
    let card=0;
    for( let u=0; u<tab.length; u++ ){
        card= tab[u];
        for ( let y=u+1; y<tab.length; y++ ){
            if (card==tab[y]) accum+=1;
                repetition=accum;
            if(repetition>maxrepetition) {
                maxrepetition=repetition;
                maxcard=card;
            }
            if(repetition>maxrepetition)
                return maxcard=card;
        }
    }
    console.log(maxrepetition+" "+ maxcard);
}

//////////////////////////////////////////////////////////
/* in put */
for ( let i=1; i<Infinity; i++ ){
    let card= +prompt("le numeros de carte: ");
        array.push(card);
    if(card==0) break;
}

//////////////////////////////////////////////////////////
/* out put */
console.log(longseries(array,0,0,0,0));