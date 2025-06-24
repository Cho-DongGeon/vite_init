<template>
    <div class="modalBG">
        <div class="modalContent">
            <h1 class="modalHeader">{{ header }}</h1>
            <div class="modalBody">
                <p v-html="text"></p>
            </div>
            <div class="modalButtons">
                <button @click="confirm" ref="confirmBtn">확인</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        header: {
            type: String,
            default: '알림',
        },
        text: {
            type: String,
            default: '',
        },
        resolve: {
            type: Function,
            required: true,
        },
    },
    mounted() {
        this.$refs.confirmBtn?.focus();
    },
    methods: {
        confirm() {
            this.resolve(); // 반환값 없음
            this.$el.remove(); // DOM 제거
        },
    },
};
</script>
<style scoped>
.modalBG {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(30, 41, 59, 0.45); /* 좀 더 고급스러운 색상 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: fadeInBG 0.25s ease;
}

@keyframes fadeInBG {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.modalContent {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 8px 32px rgba(30, 41, 59, 0.18), 0 1.5px 6px rgba(0, 0, 0, 0.05);
    width: 350px;
    max-width: 90vw;
    overflow: hidden;
    animation: popIn 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    font-family: 'Pretendard', 'Noto Sans KR', Arial, sans-serif;
}

@keyframes popIn {
    from {
        transform: scale(0.96) translateY(25px);
        opacity: 0.5;
    }
    to {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
}

.modalHeader {
    font-size: 1.25rem;
    color: #1e293b;
    padding: 28px 0 8px 0;
    font-weight: 700;
    text-align: center;
    letter-spacing: -0.5px;
    border-bottom: 1px solid #f1f5f9;
}

.modalBody {
    padding: 26px 22px 18px 22px;
    text-align: center;
    font-size: 1.05rem;
    color: #334155;
    font-weight: 400;
    line-height: 1.6;
}

.modalButtons {
    padding: 0;
    background: #f9fafb;
}

.modalButtons > button {
    width: 100%;
    background: #4a87d1;
    color: #fff;
    font-size: 1.05rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
    padding: 14px 0;
    transition: 0.18s;
    box-shadow: 0 1px 2px rgba(100, 116, 139, 0.08);
    letter-spacing: 0.1em;
}

.modalButtons > button:hover,
.modalButtons > button:focus {
    background: #2563eb 100%;
    outline: none;
    box-shadow: 0 2px 8px rgba(99, 102, 241, 0.15);
}
</style>
