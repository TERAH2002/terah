function showPaymentDetails() {
  // Get the selected payment method
  var paymentMethod = document.getElementById("payment-method").value;
  var paymentDetails = document.getElementById("payment-details");
  
  // Clear any existing payment details
  paymentDetails.innerHTML = "";
  
  // Display payment details based on the selected payment method
  if (paymentMethod === "visa" || paymentMethod === "mastercard") {
     paymentDetails.innerHTML = `
        <label for="card-number">Card Number</label>
        <input type="text" id="card-number" name="card-number" required>
        <label for="expiry-date">Expiry Date</label>
        <input type="text" id="expiry-date" name="expiry-date" required>
        <label for="cvv">CVV</label>
        <input type="text" id="cvv" name="cvv" required>
     `;
  } else if (paymentMethod === "paypal") {
     paymentDetails.innerHTML = `
        <label for="paypal-email">PayPal Email</label>
        <input type="email" id="paypal-email" name="paypal-email" required>
        <label for="paypal-password"> Password</label>
        <input type="password" id="paypal-password" name="paypal-password" required>
     `;
  } else if (paymentMethod === "stripe") {
     paymentDetails.innerHTML = `
        <label for="stripe-card-number">Card Number</label>
        <input type="text" id="stripe-card-number" name="stripe-card-number" required>
        <label for="stripe-expiry-date">Expiry Date</label>
        <input type="text" id="stripe-expiry-date" name="stripe-expiry-date" required>
        <label for="stripe-cvv">CVV</label>
        <input type="text" id="stripe-cvv" name="stripe-cvv" required>
     `;
  } else if (paymentMethod === "bitcoin") {
     paymentDetails.innerHTML = `
        <label for="bitcoin-address">Bitcoin Address</label>
        <input type="text" id="bitcoin-address" name="bitcoin-address" required>
        <label for="password"> password</label>
        <input type="password" id="password" name="password" required>
     `;
  }else if (paymentMethod === "bank transfer") {
   paymentDetails.innerHTML = `
      <label for="bank-card-number">Card Number</label>
      <input type="text" id="bank-card-number" name="bank-card-number" required>
      <label for="bank-expiry-date">Expiry Date</label>
      <input type="text" id="bank-expiry-date" name="bank-expiry-date" required>
      <label for="bank-cvv">CVV</label>
      <input type="text" id="bank-cvv" name="bank-cvv" required>
   `;
   }
}

const form = document.getElementById('donation-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert(`Thank you for your donation!`);
});