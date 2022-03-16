import axios from 'axios';
import { prepareData } from './Utils';

const login = (admInfo) => {

    const url = `${process.env.REACT_APP_API_URL}/?page=admin&action=login`;
    const data = prepareData(admInfo);
    const headers = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }

    return new Promise((resolve, reject) => {
        axios.post(url, data, headers).then((res) => {
            if (res.status === 200) {
                resolve(res);
            }
        }).catch((err) => {
            reject(err);
        })
    })
};

export {
    login
}