function Grid() {
  return (
    <div className="border-8 border-indigo-300 rounded-md p-8 mt-3">
      <div className="h-screen grid content-center grid-cols-4 gap-4 text-center text-white m-2">
        <div className="bg-indigo-500 rounded-md p-4">1</div>
        <div className="bg-indigo-500 rounded-md p-4">2</div>
        <div className="bg-indigo-500 rounded-md p-4">3</div>
        <div className="bg-indigo-500 rounded-md p-4">4</div>
        <div className="bg-indigo-500 rounded-md p-4">5</div>
        <div className="bg-indigo-500 rounded-md p-4">6</div>
        <div className="bg-indigo-500 rounded-md p-4">7</div>
        <div className="bg-indigo-500 rounded-md p-4">8</div>
        <div className="bg-indigo-500 rounded-md p-4">9</div>
      </div>
    </div>
  );
}

export default Grid;
