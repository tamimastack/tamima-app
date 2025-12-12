<template>
    <div class="category-card group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:shadow-xl overflow-hidden"
        @click="$emit('click')">
        <!-- تأثير خلفي متحرك -->
        <div
            class="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        </div>

        <!-- نقطة متحركة للخلفية -->
        <div
            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700">
        </div>

        <div class="relative z-10">
            <div class="flex items-center mb-6">
                <div class="relative mr-4">
                    <!-- دائرة خلف الأيقونة -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    </div>
                    <div
                        class="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-200/50 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl text-white">{{ category.icon }}</span>
                    </div>
                </div>
                <h3 class="text-xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors duration-300">
                    {{ category.title }}
                </h3>
            </div>

            <p
                class="text-gray-600 text-sm mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {{ category.description }}
            </p>

            <div class="pt-6 border-t border-gray-100/50 group-hover:border-primary-100 transition-colors duration-300">
                <div class="flex items-center justify-between">
                    <span
                        class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 group-hover:from-primary-100 group-hover:to-secondary-100 transition-all duration-300">
                        <span
                            class="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full ml-2 group-hover:animate-pulse"></span>
                        {{ problemsCount }} حل متاح
                    </span>

                    <!-- سهم تفاعلي -->
                    <div
                        class="w-10 h-10 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-300">
                        <svg class="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-300"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Category } from '../data/categories';

defineProps<{
    category: Category;
    problemsCount: number;
}>();

defineEmits<{
    click: [];
}>();
</script>

<style scoped>
.category-card {
    border: 1px solid rgba(241, 240, 249, 0.8);
    background: linear-gradient(135deg, #ffffff 0%, #fefefe 50%, #f9f7fe 100%);
}

.category-card:hover {
    border-color: #d3c6f5;
    transform: translateY(-4px);
}

.category-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(156, 126, 228, 0.03) 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
}

.category-card:hover::before {
    opacity: 1;
}
</style>