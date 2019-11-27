document.body.innerHTML += '<div> <ul id=list> </ul> </div>';
document.body.innerHTML += '<p id=moneyDisplay> geld: ' + myMoney +' <p>';

//buttons
document.getElementById("button1").addEventListener("click", function(){ load(1)});
document.getElementById("button3").addEventListener("click", function(){alert("Test");});
document.getElementById("button2").addEventListener("click", function(){ load(-1)});