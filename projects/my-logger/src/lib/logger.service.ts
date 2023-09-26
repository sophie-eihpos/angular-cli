import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  log(message: string) {
    console.log(message);
  }
}
