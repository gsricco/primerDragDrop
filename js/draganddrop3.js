var drop;
function initiate(){
  var images = document.querySelectorAll('#picturesbox > img');
  for(var i = 0; i < images.length; i++){
    images[i].addEventListener('dragstart', dragged);
  }
  drop = document.getElementById('dropbox');
  drop.addEventListener('dragenter', function(e){ e.preventDefault(); });
  drop.addEventListener('dragover', function(e){ e.preventDefault(); });
  drop.addEventListener('drop', dropped);
}
function dragged(e){
  elem = e.target;
  e.dataTransfer.setData('Text', elem.getAttribute('id'));
}
function dropped(e){
  e.preventDefault();
  var id = e.dataTransfer.getData('Text');
  if(id != "image1"){
    var src = document.getElementById(id).src;
    drop.innerHTML = '<img src="' + src + '">';
  }else{
    drop.innerHTML = 'так не пойдет';
  }
}
addEventListener('load', initiate);
