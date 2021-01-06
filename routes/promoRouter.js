var express=require('express');
var bodyparser=require('body-parser');

var promotionRouter=express.Router();
promotionRouter.use(bodyparser.json());

promotionRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader=('content-type','text/plain');
    next();

})
.get((req,res,next)=>{
    res.end('Will send all the promotions to you');

})
.post((req,res,next)=>{
    res.end('Will add the promotion: '+ req.body.name +'with details' + req.body.description);

})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('Put operation not supported on promotions');

})
.delete((req,res,next)=>{
    res.end('Deleting all the promotions!');

});

promotionRouter.route('/:promotionId')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader=('content-type','text/plain');
    next();

})

.get((req,res,next)=>{
res.end('Will send the promotion : '+req.params.promotionId+' to you!');
    
})
.post((req,res,next)=>{
res.statusCode=403;
res.end("POST Operation not supported on promotions "+req.params.promotionId);
})
.put((req,res,next)=>{
 res.write('Updating the promtion: '+req.params.promotionId + '\n');
 res.end('Will update the promtion: '+ req.body.name + ' with details '+ req.body.description);

    })
.delete((req,res,next)=>{
 res.end('Deleting the promtion: '+ req.params.promotionId);

});

module.exports=promotionRouter;