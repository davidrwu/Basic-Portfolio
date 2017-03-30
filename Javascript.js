<script type="text/javascript">   

document.getElementById("growBtn").addEventListener("click", function(){           
document.getElementById("box").style.height = "250px";        });                  
document.getElementById("blueBtn").addEventListener("click", function(){            
document.getElementById("box").style.backgroundColor = "blue";        });        

var button = document.getElementById("box");function fade() {    
if (button.style.opacity > 0) {        
button.style.opacity = button.style.opacity -= 0.1;        
setTimeout( fade, 90 );    } 
else {         
button.style.visibility = "hidden";    
}}            
document.getElementById("fadeBtn").addEventListener("click", fade , false);        

document.getElementById("resetBtn").addEventListener("click", function(){            
document.getElementById("box").style.height = "150px";            
document.getElementById("box").style.backgroundColor = "orange";            
document.getElementById("box").style.opacity = 1;            
document.getElementById("box").style.visibility = "visible";        
});    

</script>
