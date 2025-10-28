//console.log(a);
//var a=30;
//console.log(a);
//{
//    var a=50;
//    console.log(a);
//
//}
//console.log(a);
//explicit type conversion

//let strToNum=Number("hello");
//console.log(  strToNum+" " +typeof(strToNum));

//let numTostr= String(1234);
//console.log(numTostr+" "+typeof(numTostr));

//let numToBool = Boolean(" ");
//console.log(numToBool);//no value then always give false


//console.log(numToBool);
//for loop
let row=4;
for(let i=0;i<row;i++){
    let line=""
    for(let j=0;j<2*row-1;j++){
        if(i+j>row && j-i<row-1){
            line+="*";
        }
        else{
            line+=" ";
        }
    }
    console.log();
}
for(i in [1,2,3,4,5]){
    console.log();
}

