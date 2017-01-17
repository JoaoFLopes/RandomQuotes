/**
 * Created by hiro on 17-01-2017.
 */

/* This is the code to change the quotes at random */

var quotes = ["Thank you Mario! But our Princess is in another castle!",
    "Its a-me, Mario!",
    "This is your fault. I'm going to kill you. And all the cake is gone. You don't even care, do you?",
    "The right man in the wrong place can make all the difference in the world.",
    "Stay frosty.",
    "Would you kindly",
    "Snake? Snake? SNAAAAAAAAKE!!!",
    "War. War Never Changes",
    "Requiescat in pace.",
    "Do a Barrel Roll!",
    "All your base are belong to us.",
    "I used to be an adventurer like you but then I took an arrow to the knee"
];
var authors = ["Yoshi",
    "Mario",
    "GLaDOS",
    "G-Man",
    "Captain Price",
    "Frank Fontain",
    "Colonel Campbell",
    "Fallout 3",
    "Ezio Auditore da Firenze",
    "Peppy Hare",
    "CATS",
    "Skyrim Guard"
];

$(document).ready(function(){

    var randomQuote;
    var randomAuthor;
    var randomNumber;

    getQuote();

    function getQuote(){

        var len = quotes.length;
        randomNumber = Math.floor(Math.random() * len);

        randomQuote = quotes[randomNumber];
        randomAuthor = authors[randomNumber];

        $(".quote-text").text(randomQuote);
        $(".author").text("- " + randomAuthor);

    };

    $("#newQuote").on("click", function(){
        getQuote();
    })

    $("#tweetOut").on("click", function(){
        var tweetQuote = $(".quote-text").text() + " " + $(".author").text();
        window.open("https://twitter.com/intent/tweet?text="+tweetQuote);

    })
});