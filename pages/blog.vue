<template>
  <div class="min-h-screen">
    <div class="p-2 max-w-4xl flex flex-col gap-12 overflow-hidden mb-16">
      <!-- introduce -->
      <div class="flex flex-col gap-2">
        <h1 class="text-3xl text-black dark:text-gray-100 font-bold">Blog</h1>
        <p class="">Stay tuned for more</p>
      </div>
      <!-- post -->
      <div class="flex flex-col gap-4">
        <div class="flex justify-between text-base">
          <div class="flex flex-col justify-center gap-2">
            <p class="text-gray-700 dark:text-gray-400">Apr 27, 2024</p>
            <p class="font-medium">
              Add beautiful maps to your React app with MapBox GL
            </p>
          </div>
          <div class="w-24 h-24 rounded-md overflow-hidden">
            <img class="w-full h-full object-cover" src="/assets/images/nike.png" alt="" />
          </div>
        </div>
        <div class="flex justify-between text-base">
          <div class="flex flex-col justify-center gap-2">
            <p class="text-gray-700 dark:text-gray-400">Apr 27, 2024</p>
            <p class="font-medium">
              Add beautiful maps to your React app with MapBox GL
            </p>
          </div>
          <div class="w-24 h-24 rounded-md overflow-hidden">
            <img class="w-full h-full object-cover" src="/assets/images/nike.png" alt="" />
          </div>
        </div>
        <div class="flex justify-between text-base">
          <div class="flex flex-col justify-center gap-2">
            <p class="text-gray-700 dark:text-gray-400">Apr 27, 2024</p>
            <p class="font-medium">
              Add beautiful maps to your React app with MapBox GL
            </p>
          </div>
          <div class="w-24 h-24 rounded-md overflow-hidden">
            <img class="w-full h-full object-cover" src="/assets/images/nike.png" alt="" />
          </div>
        </div>
      </div>
      <!-- blog -->
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <div class="flex">
            <p class="text-xl font-medium">New post</p>
            <ArrowUpRight class="w-4 h-5 text-gray-500 " />
          </div>
          <p class="text-gray-700 dark:text-gray-300">
            Please send good ideas including an article about technology,
            design, program, work and your life for me!
          </p>
        </div>
        <div class="">
          <form class="p-6 border rounded-lg shadow-md dark:border-gray-700">
            <label class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your name!</label>
            <input type="text"
              class="w-full p-2 border rounded-md mb-4 bg-gray-100 dark:bg-black  focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              placeholder="Enter your name.." />
            <label class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your idea || post</label>
            <textarea
              class="w-full p-2 border rounded-md bg-gray-100 dark:bg-black  focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              rows="4" placeholder="Enter what you want.."></textarea>
            <div class="flex mt-2">
              <button type="submit"
                class="px-2 py-1.5 flex items-center gap-x-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
                Send
                <Send class="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowUpRight, Send } from "lucide-vue-next";
</script>
