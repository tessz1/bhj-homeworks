let cookieSizes = document.getElementById('cookie');

let clickerKiller = document.getElementById('clicker__counter'); 
 
let counter = 0; 
 
cookieSizes.addEventListener('click', function(){ 
    counter++; 
    clickerKiller.textContent = counter; 
 
    if (counter % 2 == 0) { 
    cookieSizes.width = '200';
    }  
    if (counter % 2 !== 0)  
    cookieSizes.width = '230';
});  


