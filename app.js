
function updateContent() {
    let screenWidth = window.innerWidth;
    let main_info = document.querySelector('.main-info h1');
    let trying = document.querySelector('.main-btn-cont a')
    let second_cont = document.querySelector('.second-container img')

    if (screenWidth <= 667){
        main_info.innerHTML = "Your digital place <br/> for calm and <br/> focus"
        trying.style.display = 'none'
        second_cont.src = './assets/phone_1.jpg'
    } 

}


updateContent();


window.addEventListener("resize", updateContent);


let btn = document.querySelector('.nav-btn')

btn.addEventListener('click',()=>{
    window.location.href = 'sign_up.html'
})