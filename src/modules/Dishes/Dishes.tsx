import Button from "@/components/Button"
import DishesItem from "@/components/Dishes"
import Image from "next/image"
import { ArrowIcon } from "@/../public/icons"

const Dishes = () => {
    const FoodList=[
        {id:1,title:"Chicken soup",description:"Spicy with garlic",price:"10.00"},
        {id:2,title:"Chicken soup",description:"Spicy with garlic",price:"10.00"},
        {id:3,title:"Chicken soup",description:"Spicy with garlic",price:"10.00"},
        {id:4,title:"Chicken soup",description:"Spicy with garlic",price:"10.00"}
    ]
  return (
    <div className="mt-15 containers relative">
        <h2 className="text-center text-[#000000] text-[48px]">Популярные блюда</h2>
        <div className="mt-31.75 flex items-center justify-between">
        {FoodList.map((item)=>(<DishesItem key={item.id} item={item}/>))}
        </div>
       <Image
  src="/images/leaf2.png"
  width={258}
  height={258}
  alt="Leaf"
  className="absolute -bottom-50 -left-50"
/>
<Image src={'/images/leaf3.png'} width={252} height={253} alt="Leaf" className="absolute -top-15 -right-17.5"/>
        <Button extraStyle="mt-[57px] right-0 absolute">Посмотреть меню
            <ArrowIcon/>
        </Button>
    </div>
  )
}

export default Dishes