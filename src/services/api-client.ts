import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bb1522fc08c545e5832b484214a934e5'
    }
})