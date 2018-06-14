import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | location-map', function(hooks) {
  setupRenderingTest(hooks);

  test('should append map element to container element', async function(assert) {
    this.set('myLocation', 'New York');
    this.set('myLat', 40.7301);
    this.set('myLng', -73.9867);
    await render(hbs`
      {{location-map location=myLocation
                     lat=myLat
                     lng=myLng}}
    `);
    assert.equal(this.$('.leaflet-container').length, 1, 'container should have one child');
  });
});
