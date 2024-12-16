export function useBack() {
  const router = useRouter()

  function back() {
    if (history.length > 1)
      router.back()
    else
      router.replace('/')
  }

  return { back }
}
