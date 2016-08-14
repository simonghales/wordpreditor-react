import React            from 'react'
import classes          from './HomeView.scss'
import ComponentEditor  from '../../../components/ComponentEditor'
import ComponentsList   from '../../../components/ComponentsList'
import Page             from '../../../components/Page'

export const HomeView = () => (
  <div className={classes['root']}>
    <div className={classes['components-list-container']}>
      <ComponentsList />
    </div>
    <div className={classes['main-container']}>
      <Page />
      <ComponentEditor />
    </div>
  </div>
)

export default HomeView
