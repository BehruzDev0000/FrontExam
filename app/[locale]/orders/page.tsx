import { cookies } from "next/headers"
import { getCookie } from "cookies-next"
import { redirect } from "@/i18n/navigation"
import OrderPageContent from "./orderPageContent"
import { getOrders } from "@/service/getAll"

const OrdersPage = async () => {
  const userCookie = await getCookie("user", { cookies })

  if (!userCookie) {
    redirect({ href: "/", locale: "uz" })
  }

  const parsedUser = JSON.parse(userCookie as string)

  const res = await getOrders(parsedUser?.accessToken)

  const result = await res
  const orderList = Array.isArray(result.data) ? result.data.filter(Boolean) : [result.data].filter(Boolean)

  return <OrderPageContent orders={orderList} />
}

export default OrdersPage