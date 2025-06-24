<template>
    <div class="modalBG">
        <div class="modalContent">
            <h4 class="modalHeader">{{ header }}</h4>
            <div class="modalBody">
                <p v-html="text"></p>
            </div>
            <div class="modalButtons">
                <button @click="cancel" class="cancel">취소</button>
                <button @click="confirm">확인</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        header: {
            type: String,
            default: '확인',
        },
        text: {
            type: String,
            default: '내용 없음',
        },
        resolve: {
            type: Function,
            required: true,
        },
    },
    methods: {
        confirm() {
            this.resolve(true);
            this.$el.remove(); // DOM에서 제거
        },
        cancel() {
            this.resolve(false);
            this.$el.remove(); // DOM에서 제거
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
    background: rgba(30, 41, 59, 0.45);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: fadeInBG 0.25s ease;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
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
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(30, 41, 59, 0.18), 0 1.5px 6px rgba(0, 0, 0, 0.05);
    width: 340px;
    max-width: 90vw;
    overflow: hidden;
    animation: popIn 0.22s cubic-bezier(0.22, 1, 0.36, 1);
    font-family: 'Pretendard', 'Noto Sans KR', Arial, sans-serif;
    transition: box-shadow 0.18s;
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
    font-size: 1.18rem;
    color: #22223b;
    padding: 0 10px 0;
    font-weight: 700;
    text-align: center;
    letter-spacing: -0.5px;
    border-bottom: 1px solid #f1f5f9;
    background: #fff;
}

.modalBody {
    padding: 22px 18px 18px 18px;
    text-align: center;
    font-size: 1.04rem;
    color: #334155;
    font-weight: 400;
    line-height: 1.65;
    background: #fff;
    overflow: hidden;
}

.modalButtons {
    display: flex;
    border-top: 1px solid #f1f5f9;
    background: #f9fafb;
}

.modalButtons > button {
    flex: 1 0 0;
    border: none;
    outline: none;
    padding: 14px 0;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.18s;
    letter-spacing: 0.02em;
    background: none;
    color: #475569;
    border-radius: 0;
    position: relative;
    box-shadow: none;
    z-index: 1;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
}

.modalButtons > button:active {
    filter: brightness(0.96);
}

.modalButtons > .cancel {
    border-right: 1px solid #e5e7eb;
    color: #64748b;
    background: none;
    border-radius: 0 0 0 16px;
}
.modalButtons > .cancel:hover,
.modalButtons > .cancel:focus {
    background: #f3f4f6;
    color: #334155;
    box-shadow: 0 1px 6px rgba(100, 116, 139, 0.1);
}

.modalButtons > button:not(.cancel) {
    color: #fff;
    background: #4a87d1;
    border-radius: 0 0 16px 0;
    box-shadow: none;
}
.modalButtons > button:not(.cancel):hover,
.modalButtons > button:not(.cancel):focus {
    background: #2563eb;
    color: #fff;
    box-shadow: 0 2px 8px rgba(99, 102, 241, 0.13);
}

@media (hover: none) and (pointer: coarse) {
    .modalButtons > button:hover,
    .modalButtons > button:focus {
        filter: none;
        box-shadow: none;
    }
}

.modalButtons > button:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: -2px;
    z-index: 2;
}

/* 버튼 분할선이 모바일에서 두껍게 보이지 않게 */
@media (max-width: 400px) {
    .modalContent {
        width: 98vw;
    }
    .modalButtons > .cancel {
        border-radius: 0 0 0 12px;
    }
    .modalButtons > button:not(.cancel) {
        border-radius: 0 0 12px 0;
    }
}
</style>
