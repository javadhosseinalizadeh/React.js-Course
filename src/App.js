import { HomePage } from './pages/Home'
import MainLayout from './layout/main-layout'
import ReactComponent from './tutorials/react-components/'
import { WelcomePage } from './tutorials/welcome/'
import { TutorialsPage } from './pages/tutorials'
import { AboutPage } from './pages/about'
import { NotFoundPage } from './pages/not-found'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { StateInCc } from './tutorials/state-in-cc'
import { UsersPage } from './pages/users'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='tutorials' element={<TutorialsPage />} >
              <Route index element={<WelcomePage />} />
              <Route path='react-components' element={<ReactComponent />} />
              <Route path='state-in-cc' element={<StateInCc />} />
            </Route>
            <Route path='about' element={<AboutPage />} />
            <Route path='users' element={<UsersPage />} />


            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
