import axios from "axios";

//* Default config for AXIOS
//* Chuck Norris Exercise

export default axios.create({
    baseURL: 'https://api.chucknorris.io/jokes',
    responseType: 'json',
    timeout: 6000
})