const espaco = document.getElementById('espaco'); 
const registerBtn = document.getElementById('register'); 
const loginBtn = document.getElementById('login'); 

registerBtn.addEventListener('click', () => { 
    espaco.classList.add("active"); 
}); 
loginBtn.addEventListener('click', () => { 
    espaco.classList.remove("active"); 
}); 
document.getElementById('informecpf').addEventListener 
  ('input', function(e){ 
    var value = e.target.value; 
    var cpfPattern = /^(\d{3})(\d{3})(\d{3})(\d{2})$/; 
    if (cpfPattern.test(value)){ 
      e.target.value = value.replace(cpfPattern, '$1.$2.$3-$4'); 
    } 
  }); 
document.getElementById('tel').addEventListener 
    ('input', function(e){ 
      var value = e.target.value; 
      var cpfPattern = /^(\d{2})(\d{5})(\d{4})$/; 
      if (cpfPattern.test(value)){ 
        e.target.value = value.replace(cpfPattern, '$1 $2-$3'); 
      } 
    }); 
