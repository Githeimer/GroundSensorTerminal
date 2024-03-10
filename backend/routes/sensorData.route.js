const router = require('express').Router;
const { postData, getData } = require('../controllers/sensorData.controller');

router.route("/postData").post(postData);
router.route("/getData").get(getData);

module.exports = router;