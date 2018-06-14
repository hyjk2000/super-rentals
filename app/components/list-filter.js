import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { type, arrayOf } from '@ember-decorators/argument/type';
import { task, timeout } from 'ember-concurrency';

export default class ListFilterComponent extends Component {
  @type(arrayOf('string'))
  classNames = ['list-filter'];

  @type('string')
  value = '';

  @argument
  @type(Function)
  filter;

  constructor() {
    super(...arguments);
    this.get('filter')('').then(({ results }) => this.set('results', results));
  }

  handleFilterEntry = task(function * () {
    yield timeout(500);

    const filterInputValue = this.get('value');
    const filterAction = this.get('filter');

    const { query, results } = yield filterAction(filterInputValue);
    if (query === this.get('value')) {
      this.set('results', results);
    }
  }).drop();
}
