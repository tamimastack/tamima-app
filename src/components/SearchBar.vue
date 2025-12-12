<template>
    <div class="relative w-full">
        <!-- شريط البحث مع تدرج وتأثيرات -->
        <div class="relative group">
            <!-- تأثير خلفي متحرك -->
            <div
                class="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500">
            </div>

            <div class="relative">
                <input v-model="searchQuery" type="text" placeholder="ابحث عن حل لمشكلتك اليومية..."
                    class="w-full px-6 py-4 pr-14 bg-gradient-to-r from-white to-gray-50 border border-gray-200/80 rounded-2xl shadow-xl shadow-gray-100 focus:outline-none focus:ring-3 focus:ring-primary-500/30 focus:border-transparent text-gray-800 text-right text-lg placeholder-gray-500 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary-100/50 group-hover:border-primary-300/50"
                    @input="handleSearch" @focus="isFocused = true" @blur="onBlur" />

                <!-- أيقونة البحث -->
                <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <div
                        class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-200 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <!-- زر مسح البحث -->
                <button v-if="searchQuery" @click="clearSearch"
                    class="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    @mousedown.prevent>
                    <svg class="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- مؤشر البحث النشط -->
            <div v-if="searchQuery"
                class="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
            </div>
        </div>

        <!-- نتائج البحث مع تصميم متقدم -->
        <transition name="slide-down">
            <div v-if="searchResults.length > 0 && searchQuery && isFocused"
                class="absolute z-50 w-full mt-4 bg-gradient-to-b from-white to-gray-50/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-gray-200/50 border border-gray-200/50 max-h-[500px] overflow-y-auto scrollbar-thin">
                <!-- رأس النتائج -->
                <div
                    class="sticky top-0 bg-gradient-to-r from-primary-50/80 to-secondary-50/80 backdrop-blur-sm px-6 py-4 border-b border-gray-200/50">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div
                                class="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center ml-3">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-800">نتائج البحث</h3>
                                <p class="text-sm text-gray-600">{{ searchResults.length }} نتيجة مطابقة</p>
                            </div>
                        </div>
                        <button @click="clearAll"
                            class="text-sm text-gray-500 hover:text-primary-600 transition-colors px-3 py-1 hover:bg-white rounded-lg">
                            مسح الكل
                        </button>
                    </div>
                </div>

                <!-- قائمة النتائج -->
                <div class="p-2">
                    <div class="space-y-2">
                        <div v-for="result in searchResults" :key="result.id"
                            class="group relative p-4 hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-secondary-50/50 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                            @click="selectResult(result)" @mouseenter="hoveredResult = result.id"
                            @mouseleave="hoveredResult = null">
                            <!-- تأثير خلفي عند التحويم -->
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>

                            <div class="relative flex items-start space-x-4 space-x-reverse">
                                <!-- أيقونة الفئة -->
                                <div class="relative flex-shrink-0">
                                    <div
                                        class="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <span class="text-lg text-primary-600">{{ getCategoryIcon(result.categoryId)
                                            }}</span>
                                    </div>
                                    <div
                                        class="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                                        <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>

                                <!-- محتوى النتيجة -->
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center justify-between mb-2">
                                        <span
                                            class="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 text-xs font-medium rounded-full">
                                            {{ result.category }}
                                        </span>
                                        <span v-if="isNewResult(result)"
                                            class="text-xs px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full">
                                            جديد
                                        </span>
                                    </div>

                                    <h4
                                        class="font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-primary-700 transition-colors">
                                        {{ result.problem }}
                                    </h4>

                                    <p class="text-sm text-gray-600 mb-3 line-clamp-2">
                                        {{ truncateText(result.solution, 120) }}
                                    </p>

                                    <!-- الوسوم -->
                                    <div class="flex flex-wrap gap-1.5">
                                        <span v-for="(tag, index) in getResultTags(result.id)" :key="index"
                                            class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                                            #{{ tag }}
                                        </span>
                                    </div>
                                </div>

                                <!-- سهم التنقل -->
                                <div
                                    class="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                    <div
                                        class="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <!-- خط فاصل -->
                            <div v-if="hoveredResult !== result.id"
                                class="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent">
                            </div>
                        </div>
                    </div>

                    <!-- تذييل النتائج -->
                    <div v-if="searchResults.length > 5"
                        class="sticky bottom-0 bg-gradient-to-t from-white to-transparent px-6 py-4 border-t border-gray-200/50">
                        <div class="text-center">
                            <p class="text-sm text-gray-500">عرض {{ Math.min(searchResults.length, 10) }} من {{
                                searchResults.length }} نتيجة</p>
                            <button v-if="searchResults.length > 10" @click="loadMore"
                                class="mt-2 text-sm text-primary-600 hover:text-primary-700 font-medium">
                                عرض المزيد من النتائج
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <!-- رسالة عدم وجود نتائج -->
        <transition name="fade">
            <div v-if="searchQuery && searchResults.length === 0 && isFocused"
                class="absolute z-50 w-full mt-4 bg-white rounded-2xl shadow-2xl p-8 text-center border border-gray-200">
                <div
                    class="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span class="text-3xl">🔍</span>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2">لا توجد نتائج</h3>
                <p class="text-gray-600 mb-4">لم نتمكن من العثور على حلول مطابقة لبحثك</p>
                <button @click="clearSearch"
                    class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:shadow-lg transition-all duration-300">
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    مسح البحث
                </button>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { problems } from '../data/problems';
