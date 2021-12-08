function add(x,y,callback){
    setTimeout(()=>{
        document.write(`${x+y}.`);
        callback();
    },3000);
}
function display(){
    document.write(' added');
}
add(5,5,display);//here use callback

