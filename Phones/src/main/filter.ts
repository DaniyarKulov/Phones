import Control from '../common/control';
import { State } from './state';

export class Filter extends Control {
  manufacturer: Control<HTMLElement>;
  constructor(parentNode: HTMLElement, state: State) {
    super(parentNode, 'div', 'filter');
    const manufacturer = ['Oppo', 'Samsung', 'Apple'];
    const arrayManufacturer: string[] = [];
    this.manufacturer = new Control(this.node, 'h3', 'manufacturer-title', 'По Бренду:');
    manufacturer.forEach((item) => {
      const manufacturerItem = new Control(this.node, 'input', 'chechbox', item, 'type', 'checkbox');
      // const manufacturer =
      new Control(this.node, 'label', 'manufacturer-label', item);
      manufacturerItem.node.onclick = () => {
        const index = arrayManufacturer.indexOf(item);
        if (index === -1) {
          arrayManufacturer.push(item);
          state.content = { ...state.content, manufacturer: [...arrayManufacturer] };
        } else {
          arrayManufacturer.splice(index, 1);
          state.content = { ...state.content, manufacturer: [...arrayManufacturer] };
        }
      };
    });
  }
}
