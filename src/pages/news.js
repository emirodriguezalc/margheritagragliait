import * as React from "react"
import * as styles from "../components/index.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const News = () => {
  const news = [
    {
      title:
        "“Periferie in carriera. Carriera alias e pratiche inclusive nelle amministrazioni pubbliche”",
      entity: "Città metropolitana di Torino",
      location: "Nichelino",
      data: "30 giugno 2023",
      images: ["/carriera.webp"],
    },
    {
      title:
        "“Sottoscrizione del Protocollo operativo del Tavolo interistituzionale per il contrasto all’omotransnegatività e per l’inclusione delle persone LGBT“",
      entity: "Telegiornale Rai Piemonte",
      location: "Nichelino",
      data: "12 giugno 2023",
      video: "/omotransnegativita.mp4",
    },
    {
      title:
        "Sottoscrizione del Protocollo operativo del Tavolo interistituzionale per il contrasto all’omotransnegatività e per l’inclusione delle persone LGBT",
      entity: "Comune di Nichelino",
      location: "Comune di Nchelino",
      data: "12 giugno 2023",
      images: ["/protocollo.webp"],
    },
    {
      title:
        "“Quanti generi di diversità?“",
      entity: "Università degli Studi di Firenze",
      location: "Firenze",
      data: "17 maggio 2023",
      images: ["/quanti_generi.webp"],
    },
    {
      title:
        "“Lo psicoterapeuta di fronte all’incongruenza di genere e al trattamento ormonale in età evolutiva”",
      entity: "SITCC",
      location: " Firenze",
      data: "13 maggio 2023",
      images: ["/Invito_SITCCday_page-1.webp", "/Invito_SITCCday_page-2.webp"],
    },
    {
      title:
        "“Aggiornamenti FISS in sessuologia”",
      entity: "Federazione italiana sessuologia scientifica",
      location: "Da remoto",
      data: "5 maggio 2023",
      images: ["/aggiornamenti_fiss.webp"],
    },
    {
      title: "Valorizzare le differenze a scuola: percorsi e strumenti",
      entity: "",
      location: "Brescia",
      data: "7 marzo",
      images: ["/news_1.webp"],
    },
    {
      title:
        "Tracciare i confini del rispetto. Le violenze psicologiche di genere",
      entity: "Consiglio della provincia autonoma di Trento",
      location: "Trento",
      data: "4 marzo",
      images: ["/news_2a.webp", "/news_2b.webp"],
    },
    {
      title: "Intervista Telegiornale regionale",
      entity: "Rai",
      location: "Trento",
      data: "4 marzo",
      video: "/video3.mp4",
    },
    {
      title: "Intervista gr1 “Pupi Avati sull’omosessualità di Lucio Dalla”",
      entity: "Radio1",
      location: "Trento",
      data: "2 marzo",
      audio: "/audio1.mpeg",
    },
  ]
  const toggleFullScreen = e => {
    console.log(e)
    e.target.requestFullscreen()
  }
  return (
    <Layout>
      <div
        style={{
          backgroundColor: "var(--color-primary)",
          padding: "30px 0",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "var(--color-text-white)", margin: 0 }}>News</h2>
      </div>
      <div className={styles.newsWrapper}>
        {news.map(newItem => (
          <div
            style={{
              padding: 20,
              borderLeft: "1px solid var(--color-primary)",
              borderBottom: "1px solid var(--color-primary)",
              flex: "50%",
            }}
          >
            <h2>Evento: {newItem.title}</h2>
            <h3>{newItem.entity && `Ente: ${newItem.entity}`}</h3>
            <h3>Dove: {newItem.location}</h3>
            <h3>Quando: {newItem.data}</h3>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 0,
              }}
              className={styles.newsContainer}
            >
              {newItem.images?.map(url => (
                <img
                  className={styles.newsImage}
                  src={url}
                  onClick={e => toggleFullScreen(e)}
                />
              ))}
              {newItem.audio && (
                <div
                  style={{
                    padding: 20,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <audio src={newItem.audio} controls />
                </div>
              )}
              {newItem.video && (
                <div
                  style={{
                    padding: 20,
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <video controls style={{ width: "inherit" }}>
                    <source src={newItem.video} type="video/mp4" />
                  </video>
                </div>
              )}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="News" />

export default News
