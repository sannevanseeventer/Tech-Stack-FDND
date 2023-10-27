import '../Kennisbank/Kennisbank.css';

const data = await fetch('http://localhost:8055/items/kennisbank').then((response) =>
  response.json()
);

const Kennisbank = () => {
  // Access the data array from the object
  const dataArray = data.data;

  return (
    <div className="Kennisbank">
      <h2>Kennisbank</h2>

      {dataArray.map((item) => (
        <article key={item.id} className="main-post">
          <img className="image-blog" src={`http://localhost:8055/assets/${item.blog_image}`} alt={item.title} />

          <div className="content-field">
            <span className="category">{item.category}</span>
            <span className="author">Door {item.author}</span>
            <h3>{item.title}</h3>
            <div className="hygraph-html" dangerouslySetInnerHTML={{ __html: item.content }} />
          </div>

          <div className="read-more-container">
            <a className="read-more-link" href="">
              Verder lezen
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Kennisbank;