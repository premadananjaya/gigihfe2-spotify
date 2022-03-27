import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Gif from "./components/Gif"
// import Image from './components/Image/Image';
// import Album from './components/Album/Album';
// import Artist from './components/Artist/Artist';
import Gabungan from './components/Gabungan';
import data from './data';
// function App() {
//   return (
//     <div className="App">
//       <div>
//         <Search />
//       </div>
//       <Gif title={gif.title} url={gif.url} />
//     </div>
//   );
// }

// export default App;

function App() {

  // const renderGifs = () => data.filter((v) => v.rating === "g")
  // .map(v => <Gif key= {v.id} url= {v.url} title={v.title}/>)
  const renderGabungan = () => data.map((v) => <Gabungan key={v.album.artists[0].url} img={v.album.images[0].url} album={v.album.name} name={v.album.artists[0].name}/>)


  return (
    <div className="App">
      <header className="App-header">
      <div className="content"> 
        {renderGabungan()}
        <Button type="button" class="btn btn-secondary btn-outline-light" > <a href={data.uri}></a>Select </Button>
      </div>
      </header>
    </div>
  );
}

export default App;
