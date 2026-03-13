import { PizzaIcon } from "lucide-react"
import { AtmosphereIcon, CarIcon, ChefIcon, MaintenanceIcon, SoupIcon } from "../../../../public/icons"
import { ReactNode } from "react"
import AdvantageItem from "@/app/components/AdvantageItem"
export interface AdvantageListType{
        id:number,
        title:string,
        description:string,
        icon:ReactNode
    }
const Advantages = () => {
    
    const AdvantageList:AdvantageListType[]=[
        {id:1,title:"Качественные продукты",description:"Входные билеты в музеи, для посещения достопримечательностей, памятников",icon:<SoupIcon/>},
        {id:2,title:"Быстрая доставка",description:"Входные билеты в музеи, для посещения достопримечательностей, памятников",icon:<CarIcon/>},
        {id:3,title:"Вкусные рецепты",description:"Входные билеты в музеи, для посещения достопримечательностей, памятников",icon:<PizzaIcon/>},
        {id:4,title:"Уютная атмосфера",description:"Входные билеты в музеи, для посещения достопримечательностей, памятников",icon:<AtmosphereIcon/>},
        {id:5,title:"Опытные повара",description:"Входные билеты в музеи, для посещения достопримечательностей, памятников",icon:<ChefIcon/>},
        {id:6,title:"Обслуживания",description:"Входные билеты в музеи, для посещения достопримечательностей, памятников",icon:<MaintenanceIcon/>}
    ]
  return (
    <div className="containers pb-[71px]">
        <h2 className="text-[48px] leading-[150%] text-black text-center">Почему именно мы?</h2>
        <div className="flex items-start mt-[77px] justify-between flex-wrap space-y-[96px]">
        {AdvantageList.map((item)=>(<AdvantageItem key={item.id} item={item}/>))}
        </div>
        
    </div>
  )
}

export default Advantages