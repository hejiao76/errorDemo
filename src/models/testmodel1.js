/**
 * Created by HJ on 2020/4/8.
 */
export default {
  namespace: 'testmodel1',
  state: {
    a: 1,
  },
  effects: {

  },
  reducers: {
    saveParams(state, { payload }) {
      return {
        ...state,
        a: payload,
      }
    }
  }

}
