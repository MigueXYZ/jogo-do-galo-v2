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
}
function restartGame(obj){
    objG.tabuleiro=obj.tabuleiro;
    objG.player=!objG.player;
    objG.desenha();

}

function regPlay(pos){
    if(objG.tabuleiro[pos-1]==-1){
        objG.tabuleiro[pos-1]=parseInt(0+objG.player);
        objG.desenha();
        aux=objG.verifica();
        console.log(aux);
        if(aux==-1){
            $('#titulo').html('Empate');
            $('#myModal').modal('show');
            restartGame(game);
        }
        if(aux!==0){
            $('#titulo').html('Vitória');
            $('#corpo').html('Parabéns jogador '+(aux+1));
            $('#myModal').modal('show');
        };
        objG.player=!objG.player;
    }
    else{
        $("#myModal .modal-body").html="<span> Casa Indisponivel </span>";
        $("#myModal .modal-footer").html=("<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>");
        $("#myModal").modal();
    }
}

function desativa(){
    $('#myModal').modal('hide');
}


