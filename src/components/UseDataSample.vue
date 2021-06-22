<template>
    <div class="createComponents">
        {{ sStr }}

        <!-- v-if 사용
        <div v-if="sStr === ''">
            아무거나
        </div>
        v-if 사용 -->

        <!-- <h1>v for 사용 배열</h1>
        <div class="forDiv">
            <div v-for="aItem in sList" :key="`${aItem}int`">
                {{ aItem }}
            </div>
        </div>

        <h1>v for 사용 int</h1>
        <div class="forDiv">
            <div v-for="aItem in 5" :key="`${aItem}int`">
                {{ aItem }}
            </div>
        </div> -->

        <div @click="() => setMessage('test')">
            Click
            {{ gMessage }}
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
        }),
    },
    methods: {
        ...mapMutations([
            'setMessage'
        ]),
        clickEvent() {
            this.sStr = this.sStr === "" ? '아무말이나 쓰세요' : "";
        },
    },
    data() {
        return {
            sStr: "",
            sList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
