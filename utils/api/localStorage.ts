export class StorageService {
  /* tslint:disable-next-line */
  constructor() {}

  /* tslint:disable-next-line */
  private static _instance: StorageService

  public static getInstance(): StorageService {
    if (!this._instance) {
      this._instance = new StorageService()
    }

    return this._instance
  }

  public addKey(key: string, item: string) {
    localStorage.setItem(key, item);
  }

  public getKey(key: string) {
    return localStorage.getItem(key);
  }

  public removeKey(key: string) {
    localStorage.removeItem(key);
  }

  public clearAllKey() {
    localStorage.clear();
  }
}
