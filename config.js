/*
	Let's custom everything!
*/

// Replace my temp API key with yours. Grab one here: https://developers.giphy.com/ (it's free)
var giphyAPIKey = "c98cd7e6c6ab474eb3f922a34d725a7e";

// The title of your own GiphyTV :)
var giphyTVUsername = "Cats are everywhere";

// The description where you can put some HTML inside!
var giphyTVDescription = "Nap all day friends. Decide to do nothing with the owners today. Go meow loudly just to annoy owners. Eat owner's food. Jump on humans while they sleep, do it all night long. Go, be like me.<br /><br />Be a stupid cat.";

// Your category of Giphy GIFs, only one word please.
var giphyTVSearch = "kitten";

// Delay between GIFs (5000=5seconds)
var giphyTVDelay = 5000;

// MAGIC! (don't touch, it hurts)
document.getElementById("giphyTVUsername").innerHTML = giphyTVUsername;
document.getElementById("giphyTVDescription").innerHTML = giphyTVDescription;
