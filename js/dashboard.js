    const acctDet = document.querySelector('.msg a');
    const trans = document.querySelector('.t1 a');
    const transHist = document.querySelector('.t2 a');
    const imgCont = document.querySelector('.img-cont');
    const acctDetCont = document.querySelector('.acct-details-cont');
    const transHistCont = document.querySelector('.trans-hist-cont');

    transHist.addEventListener('click', function() {
        imgCont.classList.toggle('hide');
        acctDetCont.classList.toggle('hide');
        transHistCont.classList.toggle('hide');
    });

    acctDet.addEventListener('click', ()=> {
        if (!acctDetCont.classList.contains('hide') && !imgCont.classList.contains('hide')) {
            return;
        } else {
            imgCont.classList.toggle('hide');
            acctDetCont.classList.toggle('hide');
            transHistCont.classList.toggle('hide');
        }
    });
