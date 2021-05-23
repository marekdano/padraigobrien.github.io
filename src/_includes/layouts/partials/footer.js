module.exports = function (eleventyConfig) {
  
  eleventyConfig.addJavaScriptFunction("subscribe", function() { alert("podge")});
  
  eleventyConfig.addShortcode("siteFooter", function (data) {
 
    return /*html*/ `
        <div class="w-5/6 md:w-3/4 lg:w-2/3 mx-auto content-center">
          <div class="bg-black">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
              <div class="lg:w-0 lg:flex-1">
                <h2
                  class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                  id="newsletter-headline"
                >
                  Sign up for my newsletter
                </h2>
                <p class="mt-3 max-w-3xl text-lg leading-6 text-white">
                  Subscribe to my newsletter to receive updates on my side projects and
                  posts on what i have learned.
                </p>
              </div>
              <div class="mt-8 lg:mt-0 lg:ml-8">
              <form class="sm:flex" accept-charset="UTF-8" action="https://getform.io/f/e6df9d92-1690-4c7c-8684-1ab6e973c5a7" method="POST" enctype="multipart/form-data" target="_blank">
                  <label htmlFor="emailAddress" class="sr-only">
                    Email address
                  </label>
                  <input
                    id="emailAddress"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    class="w-full px-5 py-3 border border-transparent text-black placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                    placeholder="Enter your email"
                  />
                  <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-grey-500 hover:bg-grey-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-grey-500"
                    >
                      Join me
                    </button>
                  </div>
                </accept-charset=>
                <p class="mt-3 text-sm text-gray-300"></p>
              </div>
            </div>
          </div>
        </div>
     
      `
      });   
  };