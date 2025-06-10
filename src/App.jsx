import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import BookListPage from "./pages/BookListPage";
import BookDetailsPages from "./pages/BookDetailsPages";
import AddBookForm from "./components/AddBookForm";
import EditBookForm from "./components/EditBookForm";
import AdminPage from "./pages/AdminPage";

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
      path: "/books/:id",
      element: <BookDetailsPages />,
    },
    {
      path: "/add-book",
      element: <AddBookForm />,
    },
    {
      path: "/edit-book",
      element: <EditBookForm />,
    },
    {
      path: "/admin-page",
      element: <AdminPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
