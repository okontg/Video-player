/**
 * @copyright codewithsadee 2023
 * @author sadee <codewithsadee@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { ripple } from "./utils/ripple.js";
import { addEventOnElements } from "./utils/event.js";
import { segment } from "./segment_btn.js";
import { updateUrl } from "./utils/updateUrl.js";

/**
 * Search view toggle in the devices
 */

const /**{NodeList} */ $searchTogglers = document.querySelectorAll('[data-search-toggler]');
const /**{NodeElement} */ $searchView = document.querySelector('[data-search-view]');

addEventOnElements($searchTogglers,'click', ()=> $searchView.classList.toggle('show'));

/**
 * search clear
 */

const /**{NodeElement} */ $searchField = document.querySelector('[data-search-field]');
const /**{NodeElement}*/ $searchClearBtn = document.querySelector('[data-search-clear-btn]');

$searchClearBtn.addEventListener('click',()=> $searchField.value = '');

/**
 * Search type
 */

const /**{NodeElment} */ $searchSegment = document.querySelector('[data-segment="search"]');
const /**{NodeElement} */ $activeSegmentBtn = $searchSegment.querySelector('[data-segment-btn].selected');
window.searchType = $activeSegmentBtn.dataset.segmentValue;

segment($searchSegment, segmentValue => window.searchType = segmentValue);

/**
 * Search submit
 */

const /**{NodeElement} */ $searchBtn = document.querySelector('[data-search-btn]');

$searchBtn.addEventListener('click', function(){
  const /**{Boolean} */ searchValue = $searchField.value;

  if(searchValue){
    updateSearchHistory(searchValue);
    window.filterObj.query = searchValue;
    updateUrl(window.filterObj, window.searchType);
  }
});

/**
 * Submit search when press on the "Enter key"
 */

$searchField.addEventListener('keydown', e=>{
  if(e.key === 'Enter' && $searchField.value.trim()) $searchBtn.click();
});

/**
 * Search history
 */

//Initial search history

let /**{Object} */ searchHistory = {items:  [] };

if(window.localStorage.getItem('search_history')){
  searchHistory = JSON.parse(window.localStorage.getItem('search_history'));
}
else{
  window.localStorage.setItem('search_history', JSON.stringify(searchHistory));
}
//update search history


const updateSearchHistory = searchValue =>{

  /**
 * If the search value is already present to search list
 * then remove that one and add the search value at the beginning of the search list
 * This ensures that the most recent search is at the top of the history
 */

  if(searchHistory.items.includes(searchValue)){
    searchHistory.items.splice(searchHistory.items.indexOf(searchValue), 1);
  }

  searchHistory.items.unshift(searchValue);

  window.localStorage.setItem('search_history',JSON.stringify(searchHistory));
}


/**
 * Render search history items in search list
 */

const /**{NodeElement} */ $searchList = document.querySelector('[data-search-list]');
const /**{Number} */ historyLen = searchHistory.items.length;

for(let i = 0; i < historyLen & i <= 5; i++){
  const /**{NodeElement} */ $listItems = document.createElement('button');
  $listItems.classList.add('list-item');

  $listItems.innerHTML = `
   <span class="material-symbols-outlined leading-icon" aria-hidden="true">history</span>

    <span class="body-large text">${searchHistory.items[i]}</span>

    <div class="state-layer"></div>
  `;

  $listItems.addEventListener('click', function(){
    $searchField.value = this.children[i].textContent;
    $searchBtn.click()
  });

  $searchList.appendChild($listItems);
}