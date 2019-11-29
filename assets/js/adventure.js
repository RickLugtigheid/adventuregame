var scene = 0;
var myMoney = 100;
var audio = new Audio("assets/sounds/Door.mp3");

var inventory = [];

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
button4.innerHTML = "Ga terug:";
button4.setAttribute("onClick", "load(1);");

var backGround = document.createElement("img");

container.appendChild(button1, button2, button3, button4);

backGround.id = "bgImg";
container.appendChild(backGround);
backGround.width = 860;
backGround.height = 484;
backGround = document.getElementById("bgImg");

for(var i =0; i < 3; i++){

    randomItem = Math.floor(Math.random() * inventoryItems.length);
    document.getElementById("list").innerHTML += "<li>" + inventoryItems[randomItem].name + "</li>";
}
//#endregion


masterFunction(gameContainer[1][0]);
function masterFunction(level){
    level.button1Actve == true ? button1.style.display = 'inline':button1.style = 'none'
}

load(0);
function load(sceneID){
    //load level
    sceneID == 0 ? doorLevel():false;
    sceneID == 1 ? pad1():false;
    sceneID == 2 ? pad2():false;
    
    console.log("Level title: " + levels[sceneID].title + "\nLevel description: " + levels[sceneID].description + "\n\n" + Date());

    document.getElementById("title").innerHTML = levels[sceneID].title;
    document.getElementById("description").innerHTML = levels[sceneID].description;
}
function addItem(itemIndex){

    if(!inventory.includes(inventoryItems[itemIndex].name)){
        inventory.push(inventoryItems[itemIndex].name);
        var inv = document.getElementById("ORDER_LIST");
        var img = document.createElement("img");
    
        img.title = "Prijs: " + inventoryItems[itemIndex].prize;
        img.src = inventoryItems[itemIndex].src;
        img.style.height = "80px";
        img.style.width = "80px"
        inv.appendChild(img);
    }
}
//#region LEVELS
function gameOver(){
    backGround.src = "assets/images/deur.jpg";
    inventory = [];
    dialogBox("GAME OVER", "Op nieuw proberen?", "init();");
}

function doorLevel(){
    console.log(button1.innerHTML);
    backGround.src = "assets/images/deur.jpg";

    button3.setAttribute("onClick", "load(1);");
    button2.setAttribute("onClick", 'dialogBox("Klik op de deur!", "Klik op de deur om naar binnen te gaan en de game te starten!", "green");');

    editElement("button3", ["150px", "110px"], "black", ["380px", "54%"]);
    editElement("button2", ["40px", "40px"], "green", ["150px", "20%"]);
    button3.style.border = "none";
    button2.innerHTML = "?";
    button2.style.fontSize = "32px";
    audio.play();
    dialogBox("Welkom bij de winkel!", "Je bent eindelijk aangekomen bij de winkel. Het doel is om zoveel mogelijk producten te kopen van het geld dat je hebt, veel succes!", "rgb(136, 136, 136)");
}

function pad1(){
    backGround.src = "assets/images/lvl1.jpg";

    button1.style.display ='inline';
    button1.style.border = "none";
    button2.style.border = "none";
    button2.style.fontSize = "16px"
    button4.style.display = "none";


    editElement("button3", ["80px", "125px"], "gray", ["200px", "77.5%"]);
    button3.innerHTML = "A) "+ inventoryItems[0].name +", prijs: " + inventoryItems[0].prize;
    button3.setAttribute("onClick", "addItem(0);");

    editElement("button1", ["80px", "125px"], "gray", ["280px", "77.5%"]);
    button1.innerHTML = "B) "+ inventoryItems[3].name +", prijs: " + inventoryItems[3].prize;
    button1.setAttribute("onClick", "addItem(3);");

    editElement("button2", ["80px", "125px"], "gray", ["360px", "77.5%"]);
    button2.innerHTML = "Ga het pad in bij A:";
    button2.setAttribute("onClick", "load(2);");
}
function pad2(){

    backGround.src = "assets/images/lvl2.jpg";

    button1.style.display ='inline';
    button1.style.border = "none";


    button3.innerHTML = "A) "+ inventoryItems[2].name +", prijs: " + inventoryItems[2].prize;
    button3.setAttribute("onClick", "addItem(2);");

    button1.innerHTML = "B) "+ inventoryItems[4].name +", prijs: " + inventoryItems[4].prize;

    button2.innerHTML = "C) Pak de boodschappen van de man. (succes kans: 2/3)";
    button2.setAttribute("onClick", "battle(2, ['test','jew','kaas']); addItem(4);");

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