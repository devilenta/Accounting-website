let section2_feature_icon = document.querySelectorAll(".section2_feature_icon")

section2_feature_icon[2].addEventListener("click",()=>{

    
    
})
let test = document.querySelectorAll(".section2_feature_icon")




test.forEach(function(box){
    
    box.addEventListener("click",function(event){

        
        
        box.classList.add("selected_box_efect")
        box.style.width = "60%"
        box.style.height = ""
        box.style.transition = "1s"
        // box.style.padding =  "5px 15px"



        
        
        
        if (box) {
            const siblings = Array.from(box.parentElement.children) 
            .filter(el => el !== box && el.tagName.toLowerCase() === 'div'); 
            
            siblings.forEach(function(yum){
                
                
                yum.style.width = "35%"
                yum.style.height = "35%"
                yum.classList.remove("selected_box_efect")
                
                    
                })
            
        }
    })
    
    
    
    
})




