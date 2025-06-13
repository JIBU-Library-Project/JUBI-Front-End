import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import BookListPage from "./pages/BookListPage";
import UserBookDetailsPages from "./pages/UserBookDetailsPages";
import AddBookForm from "./components/AddBookForm";
import EditBookForm from "./components/EditBookForm";
import AdminPage from "./pages/AdminPage";
import BookListAdmin from "./pages/BookListAdmin";
import AdminBookDetailsPages from "./pages/AdminBookDetailsPages";



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/books",
      element: <BookListPage />,
    },
    {
      path: "admin/books/:id",
      element: <AdminBookDetailsPages />,
    },
    {
      path: "/books/:id",
      element: <UserBookDetailsPages />,
    },
    {
      path: "/add-book",
      element: <AddBookForm />,
    },
    {
      path: "/edit-book/",
      element: <EditBookForm />,
    },
    {
      path: "/admin-page",
      element: <AdminPage />,
    },
    {
      path: "/admin-booklist",
      element: <BookListAdmin isAdmin={true} />,
    },
//  {
//       path: "/iphoneImg",
//       element: <EditBookForm/>
//     }
   
  ]);

  return <RouterProvider router={router} />;
};

export default App;
