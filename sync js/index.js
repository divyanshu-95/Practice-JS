let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    alert('clicked');
    let p=document.createElement('p');
    p.textContent='Hi';
    document.body.appendChild(p);
})