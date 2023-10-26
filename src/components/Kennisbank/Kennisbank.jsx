import '../Kennisbank/Kennisbank.css';

const data = await fetch('http://localhost:8055/items/kennisbank').then((response) =>
  response.json()
);

const Kennisbank = () => {
 // Access the data array from the object
 const dataArray = data.data;

 // Assuming there's only one item in the array, access its title
 const title = dataArray.length > 0 ? dataArray[0].title : '';
 const content = dataArray.length > 0 ? dataArray[0].content : '';
 const category = dataArray.length > 0 ? dataArray[0].category : '';
 const author = dataArray.length > 0 ? dataArray[0].author : '';


 return (

<article className="main-post">
       
{/* {#if dataArray[0]} */}
  
{/* <img src={lastPost1.image.url} alt="" /> */}

  <div className="content-field">
    <span className="category">{category}</span>
    <span className="author">Door {author}</span>
    <h3>{title}</h3>
   <div className="hygraph-html" dangerouslySetInnerHTML={{ __html: content }} />
    </div>

    <div className="read-more-container">
      <a className="read-more-link" href="">Verder lezen</a>
    </div>
{/* // {/if} */}
</article>

















 );
};

export default Kennisbank;