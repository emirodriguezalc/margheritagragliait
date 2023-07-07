import * as React from "react"
import * as style from "../components/index.module.css"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { useState } from "react"

const Psicoterapia = () => {
  const [readMore1, setReadMore1] = useState(false)
  const [readMore2, setReadMore2] = useState(false)
  const [readMore3, setReadMore3] = useState(false)
  const [readMore4, setReadMore4] = useState(false)
  const [readMore5, setReadMore5] = useState(false)
  const [readMore6, setReadMore6] = useState(false)
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
          PSICOTERAPIA
        </h2>
      </div>
      <div className={style.paddingWrapper}>
        <>
          <h3
            style={{ paddingBottom: "15px", borderBottom: "1px solid black" }}
          >
            Approccio terapeutico
          </h3>
          <p style={{ textAlign: "justify" }}>
            Il riferimento teorico&nbsp;del modello terapeutico &egrave; quello
            del&nbsp;costruttivismo che mette al centro l&rsquo;esperienza
            soggettiva, ossia come ogni persona &ldquo;costruisce&rdquo; la
            conoscenza di s&eacute;, degli altri e del mondo. Ogni individuo
            reagisce infatti agli eventi della vita in modo differente, in base
            al proprio sistema percettivo, cognitivo, emozionale e rispetto alle
            proprie esperienze intersoggettive.
          </p>
          <p style={{ textAlign: "justify" }}>
            L&rsquo;obiettivo della psicoterapia,
            {!readMore1 && (
              <button
                style={{
                  color: "green",
                  textTransform: "uppercase",
                  border: "none",
                  backgroundColor: "inherit",
                }}
                onClick={() => setReadMore1(!readMore1)}
              >
                {"Scopri di più"}
              </button>
            )}
            {readMore1 && (
              <>
                <p style={{ textAlign: "justify" }}>
                  {" "}
                  mettendo&nbsp;al centro l&rsquo;unicit&agrave; personale,
                  consiste nel promuovere un cambiamento nel modo in cui la
                  persona percepisce gli avvenimenti della propria vita e come
                  si rapporta ad essi.&nbsp;{" "}
                </p>
                <p style={{ textAlign: "justify" }}>
                  In quest&rsquo;ottica l&rsquo;intervento terapeutico &egrave;
                  un processo in cui il terapeuta e la persona che chiede aiuto
                  partecipano attivamente alla costruzione di nuovi significati,
                  nuove modalit&agrave; di espressione di s&eacute; e di
                  interazione con gli altri.
                </p>
              </>
            )}
          </p>
        </>
        <>
          <br />
          <h3
            style={{ paddingBottom: "15px", borderBottom: "1px solid black" }}
          >
            Ambiti di intervento
          </h3>
          <p style={{ textAlign: "justify" }}>
            La psicoterapia e la consulenza clinica si rivolgono a&nbsp;singoli
            o coppie&nbsp;nelle varie fasi del ciclo di vita.
          </p>
          <p style={{ textAlign: "justify" }}>
            <h4>Disagio psicologico</h4>
            {!readMore2 && (
              <button
                style={{
                  color: "green",
                  textTransform: "uppercase",
                  border: "none",
                  backgroundColor: "inherit",
                }}
                onClick={() => setReadMore2(!readMore2)}
              >
                {"Scopri di più"}
              </button>
            )}
          </p>
          {readMore2 && (
            <>
              <p style={{ textAlign: "justify" }}>
                Gli interventi sono mirati alla presa in carico, sia
                nell&rsquo;adulto sia nell&rsquo;adolescente, di molteplici
                situazioni di sofferenza psicologica che possono riguardare:
              </p>
              <ul>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    • Problemi connessi all&rsquo;ansia, come ad esempio
                    attacchi di panico, paure connesse a specifiche situazioni e
                    luoghi;
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    • Problemi connessi al tono dell&rsquo;umore, come ad
                    esempio gli&nbsp;stati depressivi;
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    • Problemi&nbsp;relazionali&nbsp;e interpersonali
                  </p>
                </li>
              </ul>
              <br />
              <br />
            </>
          )}
          <p style={{ textAlign: "justify" }}>
            <h4>Consulenza e terapia sessuologica&nbsp;</h4>
            {!readMore3 && (
              <button
                style={{
                  color: "green",
                  textTransform: "uppercase",
                  border: "none",
                  backgroundColor: "inherit",
                }}
                onClick={() => setReadMore3(!readMore3)}
              >
                {"Scopri di più"}
              </button>
            )}
          </p>
          {readMore3 && (
            <>
              <p style={{ textAlign: "justify" }}>
                La sessualit&agrave; rappresenta uno dei sistemi motivazionali
                interpersonali e si esprime in una&nbsp;pluralit&agrave; di
                modi. Libert&agrave;, espressivit&agrave;, comunicazione e
                relazionalit&agrave; sono i fondamenti principali per una
                sessualit&agrave; piacevole e appagante.
              </p>
              <p style={{ textAlign: "justify" }}>
                L&rsquo;intervento sessuologico &egrave; mirato alla gestione
                del disagio psicologico e relazionale nella sfera della
                sessualit&agrave; e alla risoluzione delle disfunzioni sessuali:
              </p>
              <ul>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    • Difficolt&agrave; rispetto al&nbsp;desiderio
                    sessuale&nbsp;(assenza o diminuzione)
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    • Difficolt&agrave; durante l&rsquo;eccitamento
                    sessuale&nbsp;(difficolt&agrave; a raggiungere o mantenere
                    l&rsquo;erezione, difficolt&agrave; di eccitamento
                    femminile)
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    • Difficolt&agrave; rispetto all&rsquo;orgasmo (eiaculazione
                    precoce o ritardata, anorgasmia, difficolt&agrave; a
                    raggiungere l&rsquo;orgasmo nelle donne)
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    • Dolore sessuale&nbsp;durante la penetrazione (dispareunia;
                    vaginismo, ossia l&rsquo;impossibilit&agrave; di ricevere la
                    penetrazione).
                  </p>
                </li>
              </ul>
              <p style={{ textAlign: "justify" }}>
                La tecnica sessuologica utilizzata prevede la terapia mansionale
                integrata e si avvale del supporto multidisciplinare attraverso
                la collaborazione con altri professionisti laddove si renda
                necessaria una consultazione medica o un supporto farmacologico.
              </p>
              <p style={{ textAlign: "justify" }}>
                La&nbsp;terapia mansionale integrata&nbsp;&egrave; un intervento
                di breve durata orientata a scopi mirati e specifici. Alla
                coppia vengono proposte alcune esperienze a casa (mansioni) tra
                una seduta e l&rsquo;altra con la finalit&agrave; di riflettere
                successivamente insieme per esplorare nuove modalit&agrave; di
                approccio alla sessualit&agrave;.&nbsp;
              </p>
              <p style={{ textAlign: "justify" }}>
                Margherita Graglia &egrave; didatta e consigliera del CIS
                (Centro italiano di sessuologia) e iscritta alla FISS
                (Federazione italiana di sessuologia scientifica).&nbsp;
              </p>
            </>
          )}
          <p style={{ textAlign: "justify" }}>
            <h4>Psicoterapia e consulenza per le persone LGBTQUIA+</h4>
            {!readMore4 && (
              <button
                style={{
                  color: "green",
                  textTransform: "uppercase",
                  border: "none",
                  backgroundColor: "inherit",
                }}
                onClick={() => setReadMore4(!readMore4)}
              >
                {"Scopri di più"}
              </button>
            )}
          </p>
          {readMore4 && (
            <>
              <img src="/img_1.webp" className={style.rainbowImage} />
              <p style={{ textAlign: "justify" }}>
                Il sesso, il genere e l&rsquo;orientamento sessuale sono
                dimensioni nucleari dell&rsquo;identit&agrave; umana e possono
                manifestarsi in una molteplicit&agrave; di forme.&nbsp;
              </p>
              <p style={{ textAlign: "justify" }}>
                Gli interventi clinici sono mirati a supportare le persone con
                varianza di sesso, genere e orientamento nei loro percorsi di
                vita, esplorando e sostenendo l&rsquo;unicit&agrave; di ogni
                individuo.&nbsp;
              </p>
              <p style={{ textAlign: "justify" }}>
                <p style={{ textAlign: "justify" }}>
                  In questo ambito gli interventi psicologici possono riguardare{" "}
                  <strong>
                    l&rsquo;intersessualit&agrave;, le identit&agrave;
                    transgender e gli orientamenti omosessuali, bisessuali e
                    asessuali.
                  </strong>
                </p>
                Nello specifico gli interventi sono indirizzati a fornire:
              </p>
              <ul>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    • Consulenza psicologica alle&nbsp;
                    <strong>persone intersex</strong>
                    <br />
                    (esplorazione della propria identit&agrave;; coming out;
                    integrazione della propria immagine corporea; supporto ai
                    genitori)
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    • Consulenza psicologica alle&nbsp;
                    <strong>persone transgender</strong>
                    <br />
                    (esplorazione dell&rsquo;identit&agrave; di genere nelle sue
                    varianti &ndash; ad esempio quelle non binarie &ndash;
                    nell&rsquo;et&agrave; adolescenziale e in quella adulta;
                    supporto nelle varie fasi del percorso di affermazione di
                    genere; redazione della certificazione per la rettificazione
                    anagrafica; sostegno ai genitori e ai familiari; supporto
                    nei vari contesti sociali, come ad esempio quello
                    scolastico)
                  </p>

                  <p style={{ textAlign: "justify" }}>
                    Margherita Graglia &egrave; componente della
                    commissione antidiscriminazione della societ&agrave;
                    scientifica SIGIS (Societ&agrave; italiana genere,
                    identit&agrave; e salute)
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <p style={{ textAlign: "justify" }}>
                    • Consulenza psicologica rivolta alle&nbsp;
                    <strong>persone gay, lesbiche e bisessuali&nbsp;</strong>
                    <p style={{ textAlign: "justify" }}>
                      (esplorazione dell&rsquo;orientamento sessuale; sostegno
                      nel processo del coming out; consulenza di coppia;
                      sostegno alle coppie non monogame; consulenza
                      sessuologica; consulenza
                      sull&rsquo;omogenitorialit&agrave;, sostegno durante il
                      percorso di procreazione medicalmente assistita)
                    </p>
                  </p>
                </li>
              </ul>
              <h4>Percorso di gruppo per le persone LGBTQIA+</h4>
              <ul>
                <p style={{ textAlign: "justify" }}>
                  Il gruppo di incontro&nbsp;&egrave; un percorso in gruppo
                  mirato a conoscere ed esprimere i propri bisogni, desideri ed
                  emozioni.&nbsp;
                </p>
                <p style={{ textAlign: "justify" }}>
                  Il gruppo di incontro &egrave; rivolto a tutte le persone che
                  vogliono esplorare il proprio orientamento sessuale e/o la
                  propria identit&agrave; di genere e che vogliono condividere
                  vissuti, esperienze e momenti di crescita. L&rsquo;obiettivo
                  principale &egrave; lo sviluppo e l&apos;affermazione della
                  propria identit&agrave;, l&apos;espressione delle emozioni,
                  del proprio punto di vista e una maggiore consapevolezza delle
                  dinamiche interne e interpersonali.
                </p>
              </ul>
            </>
          )}
        </>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Psicoterapia" />

export default Psicoterapia
