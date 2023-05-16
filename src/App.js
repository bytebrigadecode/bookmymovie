import './App.css';
import BookMovie from './components/BookMovie';
import Search from './components/Search';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search/>,
  },
  {
    path: "/booking/:id",
    element: <BookMovie/>,
  },
]);
function App() {

  return (
    <>
 <RouterProvider router={router} />
    </>
  );
}

export default App;
