function cleanURL(url){
    junk = ['www.','http://','https://']
    junk.forEach(element => {
        url = url.replace(element,'')
    });
    return url
}

function domainName(url) {
  url = cleanURL(url)
  url = url.split('/')[0].split('.')
  return url[0]
}
console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("http://www.jyu6h9lcq3lz7vaut.us/error"));
