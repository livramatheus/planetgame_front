import axios from 'axios';

const fetchGenres = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_API_URL}/?page=genre&action=getall`).then((res) => {
            if (res.status === 200) {
                resolve(res.data.data);
            }
        }).catch((err) => {
            reject(err);
        })
    });
}

export { fetchGenres }