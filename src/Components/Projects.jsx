import React, { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState(1);

  const imagesTab1 = ['/mountains.png', '/mountains.png', '/mountains.png', '/mountains.png', '/mountains.png', '/mountains.png'];
  const imagesTab2 = ['/forest.png', '/forest.png', '/forest.png', '/forest.png', '/forest.png', '/forest.png'];
  const imagesTab3 = ['/beach.png', '/beach.png', '/beach.png', '/beach.png', '/beach.png', '/beach.png'];

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const imagesToDisplay = activeTab === 1 ? imagesTab1 : activeTab === 2 ? imagesTab2 : imagesTab3;

  return (
    <div className="mx-auto py-10 px-4">
      {/* Heading and Subheading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Projects</h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-2">Browse through our latest projects and explore the work we do.</p>
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center space-x-2 sm:space-x-4 mb-8 w-auto xl:w-96 md:w-96 mx-auto grid grid-cols-3">
        <button
          onClick={() => handleTabClick(1)}
          className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full ${
            activeTab === 1 ? 'bg-gradient-to-b from-violet-600 to-pink-600 text-white' : 'bg-transparant'
          } hover:bg-gradient-to-b from-violet-600 to-pink-600`}
        >
          Tab 1
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full ${
            activeTab === 2 ? 'bg-gradient-to-b from-violet-600 to-pink-600 text-white' : 'bg-transparant'
          } hover:bg-gradient-to-b from-violet-600 to-pink-600`}
        >
          Tab 2
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full ${
            activeTab === 3 ? 'bg-gradient-to-b from-violet-600 to-pink-600' : 'bg-transparant'
          } hover:bg-gradient-to-b from-violet-600 to-pink-600`}
        >
          Tab 3
        </button>
      </div>

      {/* Images Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 p-5 xl:p-20 gap-5 md:gap-7 xl:gap-12 ">
        {imagesToDisplay.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-70 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-500 to-pink-500 opacity-0 group-hover:opacity-60 transition-all duration-300 transform -translate-y-full group-hover:translate-y-0"></div>

            {/* Text overlay */}
            <div className="absolute inset-0 flex items-end justify-center p-4">
              <div className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                Project {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
