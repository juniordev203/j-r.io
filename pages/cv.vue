<template>
  <div class="min-h-screen">
    <div class="p-2 max-w-4xl flex flex-col gap-12 overflow-hidden mb-16">
      <!-- Header -->
      <div class="relative">
        <div class="flex flex-col gap-4">
          <div class="p-5 flex flex-col gap-4 text-center text-black dark:text-white border-2 border-black dark:border-white">
            <h1 class="text-5xl font-medium tracking-wider">PHAM HUY HOANG</h1>
            <p class="text-xl font-medium">Frontend Developer</p>
          </div>
          <div class="flex flex-wrap justify-center gap-4">
            <div class="flex items-center mb-2">
              <CalendarIcon class="w-4 h-4 mr-2 text-indigo-600" />
              <span>11/09/2003</span>
            </div>
            <div class="flex items-center mb-2">
              <MapPinIcon class="w-4 h-4 mr-2 text-indigo-600" />
              <span>Thanh Xuan, Ha Noi</span>
            </div>
            <div class="flex items-center mb-2">
              <GithubIcon class="w-4 h-4 mr-2 text-indigo-600" />
              <span>juniordev203</span>
            </div>
            <div class="flex items-center mb-2">
              <PhoneIcon class="w-4 h-4 mr-2 text-indigo-600" />
              <span>0367435069</span>
            </div>
            <div class="flex items-center">
              <MailIcon class="w-4 h-4 mr-2 text-indigo-600" />
              <span>huyhoangpham8460@gmail.com</span>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-2 text-center">
              <h1 class="text-xl text-black dark:text-white font-medium uppercase ">Carrer goal</h1>
              <el-divider class="!m-0 border-gray-500 border-[1.5px]"/>
            </div>  
            <ul class="list-disc list-inside">
              <li>Apply the knowledge learned into practice, working according to my passion. Desire to find a suitable job and develop.</li>
              <li>A dynamic, hard-working and diligent person at work. During the internship, trying to accumulate knowledge and skills, with the goal of becoming an official employee of the company.</li>
            </ul>
          </div>      
        </div>
      </div>

      <div class="">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Left Column -->
          <div class="md:col-span-1">
            <div class="mb-8">
              <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <BookOpenIcon class="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                EDUCATION
              </h2>
              <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 class="font-medium text-gray-900 dark:text-white">INFORMATION TECHNOLOGY</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-1">NATIONAL ECONOMICS UNIVERSITY</p>
                <p class="text-gray-500 dark:text-gray-400 text-sm">2021 - 2025</p>
              </div>
            </div>
            
            <div>
              <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <WrenchIcon class="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                SKILLS
              </h2>
              <div class="space-y-3">
                <div>
                  <p class="font-medium text-gray-800 dark:text-white mb-1">FrontEnd Web</p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full text-sm">VueJs</span>
                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full text-sm">Angular</span>
                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full text-sm">ReactJs</span>
                  </div>
                </div>
                
                <div>
                  <p class="font-medium text-gray-800 dark:text-white mb-1">BackEnd</p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">.NET core</span>
                    <span class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">NodeJs</span>
                    <span class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Flask Python</span>
                  </div>
                </div>
                
                <div>
                  <p class="font-medium text-gray-800 dark:text-white mb-1">Mobile</p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">React Native</span>
                  </div>
                </div>
                
                <div>
                  <p class="font-medium text-gray-800 dark:text-white mb-1">Other</p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm">Java</span>
                    <span class="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm">C#</span>
                    <span class="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm">MySQL</span>
                  </div>
                </div>
                
                <div>
                  <p class="font-medium text-gray-800 dark:text-white mb-1">Language</p>
                  <p class="text-gray-600 dark:text-gray-400 text-sm">English: Read and understand basic English documents</p>
                </div>
              </div>
            </div>
          </div>  
          <!-- Right Column -->
          <div class="md:col-span-2 flex flex-row gap-2">
            <div class="w-fit h-full">
              <el-divider class="!h-full m-0 border-gray-500 rounded-full border-[3px]" direction="vertical"/>
            </div>
            <div class="">
              <div class="mb-8">
                <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <BriefcaseIcon class="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                  WORK EXPERIENCE
                </h2>
                
                <div class="space-y-6">
                  <div class="border-l-2 border-indigo-500 pl-4 ml-2">
                    <h3 class="font-medium text-gray-900 dark:text-white">FRONTEND DEVELOPER</h3>
                    <p class="text-gray-700 dark:text-gray-300">OUTSOURCE TEAM</p>
                    <p class="text-gray-500 dark:text-gray-400 text-sm mb-2">4/2024 - Present</p>
                  </div>
                  
                  <div class="border-l-2 border-indigo-500 pl-4 ml-2">
                    <h3 class="font-medium text-gray-900 dark:text-white">FRONTEND DEVELOPER</h3>
                    <p class="text-gray-700 dark:text-gray-300">THIEN HA XANH EDUCATIONAL TECHNOLOGY COMPANY</p>
                    <p class="text-gray-500 dark:text-gray-400 text-sm mb-2">10/2024 - 12/2024</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <CodeIcon class="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                  PROJECT INVOLVED
                </h2>
                
                <div class="space-y-8">
                  <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div class="flex justify-between items-center mb-2">
                      <h3 class="font-medium text-gray-900 dark:text-white">SHOES WEBSITE</h3>
                      <span class="text-sm text-gray-500 dark:text-gray-400">9/2023 - 11/2023</span>
                    </div>
                    <div class="mb-3">
                      <div class="flex flex-wrap gap-2 mb-2">
                        <span class="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded text-xs">HTML</span>
                        <span class="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded text-xs">CSS</span>
                        <span class="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded text-xs">Flask Python</span>
                        <span class="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded text-xs">MySQL</span>
                      </div>
                      <p class="text-sm text-gray-700 dark:text-gray-300 mb-1"><span class="font-medium">Position:</span> Fullstack Developer</p>
                      <p class="text-sm text-gray-700 dark:text-gray-300 mb-1"><span class="font-medium">Members:</span> 3</p>
                      <p class="text-sm text-gray-700 dark:text-gray-300"><span class="font-medium">Functions:</span> Search, add tech to cart, update, add or remove tech in cart</p>
                    </div>
                  </div>
                  
                  <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div class="flex justify-between items-center mb-2">
                      <h3 class="font-medium text-gray-900 dark:text-white">CHINESE LEARNING APPLICATION</h3>
                      <span class="text-sm text-gray-500 dark:text-gray-400">2/2024 - 4/2024</span>
                    </div>
                    <div class="mb-3">
                      <div class="flex flex-wrap gap-2 mb-2">
                        <span class="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded text-xs">Java</span>
                        <span class="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded text-xs">Room database</span>
                      </div>
                      <p class="text-sm text-gray-700 dark:text-gray-300 mb-1"><span class="font-medium">Position:</span> Fullstack Developer</p>
                      <p class="text-sm text-gray-700 dark:text-gray-300 mb-1"><span class="font-medium">Members:</span> 3</p>
                      <p class="text-sm text-gray-700 dark:text-gray-300"><span class="font-medium">Functions:</span> Taking ideas from two applications, Duolingo and Quizlet, building an application with two main functions: learning vocabulary with flashcards and taking multiple-choice tests.</p>
                    </div>
                  </div>
                  
                  <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div class="flex justify-between items-center mb-2">
                      <h3 class="font-medium text-gray-900 dark:text-white">WEBSITE ENROLLMENT MANAGEMENT</h3>
                      <span class="text-sm text-gray-500 dark:text-gray-400">4/2024 - 8/2024</span>
                    </div>
                    <div class="mb-3">
                      <div class="flex flex-wrap gap-2 mb-2">
                        <span class="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded text-xs">Angular</span>
                        <span class="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded text-xs">.NET Core</span>
                        <span class="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded text-xs">MySQL</span>
                        <span class="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded text-xs">Swagger</span>
                      </div>
                      <p class="text-sm text-gray-700 dark:text-gray-300 mb-1"><span class="font-medium">Position:</span> Frontend Developer</p>
                      <p class="text-sm text-gray-700 dark:text-gray-300 mb-1"><span class="font-medium">Members:</span> 4</p>
                      <p class="text-sm text-gray-700 dark:text-gray-300 mb-1"><span class="font-medium">Functions:</span> Graduate admission management</p>
                      <p class="text-sm text-gray-700 dark:text-gray-300 mb-1"><span class="font-medium">Process:</span> Enter documents, check information, set up a grading committee, enter scores and results</p>
                      <p class="text-sm text-gray-700 dark:text-gray-300 mb-1"><span class="font-medium">Users:</span></p>
                      <ul class="text-sm text-gray-700 dark:text-gray-300 list-disc ml-5">
                        <li>Students: Register and check results online</li>
                        <li>Records management staff: each employee has an assigned account, enters new records, enters record information, announces results, exports results report file</li>
                      </ul>
                      <p class="text-sm text-gray-700 dark:text-gray-300 mt-1"><span class="font-medium">Model:</span> Client server</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import icons
import { CalendarIcon, MapPinIcon, GithubIcon, PhoneIcon, MailIcon, BookOpenIcon, WrenchIcon, BriefcaseIcon, CodeIcon, DivideCircle } from 'lucide-vue-next';

</script>