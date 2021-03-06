import React, { Component } from 'react'
import Link from './Link.js'
import { graphql, gql } from 'react-apollo'

class LinkList extends Component {

  render() {

	  // 1
	  if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
	    return <div>Loading</div>
	  }

	  // 2
	  if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
	    return <div>Error</div>
	  }

	  // 3
	  const linksToRender = this.props.allLinksQuery.allLinks

    return (
      <div>
        {linksToRender.map(link => (
          <Link key={link.id} link={link}/>
        ))}
      </div>
    )
  }

}
const ALL_LINKS_QUERY = gql`
# 2
query AllLinksQuery {
  allLinks {
    id
    createdAt
    url
    description
  }
}
`

export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' }) (LinkList)
