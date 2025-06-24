import { createApp } from 'vue';
import confirm from '@/components/common/confirm.vue';

export default {
    install(app) {
        app.config.globalProperties.$confirm = (text, header) => {
            return new Promise((resolve) => {
                const container = document.createElement('div');
                document.body.appendChild(container);

                const modalApp = createApp(confirm, {
                    text,
                    header: header || "확인",
                    resolve,
                });

                modalApp.mount(container);
            });
        };
    },
};
