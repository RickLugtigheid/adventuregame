var scene = 0;
var myMoney = 100;
var audio = new Audio("assets/sounds/Door.mp3");

var inventory = [];
var bonusItems = [];

//#region init
document.body.innerHTML += '<div> <ul id=list> </ul> </div>';
document.body.innerHTML += '<p id=moneyDisplay> geld: ' + myMoney +' <p>';
document.body.innerHTML += '<source src="Door.mp3" type="audio/mpeg" id="audio">';

//inventory
document.body.innerHTML += '<div class="dropdown menu"><button class="dropbtn"></button><div class="dropdown-content"><a><button onclick="payOrder()">Betaal</button></a><p id="ORDER_LIST"></p><p id="TOTAL_PRIZE"></p></div></div>'

var container = document.getElementById("game-container");

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

button4 = document.createElement("button");
button4.id = "button4";

var backGround = document.createElement("img");

container.appendChild(button1, button2, button3, button4);

backGround.id = "bgImg";
container.appendChild(backGround);
backGround.width = 860;
backGround.height = 484;
backGround = document.getElementById("bgImg");

for(var i =0; i < 3; i++){

    randomItem = Math.floor(Math.random() * gameContainer[0].length);
    document.getElementById("list").innerHTML += "<li>" + gameContainer[0][randomItem].name + "</li>";
    bonusItems.push(gameContainer[0][randomItem].name);
}
//#endregion

masterFunction(gameContainer[1][0]);
function masterFunction(level){
    //button1
    level.button1Active == true ? button1.style.display = 'inline':button1.style = 'none';
    if(level.button1Active == true){
        button1.setAttribute("onClick", level.button1Onclick);
        button1.innerHTML = level.button1Text;
        editElement(level.button1Style.id, level.button1Style.nheightWidth, level.button1Style.bgColor, level.button1Style.newPositionTLR);
    }
    //button2
    level.button2Actve == true ? button2.style.display = 'inline':button2.style = 'none';
    if(level.button2Actve != false){
        button2.setAttribute("onClick", level.button2Onclick);
        button2.innerHTML = level.button2Text;
        editElement(level.button2Style.id, level.button2Style.nheightWidth, level.button2Style.bgColor, level.button2Style.newPositionTLR);
    }
    //button3
    level.button3Actve == true ? button3.style.display = 'inline':button3.style = 'none';
    if(level.button3Actve != false){
        button3.setAttribute("onClick", level.button3Onclick);
        button3.innerHTML = level.button3Text;
        editElement(level.button3Style.id, level.button3Style.nheightWidth, level.button3Style.bgColor, level.button3Style.newPositionTLR);
    }
    //other
    backGround.src = level.backGround;
    console.log("Level title: " + level.name + "\nLevel description: " + level.description + "\n\n" + Date());

    document.getElementById("title").innerHTML = level.name;
    document.getElementById("description").innerHTML = level.description;

    level.dialogBox != null ? dialogBox(level.dialogBox.title, level.dialogBox.text, level.dialogBox.color):null;
}
function addItem(itemIndex){
    if(!inventory.includes(gameContainer[0][itemIndex].name)){
        inventory.push(gameContainer[0][itemIndex].name);
        var inv = document.getElementById("ORDER_LIST");
        var img = document.createElement("img");
    
        img.title = "Prijs: " + gameContainer[0][itemIndex].prize;
        img.src = gameContainer[0][itemIndex].src;
        img.style.height = "80px";
        img.style.width = "80px"
        inv.appendChild(img);
    }
}
//#region LEVELS
function gameOver(){
    backGround.src = "assets/images/deur.jpg";
    inventory = [];
    dialogBox("GAME OVER", "Op nieuw proberen?", "masterFunction(gameContainer[1][0]);");
}

function doorLevel(){
    button2.style.fontSize = "32px";
    audio.play();
}
function pad2(){

    backGround.src = "assets/images/lvl2.jpg";

    button1.style.display ='inline';
    button1.style.border = "none";

    button3.innerHTML = "A) "+ inventoryItems[2].name +", prijs: " + inventoryItems[2].prize;
    button3.setAttribute("onClick", "addItem(2);");

    button1.innerHTML = "B) "+ inventoryItems[4].name +", prijs: " + inventoryItems[4].prize;

    button2.innerHTML = "C) Pak de boodschappen van de man. (succes kans: 2/3)";
    button2.setAttribute("onClick", "battle(2, ['test','worst','kaas']); addItem(4);");

    editElement("button2", ["80px", "125px"], "gray", ["360px", "77.5%"]);

    button4.innerHTML = "Ga terug naar het vorige pad";
}
//#endregion

function battle(winChance, productsToWin){
    var rand = productsToWin[Math.floor(Math.random() * productsToWin.length)];
    var random = Math.floor(Math.random() * winChance);
    console.log(random);
    if(random != 0){
        dialogBox("Gewonnen!", "YJe hebt gewonnen en je krijgt: " + rand, "green");
    }else{
        dialogBox("You lost!", "De strijd om de booschappen ging niet als gepland", "red");
    }

}

function dialogBox(dialogTitle, dialogText, boxColor, extraFunction){
    container.style.opacity = 0.5;
        
    //create the dialogBox
    textBox = document.createElement("div");
    textBox.id = "diaBox";
    textBox.innerHTML = dialogTitle;
    document.body.appendChild(textBox);

    //create the title
    var title = document.createElement("p");
    title.innerHTML = dialogText;
    textBox.appendChild(title);
    
    //createButton
    var okButton = document.createElement("button");
    okButton.setAttribute("onClick", 'textBox.style.display = "none"; container.style.opacity = 1;' + extraFunction);
    okButton.innerHTML = "OK";

    textBox.appendChild(okButton);
    textBox.style.backgroundColor = boxColor;
    textBox.style.borderColor = boxColor;
}
function editElement(id, newheightWidth, bgColor, newPositionTLR){
    var edit = document.getElementById(id);
    
    newheightWidth[0] != null ? edit.style.height = newheightWidth[0]:false;
    newheightWidth[1] != null ? edit.style.width = newheightWidth[1]:false;
    bgColor != null ? edit.style.backgroundColor = bgColor:false;

    newPositionTLR[0] != null ? edit.style.top = newPositionTLR[0]:false;
    newPositionTLR[1] != null ? edit.style.left = newPositionTLR[1]:false;
    newPositionTLR[2] != null ? edit.style.right = newPositionTLR[2]:false;
}
//tooltip
/*
function showToolTip(){
    tp.style.display="block";
}
function hideToolTip(){
    tp.style.display="";
}*/