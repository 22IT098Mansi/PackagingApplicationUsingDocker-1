const express = require('express');
const redis = express('redis');

const app = express();
const client = redis.cretaeClient({
    host: 'redis-server',
    port: 6379,
}) ;
client.set('visits',0);
app.get('/',(req, res)=> {
    client.get('visits',(err, visits)=>{
        res.send('the number of times page was visited is : ' + visits);
        client.set('visits', parseInt(visits)+1);
    });
});
app.listen(8080,() => {
    console.log('listening on PORT 8080');
});