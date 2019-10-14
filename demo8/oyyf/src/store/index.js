import Vuex from 'vuex'
import Vue from 'vue'
import shopData from 'pages/menagedata/store.js'

Vue.use( Vuex )

const store = new Vuex.Store({
    modules: {
        //分片的数据
        shopData
    }
})


export default store 