import axiosRequest from "../utils/config/axiosCN.config";

export default function getRandomUser(){
    return axiosRequest.get('/random', {
        validateStatus: function (status) {
            return status < 500                 //* Resolve only if the status code is less than 500
        }
    })
}