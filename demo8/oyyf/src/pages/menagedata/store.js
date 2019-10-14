import ajax from 'utils/ajax'
import API from 'api'
const GET_TABLE_DATA = 'GET_TABLE_DATA'
const DELETE_DATA = 'DELETE_DATA'

const shopData = {
  state: {
    tableData : null
  },
  actions: {
    async getTableData ({commit}) {
      const result = await ajax({
        url: API.shop,
        method:'get'
      })

      const action = {
        type: GET_TABLE_DATA,
        payload:result,
      }
      commit(action)
    },


    async handleDelete ({ commit }, _id) {
      const result = await ajax({
        url: API.shop,
        method: 'delete',
        params: {
          _id
        }
      })
      const action = {
        type: DELETE_DATA,
        payload:result,
      }
      commit(action)
    }


  },
  mutations: {
    [GET_TABLE_DATA] (state, action) {
      state.tableData = action.payload.data.data
    },
    [DELETE_DATA] (state, action) {
      state.tableData = action.payload.data.data
    },
  }
}


export default shopData