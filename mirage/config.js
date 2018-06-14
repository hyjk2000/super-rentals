import rentals from './fixtures/rentals';

export default function() {
  this.namespace = '/api';

  this.get('/rentals', function(db, request) {
    if (request.queryParams.city !== undefined) {
      const filteredRentals = rentals.filter(i => (
        i.attributes.city.toLowerCase().includes(request.queryParams.city.toLowerCase())
      ));
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });

  this.get('/rentals/:id', function(db, request) {
    return { data: rentals.find(rental => request.params.id === rental.id) };
  });
}
