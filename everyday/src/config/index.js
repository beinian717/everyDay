let obj={
    username:"情人",
    id:1234
}
// let {username,id}=obj;
// console.log(username,id);

let username='';
console.log(({username}=obj).username);//，username外面的大括号是一个块级作用域，所以会出问题

let {username:n}=obj;//从obj中取出"username"这个值，并且把这个值赋给新声明的变量"n".
let {id:i}=obj;
// console.log(n)
// console.log(i)

// 默认值 
// let {abc=123}=obj;
// console.log(abc);

let {username:abc=123}=obj;
// console.log(abc);
let {username}=obj;
console.log(username.username)



