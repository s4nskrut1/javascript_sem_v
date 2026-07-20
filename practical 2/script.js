let cart = [];

function formatCurrency(amount) {
    return `Rs ${amount.toFixed(2)}`;
}

function resetItemFields() {
    document.getElementById("product").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
}

function renderCart() {
    const cartItems = document.getElementById("cartItems");

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">No items added yet.</div>';
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-line">
            <div>
                <strong>${item.product}</strong>
                <p>${item.quantity} x ${formatCurrency(item.price)}</p>
            </div>
            <div class="line-actions">
                <strong>${formatCurrency(item.subtotal)}</strong>
                <button type="button" class="action-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        </div>
    `).join("");
}

function addItem() {
    const product = document.getElementById("product").value.trim();
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseInt(document.getElementById("quantity").value);

    if (
        product === "" ||
        isNaN(price) ||
        isNaN(quantity) ||
        price <= 0 ||
        quantity <= 0
    ) {
        document.getElementById("output").innerHTML = `
            <div class="bill-error">
                <h2>Invalid item details</h2>
                <p>Please enter product name, price, and quantity correctly.</p>
            </div>
        `;
        return;
    }

    const subtotal = price * quantity;

    const item = {
        product,
        price,
        quantity,
        subtotal
    };

    cart.push(item);
    resetItemFields();
    renderCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}

function clearCart() {
    cart = [];
    renderCart();
    document.getElementById("output").innerHTML = `
        <div class="empty-state">
            <h2>Invoice preview</h2>
            <p>Add items and generate the final bill.</p>
        </div>
    `;
}

function calculateBill() {
    const customerName = document.getElementById("name").value.trim();
    const city = document.getElementById("city").value.trim();

    if (customerName === "" || city === "" || cart.length === 0) {
        document.getElementById("output").innerHTML = `
            <div class="bill-error">
                <h2>Invalid input</h2>
                <p>Please enter customer details and add at least one item.</p>
            </div>
        `;
        return;
    }

    const GST = 0.18;
    const subtotal = cart.reduce((sum, item) => sum + item.subtotal, 0);
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const DISCOUNT_RATE = totalQuantity >= 3 ? 0.12 : 0.05;
    const discountAmount = subtotal * DISCOUNT_RATE;
    const discountedSubtotal = subtotal - discountAmount;
    const gstAmount = discountedSubtotal * GST;
    const total = discountedSubtotal + gstAmount;

    const bill = {
        customerName,
        city,
        items: cart,
        subtotal,
        discountAmount,
        discountedSubtotal,
        gstAmount,
        total
    };

    const {
        customerName: name,
        city: customerCity,
        items,
        subtotal: sub,
        discountAmount: discount,
        discountedSubtotal: afterDiscount,
        gstAmount: gst,
        total: finalAmount
    } = bill;

    const itemRows = items.map((item) => `
        <div class="invoice-row">
            <span>${item.product} (${item.quantity} x ${formatCurrency(item.price)})</span>
            <strong>${formatCurrency(item.subtotal)}</strong>
        </div>
    `).join("");

    document.getElementById("output").innerHTML = `
        <div class="invoice-head">
            <div>
                <p class="mini-label">Tax Invoice</p>
                <h2>Order Summary</h2>
            </div>
            <div class="invoice-badge">Order Confirmed</div>
        </div>

        <div class="meta-grid">
            <div class="meta-row">
                <p>Customer</p>
                <strong>${name}</strong>
            </div>
            <div class="meta-row">
                <p>City</p>
                <strong>${customerCity}</strong>
            </div>
            <div class="meta-row">
                <p>Items</p>
                <strong>${items.length}</strong>
            </div>
        </div>

        <div class="invoice-items">
            ${itemRows}
        </div>

        <div class="invoice-summary">
            <div class="invoice-row">
                <span>Subtotal</span>
                <strong>${formatCurrency(sub)}</strong>
            </div>
            <div class="invoice-row">
                <span>Discount (${(DISCOUNT_RATE * 100).toFixed(0)}%)</span>
                <strong>- ${formatCurrency(discount)}</strong>
            </div>
            <div class="invoice-row">
                <span>Amount after Discount</span>
                <strong>${formatCurrency(afterDiscount)}</strong>
            </div>
            <div class="invoice-row">
                <span>GST (18%)</span>
                <strong>${formatCurrency(gst)}</strong>
            </div>
        </div>

        <div class="invoice-total">
            <span>Total Amount Payable</span>
            <strong class="amount-total">${formatCurrency(finalAmount)}</strong>
        </div>

        <div class="invoice-note"></div>
    `;

    console.log("===== BILL =====");
    console.log("Customer :", name);
    console.log("City :", customerCity);
    console.log("Items :", items);
    console.log("Subtotal :", sub.toFixed(2));
    console.log("Discount :", discount.toFixed(2));
    console.log("GST :", gst.toFixed(2));
    console.log("Total :", finalAmount.toFixed(2));
}

renderCart();
