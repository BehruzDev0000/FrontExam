import Link from "next/link"
import { FaceBookIcon, InstagramIcon, Logo, TelegramIcon, WhatsAppIcon } from "@/../public/icons"

const Footer = () => {
  return (
    <div className="containers flex items-start pb-17.75!">
        <div className="flex flex-col items-start pt-14.5 w-34 ">
            <Logo/>
            <div className="mt-2.5 flex items-center gap-2.5">
                <Link href={'/'}>
                <TelegramIcon/>
                </Link>
                <Link href={'/'}>
                <WhatsAppIcon/>
                </Link>
                <Link href={'/'}>
                <FaceBookIcon/>
                </Link>
                <Link href={'/'}>
                <InstagramIcon/>
                </Link>
            </div>
        </div>
        <div className="flex items-start pt-19 ml-39.75">
     <div className="flex flex-col  w-40.5">
          <h3 className="text-black text-[25px]">Наши услуги</h3>
          <div className="flex flex-col gap-1.75 mt-3">
            <Link href="/" className="text-[16px] leading-[150%] text-black">Цены</Link>
          <Link href="/" className="text-[16px] leading-[150%] text-black">Отслеживание</Link>
          <Link href="/" className="text-[16px] leading-[150%] text-black">Сообщить об ошибке</Link>
          <Link href="/" className="text-[16px] leading-[150%] text-black">Условия услуг</Link>
          </div>
        </div>
        <div className="flex flex-col w-47.5 ml-44.75!">
          <h3 className="text-black text-[25px]">Наша компания</h3>
         <div className="flex flex-col gap-1.75 mt-3">
             <Link href="/" className="text-[16px] leading-[150%] text-black">Отчетность</Link>
          <Link href="/" className="text-[16px] leading-[150%] text-black">Свяжитесь с нами</Link>
          <Link href="/" className="text-[16px] leading-[150%] text-black">Управление</Link>
         </div>
        </div>
         <div className="flex flex-col w-39.5 ml-47.5!">
          <h3 className="text-black text-[25px]">Адрес</h3>
          <div className="flex flex-col gap-1.75 mt-3">
            <p className="text-[16px] leading-[150%] text-black">Узбекистан, Ташкент</p>
          <p className="text-[16px] leading-[150%] text-black">Улица, 24</p>
          <p className="text-[16px] leading-[150%] text-black">+99894848844848</p>
          <p className="text-[16px] leading-[150%] text-black">info@bmgsoft.com</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Footer