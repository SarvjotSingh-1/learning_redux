// import { fetchPhotos } from "./api/mediaApi";
// import { fetchVedios } from "./api/mediaApi";
// import { fetchGifs } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";

const App = () => {
  // const getPhotos = async () => {
  //   const data = await fetchPhotos("dog");
  //   console.log(data.results);
  // };

  // const getVedios = async () => {
  //   const data = await fetchVedios("dog");
  //   console.log(data.videos);
  // };

  // const getGifs = async () => {
  //   const data = await fetchGifs("dog");
  //   console.log(data.data);
  // };

  return (
    <div className="">
      {/* <button className="bg-cyan-700 m-5 px-4 py-3" onClick={getPhotos}>
        Get Photos
      </button>
      <button className="bg-cyan-700 m-5 px-4 py-3" onClick={getVedios}>
        Get Videos
      </button>

      <button className="bg-cyan-700 m-5 px-4 py-3" onClick={getGifs}>
        Get GIf
      </button> */}

      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

export default App;
