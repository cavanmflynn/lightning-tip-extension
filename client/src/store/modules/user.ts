import { Role } from '@/types';
import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ name: 'user' })
export class UserModule extends VuexModule {
  private _token: string | undefined;
  private _id: string | undefined;
  private _role: Role | undefined;

  get token() {
    return this._token;
  }

  get id() {
    return this._id;
  }

  get role() {
    return this._role;
  }

  @Mutation
  setToken(token: string) {
    this._token = token;
  }

  @Mutation
  setId(id: string) {
    this._id = id;
  }

  @Mutation
  setRole(role: Role) {
    this._role = role;
  }
}
