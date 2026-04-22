class API {
    constructor() {
        this.options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a8f60d61bbmsh7c75fe52961ba83p1c9316jsn1930ab7d39d1',
                'x-rapidapi-host': 'shazam.p.rapidapi.com'
            }
        };

            this.baseURL = 'https://shazam.p.rapidapi.com/v2';
    }

async getPopular() {
const url = `${this.baseURL}/search?term=iron%20maiden`;
//const url = 'https://shazam.p.rapidapi.com/v2/search?term=iron%20maiden';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a8f60d61bbmsh7c75fe52961ba83p1c9316jsn1930ab7d39d1',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

}

export default API;
