let player=0;
let mode;
let level=1;
let playsNumber=0;
const table=[-1,-1,-1,-1,-1,-1,-1,-1,-1];

const combo=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];


/*
function test(){
    do {
    const input = prompt("Escolhe uma posição");
    console.clear();
    play(input);
    playsNumber+=1;
    // loop the outer array
    for (let i = 0; i < activities.length; i++) {
        // get the size of the inner array
        var innerArrayLength = activities[i].length;
        // loop the inner array
        for (let j = 0; j < innerArrayLength; j++) {
            console.log(table[i]," /");

        }
        console.log("\n");
    }
    }while (input!=-1);
}
*/

function play(pos){
    whosPlaying();
    if(table[pos-1]===-1){
        table[pos-1]=player;
alert("broas mano");
        changePlayer(player);

    }
    else{
        alert("Casa indisponivel!");
    }

}

function changePlayer(player){
    player=!player;
    $("#player").html(player);
}

function whosPlaying(){
    return($("#player").value);
}

function restartGame(){
    playsNumber=0;
    table=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
    changePlayer();
    for(i=0;i<9;i++){
        document.getElementById("pos_${i}").src="imagens/xo/transparent.png";
    }
}


function checkIfWin(){

    else if(playsNumber===9){
        $("#myModal .modal-body").html="<p> Jogo Empatou </p>";
        $("#myModal .modal-footer").html=('<a href="#" class="btn btn-primary" onclick="restartGame()">');
        $("#myModal").modal('show');
    }
}


