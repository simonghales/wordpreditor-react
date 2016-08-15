import React from 'react'
import classes from './Page.scss'
import { returnComponentObject } from '../../utilities/component'

const EXAMPLE_PAGE_DATA = require('../../data/example/page.json');
const item = EXAMPLE_PAGE_DATA.components[0];

export const Page = () => (
  <div className={classes['root']}>
    {returnComponentObject(item)}
    <section className={classes['exampleIntro']}>
      <div className={classes['exampleIntro__block']}>
        <h1>Simon Hales</h1>
        <h2>Front End Developer</h2>
      </div>
    </section>
  </div>
)

export default Page
