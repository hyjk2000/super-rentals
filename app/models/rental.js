import DS from 'ember-data';
const { Model } = DS;
import { attr } from '@ember-decorators/data';

export default class RentalModel extends Model {
  @attr('string') title;
  @attr('string') owner;
  @attr('string') city;
  @attr('string') category;
  @attr('string') image;
  @attr('number') bedrooms;
  @attr('string') description;
  @attr location;
}
