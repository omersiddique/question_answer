import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
<div style={{ color: `purple`}}>
    <Link to="/about/">About Us</Link>
    <Header headerText="Bismillah" />
    <p>Ar RahmanirRaheem</p>
    <img src="https://source.unsplash.com/random/400x200" alt="A stock image" />
  </div>
)
