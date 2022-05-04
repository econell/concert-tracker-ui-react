import Api from "./Api";

class ArtistApi extends Api {

    BASE_URL = '/artist';

    async getAll() {
        return await this.get(this.BASE_URL);
    }

    async getById(id) {
        return await this.get(`${this.BASE_URL}/${id}`);
    }
}

export default ArtistApi;