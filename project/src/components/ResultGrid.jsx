import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos, fetchVedios, fetchGifs } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../features/searchSlice";
import { useEffect } from "react";

const ResultGrid = () => {
  useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  // useEffect(() => {},[]);

  useEffect(() => {
    const getData = async () => {
      let data;
      if (activeTab == "photos") {
        let response = await fetchPhotos(query);
        data = response.results.map((item) => ({
          // ye normalization hai jese ki ab data aglag formate me aaye ag hme use ek jgh show krna h
          id: item.id,
          type: "photo",
          title: item.alt_description,
          thumbnail: item.urls.small,
          src: item.urls.full,
          // url: items.urls.regular,
        }));
      }
      if (activeTab == "videos") {
        let response = await fetchVedios(query);
        data = response.videos.map((item) => ({
          id: item.id,
          type: "video",
          title: item.user.name || "video",
          thumbnail: item.image,
          src: item.video_files[0].link,
        }));
      }
      if (activeTab == "GIF") {
        let response = await fetchGifs(query);
        data = response.data.map((item) => ({
          id: item.id,
          type: "GIF",
          title: item.title || "GIF",
          thumbnail: item.images.downsized.url,
          src: item.images.downsized.url,
        }));
      }

      console.log(data[0]);
    };
    getData();
  }, [query, activeTab]);

  return (
    <div>
      <button></button>
    </div>
  );
};

export default ResultGrid;
