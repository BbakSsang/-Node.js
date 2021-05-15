var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title, list, body) {
  return `<!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    <ul>
   ${list}
    </ul>
   ${body}
  </body>
  </html>
  `
}

function templateLIST(filelist) {
  var list = `<ul>`;
  list = list + '</ul>';
  var i = 0;
  while (i < filelist.length) {
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
    i++;
  }
  return list;
}

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;

  var pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    if (queryData.id === undefined) {


      fs.readdir(`./data`, function (error, filelist) {
        console.log('reload')
        var description = 'hello, node.js'
        var title = 'welcome';
        /* var list =` <li><a href="/?id=HTML">HTML</a></li>
         <li><a href="/?id=CSS">CSS</a></li>
         <li><a href="/?id=JAVASCRIPT">JavaScript</a></li>`*/
        var list = templateLIST(filelist);
        var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
        response.writeHead(200);
        response.end(template);
      })

    }



    else {

      fs.readdir(`./data`, function (error, filelist) {
        var list = templateLIST(filelist);

        fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
          var title = queryData.id;

          var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);

          response.writeHead(200);
          response.end(template);
        });

      });
    }

  }
  else {
    response.writeHead(404);
    response.end('Not Foundd');
  }
});
app.listen(3000);