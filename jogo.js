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

}

function regPlay(pos){
    if(objG.tabuleiro[pos-1]==-1){
        objG.tabuleiro[pos-1]=parseInt(0+objG.player);
        objG.desenha();
        aux=objG.verifica();
        if(aux==-1{
            $("#myModal .modal-body").html="<span> Empate </span>";
            $("#myModal .modal-footer").html=("<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>");
            $("#myModal").modal('show');
        })
        if(aux!=-1){
            $("#myModal .modal-body").html="<span> Vitória do jogador " + (aux+1) + "</span>";
            $("#myModal .modal-footer").html=("<button onclick='restartGame(game)' type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>");
            $("#myModal").modal({
                show:'true'
            });
        };
        objG.player=!objG.player;
    }
    else{
        $("#myModal .modal-body").html="<span> Casa Indisponivel </span>";
        $("#myModal .modal-footer").html=("<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>");
        $("#myModal").modal('show');
    }
}





function checkIfWin(){
    let tempTable = [-1,-1,-1]
    for(var i = 0; i < 9; i++){
        if(table[i]=== 1){
            for(var j = 0; j < 3; j++){
                    tempTable[j]=i;
            }
        }
    }




    /*
    if(i){

    }
    else if(playsNumber===9){
        $("#myModal .modal-body").html="<p> Jogo Empatou </p>";
        $("#myModal .modal-footer").html=('<a href="#" class="btn btn-primary" onclick="restartGame()">');
        $("#myModal").modal('show');
    }*/
}


