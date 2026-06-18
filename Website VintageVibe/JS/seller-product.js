const products =
JSON.parse(
    localStorage.getItem("products")
) || [];

const tableContainer =
document.getElementById(
    "productsTable"
);

if(products.length === 0){

    tableContainer.innerHTML = `

    <div class="activity-card">

        No products available.

    </div>

    `;

}else{

    let html = `

    <div class="products-table">

        <table>

            <thead>

                <tr>

                    <th>Name</th>

                    <th>Category</th>

                    <th>Price</th>

                    <th>Stock</th>

                    <th>Condition</th>

                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

    `;

    products.forEach(product => {

        html += `

        <tr>

            <td>${product.name}</td>

            <td>${product.category}</td>

            <td>
                Rp ${Number(product.price)
                .toLocaleString()}
            </td>

            <td>${product.stock}</td>

            <td>${product.condition}</td>

            <td>

                <button
                    class="action-btn edit-btn"
                    onclick="editProduct(${product.id})">

                    Edit

                </button>

                <button
                    class="action-btn delete-btn"
                    onclick="deleteProduct(${product.id})">

                    Delete

                </button>

            </td>

        </tr>

        `;

    });

    html += `

            </tbody>

        </table>

    </div>

    `;

    tableContainer.innerHTML = html;

}

function deleteProduct(id){

    let products =
    JSON.parse(
        localStorage.getItem("products")
    ) || [];

    products =
    products.filter(
        product => product.id !== id
    );

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

    location.reload();

}

function editProduct(id){

    localStorage.setItem(
        "editProductId",
        id
    );

    window.location.href =
    "edit-product.html";

}