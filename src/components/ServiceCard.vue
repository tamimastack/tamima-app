<template>
    <div
        class="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl shadow-gray-100/50 border border-gray-100 hover:border-primary-300/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-100/50 hover:-translate-y-2 overflow-hidden">
        <!-- تأثير خلفي متحرك -->
        <div
            class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        </div>

        <!-- نمط خلفية زخرفي -->
        <div
            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-100/20 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700">
        </div>

        <div class="relative z-10">
            <!-- رأس البطاقة -->
            <div class="flex items-start justify-between mb-6">
                <div class="flex items-center">
                    <div class="relative mr-4">
                        <!-- دائرة خلف الأيقونة -->
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        </div>
                        <div class="relative w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center shadow-lg"
                            :class="gradientClass">
                            <span class="text-2xl text-white">{{ service.icon }}</span>
                        </div>
                    </div>
                    <div>
                        <h3
                            class="text-xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors duration-300">
                            {{ service.title }}
                        </h3>
                        <p v-if="service.duration" class="text-sm text-gray-500 mt-1 flex items-center">
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {{ service.duration }}
                        </p>
                    </div>
                </div>

                <!-- السعر مع تدرج لوني -->
                <div v-if="service.price" class="relative">
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                    </div>
                    <div
                        class="relative px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl shadow-lg">
                        <span class="font-bold">{{ service.price }}</span>
                    </div>
                </div>
            </div>

            <!-- الوصف -->
            <div class="mb-8">
                <p
                    class="text-gray-600 text-right leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {{ service.description }}
                </p>
            </div>

            <!-- الميزات -->
            <div class="space-y-3 mb-8">
                <div v-for="(feature, index) in service.features" :key="index"
                    class="group/feature flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-secondary-50/50 transition-all duration-300">
                    <!-- أيقونة الميزة -->
                    <div
                        class="relative w-8 h-8 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center ml-3 group-hover/feature:scale-110 transition-transform duration-300">
                        <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span
                        class="text-gray-700 text-sm flex-1 group-hover/feature:text-gray-800 transition-colors duration-300">
                        {{ feature }}
                    </span>
                </div>
            </div>

            <!-- إحصائيات إضافية -->
            <div v-if="service.stats" class="grid grid-cols-2 gap-3 mb-8">
                <div v-for="(stat, key) in service.stats" :key="key"
                    class="bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 text-center border border-gray-100">
                    <div class="text-lg font-bold text-primary-600">{{ stat.value }}</div>
                    <div class="text-xs text-gray-500 mt-1">{{ stat.label }}</div>
                </div>
            </div>

            <!-- زر الطلب -->
            <button @click="contact"
                class="group/btn w-full py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-primary-200/50 transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5">
                <span class="relative">
                    <span class="group-hover/btn:opacity-0 transition-opacity duration-300">طلب الخدمة</span>
                    <span
                        class="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">ابدأ
                        الآن</span>
                </span>
                <svg class="w-5 h-5 mr-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </button>

            <!-- معلومات إضافية -->
            <div class="flex items-center justify-between mt-4 text-sm text-gray-500">
                <div v-if="service.popular" class="flex items-center">
                    <span
                        class="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full ml-2 animate-pulse"></span>
                    <span class="text-yellow-600 font-medium">الأكثر طلباً</span>
                </div>
                <div class="flex items-center">
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    <span>استشارة مجانية</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Service } from '../data/services';

const props = defineProps<{
    service: Service;
    index: number;
}>();

const gradientClass = computed(() => {
    const gradients = [
        'from-purple-500 to-pink-500',
        'from-blue-500 to-cyan-500',
        'from-green-500 to-emerald-500',
        'from-yellow-500 to-orange-500',
        'from-red-500 to-pink-500',
        'from-indigo-500 to-purple-500',
        'from-teal-500 to-green-500'
    ];
    return gradients[props.index % gradients.length];
});

const contact = () => {
    window.location.href = '/contact';
};
</script>

<style scoped>
@keyframes pulse {

    0%,
    100% {
        opacity: 0.7;
    }

    50% {
        opacity: 1;
    }
}

.animate-pulse {
    animation: pulse 2s ease-in-out infinite;
}
</style>