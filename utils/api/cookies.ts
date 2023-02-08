import { COOKIE_KEYS } from '@/constants/common';
import { addMonths } from 'date-fns';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export class CookieService {
  accessToken: string

  constructor() {
    this.accessToken = this.getAccessToken()
  }

  /* tslint:disable-next-line */
  private static _instance: CookieService

  public static getInstance(): CookieService {
    if (!this._instance) {
      this._instance = new CookieService();
    }

    return this._instance
  }

  public getCookie(key: string) {
    return cookies.get(key);
  }

  public setCookie(key: string, data: string) {
    const currentTime = new Date();
    const expires = addMonths(currentTime, 1);
    cookies.set(key, data, { expires, path: '/' });
  }

  public deleteCookie(key: string) {
    cookies.remove(key, { path: '/' });
  }

  private getAccessToken() {
    return cookies.get(COOKIE_KEYS.accessToken);
  }

  public setAccessToken(accessToken: string) {
    const currentTime = new Date();
    const expires = addMonths(currentTime, 1);
    cookies.set(COOKIE_KEYS.accessToken, accessToken, {
      expires,
      path: '/',
    });
  }

  public removeAccessToken() {
    cookies.remove(COOKIE_KEYS.accessToken);
  }
}
