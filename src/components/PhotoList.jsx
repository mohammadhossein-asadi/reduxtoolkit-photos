import { connect } from "react-redux";
import { selectPhoto } from "../slice/photoSlice";

const PhotoList = ({ photo, onSelectPhoto }) => {
  return (
    <>
      {photo.map((photo) => (
        <div key={photo.title}>
          <h3>
            {photo.title}{" "}
            <button onClick={() => onSelectPhoto(photo)}>Select</button>
          </h3>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    photo: state.photos.photos,
  };
};

const mapDispatchToProps = {
  onSelectPhoto: selectPhoto,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
