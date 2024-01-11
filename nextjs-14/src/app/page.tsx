import Image from 'next/image'
import {fetchHome} from "@/app/api/fetchHome";

export default async function Home() {
  const home = await fetchHome()
  const payloadURL = process.env.NEXT_PUBLIC_PAYLOAD_URL || ''

  const homeText = home?.Text || ''

  const firstLogoURL = payloadURL + home?.FirstLogo?.url || ''
  const firstLogoAlt = home?.FirstLogo?.alt || ''
  const firstLogoWidth = home?.FirstLogo?.width || 0
  const firstLogoHeight = home?.FirstLogo?.height || 0

  const secondLogoURL = payloadURL + home?.SecondLogo?.url || ''
  const secondLogoAlt = home?.SecondLogo?.alt || ''
  const secondLogoWidth = home?.SecondLogo?.width || 0
  const secondLogoHeight = home?.SecondLogo?.height || 0

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <div className="items-center justify-between"/>

        <div
            className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <div className="flex flex-col items-center justify-center">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src={firstLogoURL}
                alt={firstLogoAlt}
                width={firstLogoWidth}
                height={firstLogoHeight}
                priority
            />
            <Image
                className="mt-8 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src={secondLogoURL}
                alt={secondLogoAlt}
                width={secondLogoWidth}
                height={secondLogoHeight}
                priority
            />
            <code className="mt-16 font-mono font-normal text-base">
              {homeText}
            </code>
          </div>
        </div>

        <div className="mb-32"/>

      </main>
  )
}
