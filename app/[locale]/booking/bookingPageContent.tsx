import Button from "@/components/Button"
import HeroMenu from "@/components/heroMenu"
import { Link } from "@/i18n/navigation"
import NewsModule from "@/modules/News/News"
import { DownPhoneIcon, UpAdressIcon, UpMailIcon } from "@/public/icons"
import { useTranslations } from "next-intl"
import Image from "next/image"

const BookingPageContent = () => {
    const t=useTranslations("Bookings")
  return (
    <div>
<div className="containers mt-7.5! pt-13.75! px-17! pb-25! bg-[linear-gradient(180deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%)] rounded-[50px] !mb-[71px] pb-[71px]">
        <HeroMenu/>
        <h2 className="text-[#626464] text-[18px] leading-[150%] mt-[115px]">
          {t("page")} / <span className="text-black">{t("title")}</span>
        </h2>
        <div className="mt-[31px]">
            <h2 className="text-center text-[48px]">{t("title")}</h2>
            <div className="flex items-center justify-between mt-[56px]">
                <div className="w-[554px]">
                    <h3 className="text-[#000000] text-[32px] leading-[150%]">{t("subtitle")}</h3>
                    <div className="flex flex-col gap-[24px] mt-[36px]">
                        <div className="flex items-center justify-between  border-b border-b-[#000000]">
                            <strong className="text-black text-[20px] leading-[150%]">{t("monday")}</strong>
                            <span className="text-black text-[20px] leading-[150%]">{t("bookingTimeOne")}</span>
                        </div>
                        <div className="flex items-center justify-between  border-b border-b-[#000000]">
                            <strong className="text-black text-[20px] leading-[150%]">{t("tuesday")}</strong>
                            <span className="text-black text-[20px] leading-[150%]">{t("bookingTimeOne")}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-b-[#000000]">
                            <strong className="text-black text-[20px] leading-[150%]">{t("wednesday")}</strong>
                            <span className="text-black text-[20px] leading-[150%]">{t("bookingTimeOne")}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-b-[#000000]">
                            <strong className="text-black text-[20px] leading-[150%]">{t("thursday")}</strong>
                            <span className="text-black text-[20px] leading-[150%]">{t("bookingTimeOne")}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-b-[#000000]">
                            <strong className="text-black text-[20px] leading-[150%]">{t("friday")}</strong>
                            <span className="text-black text-[20px] leading-[150%]">{t("bookingTimeOne")}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-b-[#000000]">
                            <strong className="text-black text-[20px] leading-[150%]">{t("saturday")}</strong>
                            <span className="text-black text-[20px] leading-[150%]">{t("bookingTimeOne")}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-b-[#000000]">
                            <strong className="text-black text-[20px] leading-[150%]">{t("sunday")}</strong>
                            <span className="text-black text-[20px] leading-[150%]">{t("bookingTimeTwo")}</span>
                        </div>
                    </div>
                </div>
                <Image src="/images/order-img.png" alt="arrow" width={503} height={676}/>
            </div>
        </div>
        <div className="mt-[71px]">
            <h2 className="text-center text-[48px]">{t("bookingTitle")}</h2>
            <div className="relative w-full max-w-[902px] mx-auto   rounded-2xl mt-[54px]">
  <form className="relative w-full  mx-auto   rounded-2xl">
  <div className="flex flex-col gap-6">

    <div className="border-b border-gray-400 pb-2">
      <input
        type="tel"
        placeholder="Ваш номер"
        className="w-full bg-transparent outline-none text-[#585858] placeholder-gray-500"
      />
    </div>

    <div className="border-b border-gray-400 pb-2">
      <select className="w-full bg-transparent outline-none text-[#585858]">
        <option value="">На сколько человек?</option>
        <option value="1">1 человек</option>
        <option value="2">2 человека</option>
        <option value="3">3 человека</option>
        <option value="4">4 человека</option>
      </select>
    </div>

    <div className="border-b border-gray-400 pb-2 flex items-center">
      <input
        type="date"
        className="w-full bg-transparent outline-none text-[#585858]"
      />
    </div>

    <div className="border-b border-gray-400 pb-2 flex items-center">
      <input
        type="time"
        className="w-full bg-transparent outline-none text-[#585858]"
      />
    </div>

    <div className="border-b border-gray-400 pb-2">
      <select className="w-full bg-transparent outline-none text-[#585858]">
        <option value="">Выберите место</option>
        <option value="hall">Зал</option>
        <option value="terrace">Терраса</option>
      </select>
    </div>

    <button
      type="button"
      className="text-[#06004C] text-[13px] mt-[8px] text-left cursor-pointer"
    >
      Выбрать место на карте
    </button>

    <button
      type="submit"
      className=" ml-auto mt-4 bg-black text-white py-[18px] rounded-full w-[169px] cursor-pointer"
    >
      Забронировать
    </button>

  </div>

</form>
</div>
        </div>
        <div className="mt-[54px]">
            <h2 className="text-center text-[48px] text-[#000000] leading-[150%]">{t("contact")}</h2>
            <div className="flex items-center justify-between w-[804px] mx-auto mt-[81px]">
                <div className="flex flex-col items-center justify-center max-w-[169px]">
                    <UpMailIcon/>
                    <h3 className="text-black text-[24px] mb-[2px] mt-[27px]">{t('write')}</h3>
                    <Link href="mailto:info@bmgsoft.com">info@bmgsoft.com</Link>
                    <Link href="https://t.me/bmgsoft.com">t.me/bmgsoft.com</Link>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <DownPhoneIcon/>
                    <h3 className="text-black text-[24px] mb-[2px] mt-[27px]">{t('write')}</h3>
                    <Link href="tel:+9998908767888">+9998908767888</Link>
                    <Link href="tel:+9989865332322">+9989865332322</Link>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <UpAdressIcon/>
                    <h3 className="text-black text-[24px] mb-[2px] mt-[27px]">{t('write')}</h3>
                    <span>{t('address')}</span>
                </div>
            </div>
        </div>
    </div>
    <NewsModule/>
    </div>
    
  )
}

export default BookingPageContent