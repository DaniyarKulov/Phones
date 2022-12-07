import './style.css';

import { Application } from './main/application';
import { State } from './main/state';
export interface IFilters {
  sort: number;
  search: string;
  manufacturer: string[];
  color: string[];
  price: (number | string)[];
  amount: (number | string)[];
  button: (number | string)[];
}

const filterState: IFilters = {
  sort: 0,
  search: '',
  manufacturer: [],
  color: [],
  price: ['', ''],
  amount: ['1', '8'],
  button: [],
};

const state = new State(filterState);

new Application(document.body, state);

// const header = document.createElement('header');
// document.body.appendChild(header);

//  element('img', 'picture', image );;
//

// element('img', 'basket', basket);

//  const filter = new Filter('asdfghj',oppo9,'l','asd', 4,3)
//  filter.addFilter()

// const cardBlock = new Card('asdfghj',oppo9,'l','asd', 4,3)
// cardBlock.addCard()

// cardBlock.addCard().onclick = event =>{
// 	console.log(event)
// }
// cardBlock.filterCard('голубой')
// import Phone from './main/phone';

// import {Application} from "./main/application";

// const app = new Application(document.body);
