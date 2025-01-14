/**
* @copyright codewithsadee 2023
* @author sadee <codewithsadee@gmail.com>
*/

"use strict";

/**
 * Convert Object to Url
 * @param {Object} urlObj url object
 * @returns url string
 */

export const urlEnconde = urlObj =>{
  return Object.entries(urlObj).join("&").replace(/,/g, "#").replace(/#/g, "%23");
}