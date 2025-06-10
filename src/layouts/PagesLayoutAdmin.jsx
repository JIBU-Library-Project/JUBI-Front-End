import AdminNavBar from "../components/AdminNavBar";
import Footer from "../components/Footer";

const PagesLayoutAdmin = ({ children }) => {
  return (
    <div>
      <AdminNavBar />
      {children}
      <Footer />
    </div>
  );
};

export default PagesLayoutAdmin;
