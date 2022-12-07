import Control from '../common/control';
import Header from '../header/head';
import { phones } from './phones';
import { ICard } from '../interfeces/card';
import Cards from './cards';
import { Seach } from './search';
import { State } from './state';
import { Sort } from './sort';
import { IFilters } from 'index';
import { Filter } from './filter';
import { FilterColor } from './filter-color';
import Popup from './popup';
import { Model } from './stateBasket';

// import RangeSlider from "./slider";

export class Application {
  header: Header;
  main: Control<HTMLElement>;
  wrapper: Control<HTMLElement> | undefined;
  card: Cards | undefined;
  search: Seach;
  sort: Sort;
  filter: Filter;
  filterColorInput: FilterColor;
  popup: Popup;
  model: Model;
  // slider: RangeSlider;

  constructor(parentNode: HTMLElement, state: State) {
    this.model = new Model([]);
    this.header = new Header(parentNode, () => {
      this.model.removeDate();
    });
    this.main = new Control(parentNode, 'main', 'main');
    this.header.updateBasket(this.model.data.length ?? 0);
    this.model.onUpdate = (data: string[]) => {
      this.header.updateBasket(data.length);
    };

    this.renderCard(phones);
    const blockFilters = new Control(this.main.node, 'div', 'blockFilters');
    this.search = new Seach(blockFilters.node, state);
    this.sort = new Sort(blockFilters.node, state);
    this.filter = new Filter(blockFilters.node, state);
    this.filterColorInput = new FilterColor(blockFilters.node, state);
    this.popup = new Popup(parentNode);

    // this.slider = new RangeSlider(this.main.node, state)

    const refresh = (el: IFilters) => {
      let result = this.sortPhones([...phones], el.sort);
      result = this.searchPhones(result, el.search);
      result = this.filterPhones(result, el.manufacturer);
      result = this.filterColor(result, el.color);

      // result = this.sliderPhones(result, el.amount)
      if (this.wrapper) {
        this.wrapper.destroy();
        this.renderCard(result);
      }
    };
    state.onChange.add(refresh);
    refresh(state.content);
  }

  renderCard(data: ICard[]) {
    this.wrapper = new Control(this.main.node, 'div', 'wrapper');
    const wrapper = this.wrapper.node;
    data.forEach((el) => {
      console.log(el);

      this.card = new Cards(wrapper, el, () => {
        this.model.setData(el.name);
      });
    });
  }
  sortPhones(data: ICard[], index: number) {
    if (index === 0) {
      return data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (index === 1) {
      return data.sort((a, b) => b.name.localeCompare(a.name));
    } else if (index === 2) {
      return data.sort((a, b) => a.price.localeCompare(b.price));
    } else if (index === 3) {
      return data.sort((a, b) => a.amount.localeCompare(b.amount));
    }
    return data;
  }

  searchPhones(data: ICard[], search: string): ICard[] {
    if (data.filter((element) => element.name.toLowerCase().includes(search.toLowerCase())).length === 0) {
      alert('Нету совпадений');
    }
    return data.filter((element) => element.name.toLowerCase().includes(search.toLowerCase()));
  }
  filterPhones(data: ICard[], manufacturer: string[]) {
    return data.filter((element) =>
      manufacturer.length === 0 ? element : manufacturer.includes(element.manufacturer)
    );
  }
  filterColor(data: ICard[], color: string[]) {
    return data.filter((element) => (color.length === 0 ? element : color.includes(element.color)));
  }
  // sliderPhones(data: ICard[], value: (string | number)[]) {
  //   return data.filter(element => +value[0] <= +element.amount && +value[1] >= +element.amount)
  // }
}
