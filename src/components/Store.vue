<template>
    <div class="createComponents">
        <div @click="() => setMessage('test')">
            Click
            {{ gMessage }}
        </div>

        <br>

        <div @click="() => setUser(sUser)">
            Click
            {{ gUser.name }}
            {{ gUser.age }}
            {{ gUser.email }}
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'CreateComponents',
    computed: {
        ...mapState({
            gMessage: state => state.gMessage,
            gUser: state => state.gUser,
        }),
    },
    methods: {
        ...mapMutations([
            'setMessage',
            'setUser',
        ]),
    },
    data() {
        return {
            sStr: "",
            sList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            sUser: {
                age: 27,
                name: '김진수',
                email: '67sc2@naver.com',
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
    font-size: 30px;
    color: red;
}

.forDiv {
    display: flex;
    justify-content: center;
}
</style>
