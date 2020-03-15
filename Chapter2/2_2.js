var relationship1 = {
    name:'ZERO',
    friends:['nero','hero','xero'],
    logFriends:function(){
        var that = this;
        this.friends.forEach(function(){
        })
    }
}
relationship1.logFriends();


const relationship = {
    name:'ZERO',
    friends:['nero','hero','xero'],
    logFriends(){
        this.friends.forEach(firends=>{
            console.log(this.name,firends)
        })
    }
}

relationship.logFriends();