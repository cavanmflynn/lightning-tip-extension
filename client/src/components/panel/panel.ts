import { Component, Vue } from 'vue-property-decorator';
import WithRender from './panel.html';

@WithRender
@Component
export default class Panel extends Vue {}
