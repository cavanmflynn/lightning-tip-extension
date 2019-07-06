import { Component, Vue } from 'vue-property-decorator';
import WithRender from './request-invoice.html';

@WithRender
@Component
export default class RequestInvoice extends Vue {
  public message: string = '';

  /**
   * Request a Lightning invoice from the streamers node
   */
  requestInvoice() {
    const loader = this.$loading.open({});

    // UI Testing
    setTimeout(() => {
      loader.close();
      this.$router.replace({ name: 'panel.payInvoice' });
    }, 2500);
  }
}
