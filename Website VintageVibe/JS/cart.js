const cartItems =
document.getElementById(
    "cartItems"
);

const cart =
JSON.parse(
    localStorage.getItem("cart")
) || [];
let total = 0;

if(cart.length === 0){

    cartItems.innerHTML = `

        <div class="empty-cart">

            <div class="cart-icon">
                🛒
            </div>

            <h3>
                Your Cart Is Empty
            </h3>

        </div>

    `;

}else{

    let html = "";

    cart.forEach(item => {
        total += Number(item.price);

        html += `

        <div class="cart-product">

            <h4>
                ${item.name}
            </h4>

            <p>
                Rp ${Number(item.price)
                .toLocaleString()}
            </p>

            <button
                onclick="removeCart(${item.id})">

                Remove

            </button>

        </div>

        `;

    });

    cartItems.innerHTML = html;

}

const totalElement =
document.querySelector(".total span:last-child");

if(totalElement){

    totalElement.innerText =
    "Rp " + total.toLocaleString();

}

function removeCart(id){

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    cart =
    cart.filter(
        item => item.id !== id
    );

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    location.reload();
}