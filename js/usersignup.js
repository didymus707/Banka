(()=> {
    const form = document.querySelector('.form');
    const toggleLinks = document.getElementsByClassName("register");

    // toggle the forms
    toggleForms = ()=> {
        form.lastElementChild.classList.toggle('registration');
        form.firstElementChild.classList.toggle('registration');
    }

    for (var i = 0; i < toggleLinks.length; i++) {
        toggleLinks[i].addEventListener('click', toggleForms);
    }
})();
