var board=[[' ',' ',' '],
           [' ',' ',' '],
           [' ',' ',' ']];
var curplayer;
var isGame=false;

let gameEle=document.querySelectorAll('[data-cell]');

gameEle.forEach(i => {
    i.addEventListener('click', runGame, {once:true});
    });

let turn;

function runGame(i){
         
}
