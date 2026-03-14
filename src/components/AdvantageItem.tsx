import { FC } from "react"
import { AdvantageListType } from "@/modules/Advantages/Advantages"

interface Props {
  item: AdvantageListType
}

const AdvantageItem: FC<Props> = ({ item }) => {
  return (
    <div className="w-93.75">
      {item.icon}
      <h3 className="text-[32px] leading-[150%] text-black mt-2.75">{item.title}</h3>
      <p className="mt-2.5 text-[16px] text-black ">{item.description}</p>
    </div>
  )
}

export default AdvantageItem