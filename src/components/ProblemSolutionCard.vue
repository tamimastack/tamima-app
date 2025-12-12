<template>
    <div class="space-y-8">
        <!-- بطاقة المشكلة مع تأثيرات متقدمة -->
        <div
            class="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl shadow-gray-100/50 border border-gray-100 hover:border-red-100 transition-all duration-500">
            <!-- تأثير خلفي متحرك -->
            <div
                class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-50/30 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-700">
            </div>

            <div class="relative z-10">
                <div class="flex items-center mb-6">
                    <div class="relative mr-4">
                        <!-- دائرة خلف الأيقونة -->
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-red-100 to-pink-100 rounded-xl -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        </div>
                        <div
                            class="relative w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-200">
                            <span class="text-2xl text-white">❓</span>
                        </div>
                    </div>
                    <div>
                        <h3
                            class="text-2xl font-bold text-gray-800 group-hover:text-red-700 transition-colors duration-300">
                            المشكلة
                        </h3>
                        <div class="flex items-center mt-2 space-x-2 space-x-reverse text-sm text-gray-500">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>تحليل المشكلة</span>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200/50 mb-6 group-hover:border-red-200/50 transition-colors duration-300">
                    <p
                        class="text-gray-700 text-lg leading-relaxed font-light group-hover:text-gray-800 transition-colors duration-300">
                        "{{ problem.problem }}"
                    </p>
                </div>

                <div class="flex flex-wrap gap-2">
                    <span v-for="tag in problem.tags" :key="tag"
                        class="group/tag inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-red-50 to-pink-50 text-red-700 border border-red-100 hover:border-red-300 hover:from-red-100 hover:to-pink-100 transition-all duration-300">
                        <span
                            class="w-1.5 h-1.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full ml-2 group-hover/tag:animate-pulse"></span>
                        #{{ tag }}
                    </span>
                </div>
            </div>
        </div>

        <!-- بطاقة الحل مع تأثيرات متقدمة -->
        <div
            class="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl shadow-gray-100/50 border border-gray-100 hover:border-green-100 transition-all duration-500">
            <!-- تأثير خلفي متحرك -->
            <div
                class="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-50/30 to-emerald-50/30 rounded-full -translate-x-12 -translate-y-12 group-hover:scale-125 transition-transform duration-700">
            </div>

            <div class="relative z-10">
                <div class="flex items-center mb-6">
                    <div class="relative mr-4">
                        <!-- دائرة خلف الأيقونة -->
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        </div>
                        <div
                            class="relative w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-200">
                            <span class="text-2xl text-white">✨</span>
                        </div>
                    </div>
                    <div>
                        <h3
                            class="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                            الحل العملي
                        </h3>
                        <div class="flex items-center mt-2 space-x-2 space-x-reverse text-sm text-gray-500">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>خطوات مفصلة وقابلة للتنفيذ</span>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <div v-for="(step, index) in formattedSolution" :key="index"
                        class="group/step flex items-start p-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50/50 hover:to-emerald-50/50 transition-all duration-300">
                        <div class="relative ml-4 flex-shrink-0">
                            <!-- رقم الخطوة مع تأثير -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full group-hover/step:scale-125 transition-transform duration-300 opacity-50">
                            </div>
                            <div
                                class="relative w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md shadow-green-200">
                                {{ index + 1 }}
                            </div>
                        </div>
                        <div class="flex-1">
                            <p
                                class="text-gray-700 leading-relaxed font-light group-hover/step:text-gray-800 transition-colors duration-300">
                                {{ step }}
                            </p>
                        </div>
                        <div class="mr-4 opacity-0 group-hover/step:opacity-100 transition-opacity duration-300">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- معلومات الحل -->
                <div class="mt-8 pt-6 border-t border-gray-200/50">
                    <div class="flex flex-wrap items-center gap-4">
                        <div
                            class="flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                            <div
                                class="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center ml-3">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <div class="text-sm text-gray-500">وقت التنفيذ</div>
                                <div class="font-medium text-green-700">15-30 دقيقة</div>
                            </div>
                        </div>

                        <div
                            class="flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                            <div
                                class="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center ml-3">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <div class="text-sm text-gray-500">فعالية الحل</div>
                                <div class="font-medium text-green-700">95% نسبة نجاح</div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 flex items-center justify-between pt-6 border-t border-gray-200/50">
                        <div class="flex items-center space-x-3 space-x-reverse">
                            <div class="flex items-center space-x-1 space-x-reverse">
                                <div v-for="i in 5" :key="i"
                                    class="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400"></div>
                            </div>
                            <span class="text-sm text-gray-600">حل مجرب ومضمون</span>
                        </div>

                        <button @click="copySolution"
                            class="group/copy flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:shadow-lg hover:shadow-green-200 transition-all duration-300 hover:-translate-y-0.5">
                            <svg class="w-5 h-5 ml-2 group-hover/copy:scale-110 transition-transform" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            نسخ الحل
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ProblemSolution } from '../data/problems';

const props = defineProps<{
    problem: ProblemSolution;
}>();

const formattedSolution = computed(() => {
    return props.problem.solution.split('\n').filter(step => step.trim());
});

const copySolution = async () => {
    const solutionText = formattedSolution.value.join('\n• ');
    const textToCopy = `💡 حل مشكلة "${props.problem.problem}"\n\n• ${solutionText}\n\nمن موقع تميمة الحلول`;

    try {
        await navigator.clipboard.writeText(textToCopy);
        alert('✅ تم نسخ الحل إلى الحافظة!');
    } catch (error) {
        console.error('Failed to copy:', error);
        alert('❌ تعذر نسخ الحل، حاول مرة أخرى');
    }
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