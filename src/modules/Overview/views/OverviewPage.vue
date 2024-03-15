
<template>
  <NavBar></NavBar>
  <FooterBar></FooterBar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../components/NavBar.vue';
import FooterBar from '../components/FooterBar.vue';

export default defineComponent({
    components: {NavBar, FooterBar},
    name: "OverviewPage"
})
</script>
