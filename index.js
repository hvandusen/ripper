const curl = require("curl");
const jsdom = require("jsdom");
const url = process.argv[2];
const dirname = url.split('/')[url.split('/').length-2];
const download = require('image-downloader')
curl.get(url, null, (err,resp,body)=>{
  if(resp.statusCode == 200){
     parseData(body);
  }
  else{
     //some error handling
     console.log("error while fetching url");
  }
});

function parseData(html){
    const {JSDOM} = jsdom;
    const dom = new JSDOM(html);
    const $ = (require('jquery'))(dom.window);
    $('tr a').map(function(i,e){
      var name = $(e).text();
      if(name.indexOf(".j")<0)
        return
        const options = {
          url: url+'/'+name,
          dest: 'downloaded/'+name                  // Save to /path/to/dest/image.jpg
        }

        download.image(options)
          .then(({ filename, image }) => {
            console.log('File saved to', filename)
          })
          .catch((err) => {
            console.error(err)
          })
    });
    //let's start extracting the data
}



// Download to a directory and save with the original filename
