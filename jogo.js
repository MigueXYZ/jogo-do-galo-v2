let player=0;
let mode;
let playsNumber=0;
let table=[
    [" "," "," "],
    [" "," "," "],
    [" "," "," "]
];

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

const tablee = [1];
tablee.lenght = 9;

console.log(tablee);

function test(){
    do {
    const input = prompt("Escolhe uma posição");
    console-clear();
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
    }while ($input!=-1);
}


function play(pos){
    if(table[pos-1]===" "){
        table[pos-1]=player;
        changePlayer();
    }
    else{
        alert("Casa indisponivel!");
    }

}

function changePlayer(){
    if(player===1){
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
    if(table[0] && table[1] && table[2] === '1' || '0'){

    }
}
function checkIfTie(){
    if(playsNumber===9){
        checkIfWin();
    }
else{}
}