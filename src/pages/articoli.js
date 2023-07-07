import * as React from "react"
import * as style from "../components/index.module.css"

import FeaturedBooks from "../components/featured-books"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState } from "react"

const Articoli = () => {
  const [readMore1, setReadMore1] = useState(false)
  return (
    <Layout>
      <div
        style={{
          backgroundColor: "var(--color-primary)",
          padding: "30px 0",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "var(--color-text-white)", margin: 0 }}>
          Pubblicazioni
        </h2>
      </div>
      <div style={{ padding: "20px" }}>
        <FeaturedBooks />

        <h1>Capitoli e articoli</h1>
        <h2>Anno 2022</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            <em>
              Graglia M. (2022),{" "}
              <em>
                Pratica sanitaria e identit&agrave; transgender. Buone prassi
                per l&rsquo;assistenza sanitaria agli/alle utenti transgender
              </em>
              , Ausl-IRCSS di Reggio Emilia. ISBN: 979-12-210-0891-3.&nbsp;
            </em>
            <button
              onClick={() =>
                window.open(
                  "/6_Pratica-sanitaria-e-identità-transgender_Graglia.pdf",
                  "_blank",
                  "fullscreen=yes"
                )
              }
            >
              LINK
            </button>
          </li>
        </ul>
        <h2>Anno 2020</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M. (2020). &ldquo;Fare formazione sui temi LGBT nelle
            istituzioni pubbliche: il caso del{" "}
            <em>
              Tavolo interistituzionale per il contrasto
              all&rsquo;omotransnegativit&agrave; e per l&rsquo;inclusione delle
              persone LGBT
            </em>{" "}
            del Comune di Reggio Emilia&rdquo;,&nbsp;in&nbsp;
            <em>
              Genere e R-esistenze in movimento. Soggettivit&agrave;, azioni,
              prospettive
            </em>
            , a cura di Coppola M.M., Don&agrave; A., Poggio B., Tuselli A., pp.
            141-153, Universit&agrave; degli studi di Trento. ISBN:
            978-88-8443-894-2. PDF2
          </li>
          <li className={style.listItemConferenze}>
            Graglia M., Mariotti L., Quercia M. (2020). &ldquo;Fornire supporto
            ai genitori con figli adolescenti omo/bisessuali: l&rsquo;esperienza
            dell&rsquo;associazione &ldquo;GECO ODV&rdquo; di Torino
            <em>. Rivista Minori e Giustizia, </em>3, pp<em>. </em>
            166-175.
          </li>
          <li className={style.listItemConferenze}>
            Graglia M. (2020). Testo dell&rsquo;audizione in Commissione
            Giustizia della Camera dei Deputati in merito alle proposte di legge
            contro le discriminazioni basate sull&rsquo;identit&agrave; di
            genere e sull&rsquo;orientamento sessuale, Commissione Giustizia
            della Camera dei Deputati, Roma.&nbsp;
            <button>
              <a
                href="https://www.camera.it/application/xmanager/projects/leg18/attachments/upload_file_doc_acquisiti/pdfs/000/003/636/Margherita_Graglia.pdf"
                target="_blank" rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                LINK
              </a>
            </button>
          </li>
          <li className={style.listItemConferenze}>
            Graglia M. (2020). Contrastare gli stereotipi di genere
            nell&rsquo;infanzia: una prospettiva psicologica, <em>Infanzia</em>,
            n.1, pp. 10-15.
          </li>
          <li className={style.listItemConferenze}>
            Graglia M. (a cura) (2020). Introduzione in &ldquo;Prospettive sui
            generis. Sguardi psicosociali sulle varianze di genere&rdquo;, (44)
            1, pp-5-9, <em>Rivista di Sessuologia</em>.
          </li>
          <li className={style.listItemConferenze}>
            Graglia M. (2020). Costruire l&rsquo;inclusione per le persone LGBT:
            l&rsquo;esperienza del{" "}
            <em>
              Tavolo interistituzionale per il contrasto
              all&rsquo;omotransnegativit&agrave; e per l&rsquo;inclusione delle
              persone LGBT
            </em>{" "}
            del Comune di Reggio Emilia, in &ldquo;Prospettive sui generis.
            Sguardi psicosociali sulle varianze di genere&rdquo;, Graglia M. (a
            cura), 44 (1), pp. 61-73, <em>Rivista di Sessuologia</em>.
          </li>
          <li className={style.listItemConferenze}>
            Graglia M. (2020). &ldquo;L&rsquo;orientamento sessuale&rdquo;, in{" "}
            <em>La sessualit&agrave; ai tempi dei Millennials</em>, a cura di
            M.C. Florini e G. Rifelli, pp. 83-85, Scione Editore, Roma.
          </li>
        </ul>
        <h2>Anno 2019</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M. (2019), Richiedenti asilo LGBTI+.{" "}
            <em>
              Strumenti per gli operatori dell&rsquo;accoglienza a supporto
              della procedura di asilo
            </em>
            . Migranet. Rete sportelli Arcigay. Arcigay, Bologna.
          </li>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2019),&nbsp;
            <em>
              Presentazione del Protocollo operativo del Tavolo
              interistituzionale per il contrasto
              all&rsquo;omotransnegativit&agrave; e per l&rsquo;inclusione delle
              persone LGBT
            </em>
            , in "Protocollo operativo del Tavolo interistituzionale per il
            contrasto all&rsquo;omotransnegativit&agrave; e per
            l&rsquo;inclusione delle persone LGBT", Comune di Reggio Emilia,
            19/04/2019{" "}
            <button
              onClick={() =>
                window.open(
                  "/4_protocollo-operativo-LGBT.pdf",
                  "_blank",
                  "fullscreen=yes"
                )
              }
            >
              LINK
            </button>
          </li>
        </ul>
        <h2>Anno 2018</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2018),&nbsp;
            <em>De-omofobina. Pillole di conoscenza</em>, Geco, Torino&nbsp;{" "}
            <button
              onClick={() =>
                window.open("/3_DE-OMOFOBINA.webp", "_blank", "fullscreen=yes")
              }
            >
              LINK
            </button>
          </li>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2018),&nbsp;
            <em>L&rsquo;orientamento omosessuale</em>, in Marmocchi P., Raffuzzi
            L., Strazzari E. (a cura) "Percorsi di educazione affettiva e
            sessuale per preadolescenti. Il progetto W l&rsquo;amore", Erikson,
            Trento, pp. 77-92
          </li>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2018),&nbsp;
            <em>Omosessuale va bene, ma non troppo</em>, La Rivista il Mulino,
            17/05/2018&nbsp;
            <button>
              <a
                href="https://www.rivistailmulino.it/news/newsitem/index/Item/News:NEWS_ITEM:4363?fbclid=IwAR0EbsVjl8hj_xbB0EiLFAnqtQElIj8QA8r4Zcbh5dUlsnaGmIjM9vKIuLI"
                target="_blank" rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                LINK
              </a>
            </button>
          </li>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2018),&nbsp;
            <em>
              La legge sull&rsquo;omofobia e l&rsquo;esperienza di Reggio Emilia
            </em>
            , La Repubblica, 21/05/2018&nbsp;
            <button>
              <a
                href="https://ricerca.repubblica.it/repubblica/archivio/repubblica/2018/05/21/la-legge-sullomofobia-e-lesperienza-di-reggio-emiliaBologna03.html"
                target="_blank" rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                LINK
              </a>
            </button>
          </li>

          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2018),&nbsp;
            <em>
              C&rsquo;&egrave; differenza tra orientamento sessuale e
              identit&agrave; di genere?, Cosa si intende per ruolo/espressione
              di genere?, Cos&rsquo;&egrave; l&rsquo;omo-bi-transfobia
              interiorizzata?, Perch&eacute; si parla di bullismo omofobico? Non
              &egrave; sempre bullismo?
            </em>
            , in Paoli B., Ghisoni A., Cikada M. (a cura) "Guida Arcobaleno.
            Tutto ci&ograve; che devi sapere sul mondo LGBT+", Golem Edizioni,
            Torino, pp. 34-35, 92-93, 97-98
          </li>
        </ul>
        <h2>Anno 2017</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2017)
            <em>
              , Presentazione del Protocollo di intesa del Tavolo
              interistituzionale per il contrasto
              all&rsquo;omotransnegativit&agrave; e per l&rsquo;inclusione delle
              persone LGBT
            </em>
            , in "Tavolo interistituzionale per il contrasto
            all&rsquo;omotransnegativit&agrave; e per l&rsquo;inclusione delle
            persone LGBT", Comune di Reggio Emilia, 17/05/2017&nbsp;
            <button
              onClick={() =>
                window.open(
                  "/5_Protocollo-per-LGBT.pdf",
                  "_blank",
                  "fullscreen=yes"
                )
              }
            >
              LINK
            </button>
          </li>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2017),&nbsp;
            <em>
              Perch&eacute; l&rsquo;omosessualit&agrave; viene vista come una
              malattia?
            </em>
            , in Nappa M.R., Nardelli N. "Le cose cambiano @scuola. Strumenti
            per combattere il bullismo a scuola", Raffaello Cortina, Milano, p.
            86
          </li>
        </ul>
        <h2>Anno 2016</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M., Nadalin D. (a cura)&nbsp;(2016),&nbsp;
            <em>Le disforie di genere</em>, Rivista di sessuologia, 40 (2)
          </li>
          <li className={style.listItemConferenze}>
            Graglia M. (2016). Sesso, genere e orientamento sessuale: dalla
            confusione alla complessit&agrave;. Graglia M., Nadalin D. (a cura)
            (2016). La disforia di genere, <em>Rivista di Sessuologia, </em>
            vol.40, n.2, pp.9-22
          </li>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2016),&nbsp;
            <em>
              Educare al rispetto di tutti gli orientamenti affettivo-sessuali
            </em>
            , in Corbisiero F., Parisi R., "Famiglia, omosessualit&agrave;,
            genitorialit&agrave;. Nuovi alfabeti di un rapporto possibile", PM
            Edizioni, Velletri, pp. 119-122
          </li>
        </ul>
        <h2>Anno 2014</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M., Quaglia V.&nbsp;(2014),&nbsp;
            <em>
              Omofobia contemporanea: la pressione sociale
              all'invisibilit&agrave; e la contrariet&agrave; verso
              l'omogenitorialit&agrave;.
            </em>
            &nbsp;Rivista di Freniatria, CXXXVIII (2), pp. 59-83&nbsp;
            <button>
              <a
                href="https://www.academia.edu/30440987/Omofobia_contemporanea_la_pressione_sociale_allinvisibilità_e_la_contrarietà_verso_lomogenitorialità "
                target="_blank" rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                LINK
              </a>
            </button>
          </li>

          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2014),&nbsp;
            <em>Coppie omosessuali e procreazione medicalmente assistita</em>,
            Rivista di sessuologia, 39 (3), pp. 101-115
          </li>
        </ul>
        <h2>Anno 2013</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2013),&nbsp;
            <em>
              Et&agrave; evolutiva e orientamento omosessuale: creare contesti
              inclusivi e prevenire il disagio
            </em>
            , Rivista di sessuologia, 37 (3-4), pp. 11-24
          </li>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2013),&nbsp;
            <em>Educare ai temi dell'identit&agrave; sessuale</em>, Rivista di
            sessuologia, 37 (3-4), pp. 55-66
          </li>
          <li className={style.listItemConferenze}>
            Graglia M. (a cura)&nbsp;(2013),&nbsp;
            <em>L'identit&agrave; sessuale in et&agrave; evolutiva</em>, Rivista
            di sessuologia, 37 (3-4) numero monografico
          </li>
        </ul>
        <h2>Anno 2012</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2012),&nbsp;
            <em>
              Le persone LGBT e il mondo del lavoro: esperienze di formazione
              con le Pubbliche Amministrazioni e i Sindacati,{" "}
            </em>
            LLL - Focus on Lifelong Lifewide Learning, 8 (19)&nbsp;
            <button>
              <a
                href="http://rivista.edaforum.it/numero19/buonepratiche_graglia.html"
                target="_blank" rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                LINK
              </a>
            </button>
          </li>

          <li className={style.listItemConferenze}>
            Rigliano P., Graglia M. (a cura)&nbsp;(2012),&nbsp;
            <em>Homosexuels en psychoth&eacute;rapie</em>, De Boeck, Bruxelles -
            Traduzione di Rigliano P., Graglia M, (2006),&nbsp;
            <em>Psicoterapia con gay e lesbiche</em>, Raffello Cortina,
            Milano&nbsp;
            <button>
              <a
                href="https://www.deboecksuperieur.com/ouvrage/9782804169206-l-homosexualite-dans-les-psychotherapies"
                target="_blank" rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                LINK
              </a>
            </button>
          </li>
        </ul>

        <h2>Anno 2011</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2011),&nbsp;
            <em>
              Il counseling con gli adolescenti non eterosessuali in
              difficolt&agrave;.
            </em>
            &nbsp;Rivista di sessuologia, 35 (1), pp. 41-47
          </li>
        </ul>
        <h2>Anno 2010</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2010),&nbsp;
            <em>
              Le domande pi&ugrave; frequenti sulla genitorialit&agrave; lesbica
              e gay
            </em>
            , in Beppato G., Scarano M.T., "Il libro di Tommy. Manuale educativo
            e didattico su scuola e omogenitorialit&agrave;", Il Dito e La Luna,
            Milano, pp.93-103
          </li>
        </ul>
        <h2>Anno 2009</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2009),&nbsp;
            <em>
              La cittadinanza delle madri lesbiche: il caso della psicoterapia
            </em>
            , in Danna D., Cavina C. (a cura di), "Crescere in famiglie
            omogenitoriali", Franco Angeli, Milano&nbsp;
          </li>
        </ul>
        <h2>Anno 2008</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2008),&nbsp;
            <em>
              Elementi di base su orientamento sessuale e identit&agrave; di
              genere
            </em>
            , pp. 7-12,&nbsp;
            <em>
              Omofobia: influenza nella costruzione dell'identit&agrave;
              personale
            </em>
            , pp. 44-60,&nbsp;
            <em>
              Tecniche di accoglienza e sostegno: come interagire con l'utenza
              lgbt
            </em>
            , pp. 79-86, in "Accoglienza inclusiva. Volontariato a confronto con
            omosessualit&agrave; e transessualismo", Atti del corso di
            formazione, Briciole di Cesvot, Firenze
          </li>
        </ul>
        <h2>Anno 2006</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2006),&nbsp;
            <em>
              The first broad research on the health of lesbian and bisexual
              women in italy
            </em>
            , in "Lesbian d bisexual women's health: common concerns, local
            issues", Ilga, Brussels, 121, p. 48-49
            <button>
              <a
                href="https://www.coe.int/t/Commissioner/Source/LGBT/LGBTStudy2011_en.pdf"
                target="_blank" rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                LINK
              </a>
            </button>
          </li>

          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2006),&nbsp;
            <em>
              Visibilit&agrave; e invisibilit&agrave; nei contesti della salute
            </em>
            , in Rigliano P., Graglia M., "Gay e lesbiche in psicoterapia",
            Raffaello Cortina Editore, Milano, pp. 209-234
          </li>
          <li className={style.listItemConferenze}>
            Rigliano P., Graglia M.&nbsp;(2006),&nbsp;
            <em>Psicoterapia con gay e lesbiche</em>, Raffaello Cortina Editore,
            Milano
          </li>
        </ul>
        <h2>Anno 2005</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Lelleri R., Pietrantoni L., Graglia M., Palestini L., Chiari C.
            &nbsp;(2005),&nbsp;
            <em>
              Modidi: sesso e salute di lesbiche, gay e bisessuali oggi in
              Italia. Principali risultati sociosanitari&nbsp;
            </em>
            <button
              onClick={() =>
                window.open("/modidi_opuscolo.pdf", "_blank", "fullscreen=yes")
              }
            >
              LINK
            </button>
          </li>
        </ul>
        <h2>Anno 2004</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2004),&nbsp;
            <em>
              I giovani e le rappresentazioni sociali dell'omosessualit&agrave;
            </em>
            . Atti del convegno "L'ombelico del mondo giovanile... e dintorni",
            Parma
          </li>
          <li className={style.listItemConferenze}>
            AA.VV.&nbsp;(2004),&nbsp;
            <em>
              Orientarsi nella diversit&agrave;: come gli insegnati e i
              counsellor possono costruire un ambiente accogliente per giovani
              lesbiche e gay in un contesto multiculturale
            </em>
            , Progetto finanziato dalla Comunit&agrave; Europea
          </li>
        </ul>
        <h2>Anno 2003</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2003),&nbsp;
            <em>I comportamenti a rischio e gli adolescenti omosessuali</em>,
            Nizzoli U. (a cura di) &ldquo;Adolescenti che rischiano la
            vita&rdquo;, McGraw-Hill, Milano
          </li>
          <li className={style.listItemConferenze}>
            Pietrantoni L., Graglia M., Lelleri R. &nbsp;(2003),&nbsp;
            <em>Pazienti imprevisti: pratica medica e orientamento sessuale</em>
            , Progetto finanziato dall'Instituto Superiore di Sanit&agrave;.
            (CD-room)&nbsp;
          </li>
        </ul>
        <h2>Anno 2002</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2002),&nbsp;
            <em>
              Le rappresentazioni dell'identit&agrave; gay e lesbica negli
              psicoterapeuti
            </em>
            , Rivista di Sessuologia, 26(1-2), p. 145-154
          </li>
        </ul>
        <h2>Anno 2001</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2001),&nbsp;
            <em>
              Le coppie omosessuali. Aspetti specifici e intervento clinico
            </em>
            , Ecologia della Mente, 1, (24), p. 86/95
          </li>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2001),&nbsp;
            <em>
              Prevenzione ed empowerment nella comunit&agrave; omosessuale
              maschile: difficolt&agrave; e risorse
            </em>
            , Personalit&agrave;/Dipendenze, 3, p.341-348
          </li>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2001),&nbsp;
            <em>
              Le rappresentazioni dell'omosessualit&agrave; nelle scienze della
              salute mentale: da patologia a disposizione erotico-affettiva
            </em>
            , Psicoterapia, 23/2, p. 91-96
          </li>
        </ul>
        <h2>Anno 2000</h2>
        <ul className={style.listConferenze}>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2000),&nbsp;
            <em>L'uso di sostanze stupefacenti nei gay e nelle lesbiche</em>,
            Personalit&agrave;/Dipendenze,2, p. 35-42
          </li>
          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2000),&nbsp;
            <em>
              L&rsquo;omofobia istituzionalizzata: il caso della psicoterapia
            </em>
            , in "Psychomedia Telematic Review"&nbsp;
            <button>
              <a
                href="http://www.psychomedia.it/pm/lifecycle/gender/graglia.htm"
                target="_blank" rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                LINK
              </a>
            </button>
          </li>

          <li className={style.listItemConferenze}>
            Graglia M.&nbsp;(2000),&nbsp;
            <em>
              I disordini alimentari negli adolescenti omosessuali: un fenomeno
              trascurato
            </em>
            , Psichiatria dell'Infanzia e dell'Adolescenza, 67(2),
            p.195-200)&nbsp;
            <button
              onClick={() =>
                window.open(
                  "/7_disordini-alimentari_graglia.pdf",
                  "_blank",
                  "fullscreen=yes"
                )
              }
            >
              LINK
            </button>
          </li>
          <li className={style.listItemConferenze}>
            Pietrantoni L., Sommantico M., Graglia M. &nbsp;(2000),&nbsp;
            <em>
              Anzianit&agrave; impreviste. Una ricerca su omosessualit&agrave; e
              terza et&agrave;
            </em>
            , Rivista del Servizio Sociale,1, p. 31- 42
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Articoli" />

export default Articoli
