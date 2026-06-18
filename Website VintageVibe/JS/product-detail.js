const productId =
Number(
    localStorage.getItem(
        "selectedProductId"
    )
);

const products =
JSON.parse(
    localStorage.getItem(
        "products"
    )
) || [];

const product =
products.find(
    p => p.id === productId
);

if(product){

    document.getElementById(
        "productName"
    ).innerText =
    product.name;

    document.getElementById(
        "productCategory"
    ).innerText =
    product.category;

    document.getElementById(
        "productPrice"
    ).innerText =
    "Rp " +
    Number(product.price)
    .toLocaleString();

    document.getElementById(
        "productCondition"
    ).innerText =
    "Condition: " +
    product.condition;

    document.getElementById(
        "productStock"
    ).innerText =
    "Stock: " +
    product.stock;

    document.getElementById(
        "productDescription"
    ).innerText =
    product.description;

}

document
.getElementById(
    "addToCartBtn"
)
.addEventListener(
    "click",
    function(){

        let cart =
        JSON.parse(
            localStorage.getItem(
                "cart"
            )
        ) || [];

        cart.push(product);

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        alert(
            "Added To Cart!"
        );

    }
);