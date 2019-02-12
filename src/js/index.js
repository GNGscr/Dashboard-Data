import styles from '../css/globals.css'
import main from './index';
require('slick-carousel');


const one = window.addEventListener('click', function openOne() {
    const modal = document.querySelector('.modal');
    if(modal.style.display === 'flex') {
        modal.style.display = 'none';
    }else {
        modal.style.display = 'flex';
    }
}, false)
window.removeEventListener('click', one);




// import * as helperModule from './my-helper-module';
// import * as _ from 'lodash';
// import './sharedModule';
// import '../css/globals.css';
// import './../css/sass/main.scss';

// console.log("Welcome! Greetings from app.js. Let's learn Webpack2");

// console.log(helperModule.greetings);

// var arr=[ 1, 2, 3];
// _.each(arr,function(val) {
//  console.log('Output from Lodash _.each for Element ' + val); 
// });


// import greetings from './robot.js'
// document.write(greetings("Affirmative", "Dave"));

// let element = `
//     <div class="element">
//         <p>Lorem ipsoum sit amet, consectetur adipisicing elit.</p>
//     </div>
// `
// document.write(element);

// $('.single-item').slick();
