<style lang="scss">
@import "node_modules/bootstrap/scss/mixins";

.site-section {
    @include rfs(40px, padding-top);
    @include rfs(40px, padding-bottom);

    .section-title {
        background-color: rgba(#fff, 0.3);
        padding: 0.3em 0.6em 0.1em;
        vertical-align: center;
        text-shadow: 2px 2px rgba(#000, 0.4);
        margin-top: 1.5em;
        margin-bottom: 0.8em;
        color: #fff;
    }
}
</style>

<template>
    <section class="site-section">
        <div class="container">
            <slot></slot>
        </div>
    </section>
</template>
