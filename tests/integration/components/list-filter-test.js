import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, triggerKeyEvent, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

const ITEMS = [{city: 'San Francisco'}, {city: 'Portland'}, {city: 'Seattle'}];
const FILTERED_ITEMS = [{city: 'San Francisco'}];

module('Integration | Component | list-filter', function(hooks) {
  setupRenderingTest(hooks);

  test('should intitially load all listings', async function(assert) {
    this.set('filterByCity', () => resolve({ results: ITEMS }));

    await render(hbs`
      {{#list-filter filter=(action filterByCity) as |results|}}
        <ul>
        {{#each results as |item|}}
          <li class="city">
            {{item.city}}
          </li>
        {{/each}}
        </ul>
      {{/list-filter}}
    `);

    return settled().then(() => {
      assert.equal(this.$('.city').length, 3);
      assert.equal(this.$('.city:first-child').text().trim(), 'San Francisco');
    });
  });

  test('should update with matching listing', async function(assert) {
    this.set('filterByCity', val => {
      if (val === '') {
        return resolve({
          query: val,
          results: ITEMS
        });
      } else {
        return resolve({
          query: val,
          results: FILTERED_ITEMS
        });
      }
    });

    await render(hbs`
      {{#list-filter filter=(action filterByCity) as |results|}}
        <ul>
        {{#each results as |item|}}
          <li class="city">
            {{item.city}}
          </li>
        {{/each}}
        </ul>
      {{/list-filter}}
    `);

    await fillIn(this.$('.list-filter input')[0], 's');
    await triggerKeyEvent(this.$('.list-filter input')[0], 'keyup', 83);

    return settled().then(() => {
      assert.equal(this.$('.city').length, 1, 'One result returned');
      assert.equal(this.$('.city:first-child').text().trim(), 'San Francisco');
    });
  });
});
