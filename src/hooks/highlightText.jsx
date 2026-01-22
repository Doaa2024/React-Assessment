export function highlightText(text, searchTerm) {
  if (!searchTerm) return text; 

  const regex = new RegExp(`(${searchTerm})`, "gi"); 
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="highlight">
        {part}
      </span>
    ) : (
      part
    )
  );
}
