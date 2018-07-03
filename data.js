function fectchPage(name,place){
  fetch(name).then(function(response){
    response.text().then(function(text){
      document.querySelector(place).innerHTML = text;
    })
  })
}
//목차안에 목차를 만들려고 제작하였음 대상 ID 카테고리
//
function fectchPageList(name){
  fetch(name).then(function(response){
    response.text().then(function(text){
      var items = text.split(',');
      var i = 0;
      var tags = '';
      while(i<items.length){
        item = items[i];
        item = item.trim();
        var tag = '<li><a href="#!'+item+'" onclick="fectchPage(\''+item+'\',\'article\');document.querySelector(\'#data\').innerHTML=location.hash.substr(2);">'+item+'</a></li>';
        tags = tags + tag;
        i = i+1;
      }
      document.querySelector('#category').innerHTML=tags;
      document.querySelector('#data').innerHTML=decodeURIComponent(location.hash.substr(2));
    })
  })
}
// 3가지의 기본 링크를 헤드리스트를 통해 불러와 메인 화면에 만들어 놓습니다.
//decodeURIComponent <-api를 이용하여 url의 해쉬코드값을 한국어로 안정적으로 출력
  fetch('headlist').then(function(response){
    response.text().then(function(text){
      var items = text.split(',');
      var i = 0;
      var tags = '';
      while(i<items.length){
        item = items[i];
        item = item.trim();
        var tag = '<li><a href="#!'+item+'" onclick="fectchPage(\''+item+'\');location.reload(true);">'+item+'</a></li>';
        tags = tags + tag;
        i = i+1;
      }
      document.querySelector('#list').innerHTML=tags;
      document.querySelector('#data').innerHTML=decodeURIComponent(location.hash.substr(2));
    })
  })
//처음데이터의 해쉬값이 존재하지 않는다면 welcom페이지를 #data위치에 출력
  if(location.hash){
      fectchPageList(location.hash.substr(2));
    } else {
      document.querySelector('#data').innerHTM = fectchPage('welcom','#data');
    }
