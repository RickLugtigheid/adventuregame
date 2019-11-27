var scene = 0;
var myMoney = 100;
var audio = new Audio("assets/sounds/Door.mp3");

var inventory = [];
var inventoryItems = [
    {name:"doperwtjes", prize:0.89, src:"assets/images/doperwtjes.png"},
    {name:"kaas", prize:2.99, src:"assets/images/kaas.jpg"},
    {name:"rookWorst", prize:2.69, src:"assets/images/rookWorst.png"},
    {name:"maaltijdmixMacaroni", prize:0.99, src:"assets/images/maaltijdmixMacaroni.png"}
];

var levels = [
{title: "De Supermarkt", description: "Klik op de deur om naar binnen te gaan"},
{title: "Pad1", description:"Een pad met allemaal lekkere dingen"},
{title: "Pad2", description:"Een pad met allemaal lekkere dingen"}
];

document.body.innerHTML += '<div> <ul id=list> </ul> </div>';
document.body.innerHTML += '<p id=moneyDisplay> geld: ' + myMoney +' <p>';
document.body.innerHTML += '<source src="Door.mp3" type="audio/mpeg" id="audio">';

//inventory
document.body.innerHTML += '<div class="dropdown menu"><button class="dropbtn"></button><div class="dropdown-content"><a><button onclick="payOrder()">Betaal</button></a><p id="ORDER_LIST"></p><p id="TOTAL_PRIZE"></p></div></div>'


//objects
var container = document.getElementById("game-container");

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var backGround = document.createElement("img");

container.appendChild(button1, button2, button3);

//init
backGround.id = "bgImg";
container.appendChild(backGround);
backGround.width = 860;
backGround.height = 484;
backGround = document.getElementById("bgImg");

    // load bonusList
    for(var i =0; i < 3; i++){
        randomItem = Math.floor(Math.random() * inventoryItems.length);
        document.getElementById("list").innerHTML += "<li>" + inventoryItems[randomItem].name + "</li>";
    }

load(0);
function load(sceneID){
    //load level
    sceneID == 0 ? doorLevel():false;
    sceneID == 1 ? pad1():false;
    
    console.log("Level title: " + levels[sceneID].title + "\nLevel description: " + levels[sceneID].title + "\n\n" + Date());

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
function doorLevel(){
    backGround.src = "assets/images/deur.jpg";

    button1.style.display ='none';
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


    editElement("button3", ["80px", "125px"], "gray", ["200px", "77.5%"]);
    button3.innerHTML = "A) Doperwten, prijs:" + inventoryItems[0].prize;
    button3.setAttribute("onClick", "addItem(0);");

    editElement("button1", ["80px", "125px"], "gray", ["280px", "77.5%"]);
    button1.innerHTML = "B) maaltijdmix, prijs:" + inventoryItems[3].prize;
    button1.setAttribute("onClick", "addItem(3);");

    editElement("button2", ["80px", "125px"], "gray", ["360px", "77.5%"]);
    button2.innerHTML = "Ga het pad in bij A:";
    button2.setAttribute("onClick", "pad2();");
}
function pad2(){
    backGround.src = "assets/images/lvl1.jpg";

    button1.style.display ='inline';
    button1.style.border = "none";


    editElement("button3", ["80px", "125px"], "gray", ["200px", "77.5%"]);
    button3.innerHTML = "A) Doperwten, prijs:" + inventoryItems[0].prize;
    button3.setAttribute("onClick", "addItem(0);");

    editElement("button1", ["80px", "125px"], "gray", ["280px", "77.5%"]);
    button1.innerHTML = "B) maaltijdmix, prijs:" + inventoryItems[3].prize;
    button1.setAttribute("onClick", "addItem(3);");
}
//#endregion

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