<template>
    <NavBar></NavBar>
    <SideBar></SideBar>
    <FooterBar></FooterBar>
    <div className="absolute left-16 w-[94%] h-[116px] bg-[#1E1F25] m-4 rounded-lg">
        <div className="w-fill h-6 flex flex-row items-center justify-between p-6 pt-8">
            <p className="text-white text-2xl font-semibold leading-9">{{ overviewStore.name }}</p>
            <div className="flex flex-row items-center">
                <MapPinIcon class="h-4 w-4 mx-1 text-white" />
                <p className="text-white text-base font-medium leading-6">({{ overviewStore.latitude }}, {{
                overviewStore.longitude }})</p>
            </div>
        </div>
        <div className="w-full h-full flex items-center flex-row">
            <div v-if="!clicked" @click="clicked = true"
                className="w-[160px] flex justify-between items-center text-[#ffffff66] pl-6 pb-8 font-normal text-base">
                <button className="border-b-2 border-[#5051F9] pb-3 text-[#5051F9]">Overview</button> <button
                    className="pb-3 border-b-2 border-[#1E1F25]">Graph</button>
            </div>
            <div v-if="clicked" @click="clicked = false"
                className="w-[160px] flex justify-between items-center text-[#ffffff66] pl-6 pb-8 font-normal text-base">
                <button className="pb-3 border-b-2 border-[#1E1F25]">Overview</button> <button
                    className="border-b-2 border-[#5051F9] pb-3 text-[#5051F9]">Graph</button>
            </div>
        </div>
        <!-- <p className="text-white ">{{ eggs }} {{ birds }} {{ updatedAt }}</p> -->
    </div>
    <div className="absolute top-[200px] left-16 w-[94%] h-[72px]">
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../components/NavBar.vue';
import FooterBar from '../components/FooterBar.vue';
import SideBar from '../components/SideBar.vue'
import { useOverviewStore } from '../../Overview/stores/overviewStore';
//import axios from "axios";
//import { APIHistory } from '../../../exports/api';
import { MapPinIcon } from '@heroicons/vue/24/solid'


export default defineComponent({
    setup() {
        const overviewStore = useOverviewStore()

        return { overviewStore }
    },
    async mounted() { },
    data() {
        return {
            clicked: false,
        }
    },
    components: { NavBar, FooterBar, SideBar, MapPinIcon },
    methods: {},
    name: "BirdHousePage"
})
</script>
