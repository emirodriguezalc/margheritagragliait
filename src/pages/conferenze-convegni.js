import * as React from "react"
import * as style from "../components/index.module.css"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Contatti = () => (
  <Layout>
    <div
      style={{
        backgroundColor: "var(--color-primary)",
        padding: "30px 0",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "var(--color-text-white)", margin: 0 }}>
        Conferenze e convegni
      </h2>
    </div>
    <div className={style.generalWrapper}>
      <h2>Anno 2022</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          <p>
            Graglia M. (2022).&nbsp;
            <em>
              La morte per rinascere: disforia di genere e cambio di
              sesso.&nbsp;
            </em>
            <strong>
              Congresso FIMP (Federazione italiana medici pediatri)
            </strong>
            &nbsp;&ldquo;A grandi passi la pediatria di famiglia cresce e
            &hellip;. accoglie&rdquo;, sessione &ldquo;L&rsquo;esperienza della
            morte nel bambino e nell&rsquo;adolescente&rdquo;<em>,</em>
            &nbsp;Riva del Garda, 13 ottobre.
          </p>
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2022).{" "}
          <em>Co-costruzione del genere e identit&agrave;</em>. Conferenza
          &ldquo;Contrappunti formativi&rdquo;; &ldquo;Differenze di genere e
          identit&agrave;. Come bambine, bambini e adulti co-costruiscono il
          genere nei contesti educativi quotidiani&rdquo;,{" "}
          <strong>
            Istituzione Scuole e Nidi d&rsquo;Infanzia del Comune di Reggio
            Emilia
          </strong>
          , Centro Internazionale Loris Malaguzzi, 7 giugno.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2022).{" "}
          <em>
            Le identit&agrave; transgender: ri-conoscere la pluralit&agrave;
            delle esperienze.{" "}
          </em>
          Convegno &ldquo;Identit&agrave; transgender e promozione della
          salute&rdquo;, <strong>Ausl di Reggio Emilia</strong>, Centro
          Internazionale Loris Malaguzzi, 18 maggio.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2022). Docente al corso LED (Leadership, Empowerment in
          Diversity) su: &ldquo;Gli stereotipi e l&rsquo;omofobia
          interiorizzata: cosa sappiamo di nuovo?&rdquo;, <strong>EDGE</strong>,
          Roma, 3 maggio.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2022).{" "}
          <em>
            Le discriminazioni basate sull&rsquo;identit&agrave; di genere e
            sull&rsquo;orientamento sessuale
          </em>
          , conferenza &ldquo;Le conseguenze psicosociali delle
          discriminazioni&rdquo;,{" "}
          <strong>Centro per le famiglie del Comune di Modena</strong>, 27
          aprile.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2022).{" "}
          <em>
            Le varianze dell&rsquo;identit&agrave; sessuale: oltre la
            depatologizzazione
          </em>
          . Convegno Sanremo 1972-2022: cinquant&rsquo;anni di movimento LGBT in
          Italia e in Liguria&rdquo;, Agedo, Casin&ograve; di Sanremo, 5 aprile.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2022). Partecipazione alla Tavola Rotonda&nbsp;"Buone
          pratiche professionali sul tema LGBTQ+",{" "}
          <strong>Ordine degli psicologi della regione Liguria</strong>, 28
          marzo.
        </li>
      </ul>
      <h2>Anno 2021</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          Graglia M. (2021).{" "}
          <em>
            Discriminazione LGBTQIA*. Buone pratiche di inclusione per la
            professione di psicologo/a
          </em>
          . Conferenza &ldquo;Uno sguardo sulle persone LGBTQIA*&rdquo;, dalla
          discriminazione all&rsquo;inclusione.{" "}
          <strong>Ordine degli psicologi della regione Liguria</strong>.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2021).{" "}
          <em>Il desiderio sessuale nelle coppie omosessuali</em>, Congresso
          &ldquo;Fitness and general health&rdquo;, Congresso{" "}
          <strong>
            Siams (Societ&agrave; italiana di Andrologia e Medicina della
            Sessualit&agrave;)
          </strong>
          .&nbsp;
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2021).{" "}
          <em>
            Le differenze di sesso, genere e orientamento: buone prassi nei
            servizi sanitari
          </em>
          , Convegno &ldquo;Medicina sesso-genere e salute. Un cambiamento
          culturale nelle aziende sanitarie&rdquo;,{" "}
          <strong>Azienda Ospedaliera-Universitaria</strong>,
          <strong> Ferrara</strong>.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2021). Partecipazione alla VIII Commissione Consiliare
          Speciale &ldquo;Diritti Umani, Pari Opportunit&agrave; e Citt&agrave;
          Internazionale&rdquo; in merito alla giornata internazionale contro
          l&rsquo;omotransfobia, <strong>Comune di Reggio Emilia</strong>.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2021), Omofobia interiorizzata, EDGE Excellence &amp;
          Diversity by GLBT Executives, on line.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2021). Un altro genere di conferenza. In-transito verso
          una societ&agrave; pi&ugrave; inclusiva,{" "}
          <strong>Rotary International</strong>, 9 marzo, on line.
        </li>
      </ul>
      <h2>Anno 2020</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          Graglia M. (2020). Tracce arcobaleno. Educazione alle differenze e
          l&rsquo;esperienza delle persone LGBQIA+ a scuola, Cassero di Bologna,
          on line.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2020). Violenza contro le donne e violenza
          omolesbotransfobica: due facce della stessa medaglia?, Festival della
          violenza illustrata,{" "}
          <strong>
            CSGE (Centro Studi sul genere e l&rsquo;Educazione. Dipartimento
            Scienze dell&rsquo;Educazione di Bologna
          </strong>
          , 7 dicembre, conferenza on line.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2020).{" "}
          <em>Discriminazioni e violenze contro le persone transgender</em>,
          ciclo di seminari &ldquo;Non &egrave; un raptus. Riflessioni sulle
          violenze&rdquo;. Commissione Pari opportunit&agrave; dell&rsquo;
          <strong>Ordine nazionale degli psicologi</strong>, Roma.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2020).{" "}
          <em>Oltre il diritto: la funzione sociale dell'inclusione</em>,
          convegno di presentazione del progetto della Commissione diritti umani
          del CNF. &ldquo;L&rsquo;inclusione e la non discriminazione per motivi
          di orientamento sessuale, identit&agrave; di genere,
          &ldquo;razza&rdquo; ed origine etnica nella societ&agrave; e
          nell&rsquo;avvocatura&rdquo;.{" "}
          <strong>Consiglio Nazionale Forense</strong>, Roma.&nbsp;
          <button>
            <a style={{ textDecoration: "none" }} href={"/video"}>
              LINK
            </a>
          </button>
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2020). VIII Commissione Consiliare Speciale &ldquo;Diritti
          Umani, Pari Opportunit&agrave; e Citt&agrave; Internazionale:
          Omotransnegativit&agrave;. La vita delle persone transgender a Reggio
          Emilia, <strong>Comune di Reggio Emilia</strong>.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2020). Audizione in Commissione Giustizia della Camera dei
          Deputati in merito alle proposte di legge contro le discriminazioni
          basate sull&rsquo;identit&agrave; di genere e l&rsquo;orientamento
          sessuale,{" "}
          <strong>Commissione Giustizia della Camera dei Deputati</strong>,
          Roma.&nbsp;
          <button>
            <a style={{ textDecoration: "none" }} href={"/video"}>
              LINK
            </a>
          </button>
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2020).
          <em>
            Identit&agrave; e alterit&agrave;: tra inclusione e discriminazioni
          </em>
          , seminario &ldquo;Il diritto di avere diritti&rdquo;, all'interno del
          convegno internazionale "L'occhio se salta il muro. Alla ricerca di
          nuovi paradigmi per l'educazione", <strong>Reggio Children</strong>,
          Reggio Emilia.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2020).{" "}
          <em>
            Buone pratiche per l&rsquo;inclusione delle famiglie LGBT nei
            servizi
          </em>
          , Convegno &ldquo;Competenze per includere: scenari del fare tra
          servizi e famiglie LGBT. Doing right(s)&rdquo;,{" "}
          <strong>Regione Emilia Romagna</strong>, Bologna.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2020). La formazione istituzionale: l'esperienza del
          Tavolo interistituzionale per il contrasto
          all'omotransnegativit&agrave; e per l'inclusione delle persone LGBT
          del Comune di Reggio Emilia, convegno "Genere e R-Esistenze in
          Movimento. Soggettivit&agrave;, Azioni, Prospettive",{" "}
          <strong>Centro Interdipartimentale Studi di Genere</strong>,{" "}
          <strong>Universit&agrave; di Trento&nbsp;</strong>
          <button
            onClick={() =>
              window.open(
                "/2_convegno-CSG-trento-2020-Graglia.pdf",
                "_blank",
                "fullscreen=yes"
              )
            }
          >
            LINK
          </button>
        </li>
      </ul>
      <h2>Anno 2019</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          Graglia M. (2019).{" "}
          <em>
            Le discriminazioni basate sull&rsquo;identit&agrave; di genere e
            sull&rsquo;orientamento sessuale. La prospettiva psico-sociale
          </em>
          . Convegno &ldquo;Per la dignit&agrave; delle persone. Contro la
          violenza omotransfobica&rdquo;, <strong>Camera dei deputati</strong>,
          Roma.&nbsp;
          <button>
            <a
              style={{ textDecoration: "none" }}
              target="_blank" rel="noreferrer"
              href="https://www.radioradicale.it/scheda/593379/per-la-dignita-delle-persone-contro-la-violenza-omotransfobica?i=4076662"
            >
              LINK
            </a>
          </button>
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2019).{" "}
          <em>Genitorialit&agrave; e fertilit&agrave; 3.0</em>, Convegno
          &ldquo;Caleidoscopio transgender&rdquo;,{" "}
          <strong>Dipartimento di Medicina, Universit&agrave; di Padova</strong>
          .
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2019). Conferenza &ldquo;Educare alle differenze. Il
          bullismo omolesbotransfobico: conoscerlo per contrastarlo&rdquo;,
          Associazione Arcigay-Arcilesbica di Ferrara.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2019).{" "}
          <em>Contrastare gli stereotipi di genere nell&rsquo;infanzia</em>:{" "}
          <em>una prospettiva psicologica</em>, Convegno &ldquo;Quale genere di
          genere. Educare al genere nei servizi e nelle scuole
          dell&rsquo;infanzia&rdquo;,{" "}
          <strong>
            Dipartimento di Scienze dell&rsquo;educazione, Universit&agrave; di
            Bologna
          </strong>
          .
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2019). <em>Diritti riproduttivi e famiglie LGBT</em>,
          Conferenza, &ldquo;Diritti riproduttivi e autodeterminazione&rdquo;,{" "}
          <strong>
            Dipartimento di Giurisprudenza, Scienze politiche, economiche e
            sociali, Universit&agrave; del Piemonte Orientale
          </strong>
          .
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2019).{" "}
          <em>
            L&rsquo;esperienza del Tavolo interistituzionale di Reggio Emilia
          </em>
          , Conferenza &ldquo;La Carriera Alias all&rsquo;interno di
          UNIMORE&rdquo;, <strong>Facolt&agrave; di Medicina, Modena</strong>.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2019). <em>Il lavoro del Tavolo interistituzionale</em>,
          Sottoscrizione del Protocollo operativo,{" "}
          <strong>Comune di Reggio Emilia</strong>.
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
        <li className={style.listItemConferenze}>
          Graglia M. (2019).
          <em>Fuori! Come &egrave; cambiato il movimento LGBT</em>
          <em>+ </em>
          <em>da allora a oggi?</em>, Associazione Agedo, Sanremo.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2019).{" "}
          <em>
            Educare alle differenze. Il bullismo omotransfobico, conoscerlo per
            contrastarlo
          </em>
          , Associazione Polit&eacute;ia, Mirandola (MO).
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2019).{" "}
          <em>Come creare contesti istituzionali inclusivi</em>, Convegno
          &ldquo;Parole e pratiche per includere. Le relazioni tra servizi e
          famiglie LGBT+&rdquo;, <strong>Regione Emilia Romagna</strong>,
          Bologna.
        </li>
      </ul>
      <h2>Anno 2018</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          <em>
            Graglia M. (2018). &ldquo;La violenza invisibile. La violenza nelle
            relazioni lesbiche, nella famiglia e nella coppia&rdquo;,
            associazione Lesbiche Bologna.
          </em>
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2018).{" "}
          <em>Cosa sono l&rsquo;omofobia e la transfobia?,</em> conferenza
          &ldquo;Cronache di ordinaria omofobia&rdquo;, Associazione Geco,
          Torino.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2018).{" "}
          <em>
            Il lessico dell&rsquo;omotransnegativit&agrave;: effetti e strategie
            di contrasto
          </em>
          , Conferenza &ldquo;Le parole sono pietre. Omo-bi-transfobia e hate
          speeches&rdquo;, Associazione Donna Chiama Donna e Coordinamento
          contro la violenza di genere, Siena.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2018). &ldquo;L&rsquo;omotransfobia &egrave; il problema.
          Vuoi far parte del rimedio?&rdquo;, Presentazione di{" "}
          <strong>DE-OMOFOBINA</strong>, Associazione Geco, Fiorfood Coop,
          Torino&nbsp;
          <button
            onClick={() =>
              window.open("/3_DE-OMOFOBINA.webp", "_blank", "fullscreen=yes")
            }
          >
            LINK
          </button>
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2018). <em>L&rsquo;omotransnegativit&agrave;</em>,
          presentazione &ldquo;Guida Arcobaleno&rdquo;,{" "}
          <strong>Circolo Lettori</strong>, Torino.
        </li>

        <li className={style.listItemConferenze}>
          Graglia M. (2018).{" "}
          <em>
            Effetti dell'omotransfobia e dell'omotransnegativit&agrave; sulla
            vita delle persone LGBTI+,{" "}
          </em>
          in &ldquo;Legge regionale per il contrasto
          all&rsquo;omotransnegativit&agrave;&rdquo;, Associazione Arcigay,
          Ravenna.
        </li>
        <li className={style.listItemConferenze}>
          <em>
            Graglia M. (2018). Conferenza &ldquo;Bullismo di genere e bullismo
            omofobico&rdquo;, Associazione Femminile Maschile plurale, Ravenna.
          </em>
        </li>
      </ul>
      <h2>Anno 2017</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          <em>
            Graglia M. (2017). Congresso CIS "Malattia: le sfide dell'eros. La
            qualit&agrave; della vita sessuale nell'insorgenza della malattia",
            chairwoman nel panel &ldquo;area ginecologica&rdquo;.
          </em>
        </li>

        <li className={style.listItemConferenze}>
          Graglia M. (2017). Dibattito &ldquo;S&igrave; lo vogliamo! Per una
          nuova legge regionale contro l&rsquo;omo-transfobia&rdquo;,
          FestaBologna, Bologna, 7 settembre.
        </li>

        <li className={style.listItemConferenze}>
          Graglia M. (2017). Dibattito &ldquo;S&igrave; lo vogliamo!{" "}
          <strong>
            Per una nuova legge regionale contro l&rsquo;omo-transfobia
          </strong>
          &rdquo;, FestaReggio, Reggio Emilia, 24 agosto.
        </li>

        <li className={style.listItemConferenze}>
          Graglia M. (2017). Convegno &ldquo;Sapere, saper fare, saper
          essere&rdquo;. Relazione{" "}
          <em>
            I compiti evolutivi degli adolescenti omosessuali o che si
            interrogano,{" "}
          </em>
          <strong>Agedo e Comune di Parma</strong>, Parma, 27 maggio.
        </li>

        <li className={style.listItemConferenze}>
          Graglia M. (2017). Convegno &ldquo;Salute, cultura e differenza di
          genere&rdquo;. Relazione:{" "}
          <em>
            Gli effetti sulla salute delle discriminazioni basate
            sull&rsquo;orientamento sessuale
          </em>
          , <strong>Spedali Civili di Brescia</strong>,{" "}
          <strong>Facolt&agrave; di Medicina e Chirurgia</strong>, Brescia, 25
          maggio.
        </li>

        <li className={style.listItemConferenze}>
          Graglia M. (2017). Sottoscrizione del Protocollo di Intesa
          Interistituzionale per il contrasto
          all&rsquo;omotransnegativit&agrave; e per l&rsquo;inclusione delle
          persone LGBT, Comune di Reggio Emilia, 17 maggio.&nbsp;
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
      </ul>
      <h2>Anno 2016</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          <em>
            Graglia M. (2016). Convegno &ldquo;Cittadinanza al genere. Gender,
            chi era costui?&rdquo;. Relazione:{" "}
            <em>Genere e orientamento sessuale, </em>
            <strong>Comune di Reggio Emilia</strong>, Uff. Pari
            Opportunit&agrave;, Reggio Emilia, 19 novembre.
          </em>
        </li>

        <li className={style.listItemConferenze}>
          Graglia M. (2016). Tavola rotonda sull&rsquo;omogenitorialit&agrave;:
          &ldquo;Genitorialit&agrave; e uguaglianza. Quale tutela per i
          figli?&rdquo; Comune di Reggio Emilia, 12 novembre.
        </li>

        <li className={style.listItemConferenze}>
          Graglia M. (2016). Convegno &ldquo;Lo stesso s&igrave;. I percorsi
          verso l&rsquo;uguaglianza&rdquo;. Relazione:{" "}
          <em>
            Luci e ombre. Quali prospettive per i colori dell&rsquo;arcobaleno?
          </em>{" "}
          Arcigay, Bologna, 15 ottobre.
        </li>

        <li className={style.listItemConferenze}>
          Graglia M. (2016). Presentazione alla IV Commissione Consiliare
          Permanente del Comune di Reggio Emilia,{" "}
          <em>
            &ldquo;Misure di contrasto all'omofobia e
            all'omonegativit&agrave;&rdquo;,
          </em>
          &nbsp; 23 giugno.
        </li>

        <li className={style.listItemConferenze}>
          Graglia M. (2016). Strategia nazionale per la prevenzione e il
          contrasto delle discriminazioni basate sull&rsquo;orientamento
          sessuale e sull&rsquo;identit&agrave; di genere. &ldquo;Evento finale
          nazionale, <strong>Unar</strong> (Ufficio Nazionale
          Antidiscriminazioni Razziali presso il Dipartimento Pari
          Opportunit&agrave; della Presidenza del Consiglio dei Ministri)
          e&nbsp;
          <strong>Ready</strong>&nbsp;(Rete nazionale delle Regioni e degli Enti
          pubblici per superare l&rsquo;omotransfobia).&nbsp;
          <em>
            La formazione antidiscriminatoria LGBT nelle Pubbliche
            amministrazioni: significato e valore.
          </em>{" "}
          Torino, 28 giugno.&nbsp;
        </li>
      </ul>
      <h2>Anno 2015</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          <em>
            Graglia M. (2015). Forum Parks: &ldquo;GLBT people at work.
            L&rsquo;inclusione nutre il talento&rdquo; Partecipazione alla
            tavola rotonda{" "}
            <em>Lesbiche e visibilit&agrave; nei luoghi di lavoro, </em>
            Associazione <strong>Parks &ndash; Liberi e uguali</strong>, Milano,
            26 Giugno.
          </em>
        </li>

        <li className={style.listItemConferenze}>
          Graglia M. (2015). <strong>Expo Milano 2015</strong>. Cascina Triulza.
          Conduzione del work shop{" "}
          <em>
            Le parole che nutrono. Nutrire la comunit&agrave;. Energia per tutt*
          </em>
          . Expo, Milano, 16 Maggio.
        </li>
      </ul>
      <h2>Anno 2014</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          <em>
            Graglia M. (2014). Forum Parks: &ldquo;Inclusione LGBT: libera il
            talento. Orientamento sessuale e identit&agrave; di genere nei
            luoghi di lavoro&rdquo;. Partecipazione alla tavola rotonda{" "}
            <em>
              Inconscious bias: stereotipi LGBT e pregiudizi inconsapevoli.{" "}
            </em>
            Roma, 13 Giugno.
          </em>
        </li>

        <li className={style.listItemConferenze}>
          Graglia M. (2014). Congresso nazionale &ldquo;Concepire e comprendere.
          Il lavoro psicologico nei percorsi di Procreazione Medicalmente
          Assistita&rdquo;. Intervento dal titolo{" "}
          <em>Coppie omosessuali e PMA, </em>
          <strong>CIS</strong> (Centro Italiano di Sessuologia), Bologna, 11
          Aprile.
        </li>
      </ul>
      <h2>Anno 2013</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          <em>
            Graglia M. (2013).{" "}
            <strong>&ldquo;Festival della scienza&rdquo;.</strong> Intervento
            dal titolo{" "}
            <em>
              Un mostro, la bellezza. Orientamento sessuale, genere e rischi
              alimentari,{" "}
            </em>
            25 Ottobre, Genova.&nbsp;
          </em>
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2013). &ldquo;Bullismo omofobico e ruolo di genere&rdquo;,
          Boario Terme, 27 Settembre.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2013). &ldquo;Mente e corpo. Il corpo delle donne&rdquo;.
          Workshop dal titolo <em>L&rsquo;omosessualit&agrave; femminile</em>, 7
          giugno, Centro di Scienza Cognitiva,{" "}
          <strong>Universit&agrave; e Politecnico di Torino</strong>.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2013). &ldquo;Le famiglie con genitori omosessuali e
          transessuali&rdquo;, Relazione dal titolo{" "}
          <em>
            Omonegativit&agrave;: fattori di rischio e di resilienza per i
            genitori LG
          </em>
          , 4 Maggio, Associazione RGR, Firenze.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2013). &ldquo;Riflessioni psicologiche e sociali su
          omosessualit&agrave;, omoaffettivit&agrave; e identit&agrave; di
          genere. Attualit&agrave; scientifica e deontologia&rdquo;. Relazione
          dal titolo <em>Omofobia. Strumenti di analisi e intervento</em>, 9
          Marzo, <strong>Ordine degli Psicologi della Lombardia</strong>,
          Mantova.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2013). &ldquo;Buone prassi di contrasto contro
          l&rsquo;omofobia&rdquo;. Relazione dal titolo{" "}
          <em>
            Gli orientamenti teorici per realizzare buone prassi di contrasto
            all&rsquo;omofobia
          </em>
          , 15 gennaio, <strong>Universit&agrave; di Ferrara</strong>.
        </li>
      </ul>
      <h2>Anno 2012</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          Graglia M. (2012). &ldquo;La negazione dei diritti&rdquo;. Relazione
          dal titolo{" "}
          <em>L&rsquo;orientamento sessuale delle minoranze sessuali. </em>
          Bologna,28 Novembre.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2012). &ldquo;L&rsquo;identit&agrave; sessuale
          nell&rsquo;et&agrave; evolutiva&rdquo;. Relazione dal titolo{" "}
          <em>
            Gli orientamenti sessuali: creare contesti inclusivi e prevenire il
            disagio
          </em>
          , <strong>Universit&agrave; di Cesena</strong>, 16 Novembre 2012.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M (2012), &ldquo;Scrittori in citt&agrave;: senza
          fiato&rdquo;. <em>Parole strozzate</em>.{" "}
          <strong>Scrittori in citt&agrave;</strong>, Cuneo, 16 Novembre.
        </li>

        <li className={style.listItemConferenze}>
          <em>
            Graglia M. (2012). &ldquo;I risultati delle ricerche psicosociali
            sulle famiglie omogenitoriali&rdquo;.{" "}
            <em>La tutela giuridica delle famiglie omogenitoriali</em>, Bologna,
            4 Maggio.
          </em>
        </li>
      </ul>
      <h2>Anno 2011</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          <em>
            Graglia M. (2011). &ldquo;Chi ha paura del lupo cattivo?
            Identit&agrave; di genere e orientamento sessuale
            nell&rsquo;infanzia&rdquo;. <em>Omofobia e transfobia a scuola</em>.
            Firenze, 9 aprile 2011.
          </em>
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2011). &ldquo;Psicoterapeuti e pazienti gay e lesbiche:
          quale rapporto?&rdquo;.&nbsp;
          <em>
            Convegno de-generi(s): Riflessioni critiche
            sull&rsquo;identit&agrave; di genere, l&rsquo;orientamento sessuale
            e le psicoterapie.{" "}
          </em>
          Brescia, 22 gennaio 2011.
        </li>
      </ul>
      <h2>Anno 2010</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          Graglia M. (2010). &ldquo;Educazione e identit&agrave;
          sessuale&rdquo;. XXVIII Congresso Nazionale CIS
          <em>. Sessualit&agrave;, benessere sessuale e sessuologia</em>.
          Firenze, 16-17 ottobre.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2010). &ldquo;La sessualit&agrave; nella strutturazione
          dell'identit&agrave;: ruolo e importanza dell'identit&agrave; di
          genere e dell'orientamento sessuale&rdquo;.{" "}
          <em>Identit&agrave; e adolescenza</em>. Reggio Emilia, 9 ottobre.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2010). &ldquo;La formazione degli operatori&rdquo;.
          Convegno Internazionale ONIG (Osservatorio Nazionale Identit&agrave;
          di Genere): <em>Sanitario, sociale, culturale:&nbsp;</em>
          <em>
            dalle reti di integrazione all&rsquo;integrazione delle reti.{" "}
          </em>
          Bologna, 21 maggio.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2010). &ldquo;Orientamento omosessuale e discipline della
          salute: da patologia a variante erotico-affettiva&rdquo;. Convegno{" "}
          <em>
            Io sono, io scorro ,Identit&agrave; trans, lesbica e gay in Italia,{" "}
          </em>
          <strong>Universit&agrave; La Sapienza di Roma</strong>, 12-13 Maggio.
        </li>
      </ul>
      <h2>Anno 2009</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          Graglia M. (2009). &ldquo;Infanzia e orientamento sessuale: contesti
          inclusivi e prevenzione del disagio&rdquo;. Convegno{" "}
          <em>
            Orientamento sessuale e identit&agrave; di genere nell'infanzia,{" "}
          </em>
          <strong>Societ&agrave; italiana di pediatria</strong>, Torino, 24
          ottobre.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2009). &ldquo;Le forme dell'omonegativit&agrave;&rdquo;,{" "}
          <em>Giornata internazionale contro l'omofobia</em>, Mantova, 16
          maggio.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2009). &ldquo;L'omonegativit&agrave; sociale&rdquo;,
          Pordenone e Udine, 16 e 17 luglio.
        </li>
      </ul>
      <h2>Anno 2008</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          Graglia M. (2008). &ldquo;Counseling a gay e lesbiche in
          difficolt&agrave;&rdquo;. Convegno{" "}
          <em>Sessuologia clinica e il coinseling psicologico</em>,{" "}
          <strong>Universit&agrave; di Bologna</strong>, Dipartimento di
          Psicologia, sede di Cesena.
        </li>
      </ul>
      <h2>Anno 2007</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          Graglia M., (2007). &ldquo;L&rsquo;omosessualit&agrave; nella scuola
          italiana&rdquo;. Convegno <em>Giornate nazionali di </em>
          <strong>Ready </strong>(Rete nazionale delle Regioni e degli Enti
          pubblici per superare l&rsquo;omotransfobia<strong>)</strong>,
          Firenze, 27 ottobre.
        </li>
        <li className={style.listItemConferenze}>
          Graglia M. (2007), &ldquo;Dialogo su scuola e omosessualit&agrave;:
          come e perch&eacute; se ne pu&ograve; parlare&rdquo;. Convegno{" "}
          <em>
            Educare alla diversit&agrave;: Esperienze educative sui temi
            dell&rsquo;orientamento sessuale
          </em>
          , Melting Box, <strong>Comune di Torino</strong>, 23 ottobre.&nbsp;
        </li>
        <li className={style.listItemConferenze}>
          Graglia M., (2007) &ldquo;Percorsi di coming out: la prospettiva dei
          figli omosessuali e quella dei genitori&rdquo;. Convegno{" "}
          <em>Omosessualit&agrave; e famiglie in movimento, </em>Lugano, 13
          ottobre.
        </li>
      </ul>
      <h2>Anno 2006</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          Graglia M. (2006), &ldquo;Il supporto alla genitorialit&agrave; nelle
          situazioni di omofobia sociale e interiorizzata&rdquo;. Convegno{" "}
          <em>
            Crescere in famiglie omogenitoriali: contributi dal diritto, dalle
            scienze psicologiche e sociali
          </em>
          , Milano, 16 dicembre.&nbsp;
        </li>
        <li className={style.listItemConferenze}>
          Graglia M., (2006) &rdquo;The first abroad research on the health of
          lesbian and bisexual women in Italy&rdquo;. Convegno{" "}
          <strong>
            <em>International Conference on GLBT Human Rights</em>
          </strong>
          , Montreal (Canada) 26-29 luglio.&nbsp;
        </li>
      </ul>
      <h2>Anno 2005</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          Graglia M. (2005) &ldquo;Risultati del campione femminile&rdquo;.{" "}
          <em>
            Convegno Modidi: sesso e salute di lesbiche, gay e bisessuali oggi
            in Italia
          </em>
          . Firenze, 16 dicembre.&nbsp;
        </li>
      </ul>
      <h2>Anno 2004</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          Graglia M. (2004). &ldquo;Gli adolescenti omosessuali&rdquo;. Convegno{" "}
          <em>L&rsquo;ombelico del mondo giovanile&hellip; e dintorni</em>&nbsp;
          promosso dalla Cooperativa sociale Eumeo, dal Comune, Provincia e
          dall&rsquo;Ausl di Parma.
        </li>
      </ul>
      <h2>Anno 2003</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          Graglia M., Lelleri R. &amp; Pietrantoni L., (2003). &ldquo;Unexpected
          patients: a project on HIV risk, medical practice and sexual
          orientation&rdquo;. Congresso{" "}
          <em>AIDS Impact: the biopsychosocial aspects</em>, Milano, 9-12
          Luglio.
        </li>
      </ul>
      <h2>Anno 2000</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          Graglia M., Pietrantoni L., (2000). &ldquo;La prevenzione della
          violenza e del bullismo intrascolastico&rdquo;, workshop presentato al
          Convegno <em>La prevenzione nella Scuola e nella Comunit&agrave;</em>,
          Montegrotto (Padova), 28-30 Settembre.&nbsp;
        </li>
      </ul>
      <h2>Anno 1999</h2>
      <ul className={style.listConferenze}>
        <li className={style.listItemConferenze}>
          Graglia M. (1999), &ldquo;Italian men and women
          psychotherapists&rsquo;perception of gender identity&rdquo;
          presentatoal <em>VI European Congress of Psychology</em>, Roma, 7-9
          luglio.
        </li>
      </ul>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Contatti" />

export default Contatti
