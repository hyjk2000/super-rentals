import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | rental-listing', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.rental = EmberObject.create({
      image: 'fake.png',
      title: 'test-title',
      owner: 'test-owner',
      type: 'test-type',
      city: 'test-city',
      bedrooms: 3,
      location: {
        lat: 1,
        lng: 2
      }
    });
  });

  test('should display rental details', async function(assert) {
    await render(hbs`{{rental-listing rental=rental}}`);
    assert.equal(this.$('.listing h3').text().trim(), 'test-title', 'Title: test-title');
    assert.equal(this.$('.listing .owner').text().trim(), 'Owner: test-owner', 'Owner: test-owner');
  });

  test('should toggle wide class on click', async function(assert) {
    await render(hbs`{{rental-listing rental=rental}}`);
    assert.equal(this.$('.image').hasClass('wide'), false, 'initial rendered small');
    await click('.image');
    assert.equal(this.$('.image').hasClass('wide'), true, 'initial wide after click');
    await click('.image');
    assert.equal(this.$('.image').hasClass('wide'), false, 'initial small after second click');
  });
});
