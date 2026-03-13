import Button from "@/app/components/Button"
import NewsItem from "@/app/components/NewsItem"
import { ArrowIcon } from "../../../../public/icons"

export interface NewsCardType{
    id:number,
    description:string,
    image:string
}

const News = () => {
     const NewsCards:NewsCardType[]=[
            {id:1,description:"Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной. " ,image:"/images/sergei-news.png"},
            {id:2,description:"Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной. " ,image:"/images/news2-img.png"},
            {id:3,description:"Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной. " ,image:"/images/news3-img.png"}
        ]
  return (
    <div className="containers mt-[71px] pb-[71px]!">
        <h2 className="text-center text-black text-[48px] leading-[150%]">Новости/Галерея</h2>
        <div className="flex items-center justify-between mt-[143px]">
            {NewsCards.map((item)=>(<NewsItem item={item} key={item.id}/>))}
        </div>
       <Button extraStyle="mt-[71px] ml-auto">
  Посмотреть все
  <ArrowIcon/>
</Button>
    </div>
  )
}

export default News