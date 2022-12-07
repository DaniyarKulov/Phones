type up = (date: string[]) => void;

export class Model {
  data: string[];
  onUpdate!: up;
  constructor(init: string[]) {
    if (init.length >= 0) {
      this.data = init;
    } else {
      const basket = localStorage.getItem('basket') ?? '[]';
      this.data = JSON.parse(basket);
    }
  }

  setData(newValue: string) {
    this.data = [...this.data, newValue];
    localStorage.setItem('basket', JSON.stringify(this.data));
    this.onUpdate(this.data);
  }
  removeDate() {
    this.data = [];
    console.log(this.data);

    this.onUpdate(this.data);
    localStorage.clear();
  }
}
