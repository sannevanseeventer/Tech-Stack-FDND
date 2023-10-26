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


 return (

<article class="main-post">
       
{/* {#if dataArray[0]} */}
  
{/* <img src={lastPost1.image.url} alt="" /> */}

  <div className="content-field">
    <span className="category">klimaatadaptatie</span>
    <span className="author">Door Timo op 2 juni</span>
    <h3>{title}</h3>
   <div className="hygraph-html" dangerouslySetInnerHTML={{ __html: content }} />
    </div>

    <div class="read-more-container">
      <a class="read-more-link" href="">Verder lezen</a>
    </div>
{/* // {/if} */}
</article>

















 );
};

export default Kennisbank;