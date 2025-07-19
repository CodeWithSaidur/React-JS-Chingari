import About from './component/About.jsx';
import Contact from './component/Contact.jsx';
import Home from './component/Home.jsx';
import Navar from './component/Navar.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// Layout Component
const Layout = () => {
  return (
    <>
      <Navar />
      <Outlet /> 
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },         
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
