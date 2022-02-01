// const Dragon = require('./dragon');

// const fooley = new Dragon({
//     birthdate: new Date(),
//     nickname: 'fooley'
// });
// const booley = new Dragon ({
//     nickname: 'booley',
//     birthdate:new Date(),
//     traits: [
//         {traitType:'backgroundColor', traitValue:'green'}
//     ]
// });
// const mimar = new Dragon();

// setTimeout( () => {
//     const gobby = new Dragon();
//     console.log('gobby', gobby);
// }, 3000);
// console.log('fooley', fooley);
// console.log ('boolye', booley);
// console.log ('mimar', mimar);

// const Generation = require ('./generation');

// const generation = new Generation();
// console.log ('Generation', generation )
// const gooby = generation.newDragon();

// console.log ('gooby', gooby)

// setTimeout (()=>{
//     const mimar = generation.newDragon();
//     console.log ('mimar', mimar)
// }, 20000)

const GenerationEngine = require("./engine");
const engine = new GenerationEngine();
engine.start();
setTimeout(()=>{
    engine.stop();
}, 20000);