# phaser
JavaScript gradient animation and initialization helper

## Setup
Getting started is as easy as `npm i @ion-cloud/phaser --save` and then `importing` the module into your app with `import {Phase} from '@ion-cloud/phaser'`. 

Please see code example [here](https://github.com/ion-cloud/phaser/blob/master/demo/src/index.js).

## Usage
```
const dayCycle = new Phaser(easel,{
  x: 0,
  y: 0,
  width: easel.viewport.w,
  height: easel.viewport.h,
  interval: 100,
  phase: 'dawn',
  colors: [

    // top color
    {
      current: {r:  0,g:  0,b:  0},
      dawn:    {r:119,g:153,b:187},
      daytime: {r:204,g:238,b:255},
      dusk:    {r:135,g: 51,b: 85},
      midnight:{r:  0,g:  0,b: 17}
    },

    // bottom color
    {
      current: {r:  0,g:  0,b:  0},
      dawn:    {r:153,g: 85,b: 51},
      daytime: {r:170,g: 85,b: 51},
      dusk:    {r:  0,g: 17,b: 34},
      midnight:{r:153,g: 87,b: 22}
    }
  ],
  makeGradient: ()=> easel.ctx.createLinearGradient(0,0,0,easel.viewport.h/5*4)
});

dayCycle.drawNext(); //put this in an event loop or requestAnimationFrame
```
