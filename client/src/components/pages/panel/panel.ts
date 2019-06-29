import { Component, Vue } from 'vue-property-decorator';
import Spinner from 'vue-simple-spinner';
import WithRender from './panel.html';

@WithRender
@Component({
  components: {
    Spinner,
  },
})
export default class Panel extends Vue {
  private isLoading: boolean;

  data() {
    return {
      isLoading: true,
    };
  }
}
