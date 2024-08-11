import React from 'react'
import Header from '../components/Header'

const MainLayout = ({children}) => {
  return (
    <MainLayout>
      <Header />
     {children}
    </MainLayout>
  )
}

export default MainLayout
