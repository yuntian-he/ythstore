import { FormControl, ValidationErrors } from '@angular/forms';

export class YthShopValidators {
  static notOnlyWhitespace(control: FormControl): ValidationErrors {
    // check if the string only has white space
    if (control.value != null && control.value.trim().length === 0) {
      // invalid
      return { 'notOnlyWhitespace': true };
    }
    else {
        return null;
    }
  }
}
