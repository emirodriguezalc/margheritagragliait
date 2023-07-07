import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BookTwo = () => (
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
          src="/th_omofobia.webp"
          style={{ width: "500px" }}
        />
      </div>
      <div style={{ width: "70%", height: "100%", marginLeft: "40px" }}>
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <h1 style={{ margin: 0 }}>OMOFOBIA</h1>
          <h2
            style={{
              color: "#8a9a5b",
              fontSize: "var(--font-lg)",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Strumenti di analisi e di intervento
          </h2>
          <h3
            style={{
              color: "#8a9a5b",
              fontSize: "var(--font-md)",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Carocci Faber editore 2012
          </h3>
        </div>
        <p>
          <strong>
            Il libro presenta un'analisi aggiornata e scientificamente fondata
            sul fenomeno dell'omofobia sociale, ossia quell'insieme di
            rappresentazioni culturali, di credenze, di atteggiamenti e di
            pratiche sociali che invalidano, sviliscono o aggrediscono le
            identità ed i comportamenti non eterosessuali.
          </strong>
          <br />
          <br />
          Pur essendo il tema dell'orientamento omosessuale di costante
          attualità nel dibattito nazionale mancano, infatti, informazioni
          accurate che chiariscano le dimensioni coinvolte nel processo di
          esclusione/inclusione, siano esse di natura individuale, sociale o
          culturale.
          <br />
          <br /> Il volume, oltre a fornire informazioni sull'omonegatività da
          un punto di vista psicologico, sociologico, antropologico ed
          educativo, intende anche illustrare gli strumenti, concettuali e
          operativi, per la progettazione di interventi di sensibilizzazione ai
          temi dell'identità sessuale, di decostruzione degli stereotipi e di
          riduzione dei pregiudizi, presentando linee guida e best practices
          nazionali e internazionali.
          <br />
          <br />
          Rivolto ai professionisti (formatori, psicologi, psicoterapeuti,
          sociologi, insegnanti, educatori e operatori sanitari) interessati a
          comprendere i meccanismi di esclusione sociale e a rendere più
          efficaci gli strumenti di promozione del benessere individuale e
          collettivo
          <strong>
            , il volume propone al pubblico interessato alcune riflessioni utili
            per capire le dimensioni coinvolte nel dibattito contemporaneo sulla
            cittadinanza delle persone lesbiche, gay, bisessuali e transessuali
            (LGBTI).
          </strong>
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
                "https://www.amazon.it/Omofobia-Strumenti-analisi-intervento-Margherita/dp/8874666454"
              }
              target="_blank" rel="noreferrer"
            >
              <img src="/amazon-button.png" style={{ height: "50px" }} />
            </a>
            <a
              href={
                "https://www.ibs.it/omofobia-strumenti-di-analisi-di-libro-margherita-graglia/e/9788874666454"
              }
              target="_blank" rel="noreferrer"
            >
              <img
                src="/fibs-logo.png"
                style={{ height: "50px", marginLeft: "30px" }}
              />
            </a>
            <a
              href={"https://www.carocci.it/prodotto/omofobia"}
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
        Ipotesi <br />
      </h3>
      <div style={{ marginLeft: "15px" }}>
        1. Le forme dell'omonegatività
        <br /> 2. Le rappresentazioni culturali degli orientamenti non
        eterosessuali <br />
        3. Le funzioni psico-sociali degli atteggiamenti antiLGBT <br />
      </div>
      <br />
      <h3>
        Parte seconda <br />
        Proposte <br />
      </h3>
      <div style={{ marginLeft: "15px" }}>
        <br />
        4. Le identità non eterosessuali nei contesti di crescita
        <br />
        5. Le famiglie omogenitoriali
        <br />
        6. I contesti lavorativi
        <br />
        7. L'accoglienza nelle relazioni di aiuto psicologico
        <br />
        8. Le pratiche inclusive nei contesti sanitari
        <br />
        9. Formare ai temi dell'orientamento (omo)sessuale
        <br />
      </div>
      <h3>
        Parte terza <br />
        Approfondimenti <br />
      </h3>
      <div style={{ marginLeft: "15px" }}>
        10. Cristianesimo e omosessualità (di Letizia Tomassone) <br />
        11. Il fenomeno dei femminielli a Napoli: un terzo genere, tra alterità
        e deterioramento, inclusione ed esclusione sociale (di Paolo Valerio ed
        Eugenio Zito)
        <br />
      </div>
      <h3>
        Conclusioni: insieme nella complessità
        <br />
        Appendice. Esempi di marketing sociale <br />
      </h3>
    </p>
  </Layout>
)

export const Head = () => <Seo title="BookTwo" />

export default BookTwo
