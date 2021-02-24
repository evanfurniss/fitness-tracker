let router = require('express').Router();

router.use("/api", require("./db"));
router.use(require("./html"));

module.exports = router;