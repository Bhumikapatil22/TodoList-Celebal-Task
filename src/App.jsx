import './App.css'
import Formpage from './components/Forms/Formpage'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Successpage from './components/Forms/Successpage'
import Form from './components/Forms/Form'
import TodoList from './components/To do list/TodoList'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {<Route path='/' element={<TodoList />} />}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
