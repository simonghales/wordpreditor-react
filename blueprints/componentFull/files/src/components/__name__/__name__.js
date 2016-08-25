import React from 'react'
import classes from './<%= pascalEntityName %>.scss'


class <%= pascalEntityName %> extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={classes['root']}>
        <h1><%= pascalEntityName %></h1>
      </div>
    );
  }

}

<%= pascalEntityName %>.propTypes = {
}

export default <%= pascalEntityName %>
