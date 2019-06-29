import Vue from 'vue';

/**
 * Convert the passed value to a lowercase string
 */
Vue.filter('lowercase', (value: string | number) => {
  if (!value) return '';
  return String(value).toLowerCase();
});

/**
 * Convert the passed value to an uppercase string
 */
Vue.filter('uppercase', (value: string | number) => {
  if (!value) return '';
  return String(value).toUpperCase();
});
