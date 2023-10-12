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
      increaseAmount: action,
      decreaseAmount: action
    });
  }

  increaseAmount(product: CartItemProps) {
    this.cart.amount =
      this.cart.amount + (product.product.cost_in_credits == "unknown" ? 0 : parseInt(product.product.cost_in_credits));
  }

  decreaseAmount(product: CartItemProps) {
    this.cart.amount =
      this.cart.amount - (product.product.cost_in_credits == "unknown" ? 0 : parseInt(product.product.cost_in_credits));
  }

  addToCart(product: CartItemProps) {
    this.cart.products.push(product);
    this.increaseAmount(product);
  }

  removeFromCart(id: string) {
    const product: CartItemProps = this.cart.products.find(product => product.id === id);
    this.cart.products = this.cart.products.filter(cartProduct => cartProduct.id !== id);
    this.decreaseAmount(product);
  }
}

export default new Store();
