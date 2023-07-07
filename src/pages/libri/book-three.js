import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BookThree = () => (
  <Layout>
    <div style={{ display: "flex", margin: "40px" }}>
      <div
        style={{
          width: "35%",
          height: "100%",
          padding: "3%",
          backgroundColor: "#eff1e9",
        }}
      >
        <img
          src="/th_psicoterapia.webp"
          style={{ width: "500px" }}
        />
      </div>
      <div style={{ width: "70%", height: "100%", marginLeft: "40px" }}>
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <h1 style={{ margin: 0 }}>PSICOTERAPIA E OMOSESSUALITA'</h1>
          <h2
            style={{
              color: "#8a9a5b",
              fontSize: "var(--font-lg)",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Un'attenta analisi del rapporto tra psicoterapeuti e pazienti gay e
            lesbiche
          </h2>
          <h3
            style={{
              color: "#8a9a5b",
              fontSize: "var(--font-md)",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Carocci Faber editore 2009
          </h3>
        </div>
        <p>
          <strong>
            Cos'è l'orientamento sessuale? Cosa significa parlare di
            psicoterapia e omosessualità? Qual è la rilevanza dell'orientamento
            sessuale nel setting clinico?
          </strong>
          <br />
          <br />
          Il testo fa il punto sui più recenti contributi della ricerca
          scientifica e illustra le specificità dei pazienti gay e lesbiche,
          discutendo alcune modalità di intervento terapeutico ed evidenziando
          il contributo dello psicoterapeuta nella costruzione di un setting
          inclusivo.
          <br />
          <br /> In particolare il lavoro offre una disamina delle
          <strong>forme contemporanee dell'omonegatività </strong> e del loro
          impatto sul benessere psico-sociale dei gay e delle lesbiche. Sebbene
          siano in corso profondi cambiamenti nella società civile rispetto
          all'omosessualità, da un lato le istituzioni italiane rimangono cieche
          e sorde di fronte alle richieste di riconoscimento dei cittadini non
          eterosessuali e dall'altro il pregiudizio antigay assume forme
          ambigue, sottotraccia, solo apparentemente più innocue.
          <br />
          <br />
          In questo panorama si muove anche <strong>lo psicoterapeuta </strong>
          che ha, come sua cifra, un bagaglio di teorie sull'orientamento
          omosessuale che possono interferire, se non interrogate a fondo, nella
          selezione delle informazioni ritenute clinicamente rilevanti e nel
          contempo possono agire sull'immagine che ha di sé il paziente. Senza
          trascurare di evidenziare l'apporto di entrambi i soggetti alla
          relazione terapeutica, l'autrice propone alcuni spunti di riflessione
          affinché la stanza del terapeuta diventi un contesto affrancato da
          stereotipi e pregiudizi .
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3
            style={{ textTransform: "uppercase", fontSize: "var(--font-sm)" }}
          >
            Titolo disponibile per la aquisizione su:{" "}
          </h3>
          <div style={{ display: "flex" }}>
            <a
              href={
                "https://www.amazon.it/Psicoterapia-omosessualit%C3%A0-Margherita-Graglia/dp/8874665695"
              }
              target="_blank" rel="noreferrer"
            >
              <img src="/amazon-button.png" style={{ height: "50px" }} />
            </a>
            <a
              href={
                "https://www.ibs.it/psicoterapia-omosessualita-libro-margherita-graglia/e/9788874665693"
              }
              target="_blank" rel="noreferrer"
            >
              <img
                src="/fibs-logo.png"
                style={{ height: "50px", marginLeft: "30px" }}
              />
            </a>
            <a
              href={
                "https://www.carocci.it/prodotto/psicoterapia-e-omosessualita"
              }
              target="_blank" rel="noreferrer"
            >
              <img
                src="/carocci-logo.png"
                style={{ height: "50px", marginLeft: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <h2
      style={{
        backgroundColor: "#8a9a5b",
        color: "white",
        margin: 0,
        padding: "20px",
      }}
    >
      INDICE
    </h2>{" "}
    <p
      style={{
        display: "flex",
        padding: "0 35px",
        flexDirection: "column",
        borderTop: "1px solid black",
      }}
    >
      <br />
      <h3>
        Introduzione <br />
      </h3>
      <div style={{ marginLeft: "15px" }}>
        1. <strong>L'identità sessuale</strong> - Il genere e le sue
        identità/Definendo l'orientamento sessuale/Stime di prevalenza della
        popolazione GLB (gay, lesbica, bisessuale)/Le origini dell'orientamento
        (omo)sessuale/Il concetto di identità multipla <br /> <br />
        2.
        <strong>
          {" "}
          Dal paradigma della patologia a quello della variazione
        </strong>
        - La psichiatrizzazione/La psicoanalisi/Derubricazione e nuova
        diagnosi/Il cambiamento di paradigma <br /> <br />
        3. <strong>Prospettive contemporanee sulla salute GLB</strong> - Le
        ricerche/Il modello del minority stress/La promozione del benessere
        psicosociale <br /> <br />
        4. <strong>La psicoterapia con pazienti GLB</strong> - Temi
        ricorrenti/Temi invisibili/Il gruppo terapeutico/La rilevanza
        dell'orientamento sessuale <br /> <br />
        5. <strong>I terapeuti con i pazienti GLB</strong> - Le ricerche sui
        terapeuti/Assunzioni inaccurate e discrepanze nei valori/L'orientamento
        sessuale del terapeuta/Costruire un setting inclusivo <br /> <br />
        <strong>Bibliografia</strong>
      </div>
    </p>
  </Layout>
)

export const Head = () => <Seo title="BookThree" />

export default BookThree
