const pool = require('../utilities/database.connection');

const postData = (req, res, next) => {
    const { temperature, humidity } = req.body;

    const insert = (`
    INSERT
    INTO
    gst_data
    (temperature, humidity)
    VALUES
    (?, ?)`, [temperature, humidity]);
}

const getData = (req, res, next) => {

}

module.exports = {
    postData,
    getData
}