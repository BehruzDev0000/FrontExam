import { FC } from "react"
import { AdvantageListType } from "../modules/Advantages/Advantages"

interface Props {
  item: AdvantageListType
}

const AdvantageItem: FC<Props> = ({ item }) => {
  return (
    <div className="w-[375px]">
      {item.icon}
      <h3 className="text-[32px] leading-[150%] text-black mt-[11px]">{item.title}</h3>
      <p className="mt-[10px] text-[16px] text-black ">{item.description}</p>
    </div>
  )
}

export default AdvantageItem