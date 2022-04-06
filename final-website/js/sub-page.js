const services = document.querySelector(".services");
const subPages = document.querySelectorAll(".sub-page");
console.log(services)

if (window.innerWidth > 1000){

    subPages.forEach(subpage => services.addEventListener("mouseover", () => subpage.classList.add("sub-pages")));

    subPages.forEach(subpage => services.addEventListener("mouseleave", () => subpage.classList.remove("sub-pages")));

}



