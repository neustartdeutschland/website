<style lang="scss">
@import "node_modules/bootstrap/scss/mixins";

.site-section {
    @include rfs(80px, padding-top);
    @include rfs(80px, padding-bottom);

    &:not(:last-child) {
        border-bottom: 1px solid currentColor;
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
