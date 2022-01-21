let player=0;
let mode;
let level=1;
let playsNumber=0;
var table=[-1,-1,-1,-1,-1,-1,-1,-1,-1];

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

function create{
    document.cookie="player=0;table=[-1,-1,-1,-1,-1,-1,-1,-1,-1];score=[0,0];expires=Thu, 18 Dec 2050 12:00:00 UTC;path=/;";
    document.cookie="score=[0,0];expires=Thu, 18 Dec 2013 12:00:00 UTC;path=/;";
    document.cookie="table=[-1,-1,-1,-1,-1,-1,-1,-1,-1];score=[0,0];expires=Thu, 18 Dec 2013 12:00:00 UTC;path=/;";
}

function setCookie(cname,cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


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

function regPlay(pos){
    player=getCookie("player");
    table=getCookie("table");
    if(table[pos-1]===-1){
        table[pos-1]=player;
        document.getElementById(pos).src="imagens/xo/milho.png";
        changePlayer(player);
        setCookie("table",table);
        $("#player").html(player);

    }
    else{
alert("---___---");
        $("#myModal .modal-body").html="<span> Casa Indisponivel </span>";
        $("#myModal .modal-footer").html=("<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>");
        $("#myModal").modal('show');
    }
}

function changePlayer(player){
    player=!player;
    setCookie("player",player);
}

function restartGame(){
    playsNumber=0;
    table=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
    changePlayer();
    for(i=0;i<9;i++){
        document.getElementById("pos_"+(i+1)).src="imagens/xo/transparent.png";
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


