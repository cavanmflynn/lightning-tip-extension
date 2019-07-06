import { AsyncComponent } from 'vue';

export const RequestInvoice: AsyncComponent = () =>
  import(/* webpackChunkName: "panel" */ './request-invoice');
