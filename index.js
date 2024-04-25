const sec12_vedio1 = document.getElementById('sec12_vedio1');
const sec12_canvas1 = document.getElementById('sec12_canvas1');
const sec12_context = sec12_canvas1.getContext('2d');

function frame() {
    sec12_context.drawImage(sec12_vedio1, 0, 0, 900, 900);

    requestAnimationFrame(frame)
}

frame();





function myFunction() {
    console.log('button clicked');
    var x = document.querySelector(".herader-nav-blk");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function sideBarMenu () {
    console.log('button clicked');
    var x = document.querySelector(".sidebar-menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function handleClick(){
    x = document.querySelector('.dropdown-1main-block');
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}


// scroll Animation start

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log('entry', entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElement = document.querySelectorAll('.hidden-sec');

hiddenElement.forEach((elem)=> observer.observe(elem));


const observerLineElement = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log('entry', entry);
        if(entry.isIntersecting){
            entry.target.classList.add('showLineElement');
        }else{
            entry.target.classList.remove('showLineElement');
        }
    });
});


const scrollLIneElement = document.querySelectorAll('.scrollLineElement-sec');

scrollLIneElement.forEach((elem)=> observerLineElement.observe(elem));


const observerLineElement222 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log('entry', entry);
        if(entry.isIntersecting){
            entry.target.classList.add('showLineElement222');
        }else{
            entry.target.classList.remove('showLineElement222');
        }
    });
});


const cardSrcollLineElement = document.querySelectorAll('.cardSrcollline-ele');

cardSrcollLineElement.forEach((elem)=> observerLineElement222.observe(elem));

// scroll Animation end


// card Animation  start

const  cardBlock = document.querySelectorAll('.cusor-traker-section');

for (let index = 0; index < cardBlock.length; index++) {
    const cardElement = cardBlock[index];
    const cursor = cardElement.querySelector('[data-target="card-skew.shine"]');
    const cursor41 = cardElement.querySelector('[data-target="card41-skew.shine"]');
    const cursor42 = cardElement.querySelector('[data-target="card42-skew.shine"]');
    const cursor5 = cardElement.querySelector('[data-target="card5-skew.shine"]');
    const cursor51 = cardElement.querySelector('[data-target="card51-skew.shine"]');
    const cursor52 = cardElement.querySelector('[data-target="card52-skew.shine"]');
    const cursor53 = cardElement.querySelector('[data-target="card53-skew.shine"]');
    const cursor6 = cardElement.querySelector('[data-target="card6-skew.shine"]');
    const cursor7 = cardElement.querySelector('[data-target="card7-skew.shine"]');
    const cursor8 = cardElement.querySelector('[data-target="card8-skew.shine"]');
    
    cardElement.addEventListener('mousemove', function(e){
        // rotate the card on mouse move start
        const { left, top, width, height } = cardElement.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;
    
        const centerX = width / 2;
        const centerY = height / 2;
    
        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
        const fixedX = 7;
        const fixedY = 7;
        const rotationX = (deltaY / centerY) * fixedX; // Adjust the multiplier as needed
        const rotationY = -(deltaX / centerX) * fixedY; // Adjust the multiplier as needed
    
        cardElement.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        // rotate the card on mouse move end
    
        // move gradient skew card on mouse move start
        if(cursor){
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 190%), calc(${e.clientY}px - 90%), 0)`;
        }
        if(cursor41){
            cursor41.style.transform = `translate3d(calc(${e.clientX}px - 190%), calc(${e.clientY}px - 80%), 0)`;
        }
        if(cursor42){
            cursor42.style.transform = `translate3d(calc(${e.clientX}px - 427%), calc(${e.clientY}px - 85%), 0)`;
        }
        else if (cursor5) {
            cursor5.style.transform = `translate3d(calc(${e.clientX}px - 180%), calc(${e.clientY}px - 57%), 0)`;
        }
        else if (cursor51) {
            cursor51.style.transform = `translate3d(calc(${e.clientX}px - 180%), calc(${e.clientY}px - 70%), 0)`;
        }
        else if (cursor52) {
            cursor52.style.transform = `translate3d(calc(${e.clientX}px - 423%), calc(${e.clientY}px - 85%), 0)`;
        }
        else if (cursor53) {
            cursor53.style.transform = `translate3d(calc(${e.clientX}px - 190%), calc(${e.clientY}px - 260%), 0)`;
        }
        else if (cursor6) {
            cursor6.style.transform = `translate3d(calc(${e.clientX}px - 180%), calc(${e.clientY}px - 50%), 0)`;
        }
        else if (cursor7) {
            cursor7.style.transform = `translate3d(calc(${e.clientX}px - 435%), calc(${e.clientY}px - 45%), 0)`;
        }
        else if (cursor8) {
            cursor8.style.transform = `translate3d(calc(${e.clientX}px - 180%), calc(${e.clientY}px - 45%), 0)`;
        }
        // move gradient skew card on mouse move end
    
    });
}

// card Animation end

window.addEventListener('scroll', function() {
    let sec2 = document.querySelector('.sec2');
    let sec2Height = sec2.offsetHeight;
    let sec2Top = sec2.offsetTop;
    let sec2Center = sec2Top + sec2Height / 2;
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    if (scrollPosition > sec2Top && scrollPosition < sec2Center) {
      sec2.classList.add('scrolled');
    } else {
      sec2.classList.remove('scrolled');
    }
  });




