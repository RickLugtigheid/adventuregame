
var gameContainer = [
    inventoryItems = [
        {name:"doperwtjes", prize:0.89, src:"assets/images/doperwtjes.png"},
        {name:"kaas", prize:2.99, src:"assets/images/kaas.jpg"},
        {name:"rookWorst", prize:2.69, src:"assets/images/rookWorst.png"},
        {name:"maaltijdmixMacaroni", prize:0.99, src:"assets/images/maaltijdmixMacaroni.png"},
        {name:"pasta", prize:0.81, src:"assets/images/pasta.png"}
    ],
    levels = [
        {
            name:"Supermarkt",
            description:"Welkom bij de winkel!",
            backGround:"assets/images/deur.jpg",
            button2Active: true,
            button2Text: "?",
            button2Onclick: 'dialogBox("Klik op de deur!", "Klik op de deur om naar binnen te gaan en de game te starten!", "green");',
            button2Style: {id:"button2", nheightWidth:["40px", "40px"], bgColor: "green", newPositionTLR:["150px", "20%"]},
            button3Active: true,
            button3Onclick: "masterFunction(gameContainer[1][1]);",
            button3Style: {id:"button3", nheightWidth:["150px", "110px"], bgColor: "black", newPositionTLR:["380px", "54%"]},
            button3Text: "",

            dialogBox: {title:"Welkom bij de winkel!", text:"Je bent eindelijk aangekomen bij de winkel. Het doel is om zoveel mogelijk producten te kopen van het geld dat je hebt, veel succes!", color:"rgb(136, 136, 136)"}

        },
        {
            name:"Pad1",
            description:"Een pad met lekkere dingen",
            backGround:"assets/images/lvl1.jpg",
            button1Active: true,
            button1Text: "B) "+ inventoryItems[3].name +", prijs: " + inventoryItems[3].prize,
            button1Style: {id:"button1", nheightWidth:["80px", "125px"], bgColor: "gray", newPositionTLR:["280px", "77.5%"]},
            button1Onclick: "addItem(3);",
            button2Active: true,
            button2Text: "Ga het pad in bij A:",
            button2Onclick: "masterFunction(gameContainer[1][2]);",
            button2Style: {id:"button2", nheightWidth:["80px", "125px"], bgColor: "gray", newPositionTLR:["360px", "77.5%"]},
            button3Active: true,
            button3Onclick: "addItem(0);",
            button3Style: {id:"button3", nheightWidth:["80px", "125px"], bgColor: "gray", newPositionTLR:["200px", "77.5%"]},
            button3Text: "A) "+ inventoryItems[0].name +", prijs: " + inventoryItems[0].prize
        },
        {
            name:"Pad2",
            description:"Nog meer boodschappen",
            backGround:"assets/images/lvl2.jpg",
            button1Active: true,
            button1Text: "B) "+ inventoryItems[4].name +", prijs: " + inventoryItems[4].prize,
            button1Style: {id:"button1", nheightWidth:["80px", "125px"], bgColor: "gray", newPositionTLR:["280px", "77.5%"]},
            button1Onclick: "addItem(4);",
            button2Active: true,
            button2Text: "C) Ga terug",
            button2Onclick: "masterFunction(gameContainer[1][1]);",
            button2Style: {id:"button2", nheightWidth:["80px", "125px"], bgColor: "gray", newPositionTLR:["360px", "77.5%"]},
            button3Active: true,
            button3Onclick: "addItem(2);",
            button3Style: {id:"button3", nheightWidth:["80px", "125px"], bgColor: "gray", newPositionTLR:["200px", "77.5%"]},
            button3Text: "A) "+ inventoryItems[2].name +", prijs: " + inventoryItems[2].prize
        },
    ]
]