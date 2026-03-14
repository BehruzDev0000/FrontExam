import Navbar, { Item } from '@/components/Navbar'
import Link from 'next/link'
import { ArrowIcon, BasketIcon, HeartIcon, Logo } from '@/../public/icons'
import Button from '@/components/Button'
import Image from 'next/image'

const Hero = () => {
      const menuItems:Item[]= [
      { id: 1, title: "Меню",href:'/menu' },
      { id: 2, title: "Новости",href:'/news' },
      { id: 3, title: "Бронирование" ,href:'/booking'},
      { id: 4, title: "О нас" ,href:'/about'},
      { id: 5, title: "Контакты" ,href:'/contacts'},
    ]
    
  return (
    <div className="relative containers mt-7.5 pt-13.75! px-17! pb-25! bg-[linear-gradient(180deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%)] rounded-[50px]">
      <div className="flex items-center justify-between">
      <Link href={'/'}>
      <Logo/>
      </Link>
      <div>
      <Navbar items={menuItems}/>
      </div>
      <div className="flex items-center gap-6.5">
      <HeartIcon/>
      <BasketIcon/>
      </div>
      </div>
      <div className="flex items-center justify-between mt-14.25">
        <div className="max-w-83">
          <h2 className="text-[64px] leading-[150%] text-black uppercase">Вкусная еда ждет тебя!</h2>
          <Button extraStyle="mt-[17px]!">
            Посмотреть меню
            <ArrowIcon/>
            </Button>
        </div>
        <Image src={'/images/luxury.png'} width={609} height={262} alt="Luxury"/>
      </div>
      <Image className="absolute top-26 -left-35" src={'/images/leaf.png'} width={298} height={296} alt="Leaf"/>
      <Image className="absolute top-115.75 -right-10.25" alt="Leaf 2" src={'/images/leaf-bottom.png'} width={258} height={256} />
    </div>
  )
}

export default Hero