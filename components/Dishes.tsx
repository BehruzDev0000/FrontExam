import Image from "next/image"
import { HeartOneIcon, WhiteBasket } from "@/public/icons"
import { Product } from "@/@types/mainTypes"

const DishesItem = ({item}:{item:Product}) => {
  return (
    <div className="relative pt-36 px-4.5 pb-4 w-60.25 bg-linear-to-b from-white/40 to-white/40 rounded-[38px]">

      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-56">
  <Image
    src={`https://anorkhulov.uz/${item.image}`}
    alt={item.name||"dish image"}
    width={224}
    height={217}
    className="w-[224px] h-[217px] object-cover"
  />
</div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-[20px] text-black leading-[150%]">
            {item.name}
          </h3>

          <p className="mt-0.75 text-[13px] text-black leading-[150%]">
            {item.description}
          </p>
        </div>

        <HeartOneIcon/>
      </div>

      <div className="flex justify-between mt-3">
        <strong>{item.price}</strong>
        <button className="p-2.75 bg-black text-white rounded-[5px] cursor-pointer">
          <WhiteBasket/>
        </button>
      </div>

    </div>
  )
}

export default DishesItem