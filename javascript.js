/**
 * Created by hiro on 17-01-2017.
 */

$(document).ready(function(){

    var randomQuote;
    var randomAuthor;
    var randomNumber;

    getQuote();

    function getQuote(){

        var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

        $.getJSON(url, function(data){
            console.log(data.quoteText)
            $(".quote-text").html(data.quoteText);
            $(".author").html("- " + data.quoteAuthor);
        })

    };

    $("#newQuote").on("click", function(){
        getQuote();
    })

    $("#tweetOut").on("click", function(){
        var tweetQuote = $(".quote-text").text() + " " + $(".author").text();
        window.open("https://twitter.com/intent/tweet?text="+tweetQuote);

    })
});