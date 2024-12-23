import React from "react";

export default function Testimonials() {
  return (
    <div className="py-24">
      <section class="dark:bg-earthybrown rounded-xl">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl md:text-6xl font-semibold text-center text-gray-800 capitalize dark:text-black">
            What our <span class="text-blue-500 ">clients</span> say
          </h1>

          <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>

          <div class="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            <div class="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <p class="leading-loose text-gray-500 dark:text-gray-300">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>

              <div class="flex items-center mt-6">
                <img
                  class="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <div class="mx-4">
                  <h1 class="font-semibold text-blue-500">John Doe</h1>
                  <span class="text-sm text-gray-500 dark:text-gray-300">
                    CTO, X Company
                  </span>
                </div>
              </div>
            </div>

            <div class="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <p class="leading-loose text-gray-500 dark:text-gray-300">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>

              <div class="flex items-center mt-6">
                <img
                  class="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div class="mx-4">
                  <h1 class="font-semibold text-blue-500">Jane Doe</h1>
                  <span class="text-sm text-gray-500 dark:text-gray-300">
                    Marketing Manager
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
