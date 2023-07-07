import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BookOne = () => (
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
          src="/th_differenze.webp"
          style={{ width: "500px" }}
        />
      </div>
      <div style={{ width: "70%", height: "100%", marginLeft: "40px" }}>
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <h1 style={{ margin: 0 }}>
            LE DIFFERENZE DI SESSO, GENERE E ORIENTAMENTO
          </h1>
          <h2
            style={{
              color: "#8a9a5b",
              fontSize: "var(--font-lg)",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Buone pratiche per l'inclusione
          </h2>
          <h3
            style={{
              color: "#8a9a5b",
              fontSize: "var(--font-md)",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Carocci Faber editore 2019
          </h3>
        </div>
        <p>
          <strong>
            Quali sono le identità sessuali contemporanee? In che cosa consiste
            l'inclusione? Quali sono le azioni più efficaci per promuoverla?
          </strong>
          <br />
          <br />
          Nel rispondere a queste e altre domande, il libro esplora le
          dimensioni identitarie e le varianti che possono assumere:
          intersessualità, transessualità, crossdressing e omo/bi/asessualità.
          Sulla scena sociale si affacciano, infatti, identità inedite che
          sfidano le conoscenze comuni e che interrogano le pratiche sociali e
          istituzionali.
          <br />
          <br /> L'autrice presenta un modello innovativo di inclusione,
          illustrando le buone pratiche con cui è stato realizzato e chiarendo
          perché includere non significhi solo contrastare le discriminazioni ma
          si prefiguri, nella sua realizzazione piena, come valorizzazione delle
          differenze.
          <strong>Il volume è rivolto</strong> a quanti lavorano nei contesti
          psicosociosanitari ed educativi, nelle{" "}
          <p>
            Pubbliche Amministrazioni e a&nbsp;
            <strong>
              tutte le persone interessate a orientarsi in un panorama sociale
              variegato e cangiante
            </strong>
            .
          </p>
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3
            style={{ textTransform: "uppercase", fontSize: "var(--font-sm)" }}
          >
            Titolo disponibile per l'acquisto su:{" "}
          </h3>
          <div style={{ display: "flex" }}>
            <a
              href={
                "https://www.amazon.it/differenze-sesso-genere-orientamento/dp/8874668082"
              }
              target="_blank" rel="noreferrer"
            >
              <img src="/amazon-button.png" style={{ height: "50px" }} />
            </a>
            <a
              href={
                "https://www.ibs.it/differenze-di-sesso-genere-orientamento-libro-margherita-graglia/e/9788874668083"
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
                "https://www.carocci.it/prodotto/le-differenze-di-sesso-genere-e-orientamento"
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
      <h3>
        Parte prima
        <br />
        Conoscere <br />
      </h3>
      <div style={{ marginLeft: "15px" }}>
        1. Sesso - Esplorando il sesso, tra natura e cultura/Lo sviluppo
        sessuale/Le varianti del sesso/I corpi intersessuati: dove risiede il
        "vero" sesso?/Le discriminazioni nei confronti delle persone
        intersessuali <br />
        2. Identità di genere - Esplorando l'identità di genere/Nascita di un
        concetto/Lo sviluppo dell'identità di genere/Le varianti dell'identità
        di genere/Il genere visto dagli altri/La varianza di genere in età
        evolutiva <br />
        3. Espressione di genere - Esplorando l'espressione di genere/Lo
        sviluppo dell'espressione di genere/Femminilità e maschilità/Le varianti
        dell'espressione di genere <br />
        4. Orientamento sessuale - Esplorando l'orientamento sessuale/Le
        varianti dell'orientamento sessuale/Lo sviluppo degli orientamenti non
        eterosessuali <br />
        5. Identità sessuale - Esplorando l'identità/La sovrapposizione tra
        sesso-genere e orientamento/Il modello dell'inversione/Le identità
        sessuali <br />
      </div>
      <br />
      <h3>
        Parte seconda <br />
        Includere <br />
      </h3>
      <div style={{ marginLeft: "15px" }}>
        6. Perché contrastare le discriminazioni - Esplorando le
        barriere/Intersezioni/La persistenza delle discriminazioni/Le
        discriminazioni: un problema per le persone LGBT/Le discriminazioni: un
        problema per la comunità/Il divieto di discriminare e il diritto di non
        essere discriminati <br />
        7. Omotransnegatività - Esplorando, oltre i confini
        dell'eteronormatività/Una matrice comune: androcentrismo e tabù del
        sesso/Omotransnegatività: una definizione/Omonegatività contemporanea
        /La pressione sociale all'invisibilità/La contrarietà verso la
        genitorialità lesbica e gay <br />
        8. Inclusione: un modello - Esplorando il bisogno di appartenenza/I
        livelli dell'accoglienza sociale/L'inclusione istituzionale/Un metodo
        per includere: l'approccio maieutico/Conoscere gli ostacoli <br />
        9. Buone prassi per l'inclusione - Il concetto di buona prassi/La
        formazione (istituzionale)/L'esperienza del Tavolo interistituzionale
        del Comune di Reggio Emilia/Aspetti distintivi e innovativi del Tavolo{" "}
        <br />
        Conclusioni <br />
        Riferimenti bibliografici <br />
      </div>
    </p>
  </Layout>
)

export const Head = () => <Seo title="BookOne" />

export default BookOne
