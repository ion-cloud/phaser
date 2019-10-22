import './index.styl';
import {Easel} from '@ion-cloud/easel';
import {Phaser} from '../../index';
export const easel = new Easel();

// Launch application if easel was able to create a canvas,
// if it wasn't then we know canvas isn't supported
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

// Launch application if easel was able to create a canvas,
// if it wasn't then we know canvas isn't supported
const noscript = document.querySelector('noscript');

if(!easel.activated){
  noscript.innerHTML = `
  <p class="browsehappy">
    You are using an outdated browser. Please
    <a href="http://browsehappy.com/"> upgrade your browser</a>
    to improve your experience.
    <span style="color:red;"><br/>Canvas isn't supported in your browser.</span>
  </p>`;
}else{
  noscript.style.display='none';

  // this is called when the screen is resized
  easel.config = ()=>{
    dayCycle.width = easel.viewport.w;
    dayCycle.height = easel.viewport.h;
  };
  easel.onDraw = ()=> dayCycle.drawNext(true);
  (function main(){
    easel.redraw();
    requestAnimationFrame(main);
  })();
} //end if
