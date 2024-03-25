<template>
    <NavBar></NavBar>
        <ul className="text-white flex flex-row items-start gap-3 p-6 absolute left-16">
            <li className="w-64 h-40 bg-[#1E1F25] rounded-2xl" v-for="(bh, index) in overviewStore.birdHouses" :key="index">{{ bh }}</li>
        </ul>
    <SideBar></SideBar>
    <FooterBar></FooterBar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../components/NavBar.vue';
import FooterBar from '../components/FooterBar.vue';
import SideBar from '../components/SideBar.vue';
import axios from "axios";
import { useOverviewStore } from '../stores/overviewStore'

export default defineComponent({
    setup() {
        const overviewStore = useOverviewStore()

        return { overviewStore }
    },
    async mounted() {
        await axios
            .get("http://localhost:3000/house?page=" + this.overviewStore.page)
            .then((response) => {
                //console.log(response.data[0].name)
                for (let index = 0; index < response.data.length; index++) {
                    const element = response.data[index].name;
                    this.overviewStore.birdHouses.push(element);
                }
            });
    },
    components: { NavBar, FooterBar, SideBar },
    methods: {},
    name: "OverviewPage"
})
</script>

