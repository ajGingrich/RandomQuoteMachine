/* DOM Quote */
/*reg ex*/
var paragraphs = /<p>|<\/p>/g;
var comma = /&#8211\;/g;
var apos = /&#8217\;/g;

var initQuote = function() {

    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(json) {
        $('#theQuote').html(json[0].content + "<p>&mdash; " + json[0].title + "</p>");
        window.$quote = (json[0].content + "- " + json[0].title).replace(paragraphs,'').replace(comma, ",").replace(apos, "'");

    })
};
$('#newQuote').click(initQuote);

/*Tweet*/
var tweetQuote = function() {
    if ($quote.length > 140) {
        alert('Use less than 140 characters');
    }
    else {
        var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent($quote);
        window.open(twtLink,'_blank');
    }
};

$('#tweet').click(tweetQuote);