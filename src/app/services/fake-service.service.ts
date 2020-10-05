import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  private activationCode = 549172;

  constructor() { }

  checkCode(code: number): boolean {
    return code === this.activationCode;
  }

}
