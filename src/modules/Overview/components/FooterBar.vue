<template>
    <footer>
        <fwb-pagination v-model="currentPage" :total-pages="10" show-icons></fwb-pagination>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

export default defineComponent({
    name: "FooterBar",
    setup(){
        const currentPage = ref(1)

        return {currentPage}
    },
    components: {FwbPagination}
})
</script>