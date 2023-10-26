import '../Kennisbank/Kennisbank.css';

export async function fetchData() {
  try {
    const response = await fetch('http://localhost:8055/items/kennisbank');
    const data = await response.json();
    console.log(data);
    return { data };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw { error };
  }
}

const Kennisbank = ({ data }) => {
  return (
    <div>
       <h3>{data.id}</h3>
      <h3>{data.title}</h3>
     <h3>{data.content}</h3>
    </div>
  );
};

export { Kennisbank };