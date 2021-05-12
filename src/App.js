import './App.css';
import YoutubeEmbed from './YoutubeEmbed';
import Search from './Search';
import { useState } from 'react'

function App() {

  const [query, setQuery] = useState('rokGy0huYEA')

  return (
    <div className="App">
      <Search getQuery={q => setQuery(q)} />
      <YoutubeEmbed embedId={query}/>
      
    </div>
    
  );
}

export default App;
