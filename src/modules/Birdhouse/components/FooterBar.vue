<template>
    <footer className="w-full h-16 bg-[#1E1F25] flex items-center justify-center absolute left-0 bottom-0">
        <div>
            <vue-awesome-paginate :class="{ 'noClick': overviewStore.clicked }" :total-items="overviewStore.historyCount"
                :items-per-page="5" :max-pages-shown="roundUp(overviewStore.historyCount)" v-model="historyPage"
                @click="clearPage()" />
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
//import { ref } from 'vue'
import axios from "axios";
import { useOverviewStore } from '../../Overview/stores/overviewStore'
import { storeToRefs } from 'pinia';
import { APIHistory } from '../../../exports/api';

export default defineComponent({
    name: "FooterBar",
    setup() {
        const overviewStore = useOverviewStore()
        const { historyPage } = storeToRefs(overviewStore)

        //
        // max = 


        watch(historyPage, async () => {
            await axios
                .get(APIHistory + "history?page=" + overviewStore.historyPage, {
                    headers: {
                        'X-UBID': overviewStore.ubid
                    }
                })
                .then((response) => {
                    //console.log(response.data[0].name)
                    for (let index = 0; index < response.data.length; index++) {
                        const element = response.data[index];
                        overviewStore.history.push(element);
                    }
                });
        })

        return { historyPage, overviewStore }
    },
    data() {
        return {
            count: 1
        }
    },
    async mounted() {
        await axios.get(APIHistory + "history/count/" + this.overviewStore.ubid).then((response) => {
            this.overviewStore.historyCount = response.data
        })
    },
    components: {},
    methods: {
        // selectPage(page: number) { //para el :on-click=""
        //     console.log(page)
        // },
        roundUp(count: number): number {
            const dividedNumber = count / 5.0;
            const roundedNumber = Math.ceil(dividedNumber);
            return roundedNumber;
        },

        clearPage() {
            this.overviewStore.history = []
            console.log('cleared array')
        },
    }
})
</script>

<style>
.pagination-container {
    display: flex;
    column-gap: 10px;
}

.paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #1E1F25;
    /**  border: 1px solid rgb(217, 217, 217);*/
    color: #ffffff66;
}

.paginate-buttons:hover {
    background-color: #2d2f35;
}

.active-page {
    background-color: #5051F9;
    border: 1px solid #5051F9;
    color: white;
}

.active-page:hover {
    background-color: #5e5efc;
}

.noClick {
    pointer-events: none;
}
</style>
