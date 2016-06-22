const root = 'http://www.baidu.com/'

export const tags = function(){
  var api = root + '/tags'
  return $.get(api);
}

export const posts = function(page){
  var api = root + '/posts'
  return $.get(api);
}

export const 
