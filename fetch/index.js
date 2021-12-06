console.log('fetch');
let mybtn=document.getElementById('mybtn');
let content=document.getElementById('content');

// function getData(){
//     url='a.txt';
//     fetch(url).then((response)=>{
//         return response.text();
//     }).then((data)=>{
//         console.log(data);
//     })
// }

function getData(){
    url='https://api.github.com/users';
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}
function postData(){
    url='https://jsonplaceholder.typicode.com/todos/1';
    data='{"name":"divyanshu","salary":"123","age":"23"}'
    params={
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url,params).then(response=>response.json()).then(data=>
        console.log(data)
    )
}
postData();