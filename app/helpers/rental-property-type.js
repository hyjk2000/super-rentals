import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([propertyType]) {
  return communityPropertyTypes.includes(propertyType)
    ? 'Community'
    : 'Standalone';
}

export default helper(rentalPropertyType);
