const express=require('express');
const bodyparser=require('body-parser');

const dishRouter=express.Router();
dishRouter.use(bodyparser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader=('content-type','text/plain');
    next();

})
.get((req,res,next)=>{
    res.end('Will send all the dishes to you');

})
.post((req,res,next)=>{
    res.end('Will add the dish:'+ req.body.name +' with details' + req.body.description);

})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('Put operation not supported on dishes');

})
.delete((req,res,next)=>{
    res.end('Deleting all the dishes!');

});

dishRouter.route('/:dishId')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader=('content-type','text/plain');
    next();

})

.get((req,res,next)=>{
res.end('Will send the dish : '+req.params.dishId);
    
})
.post((req,res,next)=>{
res.statusCode=403;
res.end("POST Operation not supported on /dishes "+req.params.dishId);
})
.put((req,res,next)=>{
 res.write('Updating the dish: '+req.params.dishId + '\n');
 res.end('Will update the dish: '+ req.body.name + ' with details '+ req.body.description);

    })
.delete((req,res,next)=>{
 res.end('Deleting the dish!: '+ req.params.dishId);

});

module.exports=dishRouter;