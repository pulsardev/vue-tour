import {Tour} from './index';

declare module 'vue/types/vue' {

    interface Vue {
        $tours: Record<string, Tour>;
    }
}
