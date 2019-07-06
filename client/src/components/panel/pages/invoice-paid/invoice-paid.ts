import { Component, Vue } from 'vue-property-decorator';
import WithRender from './invoice-paid.html';

@WithRender
@Component
export default class InvoicePaid extends Vue {}
