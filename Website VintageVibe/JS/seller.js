const form = document.getElementById("productForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const product = {

            id: Date.now(),

            name: document.getElementById("productName").value,

            category: document.getElementById("productCategory").value,

            price: document.getElementById("productPrice").value,

            stock: document.getElementById("productStock").value,

            condition: document.getElementById("productCondition").value,

            description: document.getElementById("productDescription").value

        };

        let products =
            JSON.parse(localStorage.getItem("products")) || [];

        products.push(product);

        localStorage.setItem(
            "products",
            JSON.stringify(products)
        );

        alert("Product Added Successfully!");

        form.reset();

    });

}

const products =
JSON.parse(
    localStorage.getItem("products")
) || [];

const totalProducts =
document.getElementById(
    "totalProducts"
);

if(totalProducts){

    totalProducts.innerText =
    products.length;

}

const orders =
JSON.parse(
    localStorage.getItem("orders")
) || [];

const totalOrders =
document.getElementById(
    "totalOrders"
);

if(totalOrders){

    totalOrders.innerText =
    orders.length;

}

let revenue = 0;

orders.forEach(order => {

    revenue += Number(
        order.total || 0
    );

});

const totalRevenue =
document.getElementById(
    "totalRevenue"
);

if(totalRevenue){

    totalRevenue.innerText =
    "Rp " +
    revenue.toLocaleString();

}