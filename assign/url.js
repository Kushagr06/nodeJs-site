const url=require('url');

const MyUrl=new URL('')

//stringify name
console.log(MyUrl.href);

//Host
console.log(MyUrl.host);
//without port
console.log(MyUrl.hostname);

//search Params
console.log(MyUrl.searchParams);
