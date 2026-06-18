const orders =
JSON.parse(
    localStorage.getItem("orders")
) || [];

const container =
document.getElementById(
    "ordersContainer"
);

if(orders.length === 0){

    container.innerHTML = `

    <div class="activity-card">

        No orders available.

    </div>

    `;

}else{

    let html = `

    <div class="products-table">

        <table>

            <thead>

                <tr>

                    <th>Order ID</th>

                    <th>Total</th>

                    <th>Status</th>

                </tr>

            </thead>

            <tbody>

    `;

    orders.forEach(order => {

        html += `

        <tr>

            <td>
                ${order.id}
            </td>

            <td>
                Rp ${Number(order.total || 0)
                .toLocaleString()}
            </td>

            <td>

                <span class="status-badge">

                    Pending

                </span>

            </td>

        </tr>

        `;

    });

    html += `
            </tbody>
        </table>
    </div>
    `;

    container.innerHTML = html;

}