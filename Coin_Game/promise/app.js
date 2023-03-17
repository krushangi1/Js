const fakeRequest = (url) =>{
    return Promise( (resolve,reject)=>{
        setTimeout (() => {
            const rand = Math.random();
            if(rand<0.3){
                reject();
            }
            else{
                resolve();
            }
        },2000 );
    });
};

fakeRequest.then( () => {
    console.log("sucess");
})
.catch( () => {
    console.log('fail');
} )