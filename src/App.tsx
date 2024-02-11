// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './Layout';
// import About from './pages/about/About';
// import IndexPage from './IndexPage';
import { ThemeProvider } from './components/ThemeProvider';
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.tsx'

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
