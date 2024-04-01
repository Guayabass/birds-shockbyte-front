<template>
    <NavBar></NavBar>
    <ul className="text-white flex flex-row items-start gap-3 p-6 absolute left-16">
        <li className="w-64 h-40 bg-[#1E1F25] rounded-2xl mx-4 my-4" v-for="(bh, index) in overviewStore.birdHouses"
            :key="index">
            <div className="flex flex-col">
                <p className="font-bold text-lg text-center py-4">{{ bh.name }}</p>
                <p className="flex flex-row m-3 items-center">
                    <MapPinIcon class="h-4 w-4 mx-1" /> ({{ bh.latitude }}, {{ bh.longitude }})
                </p>
                <p className="flex flex-row m-3 items-center">
                    <svg class="mx-1 h-4 w-4 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path
                            d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                    </svg>
                    {{ bh.birds }}
                    <svg class="mx-1 h-4 w-4 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M6 14a6 6 0 0 0 12 0a12 12 0 0 0 -3 -8.5a3.7 3.7 0 0 0 -6 0a12 12 0 0 0 -3 8.5" />
                    </svg>
                    {{ bh.eggs }}
                </p>
            </div>
        </li>
    </ul>
    <SideBar></SideBar>
    <FooterBar></FooterBar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../components/NavBar.vue';
import FooterBar from '../components/FooterBar.vue';
import SideBar from '../components/SideBar.vue'
import axios from "axios";
import { useOverviewStore } from '../stores/overviewStore'
import { API } from '../../../exports/api';
import { MapPinIcon } from '@heroicons/vue/24/solid'

export default defineComponent({
    setup() {
        const overviewStore = useOverviewStore()

        return { overviewStore }
    },
    async mounted() {
        await axios
            .get(API + "?page=" + this.overviewStore.page)
            .then((response) => {
                //console.log(response.data[0].name)
                for (let index = 0; index < response.data.length; index++) {
                    const element = response.data[index];
                    this.overviewStore.birdHouses.push(element);
                }
            });
    },
    components: { NavBar, FooterBar, SideBar, MapPinIcon },
    methods: {},
    name: "OverviewPage"
})
</script>
