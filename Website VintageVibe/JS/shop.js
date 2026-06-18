
function renderProducts(productsToShow){

    let html = "";

    productsToShow.forEach(product => {

        html += `

        <div class="product-card">

                <div class="product-image">

                    🧥

                </div>

                <div class="product-info">

                    <h3>
                        ${product.name}
                    </h3>

                    <p>
                        ${product.category}
                    </p>

                    <h4>
                        Rp ${Number(product.price)
                        .toLocaleString()}
                    </h4>

                    <small>
                        ${product.condition}
                    </small>

                    <div class="product-buttons">

                        <button
                            onclick="viewProduct(${product.id})">

                            View

                        </button>

                        <button
                            onclick="addToWishlist(${product.id})">

                            ❤️

                        </button>

                        <button
                            onclick="addToCart(${product.id})">

                            🛒

                        </button>

                    </div>

                </div>

            </div>
        `;

    });

    container.innerHTML = html;

}

const container =
document.getElementById("product-container");

const products =
JSON.parse(localStorage.getItem("products")) || [];

if(products.length === 0){

    container.innerHTML = `

        <div class="empty-products">

            <div class="empty-icon">
                📦
            </div>

            <h3>No Products Found</h3>

            <p>
                Products will appear here.
            </p>

        </div>

    `;

}else{

    renderProducts(products);

}

function addToCart(id){

    const products =
    JSON.parse(
        localStorage.getItem("products")
    ) || [];

    const selectedProduct =
    products.find(
        product => product.id === id
    );

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    cart.push(selectedProduct);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Product Added To Cart!");
}

function addToWishlist(id){

    const products =
    JSON.parse(
        localStorage.getItem("products")
    ) || [];

    const selectedProduct =
    products.find(
        product => product.id === id
    );

    let wishlist =
    JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

    const alreadyExists =
    wishlist.find(
        item => item.id === id
    );

    if(alreadyExists){

        alert(
            "Already in Wishlist!"
        );

        return;
    }

    wishlist.push(
        selectedProduct
    );

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert(
        "Added to Wishlist!"
    );

}

const searchInput =
document.getElementById(
    "searchInput"
);

if(searchInput){

    searchInput.addEventListener(
        "keyup",
        function(){

            const keyword =
            this.value.toLowerCase();

            const filtered =
            products.filter(product =>

                product.name
                .toLowerCase()
                .includes(keyword)

            );

            renderProducts(filtered);

        }
    );

}

function viewProduct(id){

    localStorage.setItem(
        "selectedProductId",
        id
    );

    window.location.href =
    "product.html";

}