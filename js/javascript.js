const modalbtn = document.querySelector(".modal-btn")
const modal = document.querySelector(".modal-overlay")
const closebtn = document.querySelector(".close-btn")

modalbtn.addEventListener("click",()=> {
    modal.classList.add("show-modal")
})

closebtn.addEventListener("click",()=> {
    modal.classList.remove("show-modal")
})

