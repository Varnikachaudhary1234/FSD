const arr = [1,2,3,4,5];
const mapArr = arr.map((ele)=>{return ele*4});
console.log(mapArr);
//reduce
const sum = arr.reduce((acc,ele)=> acc+=ele,I0);
console.log(sum);
//filter

const filterdata = arr.filter((ele)=>ele%4==0);
console.lof(filterdata);
const data=[
    {
        productID:1,
        productName:"A",
        price:490,
        manufacturingdate:"22-09-2025",
        color:"red"

    },
    {
        productID:2,
        productName:"B",
        price:490,
        manufacturingdate:"25-09-2025",
        color:"red"

    },
    {
        productID:3,
        productName:"C",
        price:600,
        manufacturingdate:"26-09-2025",
        color:"red"
    },
    {
        productID:4,
        productName:"D",
        price:899,
        manufacturingdate:"28-09-2025",
        color:"red"
    },
]
    const mapdata = data.map((product)=>product.productName);
    console.log(mapdata);
    const filterOnprice = data.filter((product)=>product.price<=600);
    console.log(filterOnprice);
    


