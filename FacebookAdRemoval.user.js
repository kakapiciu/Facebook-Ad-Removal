// ==UserScript==
// @name         sergiu
// @namespace    FacebookAdRemoval
// @version      1.1
// @description  try to take over facebook!
// @author       Sergiu Borsan
// @match        https://www.facebook.com/
// @grant        none
// @require https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    $('#contentArea').bind('DOMNodeInserted',function(){
        $('.o_t0_-7dywy').each(function(){
            var check = "";
            $(this).children().children().find('.x_t0_-7dyx8').each(function(){
                 check += $(this).text();
            });
            if (check === "Sponsored" || check === "ponsored") {
                $(this).closest('._5jmm').remove();
                console.log('Ad Hidden! :)');
            }
        });
    });
})();