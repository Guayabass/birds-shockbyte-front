<template>
    <section className="absolute left-0 h-[90%] w-16 bg-[#1E1F25]">
        <div className="flex items-center flex-col justify-center gap-2">
            <button
                className="h-10 w-10 active:bg-[#5051F9] flex flex-row items-center justify-center hover:bg-[#2d2f35] rounded-lg">
                <HomeIcon @click="changeToHome()" class="text-[#ffffff66] h-6 w-6 cursor-pointer hover:text-white" />
            </button>
            <!-- <button @click="active = true" v-if="active"
                className="h-10 w-10 active:bg-[#5051F9] flex flex-row items-center justify-center hover:bg-[#2d2f35] rounded-lg">
                <Squares2X2Icon class="text-[#ffffff66] h-6 w-6 cursor-pointer hover:text-white" />
            </button> -->
            <button
                className="h-10 w-10 active:bg-[#5051F9] flex flex-row items-center justify-center hover:bg-[#2d2f35] rounded-lg">
                <Squares2X2Icon @click="changeToOverview()"
                    class="text-[#ffffff66] h-6 w-6 cursor-pointer hover:text-white" />
            </button>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { HomeIcon } from '@heroicons/vue/24/solid'
import { Squares2X2Icon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router';
import { useOverviewStore } from '../../Overview/stores/overviewStore'

export default defineComponent({
    name: "SideBar",
    setup() {
        const overviewStore = useOverviewStore()
        const router = useRouter()

        return { overviewStore, router }
    },
    methods: {
        changeToHome() {
            this.router.push({ name: 'Home' })
            this.overviewStore.history = []
            this.overviewStore.birdHouses = []
            this.overviewStore.clicked = false
        },
        changeToOverview() {
            this.router.push({ name: 'Overview' })
            this.overviewStore.history = []
            this.overviewStore.birdHouses = []
            this.overviewStore.clicked = false
        }
    },
    components: { HomeIcon, Squares2X2Icon }
})
</script>