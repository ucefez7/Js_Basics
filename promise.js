const promise = new Promise((resolve,reject)=>{
    str1="hi"
    str2="hi"
    if(str1==str2){
      resolve()
    }else
    {
      reject()
    }
  })
  
  promise .then(()=>{
    console.log("success")
  })
  .catch(()=>{
    console.log("failed")
  })











//   async function veruthe(){
//     const promise= new Promise(function(reolve,reject){
//         a=1
//         b=2
//         if(a==b){
//             resolve()
//         }else{
//             reject(new error("error"))
//         }
//     })
// }
// try{
//     await promise.then(()=>{
//         console.log("true")
//     })
// catch(error){
//     console.log("false")
// }
// }
// veruthe()