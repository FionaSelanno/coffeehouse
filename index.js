let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let dotsArr= document.querySelectorAll(".slider__dot");
let list = document.querySelector(".slider__list");
let itemsArr = document.querySelectorAll(".slider__item");
let index = 0;
let len = itemsArr.length - 1;
let cta_hero = document.querySelector(".hero__cta");

prev.addEventListener('click', goToSlide);
next.addEventListener('click', goToSlide);
cta_hero.addEventListener('mouseover', event => {
    ac
});

function goToSlide(event){
    var clickedElement = event.target;
    let idElem = clickedElement.id;
    console.log(idElem);
    if (idElem == "next")
    {
        if (index >= len)
            index = 0;
        else
            index++;
        list.style.left = -(index * 480)+ 'px';
        updateNav(index);

    }
    else if (idElem == "prev")
    {
        if (index <= 0)
            index = 2;
        else
            index--;
        console.log("inde: " + index + "len: " + len);
        list.style.left = -(960 - (len - index) * 480) + 'px';
        updateNav(index);
    }
}


function updateNav(index){
    let active = document.querySelector('.slider__dot--active');
    active.classList.remove('slider__dot--active');
    console.log(dotsArr[index]);
    dotsArr[index].classList.add('slider__dot--active');
}
