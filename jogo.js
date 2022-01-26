let objG;
let backup;

function fazTudo(){
    do{
        posicao=parseInt(Math.random()*9);
    }while(objG.tabuleiro[posicao]!=-1);
    objG.tabuleiro[posicao]=parseInt(0+objG.player);
    objG.player=!objG.player;0
    objG.desenha();
    document.write('<br>');
    if(objG.verifica()===true){
        clearInterval(intGame);
    }

}

function inicia(obj,computador){
    objG=obj;
    backup=JSON.parse(JSON.stringify(objG.tabuleiro));
    if(computador===true){
       objG.nivel=1;
    }
}

function restartGame(){
    objG.tabuleiro=backup;
    objG.player=!objG.player;
    objG.desenha();
}

async function checkModal(ativo){
    if (!$('#myModal').is(':visible')) {
        ativo=false;
        restartGame(backup);
    }
    if(ativo===true){
        setInterval(checkModal(ativo),100);
    }

}

function simula(){
    let simulador;
    simulador.verifica =objG.verifica;
    for (i = 0; i < 9; i++) {
        simulador.tabuleiro = JSON.parse(JSON.stringify(objG.tabuleiro));
        if (simulador.tabuleiro[i] == -1) {
            simulador.tabuleiro[i]=!simulador.player;

            if(simulador.verifica()!==0 && simulador.verifica()!=-1){
                simulador.tabuleiro[i]=simulador.player;
            }
        }
    }
}

function regPlay(pos){
    if(objG.tabuleiro[pos-1]==-1){
        objG.tabuleiro[pos-1]=parseInt(0+objG.player);
        objG.desenha();
        aux=objG.verifica();
        console.log("aux: "+aux);
        console.log("tabuleiro: "+objG.tabuleiro);
        if(aux==-1){
            checkModal(true);

            $('#titulo').html('Empate');
            $('#corpo').html('O jogo acabou em Empate')
            $('#myModal').modal('show');
        }
        else if(aux!==0){
            checkModal(true);

            $('#titulo').html('Vitória');
            $('#corpo').html('Parabéns jogador '+(!aux+1));
            $('#myModal').modal('show');

                    }
        objG.player=!objG.player;
        $('#playjogador').html('Jogador '+ parseInt(1+!objG.player));
    }
    else{
        $('#titulo2').html("Erro!")
        $('#corpo2').html("<span> Casa Indisponivel </span>");
        $('#myModal2').modal('show');
    }
    if(objG.player==false && objG.nivel!=0){
        simula();
    }
}

function desativa(){
    $('#myModal').modal('hide');
    $('#myModal2').modal('hide');
}