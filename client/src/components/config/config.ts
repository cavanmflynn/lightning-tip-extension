import { Component, Vue } from 'vue-property-decorator';
import WithRender from './config.html';

@WithRender
@Component
export default class Config extends Vue {}
