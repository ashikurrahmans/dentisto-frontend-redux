import React from "react";

const About = () => {
  return (
    <div>
      <div class="max-w-screen-xl px-4 mx-auto md:px-8">
        <div class=" mx-auto w-96">
          <div class="p-4 shadow">
            <div class="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80 mt-5">
              <img
                src="https://scontent.fdac136-1.fna.fbcdn.net/v/t1.6435-9/150565100_1629501413900128_4038877282322006111_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=0Jn81o4LyH4AX-QIy5i&_nc_ht=scontent.fdac136-1.fna&oh=00_AT9bnkzE8MLTIYAZlcq65mNVo1tA0AiQAfsdBeGOzukrkw&oe=628084BE"
                alt="Image"
                class="object-cover object-center w-full h-full"
              />
            </div>

            <div class="flex flex-col items-center justify-center">
              <div class="font-bold text-indigo-500 md:text-lg">
                Ashikur Rahman
              </div>
              <p class="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
                Frontend Focus Full Stack Web developer
              </p>

              <div class="flex">
                <div class="flex gap-4">
                  <a href="https://facebook.com/ashiqur.dream">
                    <svg
                      class="w-6 h-6 text-blue-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="https://twitter.com/ashikurrohmani">
                    <svg
                      class="w-6 h-6 text-blue-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/ashikurrohman/">
                    <svg
                      class="w-6 h-6 text-blue-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-10 md:mb-8">
          <p class="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
            I have a dream to become a security engineer. over past years i
            learnt lot's of things to improve myself and go nearest to my aim.
            As a fullstack digital marketer i worked with several clients.
            nowadays i have been learning mern stack over few month these
            experience will be very helpful for my future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
