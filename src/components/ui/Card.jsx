const Card = ({ item }) => {
    return (
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
        <h2 className="text-xl font-semibold mb-2 text-blue-400">
          {item.title}
        </h2>
        <p className="text-gray-400">{item.description}</p>
      </div>
    );
  };
  
  export default Card;