<template>
    <div className="w-full h-[744px] m-4">
        <Line v-if="loaded" :data="data" :options="options" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import colorLib from '@kurkle/color';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { APIHistory } from '../../../exports/api';
import { useOverviewStore } from "../../Overview/stores/overviewStore";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)
export default defineComponent({
    name: 'LineChart',
    // eslint-disable-next-line vue/no-reserved-component-names
    components: { Line },
    setup() {
        const overviewStore = useOverviewStore()


        return { overviewStore }
    },
    data() {
        return {
            data: [], birds: [], eggs: [], labels: [], loaded: false,
            options: {
                scales: {
                    y: {
                        grid: {
                            color: '#FFFFFF33'
                        }
                    },
                    x: {
                        grid: {
                            color: '#FFFFFF33'
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    async mounted() {
        await axios.get(APIHistory + 'history/graph', {
            headers: {
                'X-UBID': this.overviewStore.ubid
            }
        }).then((response) => {
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                this.birds.push(element.updatedBirds)
                this.eggs.push(element.updatedEggs)
                this.labels.push(element.date)
            }
        })
        this.data = {
            labels: this.labels,
            datasets: [{
                label: 'Birds',
                backgroundColor: this.transparentizeColor('#744F99', 0.9),
                borderColor: '#744F99',
                fill: true,
                data: this.birds
            },
            {
                label: 'Eggs',
                backgroundColor: this.transparentizeColor('#0E9CFF', 0.9),
                borderColor: '#0E9CFF',
                fill: true,
                data: this.eggs
            }]
        }
        this.loaded = true
    },
    methods: {
        transparentizeColor(value: string, opacity: number): string {
            var alpha = opacity === undefined ? 0.5 : 1 - opacity;
            return colorLib(value).alpha(alpha).rgbString();
        }
    }
})
</script>

<style></style>