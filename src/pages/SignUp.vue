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
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">

            <!-- Page header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 class="h1">Welcome. We exist to make entrepreneurship easier.</h1>
            </div>

            <!-- Form -->
            <div class="max-w-sm mx-auto">
              <form>
                <div class="flex flex-wrap -mx-3">
                  <div class="w-full px-3">
                    <button class="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                      <svg class="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                      </svg>
                      <span class="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                      <span class="flex-auto pl-16 pr-8 -ml-16">Sign up with Google</span>
                    </button>
                  </div>
                </div>
              </form>
              <div class="flex items-center my-6">
                <div class="border-t border-gray-700 border-dotted flex-grow mr-3" aria-hidden="true"></div>
                <div class="text-gray-400">Or, register with your email</div>
                <div class="border-t border-gray-700 border-dotted flex-grow ml-3" aria-hidden="true"></div>
              </div>
              <form>
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label class="block text-gray-300 text-sm font-medium mb-1" for="full-name">Full Name <span class="text-red-600">*</span></label>
                    <input id="full-name" type="text" class="form-input w-full text-gray-300" placeholder="First and last name" required />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label class="block text-gray-300 text-sm font-medium mb-1" for="company-name">Company Name <span class="text-red-600">*</span></label>
                    <input id="company-name" type="text" class="form-input w-full text-gray-300" placeholder="Your company or app name" required />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label class="block text-gray-300 text-sm font-medium mb-1" for="email">Work Email <span class="text-red-600">*</span></label>
                    <input id="email" type="email" class="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label class="block text-gray-300 text-sm font-medium mb-1" for="password">Password <span class="text-red-600">*</span></label>
                    <input id="password" type="password" class="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
                  </div>
                </div>
                <div class="text-sm text-gray-500 text-center">
                  I agree to be contacted by Open PRO about this offer as per the Open PRO <a class="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out" href="#0">Privacy Policy</a>.
                </div>
                <div class="flex flex-wrap -mx-3 mt-6">
                  <div class="w-full px-3">
                    <button class="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign up</button>
                  </div>
                </div>
              </form>
              <div class="text-gray-400 text-center mt-6">
                Already using Open PRO? <router-link to="/signin" class="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign in</router-link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'SignUp',
  components: {
    Header,
    PageIllustration,
    Footer,
  },
};
</script>
