import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartament'
];

export function rentalPropertyType([type]/*, hash*/) {
  if(communityPropertyTypes.includes(type)) {
    return 'Comunity';
  }
  return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
