import { getModule } from 'vuex-module-decorators';
import { UserModule } from './modules';
import { store } from './store';

// Store Export
export { store } from './store';

// Module Exports
export const user = getModule(UserModule, store);
