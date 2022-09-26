<template>
    <main class="site-main">

        <SiteSection class="border-top">
            <h2 class="section-title fs-5">Die Politik hat versagt!</h2>
            <p>Es ist höchste Zeit zu erkennen, dass diese Regierung nicht zum Wohle unseres Volkes regiert. Sie katapultiert die Deutschen in eine Sackgasse von Armut und Enteignung, ideologiegesteuerter Bevormundung, einem selbst&szlig;zerstörerischen Klimadiktat und der Ausbeutung unseres Sozialsystems durch ungebremste Masseneinwanderung.</p>
            <h2 class="section-title fs-5">Visionen einer lebenswerten Zukunft!</h2>
            <p>Es ist Zeit für neue Visionen einer lebenswerten Zukunft – abseits von gleichgeschalteten Medien, inkompetenten Politikern, fehlgeleiteten Groß&szlig;projekten zur Verstümmelung der deutschen Sprache und einer destruktiven Energie- und Außenpolitik gegen das eigene Volk.</p>
        </SiteSection>

        <SiteSection class="border-top">
            <h2 class="section-title fs-4 text-center">10 Thesen für freie Bürger</h2>
            <p class="text-center">Bist du bereit, dein Land zu ändern?</p>
            <p class="text-center">Ob im Gespräch oder auf der nächsten Demonstration in deinem Ort, nimm die Änderung selbst in die Hand und verbreite folgende 10 Thesen für freie Bürger!</p>
        </SiteSection>

        <SiteSection class="border-top">
            <ol class="theses">
                <li v-for="thesis in theses">
                    <h2 class="section-title fs-4" v-html="thesis.title"></h2>
                    <p v-html="thesis.content"></p>
                </li>
            </ol>
        </SiteSection>

        <SiteSection class="border-top">
            <SocialLinks />
        </SiteSection>

   </main>
</template>

<script setup>
import SiteSection from '../components/SiteSection.vue';
import SocialLinks from '../components/SocialLinks.vue'
import Theses from '../../theses.json';

const theses = Theses;
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";
@import "node_modules/bootstrap/scss/mixins";

.theses {
    counter-reset: section;
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    // gap: 3rem;
}

.theses li {
    display: flex;
    flex-direction: column;
    // gap: 1rem;
}

.theses li h2 {
    padding-top: 9px;
    padding-bottom: 9px;
}

.theses li p {
}
</style>
