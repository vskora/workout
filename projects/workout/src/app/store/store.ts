export abstract class Store {

  readonly KEY: string = '';

  get<T>(): T | null {
    const data = localStorage.getItem(this.KEY);
    return data ? JSON.parse(data) : null;
  }

  set(data: unknown) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  }

  save(data: unknown) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  }
}
