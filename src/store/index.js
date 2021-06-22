
import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new Vuex.Store({
    state: {
        gMessage: 'testMessage'
    },
    mutations: {
            setMessage(state, aMsg) {
                state.gMessage = aMsg
            }
    },
});
