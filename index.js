const btn1El = document.querySelector(".btn-1");
const btn2El = document.querySelector(".btn-2");
const btn3El = document.querySelector(".btn-3");
const btn4El = document.querySelector(".btn-4");
const btn5El = document.querySelector(".btn-5");
const submitBtnEl = document.querySelector(".submit-btn");
const thaksContainerEl = document.querySelector(".thanks-container");
const pEl = document.querySelector(".p")



btn1El.addEventListener("click", ()=>{
    btn2El.classList.remove("active");
    btn3El.classList.remove("active");
    btn4El.classList.remove("active");
    btn5El.classList.remove("active");
    btn1El.classList.add("active");
    let rating = 1;
    localStorage.setItem("rating", JSON.stringify(rating));
    
});
btn2El.addEventListener("click", ()=>{
    btn1El.classList.remove("active")
    btn3El.classList.remove("active");
    btn4El.classList.remove("active");
    btn5El.classList.remove("active");
    btn2El.classList.add("active");
    let rating = 2;
    localStorage.setItem("rating", JSON.stringify(rating));
});
btn3El.addEventListener("click", ()=>{
    btn1El.classList.remove("active")
    btn2El.classList.remove("active");
    btn4El.classList.remove("active");
    btn5El.classList.remove("active");
    btn3El.classList.add("active");
    let rating = 3;
    localStorage.setItem("rating", JSON.stringify(rating));
});
btn4El.addEventListener("click", ()=>{
    btn1El.classList.remove("active")
    btn2El.classList.remove("active");
    btn3El.classList.remove("active");
    btn5El.classList.remove("active");
    btn4El.classList.add("active");
    let rating = 4;
    localStorage.setItem("rating", JSON.stringify(rating));
});
btn5El.addEventListener("click", ()=>{
    btn1El.classList.remove("active")
    btn2El.classList.remove("active");
    btn3El.classList.remove("active");
    btn4El.classList.remove("active");
    btn5El.classList.add("active");
    let rating = 5;
    localStorage.setItem("rating", JSON.stringify(rating));
});

submitBtnEl.addEventListener("click", ()=> {
    btn1El.classList.remove("active")
    btn2El.classList.remove("active");
    btn3El.classList.remove("active");
    btn4El.classList.remove("active");
    btn5El.classList.remove("active");
    
    thaksContainerEl.classList.remove("active");
    rating =JSON.parse( localStorage.getItem("rating"));
    pEl.innerHTML= "You selected " + rating + " out of 5";



})