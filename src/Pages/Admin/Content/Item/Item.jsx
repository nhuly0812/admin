
function Item() {
const dataItem=[
    {icon:"fa-solid fa-users", colorIcon:"text-orange-500 bg-orange-100", title: "Total customers", number:"1000"},
    {icon:"fa-solid fa-money-bill", colorIcon:"text-green-500 bg-green-100", title: "Total customers", number:"$ 6,760.89"},
    {icon:"fa-solid fa-cart-shopping", colorIcon:"text-red-500 bg-red-100", title: "Total customers", number:"150"},
    {icon:"fa-solid fa-comment-dots", colorIcon:"text-blue-500 bg-blue-100", title: "Total customers", number:"15"},

]
  return (
  <div className="flex justify-center gap-5 w-full h-28 ">
     {dataItem.map((item, index)=>(
    <div key={index} className='flex items-center bg-white p-5 gap-5 shadow-md w-[290px]'>
    <div className=''>  <i className={`${item.icon} ${item.colorIcon} p-4 rounded-full`}></i> </div>
      <div className='flex flex-col'>
      <span>{item.title}</span>
      <b>{item.number}</b>
      </div>
  </div>
   ))}
  </div>
  )
}

export default Item