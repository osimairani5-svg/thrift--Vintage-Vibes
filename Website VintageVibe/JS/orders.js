const ordersList =
document.getElementById(
    "ordersList"
);

const orders =
JSON.parse(
    localStorage.getItem(
        "orders"
    )
) || [];

if(orders.length === 0){

    ordersList.innerHTML = `

    <div class="empty-box">

        <h3>

            No Orders Yet

        </h3>

        <p>

            Start shopping to see your orders.

        </p>

    </div>

    `;

}else{

    let html = "";

    orders.forEach(order => {

        html += `

        <div class="order-card">

            <h5>

                Order #${order.id}

            </h5>

            <p>

                Date:
                ${order.date || "-"}

            </p>

            <p>

                Total:
                Rp ${Number(order.total || 0)
                .toLocaleString()}

            </p>

            <span class="order-status">

                ${order.status || "Pending"}

            </span>

        </div>

        `;

    });

    ordersList.innerHTML =
    html;

}