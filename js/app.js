const $form = $("#search-form");
const $searchField = $("#search-keyword");
const $responseContainer = $("#response-container");
let searchedForText;


$form.submit(function(e){
 e.preventDefault();
 $responseContainer.html = ("");
 $searchedForText = $searchField.val();
 getNews();
});

function getNews(){
 $.ajax({
   url:`https://api.nytimes.com/svc/search/v2/articlesearch.json?g=${searchedForText}&api-key=32a15179f63b472c83f0df3f4598ced7`
 }).done(addNews)
 .fall(handleError);
}

function addNews(news){
  const articles = news.response.docs;

  articles.forEach(function(articles){
    const title = articles.headline.main;
    const snippet = articles.snippet;

    let $li = $('<li />').text(snippet);
    $responseContainer.append($li);
  })

  }


function handleError(){
 console.log("se ha presentado un error");
}
