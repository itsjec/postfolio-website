// fixed header on scroll

// active menu icon
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-mobile");
menu.addEventListener("click", function(){
    this.classList.toggle("active");
    nav.classList.toggle("active");
})

const filters=document.querySelector(".filters");
const galleryItem = document.querySelectorAll(".gallery-item");

filters.addEventListener("click",(e)=>){
    if(e.target.classList.contains(".filter-item")){
        filters.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const filtervalue=e.target.getAttribute("data-filter");

        galleryItem.forEach((item)=>{
            if(item.classList.contains(filtervalue)||filtervalue==="all"){
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else{
                item.classList.add(hide);
            }
        })
    }
}