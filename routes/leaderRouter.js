var express=require('express');
var bodyparser=require('body-parser');

var leaderRouter=express.Router();
leaderRouter.use(bodyparser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader=('content-type','text/plain');
    next();

})
.get((req,res,next)=>{
    res.end('Will send all the leaders to you');

})
.post((req,res,next)=>{
    res.end('Will add the leaders: '+ req.body.name +' with details' + req.body.description);

})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('Put operation not supported on leaders');

})
.delete((req,res,next)=>{
    res.end('Deleting all the leaders!');

});

leaderRouter.route('/:leaderId')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader=('content-type','text/plain');
    next();

})

.get((req,res,next)=>{
res.end('Will send the leader : '+req.params.leaderId+' to you!');
    
})
.post((req,res,next)=>{
res.statusCode=403;
res.end("POST Operation not supported on leader "+req.params.leaderId);
})
.put((req,res,next)=>{
 res.write('Updating the leader '+req.params.leaderId + '\n');
 res.end('Will update the leader: '+ req.body.name + ' with details '+ req.body.description);

    })
.delete((req,res,next)=>{
 res.end('Deleting the leader '+ req.params.leaderId);

});

module.exports=leaderRouter;