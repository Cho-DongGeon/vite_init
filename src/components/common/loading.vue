<template>
    <div v-if="isVisible" class="loading-overlay">
        <div class="spinner"></div>
    </div>
</template>

<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
    setup(_, { expose }) {
        const isVisible = ref(false);

        function show() {
            isVisible.value = true;
        }

        function hide() {
            isVisible.value = false;
        }

        expose({ show, hide });

        return {
            isVisible,
        };
    },
});
</script>

<style scoped>
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #ccc;
    border-top-color: #007bff;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
