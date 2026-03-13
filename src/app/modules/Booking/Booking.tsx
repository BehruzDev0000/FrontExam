import { Calendar, ChevronDown, Clock } from "lucide-react"
import Image from "next/image"
import { FoodIcon } from "../../../../public/icons"

const Booking = () => {
  return (
    <div className="containers flex items-center justify-between mt-[280px]! pb-[94px]">
         <div className="w-[460px] rounded-3xl bg-white/40   p-8 ">

       <div className="w-[126px] h-[126px] rounded-full bg-black flex items-center justify-center text-white text-3xl -mt-16 mb-6 shadow-[0_0_0_10px_rgba(255,255,255,0.4)]">
  <FoodIcon />
</div>

        <h2 className="text-3xl font-semibold mb-8">
          Забронировать стол
        </h2>

        <div className="mb-6 border-b border-black pb-2">
          <input
            type="text"
            placeholder="Ваш номер"
            className="w-full bg-transparent outline-none text-gray-700 placeholder:text-[#585858]"
          />
        </div>

        <div className="mb-6 border-b border-black pb-2 flex items-center justify-between">
          <select className="w-full bg-transparent outline-none text-gray-700 ">
            <option>На сколько человек?</option>
            <option>1 человек</option>
            <option>2 человека</option>
            <option>3 человека</option>
            <option>4 человека</option>
          </select>
        </div>

        <div className="mb-6 border-b border-black pb-2 flex items-center justify-between">
          <input
            type="date"
            className="w-full bg-transparent outline-none text-gray-700 placeholder:text-[#585858] "
          />
        </div>

        <div className="mb-6 border-b border-black pb-2 flex items-center justify-between">
          <input
            type="time"
            className="w-full bg-transparent outline-none text-gray-700 placeholder:text-[#585858] "
          />
        </div>

        <div className="mb-3 border-b border-black pb-2 flex items-center justify-between">
          <select className="w-full bg-transparent outline-none text-gray-700 ">
            <option>Выберите место</option>
            <option>Зал</option>
            <option>Терраса</option>
          </select>
        </div>

        <p className="text-sm text-blue-600 mb-8 cursor-pointer">
          Выбрать места на карте
        </p>

        <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-900 transition">
          Забронировать
        </button>

      </div>
        <Image src={'/images/pizza.png'} width={580} height={500} alt="pizza"/>
    </div>
  )
}

export default Booking