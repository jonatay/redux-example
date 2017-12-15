import React from 'react';
import FilterLink from './FilterLink';
const Footer = () => (
  <p>
    Show: <FilterLink filter="SHOW_ALL">All</FilterLink>{' '}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>{' '}
    <FilterLink filter="SHOW_COMPLETE">Complete</FilterLink>
  </p>
);
export default Footer;