import React from 'react'
import classes from './Page.scss'
import { returnPageComponents } from '../../utilities/component'

const EXAMPLE_PAGE_DATA = require('../../data/example/page.json');
const components = EXAMPLE_PAGE_DATA.components;

export const Page = () => (
  <div className={classes['root']}>
    {returnPageComponents(components)}
    {/*<section className={classes['exampleIntro']}>*/}
      {/*<div className={classes['exampleIntro__block']}>*/}
        {/*<h1>Simon Hales</h1>*/}
        {/*<h2>Front End Developer</h2>*/}
      {/*</div>*/}
    {/*</section>*/}
  </div>
)

export default Page
