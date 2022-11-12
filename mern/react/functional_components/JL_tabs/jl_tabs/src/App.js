import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {TabWrapper} from './components/TabWrapper'

function App() {
  const [tabs, setTabs] = useState([
    {
        name: "tab1",
        message: "this is the content from tab 1",
        isSelected: true
    },
    {
        name: "tab2",
        message: "this is the content from tab 2",
        isSelected: false
    },
    {
      name: "tab3",
      message: "this is the content from tab 3",
      isSelected: false
  }
])
  return (
    <>
      <TabWrapper tabs = {tabs} setTabs = {setTabs}/>
    </>
  );
}

export default App;