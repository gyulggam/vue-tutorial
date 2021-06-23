<template>
    <div class="Parents">
        Parents
        <ChildPage  :pPropsData="sStr"
                    @sEmitData="emittest"/>
        {{ sEmitDatas }}
    </div>
</template>

<script>
import ChildPage from '@/components/props/Child.vue'

export default {
    name: 'Parents',
    components: {
        ChildPage,
    },
    methods: {
        emittest(aData) {
            this.sEmitDatas = aData;
        }
    },
    data() {
        return {
            sStr: "프롭스",
            sEmitDatas: [],
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
