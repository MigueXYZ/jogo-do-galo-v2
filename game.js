var objG;
function fazTudo(){
    do{
        posicao=parseInt(Math.random()*9);
    }while(objG.tabuleiro[posicao]!=-1);
    objG.tabuleiro[posicao]=parseInt(0+objG.player);
    objG.player=!objG.player;


    objG.desenha();
    document.write('<br>');
    if(objG.verifica()===true){
        alert('vb');
        clearInterval(intGame);
    }
}

function inicia(obj){
    objG=obj;
    intGame=setInterval('fazTudo()',300);

}