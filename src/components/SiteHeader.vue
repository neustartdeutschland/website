<script setup>
    import Logo from '../assets/logo.svg'
    import SocialLinks from '../components/SocialLinks.vue'
    import IconArrowDown from '../assets/icon-arrow-down.svg'
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/mixins";

.site-header {
    @include rfs(40px, padding-top);
    @include rfs(40px, padding-bottom);
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    position: relative;
}

.site-logo {
    width: 250px;
    height: auto;
}

.scroll-down {
    color: #fff;
    padding: 0.5rem;
    opacity: 0.5;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    animation-name: scroll-down;
    animation-duration: 1s;
    animation-iteration-count: infinite;

    &:hover {
        opacity: 1;
    }
}

@keyframes scroll-down {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(-10%);
    }
    50% {
        transform: translateY(0);
    }
    75% {
        transform: translateY(10%)
    }
}
</style>

<template>
    <header class="site-header">
        <div class="container text-center">
            <Logo class="site-logo" />
            <SocialLinks class="mt-5" />
        </div>
        <a href="#content" id="content" class="scroll-down">
            <IconArrowDown class="svg-icon" />
        </a>
    </header>
</template>
