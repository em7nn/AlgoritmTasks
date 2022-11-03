var Product = [
    {
         Product_id: 7,
         Product_name: "Pringles",
         Product_price: "6"
    
    },
    {
         Product_id: 4,
         Product_name: "Coca Cola",
         Product_price: "2"
    
    },
    {
         Product_id: 3,
         Product_name: "Pepsi",
         Product_price: "4"
    
    },
    {
        Product_id: 2,
        Product_name : "Adazu",
        Product_price : "3"
    
    },
    {
         Product_id : 6,
         Product_name: "Lays",
         Product_price: "1.80"
    }

    
]

var sum=0 

for(var i=0; i<Product.length; i++){
    if ((Product[i].Product_id) % 2 !=0){
       
        sum+=Product[i].Product_price/2
    }
} 

console.log (" result " + sum)
