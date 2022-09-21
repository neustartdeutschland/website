<script setup>
import SiteSection from '../components/SiteSection.vue'
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
    gap: 3rem;
}

.theses li {
    display: flex;
    gap: 1rem;
}

.theses li::before {
    counter-increment: section;
    content: counter(section);
    font-size: 1.5rem;
    font-weight: 700;
    font-family: $font-family-base;
    border: 4px solid currentColor;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    flex: 1 0 auto;
}

.theses li h2 {
    padding-top: 9px;
    padding-bottom: px;
}

.theses li p {
    @include rfs(1.5rem);
    line-height: 1.6;
}
</style>

<template>
     <main class="site-main">

        <SiteSection class="text-center">
            <h2>Freiheit schützen ~ Heimat bewahren ~ Neustart jetzt!</h2>
            <p>Ob Armut und Enteignung, Bevormundung oder die ungebremste Masseneinwanderung in unser Land - Dieser Tage weht ein rauer Wind durch ein Deutschland in der Sackgasse.</p>
<p>Es ist Zeit für neue Visionen einer lebenswerten Zukunft - abseits von korrumpierten Medien, inkompetenten wie kriminellen Politikern und ideologischen Großprojekten. Sei dabei!</p>
<p>Es ist Zeit für einen Neustart für Deutschland.</p>
        </SiteSection>

        <SiteSection>
            <ol class="theses">
                <li>
                    <div>
                        <h2>Selbstbestimmung</h2>
                        <p>Ma&szlig;nahmen des Gesundheitsschutzes, beispielsweise das Tragen von Masken oder Impfungen, m&uuml;ssen die freie Entscheidung eines jeden B&uuml;rgers bleiben.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Subsidiarit&auml;t</h2>
                        <p>Politische Entscheidungen sollten so regional wie m&ouml;glich gef&auml;llt werden. Dies erschwert Bevormundung und Ideologisierung vorbei an den Interessen der B&uuml;rger.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Eigenverantwortung</h2>
                        <p>Umverteilung zulasten der arbeitenden Bev&ouml;lkerung schafft Abh&auml;ngigkeit von politischen Entscheidungstr&auml;gern und gef&auml;hrdet Wohlstand, statt diesen zu schaffen.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Freiheit und M&uuml;ndigkeit</h2>
                        <p>Aufgabe der Exekutivorgane ist die Wahrung der inneren Sicherheit, nicht die Unterdr&uuml;ckung der Opposition.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Souver&auml;nit&auml;t</h2>
                        <p>Eine selbstbewusste und interessengeleitete anstelle einer wertegeleiteten Au&szlig;enpolitik sichert Freiheit, Frieden und Wohlstand.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Heimatschutz</h2>
                        <p>Naturschutz sollte nach Augenma&szlig;, nicht durch die Verwirklichung ideologischer Gro&szlig;projekte erfolgen.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Identit&auml;t und Zusammenhalt</h2>
                        <p>Masseneinwanderung l&ouml;st weder demographische Probleme noch Fachkr&auml;ftemangel &ndash; vielmehr importiert sie ethnische Konflikte, verdr&auml;ngt die heimischen Kulturen und untergr&auml;bt den gesellschaftlichen Zusammenhalt.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Freiheit der Sprache</h2>
                        <p>Sprache entwickelt sich organisch und darf nicht als Mittel zur Umerziehung missbraucht werden.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Kompetenz</h2>
                        <p>Entscheidungstr&auml;ger in der Politik darf nur sein, wer &uuml;ber Erfahrungen und fachliche Kompetenzen auf seinem Gebiet aus dem beruflichen Leben verf&uuml;gt.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Regionalit&auml;t</h2>
                        <p>Globalisierung durch einen &bdquo;Great Reset&ldquo; - initiiert durch globale Akteure und Institutionen - entm&uuml;ndigt die V&ouml;lker und zwingt ihnen die technokratische Herrschaft nicht gew&auml;hlter Eliten auf.</p>
                    </div>
                </li>
            </ol>
        </SiteSection>

    </main>
</template>
