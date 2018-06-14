import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { type } from '@ember-decorators/argument/type';
import { action } from '@ember-decorators/object';

export default class RentalListingComponent extends Component {
  @argument
  @type('object')
  rental = {};

  @type('boolean')
  isWide = false;

  @action
  toggleImageSize() {
    this.toggleProperty('isWide');
  }
}
