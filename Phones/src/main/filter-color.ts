import Control from '../common/control';
import { State } from './state';

export class FilterColor extends Control {
  color: Control<HTMLElement>;
  // parentNode: HTMLElement | null | undefined;
  // colorItem: <HTMLElement>;
  constructor(parentNode: HTMLElement, state: State) {
    super(parentNode, 'div', 'filter');
    const color = ['Синий', 'Черный', 'Голубой', 'Серый'];
    const arrayColor: string[] = [];
    this.color = new Control(this.node, 'h3', 'color-title', 'По Цвету:');
    color.forEach((item) => {
      const colorItem = new Control(this.node, 'input', 'color-check', item, 'type', 'checkbox');
      // const checkbox = 
      new Control(this.node, 'label', 'color-label', item);
      colorItem.node.onclick = () => {
        const index = arrayColor.indexOf(item);
        if (index === -1) {
          arrayColor.push(item);
          state.content = { ...state.content, color: [...arrayColor] };
        } else {
          arrayColor.splice(index, 1);
          state.content = { ...state.content, color: [...arrayColor] };
        }
      };
    });
  }
}
