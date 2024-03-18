<template>
    <footer className="w-full h-16 bg-[#1E1F25] flex items-center justify-center absolute left-0 bottom-0">
        <div>
            <vue-awesome-paginate :total-items="50" :items-per-page="5" :max-pages-shown="5" v-model="currentPage"
                :on-click="selectPage" />
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue'

export default defineComponent({
    name: "FooterBar",
    setup() {
        const currentPage = ref(1)

        return { currentPage }
    },
    components: {},
    methods: {
        selectPage(page: number) {
            console.log(page)
        }
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
</style>

