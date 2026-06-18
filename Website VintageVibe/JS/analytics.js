const products =
JSON.parse(
    localStorage.getItem("products")
) || [];

const orders =
JSON.parse(
    localStorage.getItem("orders")
) || [];

document.getElementById(
    "analyticsProducts"
).innerText =
products.length;

document.getElementById(
    "analyticsOrders"
).innerText =
orders.length;

let revenue = 0;

orders.forEach(order => {

    revenue += Number(
        order.total || 0
    );

});

document.getElementById(
    "analyticsRevenue"
).innerText =
"Rp " +
revenue.toLocaleString();

if(products.length > 0){

    document.getElementById(
        "topProduct"
    ).innerText =
    products[0].name;

}