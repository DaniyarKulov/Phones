import Signal from '../common/signal';
import { IFilters } from '../index';

export class State {
  private _filters: IFilters;

  constructor(initial: IFilters) {
    this._filters = initial;
  }

  get content() {
    console.log(this._filters);
    return this._filters;
  }

  set content(value: IFilters) {
    this._filters = value;
    this.onChange.emit(this._filters);
  }
  onChange = new Signal<IFilters>();
}

// export class StateFilter {

// 	private _filters: IFilters;

// 	constructor(initial: IFilters) {
// 	this._filters = initial;
// 	}

// 	get content() {
// 		console.log(this._filters);
// 	return this._filters;
// 	}

// 	set content(value: IFilters) {
// 	this._filters = value;
// 	this.onChange.emit(this._filters);
// 	}
// 	onChange = new Signal<IFilters>();
//   }
