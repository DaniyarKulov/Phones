import Control from '../common/control';

export default class Popup extends Control {
  button: Control<HTMLElement>;
  popupClick: Control<HTMLElement> | undefined;
  btn: Control<HTMLElement> | undefined;
  pop: Control<HTMLElement> | undefined;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'main-pop');
    this.button = new Control(this.node, 'button', 'button-pop-open', 'нажать');
    this.button.node.onclick = () => {
      const pop = new Control(this.node, 'div', 'popup-main');
      this.popupClick = new Control(pop.node, 'div', 'popup');
      this.btn = new Control(this.popupClick.node, 'button', 'button-pop-close', 'ok');
      this.btn.node.onclick = () => {
        pop.destroy();
      };
    };
  }
}
