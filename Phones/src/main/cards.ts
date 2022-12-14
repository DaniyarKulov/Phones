// import Header from "header/head";
import Control from '../common/control';
import { ICard } from '../interfeces/card';
// import like from '../assets/like.svg';

export default class Cards extends Control {
  title: Control<HTMLElement>;
  img: Control<HTMLImageElement>;
  subtitle: Control<HTMLElement>;
  color: Control<HTMLElement>;
  price: Control<HTMLElement>;
  amount: Control<HTMLElement>;
  button: Control<HTMLElement>;
  // heart: Control<HTMLElement>;

  constructor(parentNode: HTMLElement, item: ICard, onButtonClick: () => void) {
    super(parentNode, 'div', 'block');
    this.title = new Control(this.node, 'div', 'card', item.name);
    // this.title.node.append(like);
    // this.heart = new Control(this.title.node, 'img', 'img-svg', '', 'src', like);
    // const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    // svg.setAttribute('width', '27');
    // svg.setAttribute('height', '26');
    // svg.setAttribute('viewBox', '0 0 27 26');
    // svg.innerHTML = `<path _ngcontent-vrh-c190="" d="M23.6994 4.0622L23.7044 4.06744L23.7094 4.0726C25.0429 5.42938 25.8797 7.23954 25.8797 9.13058C25.8797 11.052 25.1518 12.8103 23.7972 14.1886L13.4538 24.7129L3.11032 14.1886L3.10524 14.1834L3.10009 14.1783C1.76117 12.8549 1.02783 11.0604 1.02783 9.13058C1.02783 7.20921 1.75572 5.4509 3.11032 4.0726L3.1154 4.06744L3.1204 4.0622C4.4206 2.70035 6.17622 1.96094 8.05706 1.96094C9.77061 1.96094 11.4227 2.61897 12.7418 3.80327L13.4199 4.41206L14.0889 3.79326C15.3548 2.62231 17 1.96094 18.7627 1.96094C20.6435 1.96094 22.3992 2.70035 23.6994 4.0622Z" stroke="#FFF" stroke-width="2"></path>`;
    // this.title.node.append(svg);
    this.title.node.innerHTML = `<div class="card-name">${item.name}</div>
    <button class='btn-svg'>
    <svg _ngcontent-vrh-c190="" width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-vrh-c190="" d="M23.6994 4.0622L23.7044 4.06744L23.7094 4.0726C25.0429 5.42938 25.8797 7.23954 25.8797 9.13058C25.8797 11.052 25.1518 12.8103 23.7972 14.1886L13.4538 24.7129L3.11032 14.1886L3.10524 14.1834L3.10009 14.1783C1.76117 12.8549 1.02783 11.0604 1.02783 9.13058C1.02783 7.20921 1.75572 5.4509 3.11032 4.0726L3.1154 4.06744L3.1204 4.0622C4.4206 2.70035 6.17622 1.96094 8.05706 1.96094C9.77061 1.96094 11.4227 2.61897 12.7418 3.80327L13.4199 4.41206L14.0889 3.79326C15.3548 2.62231 17 1.96094 18.7627 1.96094C20.6435 1.96094 22.3992 2.70035 23.6994 4.0622Z" stroke="#FFF" stroke-width="2"></path></svg>
    </button>`;

    

    this.img = new Control(this.node, 'img', '');
    this.img.node.src = item.id;
    this.subtitle = new Control(this.node, 'div', 'card', `??????????????????????????: ${item.manufacturer}`);
    this.color = new Control(this.node, 'div', 'card', `????????: ${item.color}`);
    this.price = new Control(this.node, 'div', 'card', `??????-???? ??????????: ${item.price}`);
    this.amount = new Control(this.node, 'div', 'card', `????????????????????: ${item.amount}`);
    this.button = new Control(this.node, 'button', 'btn', `${item.button}`);

    // this.title.setOnClick(() => {});
    this.button.setOnClick(() => {
      onButtonClick();
    });
  }
}
