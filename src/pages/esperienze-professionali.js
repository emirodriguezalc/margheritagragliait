import * as React from "react"
import * as styles from "../components/index.module.css"

import EsperienzeItem from "../components/esperienze-item"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { useState } from "react"

const experienceData = [
  {
    title: `Master GeDIE  (Gestione delle Diversità: Inclusione ed Equità)`,
    entity: `<strong>Università degli studi di Trento</strong>`,
    year: ` dal 2020`,
    role: `docente`,
  },
  {
    title: `Seminario di credito “Identità di genere, orientamenti sessuali e professioni psicologiche: buone pratiche per la promozione del benessere”`,
    entity: `<strong>Università degli studi di Trento</strong>, Dipartimento di psicologia e scienze cognitive, sede di Rovereto.`,
    year: `2022`,
    role: `docente`,
  },
  {
    title: `Progetto europeo &nbsp <i>"Supporting Wellbeing and Integration of Transgender victims in Care environments with Holistic approach</i>”`,
    entity: `<strong>Ausl di Reggio Emilia</strong>`,
    year: `2021-2022`,
    role: `consulente esperta sui temi dell’identità transgender (progettazione, formazione, autrice)`,
  },
]

const experienceDataReadMore = [
  {
    title: `Il supporto psicologico rivolto agli adolescenti e ai giovani adulti con varianza di genere`,
    entity: `<strong>Ausl di Ferrara</strong>`,
    year: `2022`,
    role: `Progettista e formatrice`,
  },
  {
    title: `Le identità sessuali. Potenziare le conoscenze del gruppo di lavoro relativamente alle identità sessuali e alla varianza di genere in età adolescenziale`,
    entity: `<strong>Ausl di Piacenza</strong>`,
    year: `2022`,
    role: `Progettista e formatrice`,
  },
  {
    title: `Percorso formativo “Le identità sessuali nei servizi sanitari: conoscere per prendere in carico”`,
    entity: `<strong>Ausl di Rimini</strong>`,
    year: `2019-2022`,
    role: `Progettista e formatrice`,
  },
  {
    title: `“Detenzione e persone transgender” rivolto agli operatori penitenziari`,
    entity: `Comune di Reggio Emilia in collaborazione con gli Istituti Penali di Reggio Emilia C.C.C.R`,
    year: `2022-2023`,
    role: `Progettista, formatrice e coordinatrice`,
  },
  {
    title: `“Differenze di genere e identità. Come bambine/i e adulti co-costruiscono il genere” rivolto alle/ai educatrici/ori dei nidi e alle/gli insegnati della scuola dell’infanzia`,
    entity: `Istituzione scuole e nidi d’infanzia del Comune di Reggio Emilia.`,
    year: `2021-2023`,
    role: `progettista e formatrice`,
  },
  {
    title: `Corso di formazione “Identità e stereotipi di genere nella scuola dell'infanzia: fare la differenza insieme” rivolto alle/ai educatrici/ori dei `,
    entity: `Nidi del Comune di Settimo Torinese`,
    year: `2022`,
    role: `progettista e formatrice`,
  },
  {
    title: `Corso di formazione della durata di 48 ore “Incongruenze di genere. Il supporto al percorso di affermazione di genere”`,
    entity: ` CIS di Bologna`,
    year: `2022`,
    role: `progettista, coordinatrice e formatrice`,
  },
  {
    title: `Seminario “Identità di genere al di là del binarismo: tra teoria e prassi”`,
    entity: `Instituto: Ruolo terapeutico di Trento`,
    year: `Anno: 2022`,
    role: `Ruolo: docente`,
  },
  {
    title: `Corso di formazione “LGBTI+ Leadership Enhancement Program”`,
    entity: `Instituto: EDGE Excellence & Diversity by GLBT Executives`,
    year: `2022`,
    role: `docente.`,
  },
  {
    title: `Seminario “Il buio oltre l’arcobaleno. Maltrattamenti intrafamiliari sui minori LGBTQIA*. Difficoltà genitoriali e interventi di aiuto a famiglie e minorenni”`,
    entity: `CISMAI (Coordinamento italiano dei servizi contro il maltrattamento e l’abuso all’infanzia)`,
    year: `2022`,
    role: `docente`,
  },
  {
    title: `Corso di formazione “Sessualità e disturbi psichiatrici”`,
    entity: `Instituto: cooperativa Ovile di Reggio Emilia`,
    year: `Anno: 2022`,
    role: `Ruolo: docente`,
  },
  {
    title: `Seminario “Salute mentale: una prospettiva di genere”`,
    entity: `Instituto: Cooperativa Madre Teresa di Reggio Emilia`,
    year: `Anno: 2022`,
    role: `Ruolo: docente`,
  },
  {
    title: `“Piano di Formazione Continua dedicata ai Promotori di Salute che operano negli Istituti Penitenziari della Regione Emilia Romagna”`,
    entity: `Instituto: Regione Emilia Romagna.`,
    year: `Anno: 2020-2021`,
    role: `Ruolo: docente`,
  },
  {
    title: `Corso “Orientamento sessuale e identità di genere. L’inclusione nelle pubbliche amministrazioni” rivolti al personale dei vari servizi`,
    entity: `Instituto: Comune di Settimo Torinese`,
    year: `Anno: 2020-2021`,
    role: `Ruolo: progettista e formatrice `,
  },
  {
    title: `Corso di formazione sulla sessualità`,
    entity: `Instituto: AUSL di Carbonia `,
    year: `Anno: 2020-2021`,
    role: `Ruolo: docente`,
  },
  {
    title: `Corso di formazione sulla sessualità`,
    entity: `Instituto: AUSL di Carbonia `,
    year: `Anno: 2020-2021`,
    role: `Ruolo: docente`,
  },
  {
    title: `Seminario di aggiornamento professionale “Prevenire e combattere odio e discriminazioni”`,
    entity: `Instituto: Questura di Genova`,
    year: `Anno: 2017`,
    role: `Ruolo: docente`,
  },
  {
    title: `Corso “Prevenzione e contrasto delle discriminazioni basate sull’orientamento sessuale nei contesti lavorativi”`,
    entity: `Instituto: AUSL di Modena`,
    year: `Anno: 2016`,
    role: `Ruolo: docente`,
  },
  {
    title: `Corso di formazione “L’identità sessuale in età evolutiva” rivolto ai pediatri e medici di medicina generale`,
    entity: `Instituto: AUSL di Foggia`,
    year: `Anno: 2016`,
    role: `Ruolo: docente`,
  },
  {
    title: `"Strategia Nazionale LGBT per la prevenzione e il contrasto delle discriminazioni basate sull'orientamento sessuale e sull'identità di genere". In tale progetto sono state formate le figure apicali delle Forze dell’ordine, delle Pubbliche amministrazioni e i dirigenti scolastici regionali.`,
    entity: `Instituto: UNAR (Ufficio Nazionale Antidiscriminazioni Razziali presso il Dipartimento Pari Opportunità della Presidenza del Consiglio dei Ministri)`,
    year: `Anno: 2014-2016`,
    role: `Ruolo: coordinatrice del team formativo e docente`,
  },
  {
    title: `"Tavolo interistituzionale per il contrasto all'omotransnegatività e per l'inclusione delle persone LGBT" `,
    entity: `Instituto: Comune di Reggio Emilia`,
    year: `Anno: dal 2105`,
    role: `Ruolo: coordinatrice`,
  },
  {
    title: `Scuola di Specializzazione in "Psicoterapia dello sviluppo e dell'adolescenza" `,
    entity: `Instituto: ACABS nelle sedi di Reggio Emilia, Brescia e Trento.`,
    year: `Anno: dal 2105`,
    role: `Ruolo: docente`,
  },
  {
    title: `Progetto “W l’amore” (percorsi e materiali per l’educazione affettiva e sessuale; XV Programma per la prevenzione e lotta all’AIDS)`,
    entity: `Instituto: Servizio Sanitario Regionale Emilia Romagna`,
    year: `Anno: 2014`,
    role: `Ruolo: docente`,
  },
  {
    title: `Seminario “Genere, stereotipi di genere e violenza sulle donne: azioni educative nell’infanzia” rivolto alle educatrici e alle operatrici dei nidi e della scuola dell’infanzia`,
    entity: `Instituto: Comune di Modena`,
    year: `Anno: 2014`,
    role: `Ruolo: docente`,
  },
  {
    title: `Esperta sui temi dell’identità di genere e di orientamento sessuale`,
    entity: `Instituto: CIS (Centro Italiano di Sessuologia)`,
    year: `Anno: dal 2010`,
    role: `Ruolo: didatta e consigliere`,
  },
  {
    title: `Formazione dei dipendenti pubblici`,
    entity: `Instituto: Servizio LGBT del comune di Torino`,
    year: `Anno: 2007-2008 e 2014-2016.`,
    role: `Ruolo: formatrice`,
  },
  {
    title: `International Boarding`,
    entity: `Instituto: GALE (Global Alliance on LGBT Education)`,
    year: `Anno: 2006-2010`,
    role: `Ruolo: consigliera`,
  },
  {
    title: `Progetto di ricerca intervento “Progettazione e sperimentazione di percorsi formativi innovativi per operatori psico-socio-sanitari”`,
    entity: `Instituto: Arcigay-Istituto Superiore di Sanità`,
    year: `Anno: 2007`,
    role: `Ruolo: formatrice`,
  },
  {
    title: `Progetto di ricerca “Modi Di. Ricerca nazionale sulla salute di lesbiche, gay e bisessuali”`,
    entity: `Instituto: Arcigay-Istituto Superiore di Sanità`,
    year: `Anno: 2005`,
    role: `Ruolo: ricercatrice e autrice`,
    description: `
      <a href="https://www.arcigay.it/wp-content/uploads/modidi_opuscolo.pdf" target='__blank'>
        Link to pdf
      </a>`,
  },
  {
    title: `Gruppo di studio Sessualità, discriminazioni e integrazione sociale.`,
    entity: `Instituto: Ministero Pari Opportunità`,
    year: `Anno: 2003`,
    role: `Ruolo: consulente tecnico`,
  },
]

