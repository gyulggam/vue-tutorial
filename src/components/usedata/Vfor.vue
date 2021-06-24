<template>
    <div>
        <h1>v for 사용 배열</h1>
        <div class="forDiv">
            <div v-for="(aItem, aIdx) in sList" :key="`${aItem}${aIdx}int`">
                {{ aItem }}
            </div>
        </div>

        <h1>v for 사용 int</h1>
        <div class="forDiv">
            <div v-for="aItem in 5" :key="`${aItem}int`">
                {{ aItem }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Vfor',
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