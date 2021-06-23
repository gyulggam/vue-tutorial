<template>
    <div class="Create"></div>
</template>

<script>
export default {
    name: 'Create',
    computed: {
        cycleTestFun() {
            const sStr = `변환된 sTestVar`;
            
            return sStr
        }
    },
    beforeCreate() {
        console.log("beforeCreate 입니다.");
        console.log(`testData = ${this.sTestVar}`);
    },
    created() {
        console.log("Create 입니다.");
        console.log(`testData = ${this.sTestVar}`);
    },
    beforeMount() {
        console.log("beforeMount 입니다.");
        console.log(`testData = ${this.sTestVar}`);
    },
    mounted() {
        console.log("mounted 입니다.");
        console.log(`testData = ${this.sTestVar}`);
    },
    data() {
        return {
            sTestVar: 'test',
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
