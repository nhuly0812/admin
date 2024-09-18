
function Search() {
  const dataIconSearch=[
    {icon:"fa-solid fa-moon"},
    {icon:"fa-solid fa-bell"},
  
  ]
  return (
<div className=" flex justify-between p-4 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)]">
<div>
       <input type='text' placeholder='Search' className='w-96 px-3 py-2'/><i className="fa-solid fa-magnifying-glass text-blue-500"></i>
       </div>
       <div className="flex gap-2 items-center text-blue-500 ">
       {dataIconSearch.map((items,index)=>(
        <i key={index} className={`${items.icon} hover:bg-blue-500 hover:text-white p-2 rounded-full`} ></i>
       ))}
       
       <img className="w-[40px]" src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png" alt=""/>
       </div>
    </div>
  )
}

export default Search