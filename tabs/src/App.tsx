import { useState } from 'react'
import './App.css'
import TabsView from './components/tabs/TabsView'
import { TabItem } from './components/tabs/types/types'


function Content1(){
  return <div>Content 1</div>
}

const items: TabItem[] = [
  {
    id: crypto.randomUUID(),
    title: "Tab 1",
    content: Content1
  }
]


function App() {
  
  const handleChange = (item: TabItem) => {
    console.log(item.title);
  }

  return (
    <>
     <TabsView items={items} onChange={handleChange} />
    </>
  )
}

export default App
