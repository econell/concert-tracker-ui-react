class Api {
    //TODO: inject via config
    SERVER = 'http://localhost:8080/api';

    constructUrl = (route) => this.SERVER + route;

    constructHeaders(headers) {
    return {
        ...headers,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        };
    }


    async get(route) {
        console.log("Get: " + route);
        return await fetch(this.constructUrl(route), {
            method: 'GET',
            headers: this.constructHeaders()
        });
    }

    async post(route, body) {
        return await fetch(this.constructUrl(route), {
            method: 'POST',
            headers: this.constructHeaders(),
            body: JSON.stringify(body)
        });
    }

    async put(route, body) {
        return await fetch(this.constructUrl(route), {
            method: 'PUT',
            headers: this.constructHeaders(),
            body: JSON.stringify(body)
        });
    }

    async delete(route) {
        return await fetch(this.constructUrl(route), {
            method: 'DELETE',
            headers: this.constructHeaders()
        });
    }
}

export default Api;