<template>
    <a :href="'#' + uuid" data-bs-toggle="modal" :class="link_class">
        {{ link_label }}
    </a>
    <div ref="modal" class="modal fade" :id="uuid" tabindex="-1" :aria-labelledby="uuid + '-label'" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-fullscreen-sm-down text-dark">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="uuid + '-label'">{{ modal_title || link_label }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer justify-content-center">
                    <a href="#" data-bs-dismiss="modal">Schließen</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { v4 as uuidv4 } from 'uuid';

defineProps({
    link_label: {
        type: String,
        default: 'Modal label',
    },
    link_class: {
        type: String,
        default: null,
    },
    modal_title: {
        type: String,
        default: null,
    },

})

const uuid = 'modal-' + uuidv4();
</script>
