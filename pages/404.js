
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function NotFound() {

  const router = useRouter()

  useEffect(() => {
    // console.log(window.location.pathname);
    localStorage.setItem('enterRoute', window.location.pathname)
    router.replace("/")
  })

  return null
}
