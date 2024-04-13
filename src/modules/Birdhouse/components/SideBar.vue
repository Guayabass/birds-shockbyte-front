<template>
    <section className="absolute left-0 h-[90%] w-16 bg-[#1E1F25]">
        <div className="flex items-center flex-col justify-center gap-2">
            <button
                className="h-10 w-10 active:bg-[#5051F9] flex flex-row items-center justify-center hover:bg-[#2d2f35] rounded-lg">
                <HomeIcon class="text-[#ffffff66] h-6 w-6 cursor-pointer hover:text-white" />
            </button>
            <!-- <button @click="active = true" v-if="active"
                className="h-10 w-10 active:bg-[#5051F9] flex flex-row items-center justify-center hover:bg-[#2d2f35] rounded-lg">
                <Squares2X2Icon class="text-[#ffffff66] h-6 w-6 cursor-pointer hover:text-white" />
            </button> -->
            <button
                className="h-10 w-10 active:bg-[#5051F9] flex flex-row items-center justify-center hover:bg-[#2d2f35] rounded-lg">
                <Squares2X2Icon class="text-[#ffffff66] h-6 w-6 cursor-pointer hover:text-white" />
            </button>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { HomeIcon } from '@heroicons/vue/24/solid'
import { Squares2X2Icon } from '@heroicons/vue/24/solid'

export default defineComponent({
    name: "SideBar",
    methods: {},
    components: { HomeIcon, Squares2X2Icon }
})
</script>