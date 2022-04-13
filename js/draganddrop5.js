var drop;

function initiate(){  
  drop = document.getElementById('dropbox');  
  drop.addEventListener('dragenter', function(e){ e.preventDefault(); });
  drop.addEventListener('dragover', function(e){ e.preventDefault(); });
  drop.addEventListener('drop', dropped);
}

function dropped(e){
  e.preventDefault();  

  var files = e.dataTransfer.files;  
  let list = '';

arrImg = [];

  for(var f = 0; f < files.length; f++){
    img = window.URL.createObjectURL(files[f]);    
    arrImg[f] = img;
    list += `<p>Вы загрузили файл: <b>${files[f].name}</b>. Размер: <b>${files[f].size}</b> байт <br> <b class="gre">Для увеличения кликни по фото</b><br></p><img src="${img}" width = "100" onclick="zoom(${f})"><br>`;
    
    window.URL.revokeObjectURL(this.src);
  }
  
  drop.innerHTML = list;

}

function zoom(f) { 
  window.scrollTo(0, 0);
  zoom1.innerHTML = `
  <img src="${arrImg[f]}" width="100%" alt="" onclick="zoom1.innerHTML=''">
  `;
  
}


addEventListener('load', initiate);
