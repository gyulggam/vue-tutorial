<template>
    <div class="Child">
        {{ pPropsData }}
        {{ pPropsSecData }}
    </div>
</template>

<script>
export default {
    name: 'Child',
    props: [
        'pPropsData',
        'pPropsSecData'
    ],
    created() {
      this.$emit('sEmitData', [1,2,3,4,5,6,7,8,9,10])
    },
    data() {
        return {
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
