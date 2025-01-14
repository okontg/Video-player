/**
 * @copyright codewithsadee 2023
 * @author sadee <codewithsadee@gmail.com>
 */

"use strict";

/**
 * Add event on multiple elements
 * @param {NodeList} $elements  NodeList
 * @param {String} eventType Event type eg. "click"
 * @param {Function} classback Callback function
 */

export const addEventOnElements = function($elements, eventType, classback){
  $elements.forEach($element => $element.addEventListener(eventType, classback));
}