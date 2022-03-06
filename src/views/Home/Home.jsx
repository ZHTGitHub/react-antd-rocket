import React from 'react'
import { MainLayout } from '../../layouts'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='home'>
        <MainLayout></MainLayout>
      </div>
    )
  }
}

export default Home