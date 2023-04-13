// src/models/global

const GlobalModel = {
  namespace: 'global',

  state: {
    name: 'learn umi',
    list: ['step1', 'step2', 'step3', 'step4'],
  },
  effects: {
    *changeName({ payload }, { call, put }) {
      yield put({
        type: 'save',
        payload: { name: payload.name },
      });
    },
    /**
     * 
     * @param {*put} put 
     * @deprecated
     *  作用与 dispatch 相似，不过 put 是表示向 reducers 抛出一个事件
     * @param {*select} select 
     * @deprecated
     *  select 的作用是查找 state 
     * @param {*call} call 
     * @deprecated
     *  调用其他函数
     */
    *deleteItem({ payload }, { call, put, select }) {
      // 获取最新的 global
      const { list } = yield select(_ => _.global);
      yield call(
        () =>
          new Promise(resolve => {
            setTimeout(resolve, 1000);
          }),
      );
      list.splice(
        list.findIndex(e => e === payload),
        1,
      );
      yield put({
        type: 'save',
        payload: { list },
      });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default GlobalModel;