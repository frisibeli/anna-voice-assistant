const axios = require('axios');
const API_KEY = "38a25bd073d146729b267b2d8c36e2db";

module.exports.getLatestNews = () => {
    return new Promise((resolve, reject) => {
        axios.get('GEThttps://newsapi.org/v2/top-headlines?country=bg&category=sports&apiKey=' + `${API_KEY}`)
            .then((response) => {
                const news = response.data.articles;
                resolve(news[0].title)
            }).catch((err) => {
                reject('Няма връзка с интернет');
                console.log(err);
            })
    })
}