
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
            //button1Style: null,
            //button1Onclick: null,
            //button1Text: "test",
            button2Active: true,
            button2Text: "?",
            button2Onclick: 'dialogBox("Klik op de deur!", "Klik op de deur om naar binnen te gaan en de game te starten!", "green");',
            button2Style: '"button2", ["40px", "40px"], "green", ["150px", "20%"]',
            button3Active: true,
            button3Onclick: "load(1);",
            button3Style: '"button3", ["150px", "110px"], "black", ["380px", "54%"]',
            button3Text: "A) "+ gameContainer[0][2].name +", prijs: " + gameContainer[0][2].prize

        }
    ]
]