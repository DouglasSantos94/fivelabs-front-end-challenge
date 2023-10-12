import { makeObservable, observable, action, makeAutoObservable } from "mobx";
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
    makeAutoObservable(this, {
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

  removeFromCart(id: string) {
    this.cart.products = this.cart.products.filter(cartProduct => cartProduct.id !== id);
  }
}

export default new Store();
