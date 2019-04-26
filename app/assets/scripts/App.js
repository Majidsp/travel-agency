//var $ = require('jquery');
//var Person = require('./modules/Person');
//import Person from './modules/Person';

//alert("sfsdfdsfsdf 222222222222233333333333333");

//class Adult extends Person {
//    payTaxes() {
//        console.log("Tax tax tax");
//    }
//}
//
//var john = new Person("John Doe" , "Blue");
//john.greet();
//
//var jane = new Adult("Jane Smith", "Red");
//jane.greet();
//jane.payTaxes();
//
//$("h1").remove();

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

const mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");