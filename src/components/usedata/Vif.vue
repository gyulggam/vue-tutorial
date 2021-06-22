<template>
    <div>
        <!-- v-if 사용
        <div v-if="sStr === ''">
            아무거나
        </div>
        v-if 사용 -->
    </div>
</template>

<script>
export default {
  name: 'Vif',
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
