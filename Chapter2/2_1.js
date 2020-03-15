//객체 리터럴 
var sayNode = function(){
    console.log("node");
}

var es = "ES";
var oldObject = { 
    sayJS:function(){
        console.log('js');
    },
    sayNode:sayNode,
    [es+6] : 'Fan'
};
 
oldObject[es+6] = 'Fatastyic';
oldObject.sayNode();
console.dir(oldObject.ES6);