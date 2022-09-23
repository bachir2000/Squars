const xAxis = document.querySelector('#x-axis'),
yAxis = document.querySelector('#y-axis'),
btn = document.querySelector('#btn'),
container = document.querySelector('.container'),
title = document.querySelector('#title'),
themBtn = document.querySelector('.them-btn'),
themBtnCircle = document.querySelector('.them-btn-circle'),
squarContainer = document.querySelector('.squar-container');

let theme = true;  //true for light mode - false for night mode



let squars;

btn.addEventListener('click',()=>{
    if(xAxis.value*yAxis.value > 0){
        container.classList.add("disabled");
        squarContainer.classList.remove("disabled");
        title.classList.remove("disabled");
        squarContainer.style.gridTemplateColumns = "repeat("+xAxis.value+",1fr)";
        
        for(let i = 0;i<xAxis.value*yAxis.value;i++){
            let squar = document.createElement('div');
            squar.classList.add('squar');
            squarContainer.appendChild(squar);
        }
        squars = document.querySelectorAll('.squar');
        colors = ['red','green','blue','pink','brown','white','black','purpul','yellow'];
        
    squars.forEach(element => {
        element.addEventListener('mouseover', ()=> {
            element.classList.add('mouseIn');
            setTimeout(() => {
                element.classList.remove('mouseIn');
            }, 1000);
        })
    });
    setInterval(() => {
        document.documentElement.style.setProperty("--anim-color", colors[Math.floor(Math.random()*9)]);
    }, 500);
    }else{
        alert("dir nwamar w habesna men temaskhiir");
    }
    
})

themBtnCircle.addEventListener('click', () => {
    if(theme){
        //dark mode
        themBtn.style.justifyContent =  'flex-end';
        theme = false;
        document.documentElement.style.setProperty('--main-color','#251D3A');
        document.documentElement.style.setProperty('--secondary','#2A2550');
        squarContainer.style.backgroundColor = 'transparent';
        title.style.color = '#B3E8E5';
    }else{
        //light mode
        document.documentElement.style.setProperty('--main-color','#2F8F9D');
        document.documentElement.style.setProperty('--secondary','#B3E8E5');
        theme = true;
        themBtn.style.justifyContent =  'flex-start';
        squarContainer.style.backgroundColor = 'white';
        title.style.color = 'white';
    }
});

title.addEventListener('click',()=> title.classList.add("disabled"));