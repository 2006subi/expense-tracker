// const http=require('http');
// const calculate=require("./calculator")
// const server=http.createServer((req,res)=>{
//     const a=10;
//     const b=20;
//     const sum=calculate.add(a,b);
//     const subt=calculate.sub(a,b);
//     const mult=calculate.mul(a,b);
//     const divi=calculate.div(a,b);
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.end(`First num:${a}\nSecond num:${b}\nThe sum is:${sum}\nThe subtract is:${subt}\nThe multiply is:${mult}\nThe division is:${divi}`);
    
// })
// server.listen(3000,()=>{
//     console.log("Server running at http://127.0.0.1:3000/");
// });
// const calculate=require("./calculator")
// console.log(calculate.add(10,20))

// console.log("hi")
// setTimeout(()=>{
//     console.log("Inside")
// },5000)
// console.log("Hello")
const fs=require('fs');
// fs.readFile('sample.txt',"utf8",(err,data)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log(data)
// })
// const newPerson={
//     name:"David",
//     age:25,
//     city:"New York",
//     amount:1500
// }
fs.readFile("sample.json","utf8",(err,data)=>{
    if(err){
        console.error(err);
        return
    }
    const json=JSON.parse(data)
    const newList=json.filter((data) => data.name !== "Ravi");
    fs.writeFile("sample.json",JSON.stringify(newList),(err)=>{
        if(err){
            console.error(err)
            return
        }
    })
});
