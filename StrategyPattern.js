function baseStrategy(amount) {
  return amount;
};

function premiumStrategy(amount) {
  return amount * 0.85;
};

function platinumStrategy(amount) {
  return amount * 0.65;
};

class AutoCart {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }

  checkout() {
    return this.discount(this.amount);
  }

  setStrategy(discount) {
    this.discount = discount;
  }

  setAmount(amount) {
    this.amount = amount;
  }
};

const normalByer = new AutoCart(baseStrategy);
const premiumByer = new AutoCart(premiumStrategy);
const platinumByer = new AutoCart(platinumStrategy);

normalByer.setAmount(50000);
console.log(normalByer.checkout());

premiumByer.setAmount(50000);
console.log(premiumByer.checkout());

platinumByer.setAmount(50000);
console.log(platinumByer.checkout());

const newDiscountFunc = function(amount) {
  return amount * 0.5;
};

platinumByer.setStrategy(newDiscountFunc);
console.log(platinumByer.checkout());