import axios from 'axios';
import { prepareData } from './Utils';

const fetchGames = () => {
    const url = `${process.env.REACT_APP_API_URL}/?page=game&action=getall`;
    const options = {
        'headers': {}
    };

    let token = localStorage.getItem('jwt-key');

    if (token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    return new Promise((resolve, reject) => {
        axios.get(url, options).then((res) => {
            if (res.status === 200) {
                resolve(res.data.data);
            }
        }).catch((err) => {
            reject(err);
        })
    })
};

const fetchGame = (id) => {
    const url = `${process.env.REACT_APP_API_URL}/?page=game&action=get&params=${id}`;
    const options = {
        'headers': {}
    };

    let token = localStorage.getItem('jwt-key');

    if (token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    return new Promise((resolve, reject) => {
        axios.get(url, options).then((res) => {
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
    const options = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }
    
    return new Promise((resolve, reject) => {
        axios.post(url, data, options).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    })
}

const approveGame = (id) => {
    const url = `${process.env.REACT_APP_API_URL}/?page=game&action=approve`;
    const data = prepareData({ id });
    const options = {
        headers: {'Authorization': `Bearer ${localStorage.getItem('jwt-key')}`}
    };

    return new Promise((resolve, reject) => {
        axios.post(url, data, options).then((res) => {
            if (res.status === 200) {
                resolve(res.data.data);
            }
        }).catch((err) => {
            reject(err);
        })
    })
}

const deleteGame = (id) => {
    const url = `${process.env.REACT_APP_API_URL}/?page=game&action=delete`;
    const data = prepareData({ id });
    const options = {
        headers: {'Authorization': `Bearer ${localStorage.getItem('jwt-key')}`}
    };

    return new Promise((resolve, reject) => {
        axios.post(url, data, options).then((res) => {
            if (res.status === 200) {
                resolve(res.data.data);
            }
        }).catch((err) => {
            reject(err);
        })
    })
}

export { fetchGames, fetchGame, insertGame, approveGame, deleteGame };