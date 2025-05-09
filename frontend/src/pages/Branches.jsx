const Branches = () => {
    const branches = [
      "Belgaria Retiktala",
      "Belgiana Station",
      "Sodipur",
      "Barraopore"
    ];
  
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Branches</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-3">
            {branches.map((branch, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                <span className="text-lg">{branch}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">More branches are joining soon!</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Branches;