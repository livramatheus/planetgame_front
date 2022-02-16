import axios from 'axios';

const fetchGames = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_API_URL}/?page=game&action=getall`).then((res) => {
            if (res.status === 200) {
                resolve(res.data.data);
            }
        }).catch((err) => {
            reject(err);
        })
    })
};

const fetchGame = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_API_URL}/?page=game&action=get&params=${id}`).then((res) => {
            if (res.status === 200) {
                resolve(res.data.data);
            }
        }).catch((err) => {
            reject(err);
        })
    })
}

export { fetchGames, fetchGame };