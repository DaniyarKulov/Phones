import Control from '../common/control';
import basket from '../assets/shopping.png';

export default class Header extends Control {
  image: Control<HTMLImageElement>;
  text: Control<HTMLElement> | undefined;
  main: Control<HTMLElement>;
  clearHash: Control<HTMLElement>;
  constructor(parentNode: HTMLElement, onClearLocalStore: () => void) {
    super(parentNode, 'header', 'header', 'Online-shop');
    this.main = new Control(this.node, 'div', 'block-basket');
    this.clearHash = new Control(this.main.node, 'button', 'clear-hash', 'Очистить');
    this.image = new Control(this.main.node, 'img', 'basket', '', 'src', basket);
    this.text = new Control(this.main.node, 'div', 'text', '0');
    this.clearHash.setOnClick(() => {
      onClearLocalStore();
    });
  }
  updateBasket(state: number) {
    if (this.text) {
      this.text.node.textContent = state.toString();
    }
  }
}
