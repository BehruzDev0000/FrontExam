import { getCookie } from "cookies-next/client"

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
export {getAll,SignIn,getProductByCategoryId,SignUp}