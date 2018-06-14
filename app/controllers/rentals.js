import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class RentalsController extends Controller {
  @action
  filterByCity(param) {
    if (param === '') {
      return this.get('store')
                 .findAll('rental')
                 .then(results => {
                   return { query: param, results };
                 });
    } else {
      return this.get('store')
                 .query('rental', { city: param })
                 .then(results => {
                   return { query: param, results };
                 });
    }
  }
}
