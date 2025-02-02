import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = async () => {
        return await axiosInstance
            .get<T[]>(this.endpoint)
            .then((res) => res.data);
    }

}

export default APIClient;
