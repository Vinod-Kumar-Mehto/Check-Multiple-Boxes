const checkboxes = document.querySelectorAll(".inbox input");


let lastChecked;


function myFunction(e){
    console.log(this)
    let inBetween = false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(current => {
            
                if(current === this || current === lastChecked){  
                    inBetween = !inBetween; 
                }
                if(inBetween){
                    current.checked = true;
                }
        });
       
    }
    lastChecked = this;
    
}

checkboxes.forEach(current => current.addEventListener("click", myFunction))