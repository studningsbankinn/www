<template>
<div>     
  <Card>
    <h3 class="title is-6 has-text-centered">Hljóðbókasafn</h3>
    <img src="../images/hljodbokasafn_logo.png" alt="Hljóðbókasafn Íslands Logo">
    <p>Hljóðbókasafn Íslands býður upp á mikið úrval hljóðbóka. Einungis þeir sem ekki geta nýtt sér prentað letur geta sótt um og fengið aðgang að hljóðbókasafninu.</p>
    <p>Hægt er að fá frekari upplýsingar og sækja um aðgang á heimasíðu hljóðbókasafnsins:</p>
    <p>Forsíða - <a href="https://www.HBS.is">HBS.is</a></p>
  </Card>
  

  <Card>    
    <h3 class="title is-6 has-text-centered">Árnastofnun</h3>
    <img src="../images/arnastofnun_logo.png" alt="Hljóðbókasafn Íslands Logo">
    <!-- Spurning að senda póst á Guðrúnu Nordal, kynna verkefnið og nefna að við viljum geta bent á gagnleg tól á þeirra vegum á síðunni okkar…  -->
    <p>Á vef Árnastofnunar er hægt að nálgast ýmsan fróðleik sem gæti hjálpað við námið.</p>
    <p>Forsíða: <a href="https://arnastofnun.is/is">Arnastofnun</a> </p>
    <em>Hér að neðan eru hlekkir inn á undirsíður Árnastofnunar:</em>
    <p>Beygingarlýsing íslensks nútímamáls <a href="https://bin.arnastofnun.is/">(BÍN)</a> er síða þar sem hægt er að setja inn flest íslensk orð og sjá hvernig þau beygjast. <br></p>
    <p>Undir Árnastofnun er síðan <a href="http://malfong.is/">“Málföng fyrir íslensku”</a>. Þar eru tenglar á málgögn, máltól og vefþjónustu á sviði íslenskrar máltækni. <br></p>    
    <br>
  </Card>

  <Card>
    <h3 class="title is-6 has-text-centered">Félag lesblindra á Íslandi</h3>
    <img src="../images/felag_lesblindra_logo.png" alt="Hljóðbókasafn Íslands Logo">
    <p>Félags lesblindra veitir lesblindum stuðning og fræðslu. Þeir geta meðal annars leiðbeint um réttindi til aðstoðar og hvar hægt er að nálgast ýmsa þjónustu. Félagið sinnir einnig margvíslegri hagsmunagæslu í tengslum við skólastarf.</p>
    <p>Félag lesblindra: <a href="https://www.lesblindir.is/">lesblindir.is</a></p>        
  </Card>

  <Card>    
    <h3 class="title is-6 has-text-centered">Rauði krossinn</h3>    
    <img src="../images/raudi_krossinn_logo.png" alt="Hljóðbókasafn Íslands Logo">
    <p>Rauði krossinn um allt land veitir einstaklingum í erfiðleiku margvíslega aðstoð.</p>
    <p>Aðstoð í boði - Rauði krossinn: <a href="https://www.raudikrossinn.is/hvad-gerum-vid/adstod-i-bodi/">raudikrossinn.is/hvad-gerum-vid/adstod-i-bodi</a></p>
    <p>Á Akureyri er námsaðstoð í boði fyrir born og ungmenni:</p>
    <p>Námsaðstoð: <a href="https://www.raudikrossinn.is/hvad-gerum-vid/krakkanam">raudikrossinn.is/hvad-gerum-vid/krakkanam</a></p>  
  </Card>

</div>
</template>

<script>
import Card from './Card.vue'
export default {
  name: 'Help',
  components: {
    Card
  }
}
</script>

<style scoped>
h3 {
  margin-top: 1.5em;
}

img {
  float: left;
  margin-right: 30px;
}
</style>
