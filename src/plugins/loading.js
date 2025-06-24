// plugins/loading.js
import { createApp } from 'vue';
import loading from '@/components/common/loading.vue';

export default {
    install(app) {
        const div = document.createElement('div');
        document.body.appendChild(div);

        const loadingApp = createApp(loading);
        const vm = loadingApp.mount(div);

        app.config.globalProperties.$showLoading = () => {
            vm.show(); // expose한 메서드 사용
        };

        app.config.globalProperties.$hideLoading = () => {
            vm.hide();
        };
    },
};
