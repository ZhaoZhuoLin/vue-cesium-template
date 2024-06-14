import {
    defineStore
} from "pinia"
export const useEarthStore = defineStore({
    id: "earthStore",
    state: () => {
        requestTime: "",
    },
    getters: {},
    actions: {
        setRequestTime(val) {
            this.requestTime = val;
        }
    }
})