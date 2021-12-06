onmessage=function(e){
    console.log('worker');
    let res=0;
    for(let i=0;i<1000000000000;i++){
        res=res+i;
    }
    postMessage(res)
}