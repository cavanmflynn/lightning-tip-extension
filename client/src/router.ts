import Vue from 'vue';
import Router from 'vue-router';
import { InvoicePaid } from './components/panel/pages/invoice-paid';
import { PayInvoice } from './components/panel/pages/pay-invoice';
import { RequestInvoice } from './components/panel/pages/request-invoice';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/panel.html',
      component: () => import('./components/panel/panel'),
      children: [
        {
          path: '',
          name: 'panel.requestInvoice',
          component: RequestInvoice,
        },
        {
          path: 'pay-invoice',
          name: 'panel.payInvoice',
          component: PayInvoice,
        },
        {
          path: 'invoice-paid',
          name: 'panel.invoicePaid',
          component: InvoicePaid,
        },
      ],
    },
    {
      path: '/config.html',
      name: 'config',
      component: () => import('./components/config/config'),
    },
  ],
});
