import Component from '@ember/component';
import { argument } from '@ember-decorators/argument'
import { type } from '@ember-decorators/argument/type'

export default class LocationMapComponent extends Component {
  @argument
  @type('string')
  location;

  @argument
  @type('number')
  lat;

  @argument
  @type('number')
  lng;

  zoom = 10;

  constructor() {
    super(...arguments);
    this.set('pos', [this.get('lat'), this.get('lng')]);
  }
}
