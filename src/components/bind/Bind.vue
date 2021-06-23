<template>
    <div class="Bind">
        <div class="inputLine">
            <label >나이</label>
            <input type="text" v-model="sUserInfo.age">
        </div>

        <div class="inputLine">
            <label >이름</label>
            <input type="text" v-model="sUserInfo.name">
        </div>
        
        <div>
            <label >영어이름</label>
            <input type="text" v-model="sUserInfo.engname">
        </div>

        <br>
        <br>

        <div class="inputLine">
            <label >나이</label>
            <input type="text" v-model="gUser.age">
        </div>

        <div class="inputLine">
            <label >이름</label>
            <input type="text" v-model="gUser.name">
        </div>
        
        <div>
            <label >영어이름</label>
            <input type="text" v-model="gUser.engname">
        </div>

        <button @click="() => setUser(sUserInfo)">
            저장!
        </button>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'Bind',
    computed: {
        ...mapState({
            gUser: state => state.gUser,
        }),
    },
    methods: {
        ...mapMutations([
            'setUser'
        ]),
    },
    data() {
        return {
            sUserInfo: {
                age: 10,
                name: 'kim',
                engname: 'jay',
            },
            // sAge: 10,
            // sName: 'kim',
            // sEngName: 'jay',
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

.inputLine {
    display: flex;
    justify-content: center;
}
</style>
