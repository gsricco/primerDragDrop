var source1, drop;
function initiate(){
  source1 = document.getElementById('image');
  source1.addEventListener('dragstart', dragged);
 
  drop = document.getElementById('dropbox');
  drop.addEventListener('dragenter', function(e){ e.preventDefault(); });
  drop.addEventListener('dragover', function(e){ e.preventDefault(); });
  drop.addEventListener('drop', dropped);
}
function dragged(e){
  var code = '<img src="' + source1.getAttribute('src') + '">';
  e.dataTransfer.setData('Text', code);
}
function dropped(e){
  e.preventDefault();
  drop.innerHTML = e.dataTransfer.getData('Text');
}
addEventListener('load', initiate);
