/**
 * Created by HJ on 2020/4/8.
 */
export default {
  namespace: 'DDDD',
  state: {
    A: 5,
    B:{},
  },
  effects: {

  },
  reducers: {
    saveParams(state, { payload }) {
      return {
        ...state,
        B: payload,
      }
    }
  }

}
