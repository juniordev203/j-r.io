<template>
    <div v-if="post" class="max-w-3xl flex flex-col gap-12 mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <!-- Post Header -->
        <div class="" data-aos="fade-up" data-aos-duration="800">
            <div class="flex gap-2 items-center">
                <NuxtLink to="/">
                    <ArrowLeft class="w-5 h-5 cursor-pointer" />
                </NuxtLink>
                <h1
                    class="text-4xl font-bold text-gray-800 dark:text-gray-100 bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    {{ post.title }}
                </h1>
            </div>
            <div class="mt-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div class="flex items-center gap-2">
                    <Calendar class="w-5 h-5" />
                    <span>{{ post.date }}</span>
                </div>
                <div class="flex items-center gap-2">
                    <User class="w-5 h-5" />
                    <span>{{ post.author }}</span>
                </div>
            </div>
            <div class="mt-2 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        <!-- Post Content -->
        <div class="prose prose-lg prose-gray dark:prose-invert max-w-none" data-aos="fade-up" data-aos-delay="100">
            <slot name="content">
                <p>{{ post.content }}</p>
            </slot>
        </div>
        <!-- Tags -->
        <div class="" data-aos="fade-up" data-aos-delay="200">
            <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Tags class="w-5 h-5" />
                <span class="font-medium">Tags:</span>
            </div>
            <div class="mt-2 flex flex-wrap gap-2">
                <a v-for="(tag, index) in post.tags" :key="index" :href="`/tags/${tag.toLowerCase()}`"
                    class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300">
                    {{ tag }}
                </a>
            </div>
        </div>
        <div class="fixed bottom-4 left-0 w-full">
            <div class="flex justify-between items-center max-w-3xl mx-auto">
                <NuxtLink v-if="post.id > 1" :to="`/blogs/${post.id - 1}`" class="cursor-pointer">
                    <div class="flex items-center gap-2">
                        <ArrowLeft />
                        <p class="text">Bài trước</p>
                    </div>
                </NuxtLink>
                <NuxtLink :to="`/blogs/${post.id + 1}`" class="cursor-pointer">
                    <div class="flex items-center gap-2">
                        <p class="text">Bài tiếp theo</p>
                        <ArrowRight />
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Calendar, User, Tags, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-vue-next';
import { posts } from '~/data/contents'
const route = useRoute()
const router = useRouter()
const isRedirectNextPost = ref(false);
// Lấy ID từ URL và convert sang number
const id = Number(route.params.id)

// Tìm post theo ID
const post = posts.find(p => p.id === id)

if (!post) {
    // Nếu không tìm thấy thì redirect về 404
    router.replace('/404')
} else {
    if (post?.id < posts.length) {
        isRedirectNextPost.value = true;
    }
}
// Sample post data (can be passed via props or fetched from API)
</script>

<style scoped></style>