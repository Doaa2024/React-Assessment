import './ArticlesContainer.css';
import { highlightText } from '../hooks/highlightText.jsx';
export function ArticlesContainer({ data, searchTerm }) {
  return (
 <>
      {data.map((article) => (
        <div className='articlesContainer' key={article.id}>
         <h2>{highlightText(article.title, searchTerm)}</h2>
          <p className="date">{highlightText(article.date, searchTerm)}</p>
          <p>{highlightText(article.content, searchTerm)}</p>
        </div>
      ))}
    </>
)
}
export default ArticlesContainer;