import { categories } from '../data/categories';

interface SearchResult {
    id: string;
    problem: string;
    solution: string;
    category: string;
    categoryId: string;
}

const searchQuery = ref('');
const isFocused = ref(false);
const hoveredResult = ref<string | null>(null);
const displayedResults = ref(10);

const searchResults = computed(() => {
    if (!searchQuery.value.trim()) return [];

    const query = searchQuery.value.toLowerCase();
    const results: SearchResult[] = [];

    problems.forEach(problem => {
        const category = categories.find(c => c.id === problem.categoryId);
        const categoryName = category?.title || '';

        if (
            problem.problem.toLowerCase().includes(query) ||
            problem.solution.toLowerCase().includes(query) ||
            categoryName.toLowerCase().includes(query) ||
            problem.tags.some(tag => tag.toLowerCase().includes(query))
        ) {
            results.push({
                id: problem.id,
                problem: problem.problem,
                solution: problem.solution,
                category: categoryName,
                categoryId: problem.categoryId
            });
        }
    });

    return results.slice(0, displayedResults.value);
});

const emit = defineEmits<{
    search: [query: string];
    select: [result: SearchResult];
}>();

const handleSearch = () => {
    displayedResults.value = 10;
    emit('search', searchQuery.value);
};

const selectResult = (result: SearchResult) => {
    emit('select', result);
    searchQuery.value = '';
    isFocused.value = false;
};

const clearSearch = () => {
    searchQuery.value = '';
    displayedResults.value = 10;
};

const clearAll = () => {
    clearSearch();
    isFocused.value = false;
};

const loadMore = () => {
    displayedResults.value += 10;
};

const onBlur = () => {
    setTimeout(() => {
        isFocused.value = false;
    }, 200);
};

const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category?.icon || '📁';
};

const getResultTags = (problemId: string) => {
    const problem = problems.find(p => p.id === problemId);
    return problem?.tags?.slice(0, 3) || [];
};

const isNewResult = (result: SearchResult) => {
    // يمكن تعديل هذا المنطق بناءً على تاريخ الإضافة أو أي معيار آخر
    return Math.random() > 0.7; // مثال: 30% من النتائج تعتبر جديدة
};

const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

// إغلاق النتائج عند النقر خارج المكون
const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative.w-full')) {
        isFocused.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
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

.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease;
    transform-origin: top center;
}

.slide-down-enter-from,
.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>