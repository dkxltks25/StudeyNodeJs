const condition = true;
const promise = new Promise((res,rej)=>{
    if(condition){
        res('성공');
    }else{
        rej("실패");
    }
});

promise.then((message)=>{
    return new Promise((res,rej)=>{
        res(message);
    })
}).then((message2)=>{
    console.log(message2);
    return new Promise((res, rej ) =>{
        res(message2);
    })
}).then((message3)=>{
    console.log(message3);
}).catch((error)=>{
    console.error(error);
})


function findAndSaveUser(Users){ 
    Users.findOne({},(err,user)=>{
        if(err){
            return console.error(err);
        }
        user.name = 'zero';
        user.save((e)=>{
            if(e){
                return console.error(e);
            }
        })
    })
}