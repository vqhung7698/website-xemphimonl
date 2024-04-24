
    // animation big img
    let ani1 = 3;
    let ani2 = 4;
    const filmhot = document.querySelector(".film--hot__children-big");
    console.log(filmhot.children)
    function autoAniFunc() {
        for (i = 3; i <= 6; i++) {
            aniFastOff(i, i); 
        }
        filmhot.children[ani1].classList.add("children-big__intro--ani1");
        filmhot.children[ani2].classList.add("children-big__intro--ani2");
        anioff(ani1, ani2);
        ani1++; ani2++;
        if (ani1 == 6) ani2 = 3;
        else if (ani1 == 7) ani1 = 3;

    }
    var autoAni = setInterval(autoAniFunc, 7000);

    //ham xoa animation auto
    function anioff(anioff1, anioff2) {
        setTimeout(function () {
            filmhot.children[anioff1].classList.remove("children-big__intro--ani1");
            filmhot.children[anioff2].classList.remove("children-big__intro--ani2");
        }, 7000);
    }

    function resetAnimationAuto() {
        clearInterval(autoAni)
        autoAni = setInterval(autoAniFunc, 7000);
    }
    //ham xoa animation slick
    function aniFastOff(anioff1, anioff2) {
        setTimeout(function () {
            filmhot.children[anioff1].classList.remove("children-big__intro--ani1fast");
            filmhot.children[anioff2].classList.remove("children-big__intro--ani2fast");
            filmhot.children[anioff1].classList.remove("children-big__intro--ani1fastprev");
            filmhot.children[anioff2].classList.remove("children-big__intro--ani2fastprev");
        }, 0);
    }
    ////////////////////////////////////////////////////////////////
    const slickNext = document.querySelector(".children-big__slick-next");
    const slickPrev = document.querySelector(".children-big__slick-prev");
    slickNext.addEventListener('click', function () {
        for (i = 3; i <= 6; i++) {
            anioff(i, i);
            aniFastOff(i, i);
            //clear animation auto và animation cũ
        }
        setTimeout(function () {
            filmhot.children[ani1].classList.add("children-big__intro--ani1fast");
            filmhot.children[ani2].classList.add("children-big__intro--ani2fast");
            ani1++; ani2++;
            if (ani1 == 6) ani2 = 3;
            else if (ani1 == 7) ani1 = 3;

            resetAnimationAuto();
        }, 0);
    });
    slickPrev.addEventListener('click', function () {
        for (i = 3; i <= 6; i++) {
            anioff(i, i);
            aniFastOff(i, i);
             //clear animation auto và animation cũ
        }
        setTimeout(function () {
            filmhot.children[ani1].classList.add("children-big__intro--ani1fastprev");
            filmhot.children[ani2].classList.add("children-big__intro--ani2fastprev");

            ani1--; ani2--;
            if (ani1 <= 2) ani1 = 6;
            else if (ani2 <= 2) ani2 = 6;

            resetAnimationAuto();
        }, 0);
    });
