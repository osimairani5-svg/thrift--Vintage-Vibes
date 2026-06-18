const featuredContainer =
document.getElementById(
    "featuredProducts"
);

const products =
JSON.parse(
    localStorage.getItem(
        "products"
    )
) || [];

if(featuredContainer){

    if(products.length === 0){

        featuredContainer.innerHTML = `

        <div class="empty-box">

            <div class="empty-icon">
                🛍️
            </div>

            <h4>
                No Products Available
            </h4>

        </div>

        `;

    }else{

        let html = "";

        products
        .slice(-4)
        .reverse()
        .forEach(product => {

            html += `

            <div class="product-card">

                <div class="product-image">

                    👕

                </div>

                <div class="product-info">

                    <h4>

                        ${product.name}

                    </h4>

                    <p>

                        ${product.category}

                    </p>

                    <div class="product-price">

                        Rp ${Number(product.price)
                        .toLocaleString()}

                    </div>

                    <div class="product-actions">

                        <button
                        class="wishlist-btn">

                            ❤️

                        </button>

                        <button
                        class="cart-btn"
                        onclick="addHomeCart(${product.id})">

                            Cart

                        </button>

                    </div>

                </div>

            </div>

            `;

        });

        featuredContainer.innerHTML =
        html;

    }

}

function addHomeCart(id){

    const products =
    JSON.parse(
        localStorage.getItem(
            "products"
        )
    ) || [];

    const selected =
    products.find(
        product =>
        product.id === id
    );

    let cart =
    JSON.parse(
        localStorage.getItem(
            "cart"
        )
    ) || [];

    cart.push(selected);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(
        "Added To Cart!"
    );

}