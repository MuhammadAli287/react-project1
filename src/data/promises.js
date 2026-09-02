

function fetch(){
    return new Promise ((resolve,reject)=>{
        const error=false
        console.log("Print before settimeout")

        setTimeout(()=>{
            if(!error){
            resolve({username:"ali", pass:123})
            }else{
                reject("error: internet coonection not good")
            }
            
        },2000);
        
    });
}

async function main() {
    try{
    const result= await fetch()
    console.log(result)
    }
    catch(error){
        console.log(error)
    }
};
main()
