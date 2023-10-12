import { makeObservable, observable, action } from "mobx";
import { CartItemProps } from "../types/Vehicle";

type Cart = {
  amount: number;
  products: CartItemProps[];
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

  increaseAmount(product: CartItemProps) {
    this.cart.amount += parseInt(product.product.cost_in_credits);
  }

  addToCart(product: CartItemProps) {
    this.cart.products.push(product);
    this.increaseAmount(product);
  }

  removeFromCart(product: CartItemProps) {
    this.cart.products.filter(cartProduct => cartProduct.product.name !== product.product.name);
  }
}

export default new Store();
