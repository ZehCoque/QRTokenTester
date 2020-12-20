const express = require('express');

function aws_lambda_router(AWSURL) {

  const router = express.Router();

  router.post('/tokenGenerator', function (req, res, next) {
    
    console.log(req.body)
    res.status(200).json(res)

  });


return router;
}
module.exports = aws_lambda_router;
