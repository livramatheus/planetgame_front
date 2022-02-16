import axios from "axios";

const fetchPublishers = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_API_URL}/?page=publisher&action=getall`).then((res) => {
            if (res.status === 200) {
                resolve(res.data.data);
            }
        }).catch((err) => {
            reject(err);
        })
    });
}

const fetchPublisher = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_API_URL}/?page=publisher&action=get&params=${id}`).then((res) => {
            if (res.status === 200) {
                resolve(res.data.data);
            }
        }).catch((err) => {
            reject(err);
        })
    })
}

export { fetchPublishers, fetchPublisher }