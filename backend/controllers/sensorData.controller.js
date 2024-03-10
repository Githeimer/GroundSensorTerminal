const pool = require('../utilities/database.connection');
const errorHandler = require('../utilities/error.handler');

const postData = async (req, res, next) => {
    const { temperature, humidity, distance } = req.body;

    try {
        await pool.query(`
        INSERT
        INTO
        gst_data
        (temperature, humidity, distance)
        VALUES
        (?, ?, ?)`, [temperature, humidity, distance]);
    } catch (error) {
        next(errorHandler(500, error.message));
    }

    res.status(200).json({
        message: "Successful"
    });
}

const getData = async (req, res, next) => {
    try {
        const [result] = await pool.query(`
        SELECT
        *
        FROM
        gst_data
        ORDER BY
        createdAt
        DESC
        LIMIT
        ?`, [1]);

        const realTimeData = result[0];

        res.status(200).json(realTimeData);
    } catch (error) {
        next(errorHandler(500, error.message));
    }
}

module.exports = {
    postData,
    getData
}