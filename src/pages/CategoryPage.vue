<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <!-- الهيدر المحسن -->
        <header class="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <router-link to="/"
                            class="group flex items-center px-4 py-2 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-md hover:shadow-primary-100 transition-all duration-300 mr-4">
                            <svg class="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors ml-2"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span class="text-gray-700 group-hover:text-primary-700 transition-colors">العودة
                                للرئيسية</span>
                        </router-link>

                        <div class="flex items-center">
                            <div class="relative mr-4">
                                <div
                                    class="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-xl -rotate-3">
                                </div>
                                <div
                                    class="relative w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-200">
                                    <span class="text-xl text-white">{{ category?.icon }}</span>
                                </div>
                            </div>
                            <div>
                                <h1 class="text-xl font-bold text-gray-900">{{ category?.title }}</h1>
                                <p class="text-sm text-gray-600 mt-1">{{ category?.description }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-96">
                        <SearchBar @select="handleSearchSelect" />
                    </div>
                </div>
            </div>
        </header>

        <!-- محتوى القسم -->
        <main class="container mx-auto px-4 py-8">
            <!-- معلومات القسم المحسنة -->
            <div
                class="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl shadow-gray-100/50 p-8 mb-8 border border-gray-100">
                <!-- تأثير خلفي -->
                <div
                    class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary-100/20 to-transparent rounded-full -translate-y-12 translate-x-12">
                </div>

                <div class="relative z-10 flex items-center justify-between">
                    <div class="flex-1">
                        <h2 class="text-3xl font-bold text-gray-900 mb-3">
                            <span class="relative">
                                <span class="relative z-10">حلول عملية</span>
                                <span
                                    class="absolute bottom-1 right-0 w-full h-3 bg-gradient-to-r from-primary-200 to-secondary-200 -rotate-1"></span>
                            </span>
                            <br>جاهزة للتنفيذ
                        </h2>
                        <p class="text-gray-600 text-lg">اختر مشكلة لعرض الحل العملي والمباشر لها</p>
                    </div>
                    <div class="flex flex-col items-end">
                        <div
                            class="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-xl shadow-lg shadow-primary-200">
                            {{ filteredProblems.length }} حل
                        </div>
                        <p class="text-sm text-gray-500 mt-2">متاح حالياً</p>
                    </div>
                </div>
            </div>

            <!-- قائمة المشاكل والحلول -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- قائمة المشاكل المحسنة -->
                <div
                    class="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl shadow-gray-100/50 p-6 border border-gray-100">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-xl font-bold text-gray-900">المشاكل الشائعة</h3>
                        <span class="text-sm text-gray-500">اضغط لعرض الحل</span>
                    </div>

                    <div class="space-y-3 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
                        <button v-for="problem in filteredProblems" :key="problem.id" @click="selectedProblem = problem"
                            class="group w-full text-right p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300 relative overflow-hidden"
                            :class="{ 'border-primary-400 bg-gradient-to-r from-primary-50 to-secondary-50': selectedProblem?.id === problem.id }">
                            <!-- تأثير خلفي عند التحديد -->
                            <div v-if="selectedProblem?.id === problem.id"
                                class="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5"></div>

                            <div class="relative z-10">
                                <div class="flex items-center justify-between mb-3">
                                    <div class="flex items-center space-x-2 space-x-reverse">
                                        <span v-for="tag in problem.tags.slice(0, 2)" :key="tag"
                                            class="inline-flex items-center px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-600 text-xs rounded-full">
                                            <span
                                                class="w-1.5 h-1.5 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full ml-2"></span>
                                            #{{ tag }}
                                        </span>
                                        <span v-if="problem.tags.length > 2" class="text-xs text-gray-400">+{{
                                            problem.tags.length - 2 }}</span>
                                    </div>
                                    <div class="flex items-center">
                                        <svg class="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                <h4
                                    class="font-bold text-gray-800 text-lg mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
                                    {{ problem.problem }}
                                </h4>

                                <div class="flex items-center justify-between text-sm text-gray-500">
                                    <div class="flex items-center">
                                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>دقيقة قراءة</span>
                                    </div>
                                    <span
                                        class="text-xs px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full">
                                        حل مجرب
                                    </span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- عرض المشكلة والحل -->
                <div>
                    <transition name="fade" mode="out-in">
                        <div v-if="selectedProblem" key="problem-details">
                            <ProblemSolutionCard :problem="selectedProblem" />

                            <!-- أدوات المشاركة المحسنة -->
                            <div
                                class="mt-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl shadow-gray-100/50 p-6 border border-gray-100">
                                <div class="flex items-center justify-between mb-6">
                                    <div class="flex items-center">
                                        <div
                                            class="w-10 h-10 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center ml-3">
                                            <span class="text-lg text-primary-600">📤</span>
                                        </div>
                                        <h4 class="text-lg font-bold text-gray-900">شارك هذا الحل</h4>
                                    </div>
                                    <span class="text-sm text-gray-500">ساعد الآخرين</span>
                                </div>

                                <div class="grid grid-cols-2 gap-4">
                                    <button @click="shareSolution('whatsapp')"
                                        class="group flex items-center justify-center p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-green-200/50 transition-all duration-300 hover:-translate-y-0.5">
                                        <svg class="w-5 h-5 ml-2 group-hover:scale-110 transition-transform"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                                        </svg>
                                        <span class="group-hover:scale-105 transition-transform">الواتساب</span>
                                    </button>

                                    <button @click="shareSolution('copy')"
                                        class="group flex items-center justify-center p-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-primary-200/50 transition-all duration-300 hover:-translate-y-0.5">
                                        <svg class="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                        <span class="group-hover:scale-105 transition-transform">نسخ الحل</span>
                                    </button>
                                </div>

                                <div class="mt-6 pt-6 border-t border-gray-200/50">
                                    <div class="flex items-center justify-center space-x-4 space-x-reverse">
                                        <button @click="saveToFavorites"
                                            class="flex items-center px-4 py-2 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-md transition-all duration-300 group">
                                            <svg class="w-5 h-5 text-gray-500 group-hover:text-secondary-600 transition-colors"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                            </svg>
                                            <span class="text-gray-600 group-hover:text-gray-800 mr-2">حفظ في
                                                المفضلة</span>
                                        </button>

                                        <button @click="printSolution"
                                            class="flex items-center px-4 py-2 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-md transition-all duration-300 group">
                                            <svg class="w-5 h-5 text-gray-500 group-hover:text-primary-600 transition-colors"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                            </svg>
                                            <span class="text-gray-600 group-hover:text-gray-800 mr-2">طباعة الحل</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-else key="no-problem-selected"
                            class="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl shadow-gray-100/50 p-12 text-center border border-gray-100">
                            <div
                                class="w-24 h-24 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span class="text-4xl text-primary-600">👈</span>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-3">ابدأ رحلة الحل</h3>
                            <p class="text-gray-600 text-lg mb-6">اختر مشكلة من القائمة لعرض الحل العملي والجاهز لها</p>
                            <div class="flex items-center justify-center space-x-2 space-x-reverse">
                                <div
                                    class="w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-pulse">
                                </div>
                                <div
                                    class="w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-pulse delay-150">
                                </div>
                                <div
                                    class="w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-pulse delay-300">
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SearchBar from '../components/SearchBar.vue';
import ProblemSolutionCard from '../components/ProblemSolutionCard.vue';
import { categories } from '../data/categories';
import { problems, type ProblemSolution } from '../data/problems';

const route = useRoute();
const router = useRouter();

const categoryId = route.params.id as string;
const selectedProblem = ref<ProblemSolution | null>(null);

const category = computed(() => {
    return categories.find(c => c.id === categoryId);
});

const filteredProblems = computed(() => {
    return problems.filter(problem => problem.categoryId === categoryId);
});

onMounted(() => {
    const problemId = route.query.problem as string;

    if (problemId) {
        const problem = filteredProblems.value.find(p => p.id === problemId);
        if (problem) {
            selectedProblem.value = problem;
            return;
        }
    }

    // تحديد المشكلة الأولى بشكل آمن
    const firstProblem = filteredProblems.value[0];
    if (firstProblem) {
        selectedProblem.value = firstProblem;
    } else {
        selectedProblem.value = null;
    }
});

const handleSearchSelect = (result: any) => {
    if (result.categoryId !== categoryId) {
        router.push(`/category/${result.categoryId}?problem=${result.id}`);
    } else {
        const problem = filteredProblems.value.find(p => p.id === result.id);
        if (problem) {
            selectedProblem.value = problem;
        } else {
            // إذا لم يتم العثور على المشكلة، نعود للمشكلة الأولى
            const firstProblem = filteredProblems.value[0];
            selectedProblem.value = firstProblem || null;
        }
    }
};


const shareSolution = (platform: string) => {
    if (!selectedProblem.value) return;

    const text = `🔍 مشكلة:\n${selectedProblem.value.problem}\n\n✨ الحل:\n${selectedProblem.value.solution}\n\nمن موقع تميمة الحلول`;

    if (platform === 'whatsapp') {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    } else if (platform === 'copy') {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('✅ تم نسخ الحل إلى الحافظة!');
            })
            .catch(() => {
                alert('❌ حدث خطأ أثناء نسخ الحل');
            });
    }
};

