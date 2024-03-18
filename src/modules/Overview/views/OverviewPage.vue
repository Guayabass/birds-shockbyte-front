
<template>
  <NavBar></NavBar>
  <SideBar></SideBar>
  <FooterBar></FooterBar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../components/NavBar.vue';
import FooterBar from '../components/FooterBar.vue';
import SideBar from '../components/SideBar.vue';

export default defineComponent({
    components: {NavBar, FooterBar, SideBar},
    name: "OverviewPage"
})
</script>
