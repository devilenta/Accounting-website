let btn_header = document.querySelectorAll(".btn_header")
let icon_group = document.querySelector(".icon_group")
let btn_shop = document.querySelector(".btn_shop")
let list_shop = document.querySelector(".list_shop")
let btn_product= document.querySelectorAll(".btn_product")

icon_group.addEventListener("click",()=>{

    window.location.href = ("https://www.brilsoft.ir")
})


btn_shop.addEventListener("click",()=>{

    list_shop.classList.toggle("active")

})






// btn_product.forEach((event)=>{

//     event.addEventListener("click",()=>{

//         window.location.href = ("")
//     })

// })
