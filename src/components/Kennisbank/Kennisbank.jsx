const data = fetch('http://localhost:8055/items/Kennisbank')
.then(response => response.json())
.then(data => {
    console.log(data)
})
console.log(data)


export const Kennisbank = () => {
    // Component code here
    return (

      <h3>{Kennisbank.title}</h3>
    );
};