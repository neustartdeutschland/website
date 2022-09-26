<script setup>
    import Modal from '../components/Modal.vue'
</script>

<style lang="scss">
    @import "node_modules/bootstrap/scss/mixins";

    #site-footer {
        @include rfs(40px, padding-top);
        @include rfs(40px, padding-bottom);
        border-top: 1px solid currentColor;
    }
</style>

<template>
    <footer id="site-footer">
        <div class="container">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <Modal link_label="Impressum" link_class="nav-link">
                        Test
                    </Modal>
                </li>
                <li class="nav-item">
                    <Modal link_label="Datenschutz" link_class="nav-link">
                        Test
                    </Modal>
                </li>
            </ul>
        </div>
    </footer>
</template>
