import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  onSubmit = (data: FormGroup) => {
    if(data.valid) {
      console.log(data.value);
    } 
  }
}
