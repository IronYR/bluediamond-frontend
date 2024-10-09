import React from 'react'

export default function Hero() {
  return (
    <div>
        <section class="py-32">
        <div class="container">
          <div class="grid items-center gap-8 lg:grid-cols-2">
            <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 class="my-6 text-pretty text-4xl font-bold lg:text-6xl">Reinvent your business with AI</h1>
              <p class="mb-8 max-w-xl text-zinc-600 lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat
                omnis! Porro facilis quo animi consequatur. Explicabo.
              </p>
              <div class="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <button class="w-full px-5 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Contact us</button>

                  {/* <button
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2 w-full sm:w-auto">
                  Secondary Button<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-arrow-down-right ml-2 size-4">
                    <path d="m7 7 10 10"></path>
                    <path d="M17 7v10H7"></path>
                  </svg>
                </button> */}
              </div>
            </div>
            <img src="/hero-image.jpg" className='rounded-3xl'/>
          </div>
        </div>
      </section>
    </div>
  )
}


