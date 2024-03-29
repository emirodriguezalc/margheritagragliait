import * as React from "react"
import * as style from "../components/index.module.css"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Video = () => (
  <Layout>
    <div
      style={{
        backgroundColor: "var(--color-primary)",
        padding: "30px 0",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "var(--color-text-white)", margin: 0 }}>VIDEO</h2>
    </div>
    <ul
      className={style.paddingWrapper}
      style={{ textAlign: "center", marginLeft: 0 }}
    >
      <li>
        <p style={{}}>
          Audizione in merito alle proposte di legge contro le discriminazioni
          basate sull&rsquo;identit&agrave; di genere e l&rsquo;orientamento
          sessuale,
          <br />
          <strong>Commissione Giustizia della Camera dei Deputati</strong>, Roma
          27/05/2020
        </p>
        <div
          style={{
            padding: 20,
            display: "flex",
            justifyContent: "center",
          }}
          className={style.videoWrapper}
        >
          <video controls style={{ width: "inherit" }}>
            <source src={"/video1.mp4"} type="video/mp4" />
          </video>
        </div>
        <br />
        <br />
        <div
          className={style.desktopOnly}
          style={{ width: "100%", borderBottom: "1px solid black" }}
        ></div>
      </li>
      <li>
        <p>
          Convegno &ldquo;Per la dignit&agrave; delle persone. Contro la
          violenza omotransfobica&rdquo;
          <br />
          <strong>Camera dei deputati,&nbsp;</strong>Roma, 16/12/2019&nbsp;
        </p>
        <button>
          <a
            href="https://www.radioradicale.it/scheda/593379/per-la-dignita-delle-persone-contro-la-violenza-omotransfobica?i=4076662"
            target="_blank" rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            LINK
          </a>
        </button>
        <br />
        <br />
        <br />
        <div
          className={style.desktopOnly}
          style={{ width: "100%", borderBottom: "1px solid black" }}
        ></div>
      </li>
      <li>
        <p style={{}}>
          Convegno di presentazione del progetto &ldquo;L&rsquo;inclusione e la
          non discriminazione per motivi di orientamento sessuale,
          identit&agrave; di genere, &ldquo;razza&rdquo; ed origine etnica nella
          societ&agrave; e nell&rsquo;avvocatura&rdquo;
          <br />
          <strong>Consiglio Nazionale Forense</strong>, Roma, 06/11/2020
        </p>

        <div
          style={{
            padding: 20,
            display: "flex",
            justifyContent: "center",
          }}
          className={style.videoWrapper}
        >
          <video controls style={{ width: "inherit" }}>
            <source
              src={"/inclusione e la non discriminazione delle persone.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
        <br />
        <br />
        <div
          className={style.desktopOnly}
          style={{ width: "100%", borderBottom: "1px solid black" }}
        ></div>
      </li>
      <li>
        <p style={{}}>
          Prima pillola di conoscenza LGBT: &ldquo;Che cos&rsquo;&egrave;
          l&rsquo;identit&agrave; di genere?"
          <br />
          <strong>Comune di Reggio Emilia,</strong>10/05/2020
        </p>
        <br />

        <iframe
          className={style.iframeWrapper}
          src="https://www.youtube.com/embed/o7amnx89X-0"
          title="Margherita Graglia_Che cos’è l’identità di genere?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <br />
        <br />
        <br />
        <br />
        <div
          className={style.desktopOnly}
          style={{ width: "100%", borderBottom: "1px solid black" }}
        ></div>
      </li>
      <li>
        <p style={{}}>
          Seconda pillola di conoscenza LGBT: "Che cos&rsquo;&egrave;
          l&rsquo;orientamento sessuale?"
          <br />
          <strong>Comune di Reggio Emilia</strong>, 16/06/2020
        </p>
        <br />

        <iframe
          className={style.iframeWrapper}
          src="https://www.youtube.com/embed/1-5KyqLK4aM"
          title="Margherita Graglia_Che cos’è l’orientamento sessuale?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <br />
        <br />
        <br />
        <br />
        <div
          className={style.desktopOnly}
          style={{ width: "100%", borderBottom: "1px solid black" }}
        ></div>
      </li>
      <li>
        <p style={{}}>
          Eventi a casa tua: &ldquo;Coltivare la speranza attraverso le
          domande&rdquo;
          <br /> <strong>Comune di Reggio Emilia</strong>, 16/04/2020
        </p>
        <br />

        <iframe
          className={style.iframeWrapper}
          src="https://www.youtube.com/embed/MaOHDO7ARy0"
          title="Margherita Graglia_Coltivare la speranza attraverso le domande"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <br />
      </li>
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Video" />

export default Video
