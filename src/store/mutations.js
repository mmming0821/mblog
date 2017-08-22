import * as types from './types'

const state = {
  sideMenuToggle: false
}

const mutations = {
  [types.SIDE_MENU_TOGGLE] (state) {
    state.sideMenuToggle = !state.sideMenuToggle
  }
}

export { mutations, state }
