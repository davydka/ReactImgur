var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '1c7a1b9d4fbaf6c'; //i know i know i know

module.exports = window.api = {
	get: function(url){
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Client-ID ' + apiKey
			}
		})
		.then(function(response){
				return response.json();
			})
		.then(function(data){
				console.log(data);
			})
	}
}