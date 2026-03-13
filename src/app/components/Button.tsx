import { FC, ReactNode } from "react"
interface BUttonProps{
  extraStyle?:string,
  children:ReactNode
}
const Button:FC<BUttonProps> = ({extraStyle,children}) => {
  return (
    <button className={`${extraStyle} cursor-pointer bg-black flex items-center gap-[10px] py-[16px] px-[15px] text-white rounded-tl-[13px] rounded-tr-[13px] rounded-bl-[13px] leading-[150%] text-[18px]`}>
      {children}
    </button>
  )
}

export default Button