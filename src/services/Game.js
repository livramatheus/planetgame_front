import axios from 'axios';
import { prepareData } from './Utils';

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

const insertGame = (game) => {
    const url = `${process.env.REACT_APP_API_URL}/?page=game&action=insert`;
    const data = prepareData(game);
    const headers = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }

    return new Promise((resolve, reject) => {
        axios.post(url, data, headers).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    })
}

export { fetchGames, fetchGame, insertGame };