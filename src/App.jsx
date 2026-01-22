import { useState } from 'react'
import './App.css'
import ArticlesContainer from './components/ArticlesContainer';
import SearchBar from './components/SearchBar';
import ArticlesData from './data/ArticlesData';
function App() {
   const [searchTerm, setSearchTerm] = useState('');
  const filteredArticles = ArticlesData.filter(article => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      article.title.toLowerCase().includes(lowerSearch) ||
      article.content.toLowerCase().includes(lowerSearch)  || 
      article.date.toLowerCase().includes(lowerSearch) 
    );
  });
  return (
    <>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    {filteredArticles.length > 0 && <p className='postNumber'>{filteredArticles.length} posts were founded</p>}
    {filteredArticles.length === 0 ? (
      <p className='nothingFounded'>No articles match your search.</p>
    ) :      <ArticlesContainer data={filteredArticles} searchTerm={searchTerm} />}
    </>
  )
}

export default App
