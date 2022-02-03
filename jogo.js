let objG;
let backup;
var id;

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
    console.log("chamaram-me" + computador);
    //backup=JSON.parse(JSON.stringify(objG.tabuleiro));
    //backup=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
    if(computador===true){
       objG.nivel=1;
    }
    objG.desenha();
}

function restartGame(){
    objG.tabuleiro=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
    objG.first=!objG.first;
    objG.player=objG.first;
    objG.isPc=!objG.player;    // Pc é sempre falso, ou seja, é sempre o 2º jogador
    objG.desenha();

    if(objG.isPc){
        regPlay();
    }
}

async function checkModal(ativo){

    console.log('checkModal');
    if (!$('#myModal').is(':visible')) {
        ativo=false;
        clearInterval(id);
        //restartGame();
    }
    if(ativo===true){
        id=setInterval(checkModal(ativo),100);
    }

}

function pcPlay(){
    let pos;
    for(i=0;i<=8;i++){
        console.log('FOR:'+i);
        if(objG.tabuleiro[i]==-1){
            objG.tabuleiro[i]=0;// ver se ganha
            console.log('IF:'+objG.tabuleiro);
            if(objG.verifica()!==0){
                console.log(i);
                objG.tabuleiro[i]=-1;
                return(i+1);
            }
            else{
                objG.tabuleiro[i]=-1;
            }
        }
    }
    for(i=0;i<=8;i++){
        console.log('FOR:'+i);
        if(objG.tabuleiro[i]==-1){
            objG.tabuleiro[i]=1;// ver se perde
            console.log('IF:'+objG.tabuleiro);
            if(objG.verifica()!==0){
                objG.tabuleiro[i]=-1;
                return(i+1);
            }else{
                objG.tabuleiro[i]=-1;
            }
        }
    }

    do{
        console.log("AHHHHHHHHHHHHHHHH");
        pos=parseInt(Math.random()*10);

    }while(objG.tabuleiro[pos-1]!=-1);
    return(pos);
}

function regPlay(pos){
    if(pos===undefined){
        ;
    }else {
        if (objG.tabuleiro[pos - 1] == -1) {
            objG.tabuleiro[pos - 1] = parseInt(0 + objG.player);
            objG.desenha();
            aux = objG.verifica();
            console.log("aux: " + aux);
            console.log("tabuleiro: " + objG.tabuleiro);
            console.log("player: " + parseInt(1 + objG.player));

            if (aux == -1) {
                checkModal(true);

                $('#titulo').html('Empate');
                $('#corpo').html('O jogo acabou em Empate')
                $('#myModal').modal('show');
            } else if (aux !== 0) {
                checkModal(true);

                $('#titulo').html('Vitória');
                $('#corpo').html('Parabéns jogador ' + (!aux + 1));
                $('#myModal').modal('show');


            }
            console.log(objG.player);
            objG.player = !objG.player;
            objG.isPc = !objG.player;
            $('#playjogador').html('Jogador ' + parseInt(1 + !objG.player));

            if (objG.player === false && objG.nivel > 0) {
                /*simula();
                player=objG.player;
                board=JSON.parse(JSON.stringify(objG.tabuleiro));
                console.log("Player: "+player);
                console.log("Board: "+board);
                console.log(minimax(board,player));*/
            }
            objG.isPc
        } else {
            $('#titulo2').html("Erro!")
            $('#corpo2').html("<span> Casa Indisponivel </span>");
            $('#myModal2').modal('show');
        }
    }
    // ==============================================================================   força uma jogada do PC
    if(objG.isPc && objG.nivel>0 && !objG.verifica()){
        console.log(objG.isPc + "..." + objG.nivel + "..." + !objG.verifica())
        setTimeout(function (){
            pos=pcPlay();// joga sempre aqui
            console.log('POS:'+pos);
            regPlay(pos);
            },1000);
        if(objG.verifica()==false){
            if(objG.nivel!=1){
                nivel-=1;
            }
        }
        else if(objG.verifica()===true){
            nivel+=1;
        }
    }
    //========================================================================================================
}

function desativa(){
    $('#myModal').modal('hide');
    $('#myModal2').modal('hide');
}

/*algoritmo*/
function emptyIndexies(auxiliar)
{
    return auxiliar.filter(s => s !== true && s!== false);
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
var ado = 0;
function minimax(newBoard, player) {
    let result;
    ado++;
    console.log("minimax" + ado);

    var availSpots = emptyIndexies(newBoard);
    console.log("AVAILABLE SPOTS:" + availSpots);

    if (checkIfWinner(newBoard, false)) {
        return {score: -10};
    } else if (checkIfWinner(newBoard, true)) {
        return {score: 10};
    } else if (availSpots.length === 0) {
        return {score: 0};
    }

    var moves = [];

    for (var i = 0; i < availSpots.length; i++) {
        console.log("AvailSpots Length:"+availSpots.length);


        var move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;
        console.log("NEWBOARDDDDD: "+  newBoard[availSpots[i]]);
        if(ado < 1000){
            if (player == true) {
                console.log("RESULT" + result);
                result = minimax(newBoard, false);
                move.score = result.score;
            } else {
                console.log("RESULT" + result);
                result = minimax(newBoard, true);
                move.score = result.score;
            }
        }

        newBoard[availSpots[i]] = move.index;
        console.log("NEWBOARD: "+  newBoard[availSpots[i]]);
        console.log("NewBoard Availspot: "+  availSpots[i]);
        console.log("MOVE INDEX: "+ move.index);
        moves.push(move);
        console.log("MOVE: "+ move);
    }

    var bestMove;
    if(player === 'true') {
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

    console.log(moves[bestMove]);
    return moves[bestMove];

}