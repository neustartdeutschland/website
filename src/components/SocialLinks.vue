<template>
    <div class="social-links">
        <a href="https://t.me/neustart_deutschland" title="Telegram" target="blank" rel="noopener">
            <IconTelegram class="svg-icon" />
        </a>
        <a href="https://instagr.am/neustart_deutschland" title="Instagram" target="blank" rel="noopener">
            <IconInstagram class="svg-icon" />
        </a>
    </div>
</template>

<script setup>
    import IconTelegram from '../assets/icon-telegram.svg'
    import IconInstagram from '../assets/icon-instagram.svg'
</script>

<style lang="scss">
.social-links {
    display: flex;
    font-size: 1.3em;
    justify-content: center;
    gap: 1em;

    a {
        border: 1px solid currentColor;
        color: #fff;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 2.5em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    a:hover {
        background-color: rgba(#fff, 0.3);
    }
}
</style>
