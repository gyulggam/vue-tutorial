<template>
    <div>
        <div @click="clickEvent">
            클릭
        </div>

        {{ sStr }}
    </div>
</template>

<script>
export default {
  name: 'Vif',
  methods: {
      clickEvent() {
        //   if (this.sStr === "") {
        //       this.sStr = '아무말이나 쓰세요';
        //   } else {
        //       this.sStr = "";
        //   }

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