const saveToFavorites = () => {
    if (!selectedProblem.value) return;

    const favorites = JSON.parse(localStorage.getItem('tamima_favorites') || '[]');
    if (!favorites.includes(selectedProblem.value.id)) {
        favorites.push(selectedProblem.value.id);
        localStorage.setItem('tamima_favorites', JSON.stringify(favorites));
        alert('🌟 تم إضافة الحل إلى المفضلة');
    } else {
        alert('⚠️ هذا الحل موجود بالفعل في المفضلة');
    }
};

const printSolution = () => {
    if (!selectedProblem.value) return;

    const printContent = `
        <div dir="rtl" style="padding: 20px; font-family: Arial, sans-serif;">
            <h1 style="color: #4f46e5;">${selectedProblem.value.problem}</h1>
            <h3 style="color: #666;">الحل العملي:</h3>
            <div style="white-space: pre-line; line-height: 1.6; font-size: 16px;">
                ${selectedProblem.value.solution}
            </div>
            <hr style="margin: 30px 0;">
            <p style="color: #999; text-align: center;">
                تميمة الحلول - حلول عملية لكل مشاكلك اليومية
            </p>
        </div>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    }
};
</script>

<style scoped>
.scrollbar-thin {
    scrollbar-width: thin;
    scrollbar-color: #d3c6f5 transparent;
}

.scrollbar-thin::-webkit-scrollbar {
    width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #9c7ee4, #8a6dcc);
    border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #8a6dcc, #7359a9);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

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