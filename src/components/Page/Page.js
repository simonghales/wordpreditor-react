import React from 'react'
import classes from './Page.scss'

export const Page = () => (
  <div className={classes['root']}>
    <section className={classes['exampleIntro']}>
      <div className={classes['exampleIntro__block']}>
        <h1>Simon Hales</h1>
        <h2>Front End Developer</h2>
      </div>
    </section>
  </div>
)

export default Page
