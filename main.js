var http = require('http');
var fs = require('fs');
var url = require('url');
var qs =require('querystring');
function templateHTML(title, list, body,control) {
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
   ${control}
    </ul>
    <a href="/create">create</a>
<<<<<<< HEAD
    
=======

>>>>>>> bde0a3a06f4acafa560f683ba7a345cdd3e9971a
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
<<<<<<< HEAD

      console.log(url.parse(_url),true.pathname);

=======
>>>>>>> bde0a3a06f4acafa560f683ba7a345cdd3e9971a
      fs.readdir(`./data`, function (error, filelist) {
        console.log('reload')
        var description = 'hello, node.js'
        var title = 'welcome';
        /* var list =` <li><a href="/?id=HTML">HTML</a></li>
         <li><a href="/?id=CSS">CSS</a></li>
         <li><a href="/?id=JAVASCRIPT">JavaScript</a></li>`*/
        var list = templateLIST(filelist);
        var template = templateHTML(title, list, `<h2>${title}</h2>${description}`,
      '' );
        response.writeHead(200);
        response.end(template);
      })
    }



    else {

      fs.readdir(`./data`, function (error, filelist) {
        var list = templateLIST(filelist);

        fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
          var title = queryData.id;

          var template = templateHTML(title, list, `<h2>${title}</h2>${description}`,
          `<a href="/update?id=${queryData.id}">update</a>
          <form action="/delete_process" method="post" onsubmit="asdasd">
          <input type="hidden" name="id" value="${title}">
          <input type="submit" value="delete">
          </form>`);

          response.writeHead(200);
          response.end(template);
        });

      });
    }

  }
<<<<<<< HEAD
  else if(pathname==='/create'){
    fs.readdir(`./data`, function (error, filelist) {
      console.log('reload')
     // var description = 'hello, node.js'
      var title = 'WEB - create';
      /* var list =` <li><a href="/?id=HTML">HTML</a></li>
       <li><a href="/?id=CSS">CSS</a></li>
       <li><a href="/?id=JAVASCRIPT">JavaScript</a></li>`*/
      var list = templateLIST(filelist);
      var template = templateHTML(title, list, 
        `<form action="http://localhost:3000/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
            <textarea name="description"  placeholder="description"></textarea>
=======

  else if(pathname==='/create'){
    fs.readdir(`./data`, function (error, filelist) {
      console.log('reload')
      var description = 'hello, node.js'
      var title = 'WEB - create';

      var list = templateLIST(filelist);
      var template = templateHTML(title, list, `
      <form action="/process_create" method="post">
    <p>
    <input type="text" name="title" placeholder="title">
    
    </p>
    <p>
        <textarea name="description" id="" placeholder="description" cols="30" rows="10" ></textarea>
    </p>
    <p>
        <input type="submit">
    </p>
    </form>
      `,'');
      response.writeHead(200);
      response.end(template);
    })
  }
else if(pathname==='/process_create'){

  var body=''
  request.on('data',function(data){ 
  body=body+data;
  })
  request.on('end',function(){
    var post=qs.parse(body);
    var title=post.title;
    var description=post.description;
  fs.writeFile(`data/${title}`,description,'utf8',function(err){
    response.writeHead(302,{Location:`/?id=${title}`});
    response.end('susex')
  })
  })

}
else if(pathname===`/update`){

  fs.readdir(`./data`, function (error, filelist) {
    var list = templateLIST(filelist);

    fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
      var title = queryData.id;
  
 
 
      var template = templateHTML(title, list, 
        ` <form action="/update_process" method="post">
        <p>
        <input type="hidden" name="id"value="${title}">
        <input type="text" name="title" value="${title}"></input>
        
        </p>
        <p>
            <textarea name="description" id="" placeholder="description" cols="30" rows="10" >
            ${description}
            </textarea> 
>>>>>>> bde0a3a06f4acafa560f683ba7a345cdd3e9971a
        </p>
        <p>
            <input type="submit">
        </p>
<<<<<<< HEAD
        </form>`);
      response.writeHead(200);
      response.end(template);
    });
  }
  else if(pathname==='/create_process'){
    var body = '';

    request.on('data', function (data) {
        body += data;

        // Too much POST data, kill the connection!
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (body.length > 1e6)
            request.connection.destroy();
    });

    request.on('end', function () {
        var post = qs.parse(body);
        // use post['blah'], etc.
    });


    response.writeHead(200);
    response.end('sucess');
  }

=======
        </form>
          `,
      `<a href="/update?=${title}">update</a>`);

      response.writeHead(200);
      response.end(template);
    });

  });
  
}
else if(pathname==='/update_process')
{
  var body=''
  request.on('data',function(data){ 
  body=body+data;
  })
  request.on('end',function(){
    var post=qs.parse(body);
    var title=post.title;
    var id = post.id;
    var description=post.description;
    console.log(post.id);
     
    fs.rename(`data/${id}`,`data/${title}`,function(error){
      fs.writeFile(`data/${title}`,description,'utf8',function(err){
        response.writeHead(302,{Location:`/?id=${title}`});
        response.end('susex')
      })
    })

  })
}

else if(pathname==='/delete_process')
{
  var body=''
  request.on('data',function(data){ 
  body=body+data;
  })
  request.on('end',function(){
    var post=qs.parse(body);

    var id = post.id;

    console.log(post.id);
     
    fs.unlink(`data/${id}`,function(error){
      response.writeHead(302,{Location:`/`});
      response.end()
    })


  })
}
>>>>>>> bde0a3a06f4acafa560f683ba7a345cdd3e9971a

  else {
    response.writeHead(404);
    response.end('sexxxx failed');
  }
});
app.listen(3000);