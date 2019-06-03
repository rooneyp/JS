const rp = require('request-promise');
const $ = require('cheerio');
const _ = require('underscore');

const baseUrl = 'https://www.irishtimes.com';
const pageUrl = baseUrl + '/search/search-7.4195619?miniSearch=true&miniContentId=7.2278513&searchField1=%2A&article=true&page=';
const maxPages = 10;


function processPage(currentPageUrl) {
    return rp(currentPageUrl)
        .then(function (html) {
            let elems = $('.search_result', html)
            let elemsArr = Array.from(elems)

            const reviewUrls = [];

            elemsArr.forEach((e) => {
                let reviewUrl = e.children[1].attribs.href;
                reviewUrls.push(reviewUrl)
                //console.log(reviewUrl);
            });

            console.log('Finished processing page ' + currentPageUrl);
            return reviewUrls;
        })
        .catch(err => console.log(err));
}

let promises = [];
for(let i in _.range(maxPages)) {
    promises.push(processPage(pageUrl + i)); //Promises run in random order
}

Promise.all(promises)
    .then((results) => {
        console.log(results);
    }).catch(err => console.log(err));

//TODO: run page promises in order
//      another promise for each film
//      store json result in mongo
//      express ui + rest