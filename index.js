 const rateCont = document.querySelector(".rating-container");
 const thanksCont = document.querySelector(".thank-you");
 const btnSubmit = document.getElementById("submit")
 const rateBtn = document.querySelectorAll('.btn')
 const rating = document.getElementById('ratedNum')

 btnSubmit.addEventListener("click", function(){
    thanksCont.classList.remove("hidden")
    rateCont.style.display = "none";

 })

 rateBtn.forEach(rate => {
    rate.addEventListener('click', function(){
        rating.innerHTML = rate.innerHTML
    })
 });