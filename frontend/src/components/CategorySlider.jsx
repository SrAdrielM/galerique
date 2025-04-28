function CategorySlider({ title, items }) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{title}</h2>
          
          <div className="relative">
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {items.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-64 h-40 bg-gray-100 rounded-md overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title || `Item ${index+1}`}
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                  />
                  {item.title && (
                    <div className="p-2 bg-white bg-opacity-80 absolute bottom-0 w-full">
                      <p className="text-sm font-medium">{item.title}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default CategorySlider;