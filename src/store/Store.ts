import { makeObservable, observable, action } from "mobx";
import { IVehicle } from "../types/Vehicle";

type Cart = {
  amount: number;
  products: IVehicle[];
};

class Store {
  cart: Cart = {
    amount: 0,
    products: []
  };

  constructor(cart) {
    makeObservable(this, {
      cart: observable,
      addToCart: action,
      removeFromCart: action,
      increaseAmount: action
    });
  }

  increaseAmount(product: IVehicle) {
    this.cart.amount += parseInt(product.cost_in_credits);
  }

  addToCart(product: IVehicle) {
    this.cart.products.push(product);
    this.increaseAmount(product);
  }

  removeFromCart(product: IVehicle) {
    this.cart.products.filter(cartProduct => cartProduct.name !== product.name);
  }
}

export default new Store();
