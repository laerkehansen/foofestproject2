const PaymentStep = () => {
  return (
    <div>
      <form action="#" method="POST">
        <div class="form-group">
          <label for="cardholder-name">Navn på kortholder</label>
          <input
            type="text"
            id="cardholder-name"
            name="cardholder-name"
            placeholder="Indtast dit navn"
            required
          />
        </div>
        <div class="form-group">
          <label for="card-number">Kortnummer</label>
          <input
            type="text"
            id="card-number"
            name="card-number"
            placeholder="1234 5678 9012 3456"
            required
            maxlength="19"
            pattern="\d{4} \d{4} \d{4} \d{4}"
          />
        </div>
        <div class="form-group">
          <label for="expiry-date">Udløbsdato</label>
          <input type="month" id="expiry-date" name="expiry-date" required />
        </div>
        <div class="form-group">
          <label for="cvv">CVV</label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            placeholder="123"
            required
            maxlength="3"
            pattern="\d{3}"
          />
        </div>
        <button type="submit" class="submit-btn">
          Betal
        </button>
      </form>
    </div>
  );
};

export default PaymentStep;
