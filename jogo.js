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
        //restartGame(backup);
    }
    if(ativo===true){
        setInterval(checkModal(ativo),100);
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
        aux=JSON.parse(JSON.stringify(objG.tabuleiro));
        console.log(minimax(aux,parseInt(0+objG.player)));
    }
}

function desativa(){
    $('#myModal').modal('hide');
    $('#myModal2').modal('hide');
}

/*algoritmo*/
function emptyIndexies(auxiliar)
{
    return auxiliar.filter(s => s != 'true' && s!='false');
}

function checkIfWinner(board , player)
{	if(board[0]===player&&board[1]===player&&board[2]===player||
    board[0]===player&&board[3]===player&&board[6]===player||
    board[0]===player&&board[4]===player&&board[8]===player||
    board[1]===player&&board[4]===player&&board[7]===player||
    board[2]===player&&board[5]===player&&board[8]===player||
    board[3]===player&&board[4]===player&&board[5]===player||
    board[6]===player&&board[7]===player&&board[8]===player||
    board[2]===player&&board[4]===player&&board[6]===player)
    return true;
    return false;
}

function minimax(newBoard, player) {

    var availSpots = emptyIndexies(newBoard);

    if (checkIfWinner(newBoard, 0)) {
        return {score: -10};
    } else if (checkIfWinner(newBoard, 1)) {
        return {score: 10};
    } else if (availSpots.length === 0) {
        return {score: 0};
    }
    var moves = [];
    for (var i = 0; i < availSpots.length; i++) {
        var move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;

        if (player == 1) {
            var result = minimax(newBoard, 0);
            move.score = result.score;
        } else {
            var result = minimax(newBoard, 1);
            move.score = result.score;
        }

        newBoard[availSpots[i]] = move.index;

        moves.push(move);
    }

    var bestMove;
    if(player === Computer) {
        var bestScore = -10000;
        for(var i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        var bestScore = 10000;
        for(var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}