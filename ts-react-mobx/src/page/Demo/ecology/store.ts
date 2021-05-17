import { observable, action, computed, makeObservable } from 'mobx'

export default class DemoStore {
  constructor() {
    makeObservable(this) // mobx v6 必须手动 makeObservable
  }

  @observable demo2 = 1
  @action public async demoapi() {
    this.demo2 = 2
  }
}
