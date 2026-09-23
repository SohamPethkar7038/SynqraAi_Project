import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Layout from './pages/Layout'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'
import GenerateImages from './pages/GenerateImages'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObject from './pages/RemoveObject'
import Community from './pages/Community'
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>

       <Route path='/ai' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='write-articles' element={<WriteArticle/>}/>
          <Route path='blog-titles' element={<BlogTitles/>}/>
          <Route path='remove-background' element={<RemoveBackground/>}/>
          <Route path='generate-images' element={<GenerateImages/>}/>
          <Route path='remove-object' element={<RemoveObject/>}/>
          <Route path='community' element={<Community/>}/>
       </Route>

      </Routes>
    </div>
  )
}

export default App
