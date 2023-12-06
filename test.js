const fs= require("fs")
fs.readFile("test.txt",(err,data)=>{
    if(err){
        console.log("error")
    }else{
        fs.writeFile("text.txt",data,function(err){
            if(err){
                console.log("error")
            }else{
                console.log("success")
            }
            
        })
    }
})