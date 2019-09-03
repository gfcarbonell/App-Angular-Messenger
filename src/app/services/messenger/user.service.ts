import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUserService } from '../../contract-services/messenger/iuser.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService{
  existById(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  exist(object: import("../../model-interfaces/user").User): boolean {
    throw new Error("Method not implemented.");
  }
  get(object: import("../../model-interfaces/user").User): import("../../model-interfaces/user").User {
    return this.http.get('https://randomuser.me/api/?results=25');
  }
  getById(id: number): import("../../model-interfaces/user").User {
    throw new Error("Method not implemented.");
  }
  getAll(): import("../../model-interfaces/user").User[] {
    throw new Error("Method not implemented.");
  }
  delete(object: import("../../model-interfaces/user").User): import("../../model-interfaces/user").User {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): import("../../model-interfaces/user").User {
    throw new Error("Method not implemented.");
  }
  create(object: import("../../model-interfaces/user").User): import("../../model-interfaces/user").User {
    throw new Error("Method not implemented.");
  }
  update(object: import("../../model-interfaces/user").User): import("../../model-interfaces/user").User {
    throw new Error("Method not implemented.");
  }
  
  constructor() { }

}
