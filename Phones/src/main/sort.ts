import Control from "../common/control";
import { State } from "./state";

export class Sort extends Control{
	sort: Control<HTMLSelectElement>;
	options: Control<HTMLOptionElement>;
	optionsRevers: Control<HTMLOptionElement>;
	camera: Control<HTMLElement>;
	amount: Control<HTMLElement>;
	constructor(parentNode:HTMLElement, state: State){
		super(parentNode, 'div' , 'container');
		this.sort = new Control(this.node, 'select', 'sort')
		this.options = new Control(this.sort.node, 'option', 'option', 'Сортировка по A-Z' );
		this.optionsRevers = new Control(this.sort.node, 'option', 'option', 'Сортировка по Z-A' );
		this.camera = new Control(this.sort.node, 'option', 'option', 'Количество камер' );
		this.amount = new Control(this.sort.node, 'option', 'option', 'Количество на складе' );
		this.sort.node.onchange = () =>{
			state.content = { ...state.content, sort: this.sort.node.selectedIndex };
		}
	}
	
}