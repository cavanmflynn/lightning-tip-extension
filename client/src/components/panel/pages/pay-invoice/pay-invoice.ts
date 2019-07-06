import { Component, Vue } from 'vue-property-decorator';
import VueQRCode from 'vue-qr-component';
import WithRender from './pay-invoice.html';

@WithRender
@Component({
  components: {
    VueQRCode,
  },
})
export default class PayInvoice extends Vue {
  public invoice: string = 'UI Testing :D';

  mounted() {
    // UI Testing
    setTimeout(() => {
      this.$router.replace({ name: 'panel.invoicePaid' });
    }, 5000);
  }
}
