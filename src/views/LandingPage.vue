<script lang="ts">
import NavBar from '../components/NavBar.vue';
import { ArrowRightIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "LandingPage",
    components: {ArrowRightIcon, NavBar},
    setup(){
      const router = useRouter()

      return {router}
    },
    methods: {
      toOverviewPage(){
        this.router.push({name: 'Overview'})
      }
    }
})
</script>

<template> 
    <NavBar></NavBar>
    <section className="flex flex-col justify-center items-center h-4/5">
      <p className="font-bold text-white text-2xl mb-6">Home Page</p>
      <button @click="toOverviewPage()" className="text-white cursor-pointer flex justify-center items-center py-3 pr-4 pl-5 gap-2 w-64 h-12 bg-[#5051F9] rounded-lg">To BirdHouses Overview<ArrowRightIcon class="h-6 w-6 text-white" /></button>
    </section>
</template>