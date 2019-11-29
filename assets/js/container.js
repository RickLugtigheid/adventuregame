
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
            description:"Welcome bij de winkel!",
            backGround:"assets/images/deur.jpg",
            button1Actve: false,
            //button1Text: "test",
            //button1Style: null,
            //button1Onclick: null,
            button2Active: true,
            button2Text: "?",
            button2Onclick: 'dialogBox("Klick op de deur!", "Klik op de deur om naar binnen te gaan en de game te starten!", "green");',
            button2Style: {id:"button2", nheightWidth:["40px", "40px"], bgColor: "green", newPositionTLR:["150px", "20%"]},
            button3Active: true,
            button3Onclick: "masterFunction(gameContainer[1][1]);",
            button3Style: {id:"button3", nheightWidth:["150px", "110px"], bgColor: "black", newPositionTLR:["380px", "54%"]},
            button3Text: "A) doperwtjes, prijs: 0.89"
        },
        {
            name:"Pad1",
            description:"Welcome bij de winkel!",
            backGround:"assets/images/deur.jpg",
            button1Actve: false,
            //button1Text: "test",
            //button1Style: null,
            //button1Onclick: null,
            button2Active: true,
            button2Text: "?",
            button2Onclick: 'dialogBox("Klick op de deur!", "Klik op de deur om naar binnen te gaan en de game te starten!", "green");',
            button2Style: {id:"button2", nheightWidth:["40px", "40px"], bgColor: "green", newPositionTLR:["150px", "20%"]},
            button3Active: true,
            button3Onclick: "masterFunction(gameContainer[1][1]);",
            button3Style: {id:"button3", nheightWidth:["150px", "110px"], bgColor: "black", newPositionTLR:["380px", "54%"]},
            button3Text: "A) doperwtjes, prijs: 0.89"
        },
    ]
]