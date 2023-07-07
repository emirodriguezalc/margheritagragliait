import * as React from "react"
import * as style from "../components/index.module.css"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Contatti = () => (
  <Layout>
    <div
      style={{
        backgroundColor: "var(--color-primary)",
        padding: "30px 0",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "var(--color-text-white)", margin: 0 }}>Contatti</h2>
    </div>
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{ width: 300, alignSelf: "center", margin: 40 }}
        className={style.desktopOnly}
      >
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
      <div style={{ padding: 45, paddingBottom: 0 }}>
        <p>
          <strong>
            <em>Sede</em>
          </strong>
        </p>
        <p>Via Montefiorino 12, 42123 Reggio Emilia</p>
        <p>
          <strong>
            <em>Email</em>
          </strong>
        </p>
        <p>
          <a target="_blank" rel="noreferrer" href="mailto:graglia.margherita@gmail.com">
            graglia.margherita@gmail.com
          </a>
        </p>
        <p>
          <strong>
            <em>Social</em>
          </strong>
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <StaticImage
            src="../../static/contatti-in.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginRight: 7 }}
          />
          <a
            href="https://www.linkedin.com/in/margherita-graglia-b1589415/"
            target="__blank"
          >
            Linkedin
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <StaticImage
            src="../../static/contatti-fb.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginRight: 7 }}
          />
          <a
            href="https://www.facebook.com/margherita.graglia.70"
            target="__blank"
          >
            Facebook
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <StaticImage
            src="../../static/contatti-tw.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginRight: 7 }}
          />
          <a href="https://twitter.com/mgraglia" target="__blank">
            Twitter
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <StaticImage
            src="../../static/contatti-ig.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt="https://www.instagram.com/graglia_margherita/"
            style={{ marginRight: 7 }}
          />
          <a
            href="https://www.instagram.com/graglia_margherita"
            target="__blank"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Contatti" />

export default Contatti
