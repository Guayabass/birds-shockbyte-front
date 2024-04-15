<template>
    <ul>
        <li className="w-full h-[72px] bg-[#1E1F25] m-4 rounded-lg text-white font-normal text-base"
            v-for="(history, index) in overviewStore.history" :key="index">
            <div className="h-full flex items-center">
                <p className="ml-4 mr-8">{{ history.modifiedAt }}</p>
                <div className="mr-[2px] flex flex-row items-center">
                    <svg class="mr-1" width="32px" height="32px" viewBox="0 0 400 400" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M191.179 273.824C240.235 297.511 305.516 282.723 327.848 235.07C343.653 201.345 294.142 174.478 268.869 180.597C249.795 185.215 238.443 210.424 226.139 201.065C216.677 165.605 199.9 119.51 135.192 107.37C114.091 103.412 83.5311 110.64 102.336 135.815C116.496 154.766 137.36 163.983 158.442 173.765C164.792 176.714 169.78 183.842 176.581 185.72C178.199 186.166 181.717 185.007 181.525 186.671C181.105 190.238 113.899 155.977 108.125 179.498C103.955 196.484 152.426 206.208 162.693 208.177C163.338 208.3 167.696 208.583 167.631 209.126C167.291 212.044 128.996 205.366 122.548 219.126C113.925 237.519 146.169 239.099 156.097 238.053C164.394 237.176 172.809 236.947 180.889 235.438C181.156 235.389 194.153 233.997 169.23 238.769C147.16 242.995 90.4779 253.756 88.9641 262.487C87.4503 271.218 95.0462 273.682 99.275 281.556C103.504 289.429 106.52 291.001 110.939 295.051C115.357 299.1 142.753 259.14 172.051 268.915M323.418 199.974C348.126 209.727 352.589 199.404 329.977 213.31M291.997 210.007C291.781 209.411 291.563 208.813 291.345 208.215"
                                stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </g>
                    </svg>{{ history.updatedBirds }}
                </div>
                <div className="mx-[2px] flex flex-row items-center">
                    <svg class="mx-2" fill="#ffffff" width="16px" height="16px" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M12,23c6.8,0,9-6.737,9-10a13.629,13.629,0,0,0-4.293-9.707A7.193,7.193,0,0,0,12,1,7.193,7.193,0,0,0,7.293,3.293,13.629,13.629,0,0,0,3,13C3,16.263,5.2,23,12,23ZM11.989,3C14.444,3.036,19,7.393,19,13c0,2.61-1.711,8-7,8s-7-5.39-7-8C5,7.381,9.559,3.053,11.989,3ZM7.812,16.488a1,1,0,1,1,1.745-.976A2.663,2.663,0,0,0,12,17a1,1,0,0,1,0,2A4.654,4.654,0,0,1,7.812,16.488Z">
                            </path>
                        </g>
                    </svg>{{ history.updatedEggs }}
                </div>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useOverviewStore } from '../../Overview/stores/overviewStore';
import axios from "axios";
import { APIHistory } from '../../../exports/api';

export default defineComponent({
    name: "BirdsHistory",
    setup() {
        const overviewStore = useOverviewStore()

        return { overviewStore }
    },
    async mounted() {
        axios.get(APIHistory + 'history?page=1', {
            headers: {
                'X-UBID': this.overviewStore.ubid
            }
        }
        ).then((response) => {
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                this.overviewStore.history.push(element);
            }
        })
    },
})
</script>

<style></style>