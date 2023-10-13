import { makeObservable, observable, action, makeAutoObservable } from "mobx";
import { CartItemProps } from "../types/Vehicle";
import { PurchaseSummary } from "../types/PurchaseSummary";
import { Cart } from "../types/Cart";

class Store {
  cart: Cart = {
    amount: 0,
    products: []
  };

  purchaseSummary: PurchaseSummary = {
    cart: this.cart,
    name: "",
    email: "",
    phoneNumber: "",
    cpf: "",
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    cardNumber: "",
    owner: "",
    valid: "",
    code: "",
    paymentType: ""
  };

  constructor(cart, purchaseSummary) {
    makeAutoObservable(this, {
      cart: observable,
      purchaseSummary: observable,
      addToCart: action,
      removeFromCart: action,
      increaseAmount: action,
      decreaseAmount: action,
      saveSummary: action
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

  saveSummary(summary: PurchaseSummary) {
    this.purchaseSummary = summary;
  }
}

export default new Store();
