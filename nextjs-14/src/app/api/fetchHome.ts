import type { Home } from '@/types/payload-types'

export const fetchHome = async ()=> {
  const pageRes: Home = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/home?locale=undefined&draft=false&depth=1`,
    {
      method: 'GET',
      cache: 'no-store',
    },
  ).then(res => res.json())

  return pageRes ?? null
}