const Esperienze = () => {
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
          ESPERIENZE PROFESSIONALI (sintesi)
        </h2>
      </div>
      <div className={styles.esperienzeContainer}>
        {experienceData.map(experienceItem => (
          <EsperienzeItem
            title={experienceItem.title}
            year={experienceItem.year}
            entity={experienceItem.entity}
            role={experienceItem.role}
            description={experienceItem.description}
          />
        ))}
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
        {readMore1 &&
          experienceDataReadMore.map(experienceItem => (
            <EsperienzeItem
              title={experienceItem.title}
              year={experienceItem.year}
              entity={experienceItem.entity}
              role={experienceItem.role}
              description={experienceItem.description}
            />
          ))}
        <p>
          <p>
            Ha partecipato a vari <strong>progetti europei</strong> sui temi
            dell'inclusione e delle differenze di orientamento sessuale e di
            identit&agrave; di genere, ad esempio nel 2021 a <em>SWITCH</em>
            <strong>(</strong>
            <em>
              Supporting Wellbeing and Integration of Transgender victims in
              Care environments with Holistic approach
            </em>
            );nel 2014 a <em>JCVG</em> (<em>Youth can end gender violence</em>);
            nel 2010 ad <em>AHEAD</em> (
            <em>Against Homophobia European local Administration Devices</em>);
            nel 2006 a <em>Schoolmates </em>(
            <em>
              Train the trainers to address and prevent violence against
              homosexual adolescents in school
            </em>
            ); nel 2002 a <em>Triangle</em> (
            <em>
              Transfer of information to combat discrimination against gays and
              lesbians in Europe
            </em>
            ); nel 2000 a <em>Be Equal Be Different</em> sull'applicazione
            dell'art. 13 del Trattato di Amsterdam.&nbsp;
          </p>
          <p>
            Dalla fine degli anni '90 ha organizzato e condotto in varie sedi
            italiane i seguenti <strong>corsi di formazione: </strong>
            <em>
              "La presa in carico degli utenti con varianza di genere e
              orientamento sessuale"
            </em>{" "}
            rivolto agli operatori psico-socio-sanitari delle aziende sanitarie;{" "}
            <em>"L'identit&agrave; sessuale in et&agrave; evolutiva"</em>{" "}
            rivolto ai pediatri e medici di base; <em>"Educare al rispetto"</em>{" "}
            rivolto agli insegnanti per contrastare il bullismo omofobico;{" "}
            <em>"Le Nuove Famiglie: la scuola, le famiglie, gli insegnanti"</em>{" "}
            rivolto agli educatori della scuola primaria per promuovere
            l'integrazione dei bambini che crescono in famiglie omogenitoriali;{" "}
            <em>
              "Stereotipi di genere e contrasto alla violenza sulle donne"
            </em>{" "}
            rivolto agli educatori della scuola primaria;{" "}
            <em>
              "I contesti lavorativi: come creare luoghi di lavoro inclusivi"
            </em>{" "}
            rivolto ai dipendenti delle Pubbliche amministrazioni e delle
            aziende private.
          </p>
          <p>
            A partire dalla fine degli anni '90 ha organizzato e condotto i
            corsi di formazione rivolti agli insegnanti dal titolo{" "}
            <em>
              Educazione socio-affettiva sui temi dell'identit&agrave; sessuale
            </em>
            , autorizzati dal MIUR ai sensi della Direttiva n. 90 del 1&deg;
            Dicembre 2003.
          </p>
        </p>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Esperienze PROFESSIONALI" />

export default Esperienze
