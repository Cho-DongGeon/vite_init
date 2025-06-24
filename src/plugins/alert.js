import { createApp } from 'vue';
import alert from '@/components/common/alert.vue';

export default {
    install(app) {
        app.config.globalProperties.$alert = (text, header) => {
            return new Promise((resolve) => {
                const container = document.createElement('div');
                document.body.appendChild(container);

                const modalApp = createApp(alert, {
                    text,
                    header: header || "알림",
                    resolve,
                });

                modalApp.mount(container);
            });
        };
    },
};
