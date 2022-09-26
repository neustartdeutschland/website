<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
    <SiteHeader></SiteHeader>
    <SiteMain></SiteMain>
    <!--<SiteFooter></SiteFooter>-->
</template>

<style lang="scss">
.svg-icon {
    width: 1.2rem;
    height: 1.2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    fill: currentColor;
}
</style>
