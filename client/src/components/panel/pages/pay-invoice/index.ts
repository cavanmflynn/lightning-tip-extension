import { AsyncComponent } from 'vue';

export const PayInvoice: AsyncComponent = () =>
  import(/* webpackChunkName: "panel" */ './pay-invoice');
