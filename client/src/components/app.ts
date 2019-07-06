import { Component, Vue } from 'vue-property-decorator';
import '../scss/main.scss';
import WithRender from './app.html';

@WithRender
@Component
export default class App extends Vue {
  mounted() {
    console.log(window);
  }
}
