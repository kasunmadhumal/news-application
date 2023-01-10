import axios from "axios";
import { BASE_API_URL } from '../../config';

class Repository{

    #BaseUrl = "";
    #API_KEY = "";

    constructor(){
        this.#BaseUrl = BASE_API_URL
        this.#API_KEY = import.meta.env.VITE_API_KEY
    }


    async getLatestHeadlines() {
        try {
          const res = await axios.get(`${this.#BaseUrl}/top-headlines?country=us&apiKey=${this.#API_KEY}`);
          return res.data;
        } catch (err) {
          throw err;
        }
      }

      async getListOfSources() {
        try {
          const res = await axios.get(`${this.#BaseUrl}/sources?apiKey=${this.#API_KEY}`);
          return res.data;
        } catch (err) {
          throw err;
        }
      }
      
      async getSearchedHeadlines(searchedText) {
        try {
          const res = await axios.get(`${this.#BaseUrl}/top-headlines?q=${searchedText}&apiKey=${this.#API_KEY}`);
          return res.data;
        } catch (err) {
          throw err;
        }
      }
      
      async getApiState() {
        try {
          const res = await axios.get(`${this.#BaseUrl}/sources?${this.#API_KEY}}`);
          return res;
        } catch (err) {
          throw err;
        }
      }
      

    

}

export default new Repository;