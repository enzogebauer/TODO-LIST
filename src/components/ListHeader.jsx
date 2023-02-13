export const ListHeader = ({ListName}) => {

  return (
    <div className="flex justify-start pl-5 items-start h-screen w-full pt-16">
      <h3 className="text-red-500 font-bold text-xl">{ListName}</h3>
      <p>Don't miss any of yours todos</p>
    </div>
  )
  
}