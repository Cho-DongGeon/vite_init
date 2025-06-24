<template>
    <div>
        <div class="test">
            <button class="testBtn" @click="test1">alert</button>
            <button class="testBtn" @click="test2">confirm</button>
            <button class="testBtn" @click="test3">loading(3초뒤 off)</button>
        </div>
        <div></div>
        <!-- Vue + Vite Template -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods: {
        test1() {
            this.$alert('test alert');
        },
        async test2() {
            await this.$confirm('test confirm');
        },
        test3() {
            this.$showLoading();
            setTimeout(() => this.$hideLoading(), 3000);
        },
    },
};
</script>
<style scoped>
.test {
    display: flex;
    justify-content: center;
    gap: 12px;
}
.testBtn {
    all: unset;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 24px;
    background: #4a87d1;
    color: #fff;
    border-radius: 8px;
}
</style>
