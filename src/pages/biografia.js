import * as styles from "../components/index.module.css"

import React, { useRef, useState } from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Biografia = () => {
  const shortBioRef = useRef()
  const longBioRef = useRef()
  const profilesRef = useRef()
  const [bg, changeBGColor] = useState("short bio")

  const indexItems = [
    {
      label: "short bio",
      fc: () => {
        changeBGColor("short bio")
        shortBioRef?.current?.scrollIntoView()
      },
    },
    {
      label: "Long bio",
      fc: () => {
        changeBGColor("Long bio")
        longBioRef?.current?.scrollIntoView()
      },
    },
    {
      label: "profiles and interviews",
      fc: () => {
        changeBGColor("profiles and interviews")
        profilesRef?.current?.scrollIntoView()
      },
    },
  ]
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
          BIOGRAFIA
        </h2>
      </div>
      <div className={styles.bioContainer}>
        <ul className={styles.bioIndexer}>
          {/*           {indexItems.map(el => (
            <li
              style={{
                color: bg == el.label ? "white" : `var( --color-text-gray)`,
                cursor: "pointer",
                textTransform: "capitalize",
                backgroundColor: bg == el.label ? `var(--color-primary)` : "",
                padding: 5,
                margin: 10,
              }}
            >
              <h3 style={{ margin: 0 }} onClick={el.fc}>
                {el.label} →
              </h3>
            </li>
          ))} */}
        </ul>
        <div className={styles.bioParagraph}>
          <h2>Psicoterapeuta, formatrice e saggista</h2>
          <div className={styles.bioInfo}>
            <p>
              Laureata in Psicologia clinica all&apos;Universit&agrave; di
              Torino. Specializzata in psicoterapia ad indirizzo costruttivista.
              Svolge l&apos;attivit&agrave; di psicoterapeuta e sessuologa
              clinica a Reggio Emilia.
            </p>

            <p>
              Iscritta all&apos;albo degli psicologi della Regione Emilia
              Romagna n. 2910 sez. A e all&apos;albo dei sessuologi della FISS
              (Federazione Italiana Sessuologia Scientifica) e del CIS (Centro
              Italiano di Sessuologia) per cui svolge l&rsquo;attivit&agrave; di
              didatta e consigliere.&nbsp;
            </p>

            <p>
              Affianca all&apos;attivit&agrave; clinica quella di&nbsp;
              <Link target="_blank" rel="noreferrer" to="/formazione">
                formatrice e consulente
              </Link>
              &nbsp;presso universit&agrave;, aziende USL, enti pubblici,
              istituzioni, Forze dell&rsquo;ordine, scuole di specialit&agrave;,
              scuole di ogni ordine e grado, aziende private e associazioni sui
              temi dell&apos;identit&agrave; sessuale (sesso, genere e
              orientamento), sul contrasto alle discriminazioni e sulla
              promozione dell&apos;inclusione sociale delle persone LGBT.&nbsp;
            </p>
            <p>
              Come esperta dei temi dell&rsquo;identit&agrave; sessuale e della
              promozione dell&rsquo;inclusione sociale &egrave; stata audita nel
              2020 in &nbsp;
              <Link to="/video">
                Commissione Giustizia della Camera dei Deputati&nbsp;
              </Link>
              a Roma in merito alle proposte di legge contro le discriminazioni
              basate sull&rsquo;identit&agrave; di genere e
              sull&rsquo;orientamento sessuale con una relazione dal
              titolo:&nbsp;
              <em>
                Le discriminazioni basate sull&rsquo;identit&agrave; di genere e
                sull&rsquo;orientamento sessuale. La prospettiva
                psico-sociale&nbsp;
              </em>
              <button
                onClick={() =>
                  window.open(
                    "/1_Audizione-Camera-deputati.pdf",
                    "_blank",
                    "fullscreen=yes"
                  )
                }
              >
                LINK
              </button>
            </p>
            <p>
              Nel 2019 ha partecipato al Convegno &ldquo;Per la dignit&agrave;
              delle persone. Contro la violenza omotransfobica&rdquo;, presso
              la&nbsp;
              <a
                href="https://www.radioradicale.it/scheda/593379/per-la-dignita-delle-persone-contro-la-violenza-omotransfobica?i=4076662"
                rel="noopener noreferrer"
                target="_blank" rel="noreferrer"
              >
                <strong>Camera dei deputati</strong>
              </a>
              &nbsp; di Roma&nbsp;
            </p>

            <p>
              Nel 2020 ha partecipato al convegno di presentazione del progetto
              della Commissione diritti umani del Consiglio Nazionale Forense
              &ldquo;L&rsquo;inclusione e la non discriminazione per motivi di
              orientamento sessuale, identit&agrave; di genere,
              &ldquo;razza&rdquo; ed origine etnica nella societ&agrave; e
              nell&rsquo;avvocatura&rdquo;,&nbsp;
              <Link to={"/video"}>
                <strong>Consiglio Nazionale Forense</strong>
              </Link>
              , Roma.
            </p>

            <p>
              &Egrave; coordinatrice, dal 2015, del &quot;{" "}
              <a
                href="https://www.comune.re.it/argomenti/pari-opportunita/tavoli-interistituzionali/tavolo-interistituzionale-per-il-contrasto-all2019omotransnegativita-e-per-l2019inclusione-delle-persone-lgbt"
                rel="noopener noreferrer"
                target="_blank" rel="noreferrer"
              >
                <strong>
                  Tavolo interistituzionale per il contrasto
                  all&apos;omotransnegativit&agrave; e per l&apos;inclusione
                  delle persone LGBT&quot; del&nbsp; Comune di Reggio Emilia
                </strong>
              </a>
            </p>
            <p>
              E&apos; autrice per le edizioni Carocci di{" "}
              <em>Le differenze di sesso, genere e orientamento</em> (2019)&nbsp;
              <em>
                Omofobia. Strumenti di analisi e di intervento
              </em> (2012), <em>Psicoterapia e omosessualit&agrave;</em> (2009)
              e di altre pubblicazioni scientifiche.
            </p>
            <p>
              E&rsquo; Componente della Commissione antidiscriminazione della
              societ&agrave; scientifica SIGIS (Societ&agrave; Italiana Genere,
              Identit&agrave; e Salute), Firenze.
            </p>
          </div>
        </div>
        <div className={styles.bioImage}>
          <StaticImage
            src="../../static/foto1.webp"
            loading="eager"
            quality={95}
            objectFit="cover"
            formats={["auto", "webp", "avif"]}
            alt=""
            width={300}
          />
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Biografia" />

export default Biografia
