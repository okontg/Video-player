/**
 * @copyright codewithsadee 2023
 * @author sadee <codewithsadee@gmail.com>
 */

"use strict";

/**
 * Import 
 */

import { ripple } from "./utils/ripple.js";

/**
 * Header on-scroll state
 */

const /** {NodeElement}*/ $header = document.querySelector('[data-header]');

window.addEventListener('scroll',()=>{
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/**
 * Add ripple effect
 */

const /** {Nodelist} */ $rippleElems = document.querySelectorAll('[data-ripple]');

$rippleElems.forEach($rippleElem => ripple($rippleElem)); /* 'Elems': Unknow word */


/**
 * Filter functionality
 */

window.filterObj = {};