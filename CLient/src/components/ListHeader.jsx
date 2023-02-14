export const ListHeader = ({listName}) => {
  const signOut = () => {
    console.log("Sign-out")
  }
  return (
    <div className=" flex justify-between items-start border-b-[1px] border-[#00000080]  pl-5 pt-16 ">
      <h1 className=" font-bold text-2xl py-[10px] text-green-600">{listName}</h1>
      <div className="flex items-center">
        <button className="my-0 mx-[5px] py-[5px] px-[10px] rounded-xl bg-transparent border border-current text-xs">ADD NEW</button>
        <button className="my-0 mx-[5px] py-[5px] px-[10px] rounded-xl bg-transparent border border-current text-xs" onClick={signOut}>Sign OUT</button>
      </div>
    </div>
  )
}
 