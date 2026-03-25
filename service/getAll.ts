import { ContactData } from "@/@types/mainTypes"
import { getCookie } from "cookies-next/client"
import { useQuery } from "@tanstack/react-query"

const BASEURI = process.env.NEXT_PUBLIC_API_URL

const getAll = async (URI: string) => {
  const cookie = getCookie("user")
  let token = ""

  try {
    token = cookie ? JSON.parse(cookie).accessToken : ""
  } catch {
    token = ""
  }

  const res = await fetch(`${BASEURI}/${URI}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  })

  if (!res.ok) {
    throw new Error("Malumot olishda xatolik")
  }

  return await res.json() 
}

const SignIn = async (body: { username: string; password: string }) => {
  const res = await fetch(`${BASEURI}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error("SignIn xato")
  }

  return await res.json()
}

const getProductByCategoryId = async (id: string) => {
  const cookie = getCookie("user")
  let token = ""

  try {
    token = cookie ? JSON.parse(cookie).accessToken : ""
  } catch {
    token = ""
  }

  const res = await fetch(`${BASEURI}/products?categoryId=${id}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  })
  
  if (!res.ok) {
    console.log("Malumot olishda xatolik")
  }
  
  return await res.json()
}

const SignUp = async (body: { lastName: string; firstName: string; email: string; username: string; password: string }) => {
  const res = await fetch(`${BASEURI}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  
  if (!res.ok) {
    throw new Error("SignUp xato")
  }
  
  return await res.json()
}

const SendContactMessage = async ({ data }: { data: ContactData }) => {
  try {
    const res = await fetch(`${BASEURI}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const getOrders = async (token: string) => {
  try {
    const res = await fetch(`https://anorkhulov.uz/api/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    })
    
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

const getOrderById = async (orderId: string | number, token: string) => {
  const res = await fetch(`https://anorkhulov.uz/api/orders/${orderId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  
  return await res.json()
}

const useGetOrderById = (orderId: string) => {
  const userCookie = getCookie("user")
  const parsedUser = userCookie ? JSON.parse(userCookie as string) : null

  return useQuery({
    queryKey: ['order', orderId],
    queryFn: async () => {
      const result = await getOrderById(orderId, parsedUser?.accessToken)
      return result?.data
    },
    enabled: !!parsedUser?.accessToken && !!orderId
  })
}

const getCartData = async (userId: string | number, token: string) => {
  const res = await fetch(`https://anorkhulov.uz/api/cart/current?userId=${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  return await res.json()
}

const updateCartItem = async (itemId: number, quantity: number, token: string) => {
  const res = await fetch(`https://anorkhulov.uz/api/cart/items/${itemId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ quantity })
  })
  if (!res.ok) throw new Error("Error")
  return res
}

const deleteCartItem = async (itemId: number, token: string) => {
  const res = await fetch(`https://anorkhulov.uz/api/cart/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  if (!res.ok) throw new Error("Error")
  return res
}

const checkoutCart = async (userId: string | number, guestCount: number, token: string) => {
  const res = await fetch(`https://anorkhulov.uz/api/cart/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, guestCount })
  })
  if (!res.ok) throw new Error("Error")
  return res
}

export {
  checkoutCart,
  getCartData,
  updateCartItem,
  deleteCartItem,
  getAll,
  SignIn,
  getProductByCategoryId,
  SignUp,
  SendContactMessage,
  getOrders,
  getOrderById,
  useGetOrderById
}