import {reactive, shallowRef} from '@vue/reactivity'

class OverlayManager {
  constructor() {
    this._status = reactive({
      queueViews: [],
      currentView: null
    })
  }

  get status() {
    return this._status
  }

  show(component, bindData = {}) {
    this._status.currentView = {component: shallowRef(component), bindData}
  }

  setView(component, bindData = {}) {
    if (this._status.currentView) {
      this.queueViews.push({component, bindData})
      return
    }

    this.show(component, bindData)
  }

  close() {
    this._status.currentView = null
    if (!this._status.queueViews.length) return
    this.show(...this._status.queueViews.shift())
  }
}

export default new OverlayManager