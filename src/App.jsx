import { connect } from "react-redux";
import "./App.css";
import PhotoList from "./components/PhotoList";
import PhotoDetail from "./components/PhotoDetail";

const App = ({ selectedPhoto }) => {
  return (
    <>
      <h1>My Photos</h1>
      <PhotoList />
      {selectedPhoto && <PhotoDetail />}
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedPhoto: state.photos.selectedPhoto,
});

export default connect(mapStateToProps)(App);
