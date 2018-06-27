module.exports = event => new Promise((resolve, reject) => {
    const currentDate = new Date();
    resolve(`часът е ${currentDate.getHours()}:${currentDate.getMinutes()}`);
});