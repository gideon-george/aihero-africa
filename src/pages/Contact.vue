<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">

      <!-- Page illustration -->
      <div class="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
        <PageIllustration />
      </div>

      <section class="relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">

            <!-- Page header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 class="h1 mb-4" data-aos="fade-up">How can we help you?</h1>
              <p class="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">We have custom plans to power your business. Tell us your needs, and we’ll contact you shortly.</p>
            </div>

            <!-- Contact form -->
            <form class="max-w-xl mx-auto">
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label class="block text-gray-300 text-sm font-medium mb-1" for="first-name">First Name <span class="text-red-600">*</span></label>
                  <input id="first-name" type="text" class="form-input w-full text-gray-300 border-red-500 focus:border-red-500" placeholder="Enter your first name" required />
                  <p class="text-red-500 text-sm mt-2">This field is required</p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block text-gray-300 text-sm font-medium mb-1" for="last-name">Last Name <span class="text-red-600">*</span></label>
                  <input id="last-name" type="text" class="form-input w-full text-gray-300" placeholder="Enter your last name" required />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label class="block text-gray-300 text-sm font-medium mb-1" for="email">Email <span class="text-red-600">*</span></label>
                  <input id="email" type="email" class="form-input w-full text-gray-300" placeholder="Enter your email address" required />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label class="block text-gray-300 text-sm font-medium mb-1" for="subject">Subject <span class="text-red-600">*</span></label>
                  <input id="subject" type="text" class="form-input w-full text-gray-300" placeholder="How can we help you?" required />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label class="block text-gray-300 text-sm font-medium mb-1" for="country">Country</label>
                  <select id="country" class="form-select w-full text-gray-300">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label class="block text-gray-300 text-sm font-medium mb-1" for="message">Message</label>
                  <textarea id="message" rows="4" class="form-textarea w-full text-gray-300" placeholder="Write your message"></textarea>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label class="flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    <span class="text-gray-400 ml-2">I agree to the privacy policy</span>
                  </label>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mt-6">
                <div class="w-full px-3">
                  <button class="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Send</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </section>

      <!-- Bottom CTA -->
      <CtaContact />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import CtaContact from './../partials/CtaContact.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Contact',
  components: {
    Header,
    PageIllustration,
    CtaContact,
    Footer,
  },
};
</script>
