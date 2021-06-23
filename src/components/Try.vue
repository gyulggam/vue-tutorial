<template>
    <div class="Try">
        <!-- 
            1. 자신의 이름, 나이, 영문이름을 받는 3개의 빈 input과 저장버튼을 만든다.
            2. 저장 버튼을 누르면 object type의 store 변수에 저장한다.
            3. 해당 화면에 store에 저장된 내용을 P tag에 v-for 를 사용하여 출력한다.
        -->

        <!--
            1. First.vue, Seconed.vue, Third.vue components를 생성한다.
            2. Third.vue에 취미를 입력받는 input과 저장 버튼을 생성한다.
            3. Seconed.vue에 좋아하는 노래 를 입력받는 input과 저장 버튼을 생성한다.
            4. First.vue에 자신의 이름 나이 를 입력받는 input과 저장 버튼을 생성한다.
            5. 각각의 components에서 입력한 정보를 emit을 사용하여 First.vue로 모은다.
            6. First.vue에서 저장버튼을 누르면 
            {
                name: '',
                age: 0,
                song: '',
                hobby: ''
            } 
            형태로 store 변수에 저장한다.
            7. 저장 버튼을 누르면 object type의 store 변수에 저장한다.
            8. 해당 화면에 store에 저장된 내용을 P tag에 v-for 를 사용하여 출력한다.

            신입분들 중 제일 먼저 푼사람 커피 제공!
        -->
    </div>
</template>

<script>
export default {
    name: 'Try',
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
