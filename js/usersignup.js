(()=> {
    const form = document.querySelector('.form');
    const toggleLinks = document.getElementsByClassName("register");
    const startBtn = document.querySelector('.main-story button');
    const aside = document.querySelector('aside');
    console.log(aside);

    // get started with forms
    startBtn.addEventListener('click', ()=> {
        setTimeout(() => {
            aside.style.display = 'block';  
        }, 200);
    })

    // toggle the forms
    toggleForms = ()=> {
        form.lastElementChild.classList.toggle('registration');
        form.firstElementChild.classList.toggle('registration');
    }

    for (var i = 0; i < toggleLinks.length; i++) {
        toggleLinks[i].addEventListener('click', toggleForms);
    }
})();
