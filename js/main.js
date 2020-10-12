'use stricr'

const images = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
];

let currentIndex = 0;

const mainImage = document.getElementById('main');
mainImage.src = images[currentIndex];

images.forEach((image,index) =>{
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if(index === currentIndex){
        li.classList.add('current');
    };
    li.addEventListener('click',()=>{
        mainImage.src = image;
        const thubnails = document.querySelectorAll('.thubnails > li');
        thubnails[currentIndex].classList.remove('current');
        currentIndex = index;
        thubnails[currentIndex].classList.add('current');
    })
    li.appendChild(img);
    document.querySelector('.thubnails').appendChild(li);
})

const next = document.getElementById('next');
next.addEventListener('click',()=>{
    let target = currentIndex +1;
    if(target === images.length){
        target = 0;
    };
    document.querySelectorAll('.thubnails>li')[target].click();
})
const prev = document.getElementById('prev');
prev.addEventListener('click',()=>{
    let target = currentIndex - 1;
    if(target < 0){
        target = images.length-1;
    };
    document.querySelectorAll('.thubnails>li')[target].click();
})

let timeoutId;

function playSlideshow(){
    timeoutId=setTimeout(()=>{
        next.click();
        playSlideshow();
    },1000);
}

const play = document.getElementById('play');
play.addEventListener('click',()=>{
    if(isPlaying === false){
        playSlideshow();
        play.textContent = 'pause';
    }else{
        clearTimeout(timeoutId);
        play.textContent = 'Play';
    }

    isPlaying = !isPlaying;
})

let isPlaying = false;
