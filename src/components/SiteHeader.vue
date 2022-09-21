<script setup>
    import Logo from '../assets/logo.svg'
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/mixins";

.site-header {
    padding-top: 3em;
    padding-bottom: 3em;
}

.site-logo {
    @include rfs(300px, max-width);
    height: auto;
}
</style>

<template>
    <header class="site-header">
        <div class="container text-center">
            <Logo class="site-logo" />
            <p class="fs-5 mt-4">- 10 Thesen für freie Bürger -</p>
        </div>
    </header>
</template>
