// // use dotenv to store keys
// require('dotenv').config();
// var fs = require('fs');
// // import API keys into variable
// var keys = require("./keys.js");

var axios = require("axios");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bfc8e374d6df45af85688db28a5bf373');
var newsSearch = process.argv.slice(2).join("-");
var articles = [];
console.log("Searching:",newsSearch);
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.everything({
  q: newsSearch,
  language: 'en',
}).then(response => {
    // console.log("Article Array:", response);
    articles = response.articles.slice(0,5);
    // console.log("Article Array:", articles);

    // var content = articles[0].content;
    // console.log("Content to Analyzer:", content.source, content);
    let promises =[];
    articles.forEach(article => {
        promises.push(axios({
            "method":"GET",
            "url":"https://twinword-sentiment-analysis.p.rapidapi.com/analyze/",
            "headers":{
            "content-type":"application/x-www-form-urlencoded",
            "x-rapidapi-host":"twinword-sentiment-analysis.p.rapidapi.com",
            "x-rapidapi-key":"bcbc7d6dd8msh5e1eb73a59e842fp1df3fcjsnd9394db0f416"
            },"params":
                {
                "text": article.content
                }
            }))
    })
    Promise.all(promises)
        .then(responses => {
            articles.map((article, i) => {
                let keys = Object.keys(responses[i].data)
                keys.forEach(key => {
                    article[key] = responses[i].data[key]
                })
                return article
            })
            console.log(articles)
        })
        .catch((error)=>{
            console.log(error)
        });

    // for (var i=0; i<5; i++) {
    //     result.push()
    //     console.log("[i] ===== TWINWORD ======= ");
    //     axios({
    //         "method":"GET",
    //         "url":"https://twinword-sentiment-analysis.p.rapidapi.com/analyze/",
    //         "headers":{
    //         "content-type":"application/x-www-form-urlencoded",
    //         "x-rapidapi-host":"twinword-sentiment-analysis.p.rapidapi.com",
    //         "x-rapidapi-key":"bcbc7d6dd8msh5e1eb73a59e842fp1df3fcjsnd9394db0f416"
    //         },"params":
    //             {
    //             "text": content
    //             }
    //         })
    //         .then((response)=>{
    //             console.log(response.data)
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //         });
    //     };
    });
