import { AsyncComponent } from 'vue';

export const InvoicePaid: AsyncComponent = () =>
  import(/* webpackChunkName: "panel" */ './invoice-paid');
