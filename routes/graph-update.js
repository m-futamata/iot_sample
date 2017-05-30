var express = require('express');
var router = express.Router();

var msg = '';

router.get('/', function(req, res, next) {
  connectDynamoDb();
});

function connectDynamoDb() {
  var AWS = require('aws-sdk');
  //AWS.config.loadFromPath('./credentials.json');
  AWS.config.update({accessKeyId: 'AKIAIK7R7CWMUGMU63CA', secretAccessKey: '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'});
  
  var dynamodb = new AWS.DynamoDB({region: 'ap-northeast-1'});

  // テーブルリストを取得する
  var params = {
    ExclusiveStartTableName: 'STRING_VALUE',
    Limit: 10
  };

  dynamodb.listTables(params, function(err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
    } else {
      console.log(data);           // successful response
    }
  });
}

module.exports = router;
