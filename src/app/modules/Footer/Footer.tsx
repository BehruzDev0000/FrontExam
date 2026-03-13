import Link from "next/link"
import { FaceBookIcon, InstagramIcon, Logo, TelegramIcon, WhatsAppIcon } from "../../../../public/icons"

const Footer = () => {
  return (
    <div className="containers flex items-start pb-[71px]!">
        <div className="flex flex-col items-start pt-[58px] w-[136px] ">
            <Logo/>
            <div className="mt-[10px] flex items-center gap-[10px]">
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
        <div className="flex items-start pt-[76px] ml-[159px]">
     <div className="flex flex-col  w-[162px]">
          <h3 className="text-black text-[25px]">Наши услуги</h3>
          <div className="flex flex-col gap-[7px] mt-[12px]">
            <Link href="/" className="text-[16px] leading-[150%] text-black">Цены</Link>
          <Link href="/" className="text-[16px] leading-[150%] text-black">Отслеживание</Link>
          <Link href="/" className="text-[16px] leading-[150%] text-black">Сообщить об ошибке</Link>
          <Link href="/" className="text-[16px] leading-[150%] text-black">Условия услуг</Link>
          </div>
        </div>
        <div className="flex flex-col w-[190px] ml-[179px]!">
          <h3 className="text-black text-[25px]">Наша компания</h3>
         <div className="flex flex-col gap-[7px] mt-[12px]">
             <Link href="/" className="text-[16px] leading-[150%] text-black">Отчетность</Link>
          <Link href="/" className="text-[16px] leading-[150%] text-black">Свяжитесь с нами</Link>
          <Link href="/" className="text-[16px] leading-[150%] text-black">Управление</Link>
         </div>
        </div>
         <div className="flex flex-col w-[158px] ml-[190px]!">
          <h3 className="text-black text-[25px]">Адрес</h3>
          <div className="flex flex-col gap-[7px] mt-[12px]">
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