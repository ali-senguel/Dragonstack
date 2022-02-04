const { Router } = require('express');
const DragonTable = require('../dragon/dragonTable')
const router = new Router()

router.get('/new', (req,res, next)=>{
    const dragon = req.app.locals.engine.generation.newDragon()
    DragonTable.storeDragon(dragon)
    .then((dragonId)=>{
        dragon.dragonId = dragonId;
        res.json({dragon });
    })
    .catch((error)=>next(error));
    
})
module.exports = router;