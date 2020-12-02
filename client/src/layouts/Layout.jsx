import Header from "../components/Header";
import Footer from '../components/Footer'

export default function Layout(props) {
  return (
    <div className="App">
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
        // motorcycles={props.motorcycles}
      />
      {props.children}
      <Footer />
    </div>
  )
}