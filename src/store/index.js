
import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new VueX.Store({
    state: {
        gMessage: 'testMessage',
        gUser: {
            age: 50,
            name: '111',
            engname: '222',
        },
        gUserInfo:{
            age: 50,
            name: '111',
            engname: '222',
        }
    },
    mutations: {
        setMessage(state, aMsg) {
            state.gMessage = aMsg
        },
        setUser(state, aUser) {
            state.gUser = aUser
        },
        setgUserInfo(state, aInfo) {
            state.gUserInfo = aInfo
        }
    },
});
