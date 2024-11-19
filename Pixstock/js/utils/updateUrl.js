/**
 * @copyright codewithsadee 2023
 * @author sadee <codewithsadee@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { urlEnconde } from "./urlEncode.js";

/**
 * Update url
 * @param {object} filterObj  filter object
 * @param {string} searchType search tupe eg. 'videos' or 'photos'
 */

export const updateUrl = (filterObj, searchType)=>{
  setTimeout(()=>{
    const /** {String}*/ root = window.location.origin;
    console.log(filterObj);
    console.log(searchType);
    const /**{String} */ searchQuery = urlEnconde(filterObj);

    //window.location = `${root}/pages/${searchType}/${searchType}.html?${searchQuery}`;
    console.log(searchQuery);
    console.log(`${root}/pages/${searchType}/${searchType}.html?${searchQuery}`);
  }, 500);
}