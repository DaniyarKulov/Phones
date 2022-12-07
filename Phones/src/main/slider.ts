// import Control from '../common/control';
// import { State } from './state';
// import 'nouislider/dist/nouislider.css';
// import * as noUiSlider from 'nouislider';

// export default class RangeSlider extends Control{
// 	// slider: Control<HTMLElement>;
//   sliderElem: Control<HTMLElement>;
//   slider: noUiSlider.target;
// 	constructor(parentNode: HTMLElement, state: State) {
// 		super(parentNode, 'div', 'slider');
   
// 		// this.slider = new Control (this.node, 'div', 'slider', '', 'id', 'slider');
//     // const slider: noUiSlider = this.slider.node;
//     this.sliderElem = new Control(this.node, 'div', 'slider', '', 'id', 'slider');
//     this.slider = this.sliderElem.node;
    
// 		noUiSlider.create(slider, {
// 			start: [state.content.amount[0], state.content.amount[1]],
// 			connect: true,
// 			range: {
// 				'min': 1,
// 				'max': 8
// 			}
// 		});
// 		slider.noUiSlider.on('update', (values, handle) => {
// 			// const valueNumberType = Math.round(Number(values[handle]));
//       // const valueStringType = String(valueNumberType);
//       state.content = { ...state.content, amount: values}

// 		})
// 	}
// }

