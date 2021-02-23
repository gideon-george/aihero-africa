<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">

        <!-- Items -->
        <div class="grid gap-20" data-aos-id-features-home>

          <!-- Item -->
          <div class="md:grid md:grid-cols-12 md:gap-6 items-center">
            <!-- Image -->
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up" data-aos-anchor="[data-aos-id-features-home]">
              <div class="relative">
                <img class="md:max-w-none" :src="require('@/images/features-illustration.png')" width="540" height="520" alt="Features illustration" />
                <svg class="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="540" height="520" viewBox="0 0 540 520" xmlns="http://www.w3.org/2000/svg">
                  <g class="fill-current text-purple-600">
                    <circle class="pulse" cx="270" cy="260" r="64" />
                    <circle class="pulse pulse-1" cx="270" cy="260" r="64" />
                    <circle class="pulse pulse-2" cx="270" cy="260" r="64" />
                    <circle class="pulse pulse-3" cx="270" cy="260" r="64" />
                  </g>
                </svg>
              </div>
            </div>
            <!-- Content -->
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right" data-aos-anchor="[data-aos-id-features-home]">
              <div class="md:pr-4 lg:pr-12 xl:pr-16">
                <div class="font-architects-daughter text-xl text-purple-600 mb-2">Lighting fast workflow</div>
                <h3 class="h3 mb-3">Say hello to the future of work</h3>
                <p class="text-xl text-gray-400 mb-4"> Just like how electricity affected almost every industry from the last century, Artificial intelligence is going to affect almost every human endeavour, and just as millions of jobs will be taken over by AI and automation, million more jobs will be created from this amazing emerging technology. You can't afford not to be a player in this digital economy where skills like these are of a very high worth and value .</p>
                <ul class="flex flex-wrap text-lg text-gray-400 -mx-2 -my-1">
                  <li class="flex items-center mx-2 my-1">
                    <svg class="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Python Programming</span>
                  </li>
                  <li class="flex items-center mx-2 my-1">
                    <svg class="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Data Analysis</span>
                  </li>
                  <li class="flex items-center mx-2 my-1">
                    <svg class="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Machine Learning</span>
                  </li>
                  <li class="flex items-center mx-2 my-1">
                    <svg class="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Datascience</span>
                  </li>
                  <li class="flex items-center mx-2 my-1">
                    <svg class="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Artificial intelligence</span>
                  </li>
                </ul>
                <div class="flex items-start mt-8">
                  <img class="rounded-full flex-shrink-0 mr-4" :src="require('@/images/gideong.jpg')" width="40" height="40" alt="Features avatar" />
                  <div>
                    <blockquote class="text-gray-400 italic mb-3">"It's highly about TIME to skill up".</blockquote>
                    <div class="text-gray-700 font-medium">
                      <cite class="text-gray-200 not-italic">— Gideon George</cite> - <a class="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">AI Expert</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesHome'
}
</script>