import React from 'react'
import classes from './Header.scss'
import HeaderComponentsList from '../HeaderComponentsList'

export const Header = () => (
  <div className={classes['root']}>
      <HeaderComponentsList />
  </div>
)

export default Header
