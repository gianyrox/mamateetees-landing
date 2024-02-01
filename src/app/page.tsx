export default function Home() {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="top-0  w-full h-[100px] flex items-center justify-center left-0 right-0 bg-black">
        <h1 className="text-4xl text-center">Coming soon...</h1>
      </div>
      <div className="mt-[80px] mb-[60px] top-0">
        <h1 className="text-8xl text-center">
          Mama Tee Tees Watta Allison Children Hope Foundation, Inc.
        </h1>
      </div>
      <div className="right-0 left-0 w-full ">
        <div className="w-1/3 h-[300px] bg-gray-600 bg-opacity-50 border-4 rounded-lg border-gray-600 top-0 mx-auto">
          <p className="p-4 text-center text-xl">
            To prepare, enable, and empower West African children who have been
            subjected to living in poverty achieve lifelong success. Through
            programs designed to build and operate orphanages and mission
            schools, prepare teachers, provide school supplies and educational
            materials, the Mama Tee Tees Watta Allison Children Hope Foundation
            strives to prepare the children for a bright future.
          </p>
        </div>
      </div>{" "}
      <div className="right-0 left-0 w-full">
        <button className="w-40 h-20 bg-blue-500 bg-opacity-50 border-2 rounded-lg border-blue-500 mx-auto mt-20 flex items-center justify-center hover:bg-opacity-100">
          <p className="p-4 text-center text-2xl">Donate Today</p>
        </button>
      </div>
      <div className="right-0 left-0 bottom-0 h-[80px] w-[96%] absolute mx-auto">
        <div className="w-full grid grid-cols-3 gap-4">
          <div className="bg-red-500 h-10"></div>
          <div className="bg-blue-500 h-10"></div>
          <div className="bg-green-500 h-10"></div>
        </div>
        {/* Add more divs for additional boxes */}
      </div>
    </div>
  );
}
