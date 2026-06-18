const container =
document.getElementById(
    "wishlist-container"
);

const wishlist =
JSON.parse(
    localStorage.getItem("wishlist")
) || [];

if(wishlist.length === 0){

    container.innerHTML = `

        <div class="empty-wishlist">

            <h3>
                Wishlist is Empty
            </h3>

        </div>

    `;

}else{

    let html = "";

    wishlist.forEach(product => {

        html += `

        <div class="wishlist-card">

            <h4>
                ${product.name}
            </h4>

            <p>
                Rp ${Number(product.price)
                .toLocaleString()}
            </p>

            <button
                onclick="removeWishlist(${product.id})">

                Remove

            </button>

        </div>

        `;

    });

    container.innerHTML = html;

}

function removeWishlist(id){

    let wishlist =
    JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

    wishlist =
    wishlist.filter(
        item => item.id !== id
    );

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    location.reload();

}