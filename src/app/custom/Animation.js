import gsap from 'gsap/all';
import selectors from './selectors';

export default class Animation{
    constructor(){
        this._tl = gsap.timeline().pause();
    }

    startAnimation(){
       this.createAnimation();
       this.addEventListeners();
    }

    addEventListeners(){

        selectors.playBtn.addEventListener('click', ()=>{
            if (this._tl.paused()) {
                this._tl.play();
            } else {
                this._tl.restart();
            }
        });

        selectors.truckBtn.addEventListener('click', ()=>{
            if (this._tl.paused()) {
                this._tl.play();
            } else {
                this._tl.restart();
            }
        });

        selectors.reverseBtn.addEventListener('click', ()=>{
            this._tl.reverse();
        });

        selectors.pauseBtn.addEventListener('click', ()=>{
            this._tl.pause();
        });
    }

    createAnimation(){
        return this._tl
       
        .to(selectors.list, {id:'listUp', y:'-=100', ease: 'back.in'})
        .to(selectors.list, {id:'listDown', y:'+=100', ease: 'back.in'})

        .to(selectors.listItems.[0] ,{id:'listItem0', y:'+=50', opacity:0, duration: 0.25}, 'listItem')
        .to(selectors.listItems.[1] ,{id:'listItem1', y:'+=50', opacity:0, duration: 0.25}, 'listItem')
        .to(selectors.listItems.[2] ,{id:'listItem2', y:'+=50', opacity:0, duration: 0.25}, 'listItem')

        .to(selectors.truckBtnBg, {id:'truckBtnScaleUp', scale: 1.25, transformOrigin: "50% 50%"})
        .to(selectors.truckBtnBg, {id:'truckBtnScaleDown', scale: 1})

        .to(selectors.containerParts, {id:'container', opacity: 1})
        .to(selectors.container, {id:'containerParts', opacity: 1})

        .to(selectors.backWheel1, { id:'backWheel1', opacity: 1}, 'backWheels')
        .to(selectors.backWheel2, { id:'backWheel2', opacity: 1}, 'backWheels')
        .to(selectors.backWheelBack1, { id:'backWheelBack1', opacity: 1}, 'backWheels')
        .to(selectors.backWheelBack2, { id:'backWheelBack2', opacity: 1}, 'backWheels')

        .to(selectors.frontGroup, {id:'frontGroup', opacity: 1}, 'frontWheels')
        .to(selectors.frontWheel1, {id:'frontWheel1', opacity: 1}, 'frontWheels')
        .to(selectors.frontWheel2, {id:'frontWheel2', opacity: 1}, 'frontWheels')
        .to(selectors.frontWheelsBack, {id:'frontWheelsBack', opacity: 1}, 'frontWheels')

        .to(selectors.truck, {id:'truckMovement', x: 500, opacity: 0, duration: 2, ease:'back(-7.5).in'})
        .to(selectors.shippedLabel, {id:'shippedLabel', opacity: 1, duration: 1}, '<1')
    }
}