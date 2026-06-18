const editId =
Number(
    localStorage.getItem(
        "editProductId"
    )
);

let products =
JSON.parse(
    localStorage.getItem(
        "products"
    )
) || [];

const product =
products.find(
    item => item.id === editId
);

if(product){

    document.getElementById(
        "productName"
    ).value = product.name;

    document.getElementById(
        "productCategory"
    ).value = product.category;

    document.getElementById(
        "productPrice"
    ).value = product.price;

    document.getElementById(
        "productStock"
    ).value = product.stock;

    document.getElementById(
        "productCondition"
    ).value = product.condition;

    document.getElementById(
        "productDescription"
    ).value = product.description;

}

const form =
document.getElementById(
    "productForm"
);

form.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        const index =
        products.findIndex(
            item => item.id === editId
        );

        products[index] = {

            ...products[index],

            name:
            document.getElementById(
                "productName"
            ).value,

            category:
            document.getElementById(
                "productCategory"
            ).value,

            price:
            document.getElementById(
                "productPrice"
            ).value,

            stock:
            document.getElementById(
                "productStock"
            ).value,

            condition:
            document.getElementById(
                "productCondition"
            ).value,

            description:
            document.getElementById(
                "productDescription"
            ).value

        };

        localStorage.setItem(
            "products",
            JSON.stringify(products)
        );

        alert(
            "Product Updated!"
        );

        window.location.href =
        "products.html";

    }
);