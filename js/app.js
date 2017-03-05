function toC (){
  var far= document.getElementById('f').value;
  console.log(far);
  var c= (far - 32)*5/9;
  console.log(c);
  document.getElementById('c').value=c.toFixed(4);
}

function toF(){
  var cel=document.getElementById('c').value;
  var f= (9/5)*cel+32;
  document.getElementById('f').value=f.toFixed(4);
}
