import axios from "axios";

export default function httpRequest(method, url, data) {
    return axios({
        method: method,
        url: url,
        data: data
    });
}