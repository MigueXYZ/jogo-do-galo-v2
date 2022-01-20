let player=0;
let mode;
let table=[
    [" "," "," "],
    [" "," "," "],
    [" "," "," "]
];

function test(){
    // loop the outer array
    for (let i = 0; i < activities.length; i++) {
        // get the size of the inner array
        var innerArrayLength = activities[i].length;
        // loop the inner array
        for (let j = 0; j < innerArrayLength; j++) {
            const input = prompt("Escolhe uma posição");
            play(input);
            console.log(table[i]," /");
        }
        console.log("\n");
    }
}


function play(pos){
    if(table[pos-1]==" "){
        table[pos-1]=player;
        changePlayer();
    }
    else{
        alert("Casa indisponivel!");
    }

}

function changePlayer(){
    if(player==1){
        player=0;
    }
    else{
        player=1;
    }
}

function whosPlaying(){
    document.getElementById("player").innerHTML="Player " + (player+1);
}

function checkIfWin(){

}