(()=> {
    const links = document.querySelectorAll('.sameBox a');
    const createAcc = document.getElementById('cya-form-container');
    const linksarr = [...links];

 

    for (const link of linksarr) {
        link.addEventListener('click', (evt)=> {
            const familyTree = evt.target.parentElement.parentElement.classList;
            if (familyTree.contains('cya')) {
                createAcc.classList.toggle('hide');
                createAcc.style.display = 'flex';
            } else {
                createAcc.classList.toggle('hide');
                createAcc.style.display = 'none';
                
            }
        })
    }
})();