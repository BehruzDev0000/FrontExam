"use client"
import Image from "next/image"
import { WhiteBasket } from "@/public/icons"
import { Product } from "@/@types/mainTypes"
import { getCookie } from "cookies-next"
import toast from "react-hot-toast"
import { useQueryClient } from "@tanstack/react-query"
import { Heart } from "lucide-react"
import { useLike } from "@/context/Context"

const DishesItem = ({ item }: { item: Product }) => {
  const queryClient = useQueryClient()
  const { toggleLike, isLiked } = useLike()

  const isItemLiked = isLiked(item.id)

  const handleLike = () => {
    toggleLike(item.id)
    if (isItemLiked) {
      toast.success("Sevimlilardan o'chirildi")
    } else {
      toast.success("Sevimlilarga qo'shildi", { icon: "❤️" })
    }
  }

  const handleAddToBassket = async () => {
    try {
      const token = getCookie("user")
      if (!token) return toast.error("Avval tizimga kiring")

      const parsed = JSON.parse(token as string)
      const response = await fetch(`https://anorkhulov.uz/api/cart/current?userId=${parsed?.user.id}`, {
        headers: { Authorization: `Bearer ${parsed?.accessToken}` }
      })
      const result = await response.json()
      const cartItems = result.data?.items || []

      const isExist = cartItems.find((cartItem: any) => cartItem.product.id === item.id)

      if (isExist) return toast.error("Ushbu mahsulot savatda bor")

      const postResponse = await fetch(`https://anorkhulov.uz/api/cart/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsed?.accessToken}`
        },
        body: JSON.stringify({
          userId: parsed?.user.id,
          productId: item.id,
          quantity: 1
        })
      })

      if (postResponse.ok) {
        toast.success("Mahsulot savatga qo'shildi", { icon: "🛒" })
        queryClient.invalidateQueries({ queryKey: ['cart'] })
      }
    } catch (error) {
      toast.error("Xatolik yuz berdi")
    }
  }

  return (
    <div className="relative pt-36 px-4.5 pb-4 w-60.25 bg-linear-to-b from-white/40 to-white/40 rounded-[38px]">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-56">
        <Image
          src={`https://anorkhulov.uz/${item.image}`}
          alt={item.name || "dish image"}
          width={224}
          height={217}
          className="w-[224px] h-[217px] object-cover"
        />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-[20px] text-black leading-[150%]">{item.name}</h3>
          <p className="mt-0.75 text-[13px] text-black leading-[150%]">{item.description}</p>
        </div>
        
        <button onClick={handleLike} className="cursor-pointer transition-transform active:scale-90">
          <Heart 
            className={`w-6 h-6 transition-colors ${isItemLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
          />
        </button>

      </div>
      <div className="flex justify-between mt-3">
        <strong>{item.price}$</strong>
        <button 
          type="button" 
          onClick={handleAddToBassket} 
          className="p-2.75 bg-black text-white rounded-[5px] cursor-pointer active:scale-95 transition-transform"
        >
          <WhiteBasket />
        </button>
      </div>
    </div>
  )
}

export default DishesItem