document.querySelector(".burger").addEventListener('click', function(){
    if(document.querySelector('nav').style.display ==='none'){
        document.querySelector('nav').style.display = 'block';
    }else{
        document.querySelector('nav').style.display ='none';
    }
});

document.querySelector(".faq-2").addEventListener('click', function(){
    if(document.querySelector('.faq-2 .answer').style.display ==='none'){
        document.querySelector('.faq-2 .answer').style.display = 'block';
    }else{
        document.querySelector('.faq-2 .answer').style.display ='none';
    }
});

document.querySelector(".faq-3").addEventListener('click', function(){
    if(document.querySelector('.faq-3 .answer').style.display ==='none'){
        document.querySelector('.faq-3 .answer').style.display = 'block';
    }else{
        document.querySelector('.faq-3 .answer').style.display ='none';
    }
});

// document.querySelector('.faq-2').addEventListener('click', function(event){
//     event.target.nextSibling.classList.toggle('isActive')
// })
