import Control from '../common/control';
import { State } from './state';

export class Seach extends Control {
  input: Control<HTMLInputElement>;
  constructor(parentNode: HTMLElement, state: State) {
    super(parentNode, 'div', 'search-container');
    this.input = new Control(this.node, 'input', 'search');
    this.input.node.oninput = () => {
      state.content = { ...state.content, search: this.input.node.value };
    };
  }
}
