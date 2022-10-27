function Tag({ tags }) {
  return (
    <div className="tag">
      {tags.map((tag) => (
        <p className="tagName" key={tag}>
          {tag}
        </p>
      ))}
    </div>
  )
}

export default Tag
