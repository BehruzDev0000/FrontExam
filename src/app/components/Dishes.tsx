import Image from "next/image"
import { HeartOneIcon, WhiteBasket } from "../../../public/icons"

const DishesItem = ({item}:{item:{id:number,title:string,description:string,price:string}}) => {
  return (
    <div className="relative pt-[144px] px-[18px] pb-[16px] w-[241px] bg-gradient-to-b from-white/40 to-white/40 rounded-[38px]">

      <div className="absolute -top-[80px] left-1/2 -translate-x-1/2 w-[224px]">
  <Image
    src="/images/food.png"
    alt={item.description}
    width={224}
    height={217}
    className="w-full object-cover"
  />
</div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-[20px] text-black leading-[150%]">
            {item.title}
          </h3>

          <p className="mt-[3px] text-[13px] text-black leading-[150%]">
            {item.description}
          </p>
        </div>

        <HeartOneIcon/>
      </div>

      <div className="flex justify-between mt-[12px]">
        <strong>${item.price}</strong>
        <button className="p-[11px] bg-black text-white rounded-[5px] cursor-pointer">
          <WhiteBasket/>
        </button>
      </div>

    </div>
  )
}

export default DishesItem