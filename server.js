var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article one | Anton',
    header: 'Antons Article',
    date: ' Sep 2017',
    article: '<p> This is my first Article which introduces my Serverside JS.</p>;'
};

var articleTwo = {
    title: 'Article Two | Anton',
    header: 'Antons Article Article Two',
    date: ' Sep 2017',
    article: '<p> This is my second Article which introduces my Serverside JS.</p>;'
};

var articleThree = {
    title: 'Article Three | Anton',
    header: 'Antons Article Three',
    date: ' Sep 2017',
    article: '<p> This is my third Article which introduces my Serverside JS.</p>;'
};



function siteCreate(data) {
    title = data.title;
    header = data.header;
    date = data.date;
    article = data.article;

var siteTemplate = `
<!DOCTYPE html>
<html>
<head>
<title>${title}</title>
<link href="ui/style.css" rel="stylesheet">
</head>    
<body>
    <div class="container">
    <div> 
    <h1>${header}</h1>
    </div>
    <hr/>
    
    <div>
    <a href='/'>Home</a>
    </div>
    
    <div>
        ${date}
    </div>
    ${article}
    <div>
        
    </div>
    </div>
    
</body>
</html>`;
return siteTemplate;    
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function (req, res) {
   //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
   //res.send("hello article one");
   res.send(siteCreate(articleOne));
   
    
});

app.get('/article-two', function (req, res) {
   res.send(siteCreate(articleTwo));
    
});

app.get('/article-three', function (req, res) {
   res.send(siteCreate(articleThree)); 
    
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
