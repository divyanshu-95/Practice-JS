let btn1=document.querySelector('#btn1');

btn1.addEventListener('click',()=>{
    console.log('hi');
    let worker=new Worker('Worker.js');
worker.postMessage('donw')
worker.onmessage=function(e){
    document.querySelector('#output').innerHTML=e.data;
}
    
    
})
let btn2=document.querySelector('#btn2');
btn2.addEventListener('click',()=>{
    document.querySelector('#hi').innerHTML='HI';
})