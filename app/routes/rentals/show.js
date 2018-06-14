import Route from '@ember/routing/route';

export default class RentalsShowRoute extends Route {
  model(params) {
    return this.get('store').findRecord('rental', params.rental_id);
  }
}
