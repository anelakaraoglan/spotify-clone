class API {
    constructor() {
        this.options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a8f60d61bbmsh7c75fe52961ba83p1c9316jsn1930ab7d39d1',
                'x-rapidapi-host': 'shazam.p.rapidapi.com'
            }
        };

            this.baseURL = 'https://shazam.p.rapidapi.com';
    }

async getPopular() {
        try {
            // send api request
            const response = await fetch(
                `${this.baseURL}/search?term=kiss`,
                this.options
            )

            // Convert the response from json format to js
            console.log(response);
            if(!response.ok){
                const text = await response.text();
                console.log(text)
            }

            // * this songs data returns us our songs BUT they all hold the music data inside an unnecessary middleman called "track" so we need a transformation

            // return the final converted songs
            return data.tracks.hits.map((item) => item.track)
        }
        catch (err) {
            console.error(err);
            alert(`ERROR: `+ err.message);
            return [];
        }
    }
}

export default API;
