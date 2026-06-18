const placeOrderBtn =
document.getElementById(
    "placeOrderBtn"
);

if(placeOrderBtn){

    placeOrderBtn.addEventListener(
        "click",
        function(){

            const cart =
            JSON.parse(
                localStorage.getItem("cart")
            ) || [];

            if(cart.length === 0){

                alert(
                    "Cart is Empty!"
                );

                return;
            }

            let total = 0;

            cart.forEach(item => {

                total += Number(
                    item.price
                );

            });

            const order = {

                id: Date.now(),

                total: total,

                status: "Processing",

                items: cart,

                date:
                new Date()
                .toLocaleDateString()

            };

            let orders =
            JSON.parse(
                localStorage.getItem(
                    "orders"
                )
            ) || [];

            orders.push(order);

            localStorage.setItem(
                "orders",
                JSON.stringify(orders)
            );

            localStorage.removeItem(
                "cart"
            );

            alert(
                "Order Placed Successfully!"
            );

            window.location.href =
            "orders.html";

        }
    );

}