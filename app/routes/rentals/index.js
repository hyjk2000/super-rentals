import Route from '@ember/routing/route';

export default class RentalsIndexRoute extends Route {
  model() {
    return this.get('store').findAll('rental');
  }
}
