<template>
    <div
        class="daily-tip-container relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl shadow-gray-100/50 overflow-hidden">
        <!-- تأثيرات خلفية دائرية -->
        <div
            class="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 rounded-full blur-2xl">
        </div>
        <div
            class="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-secondary-100/20 to-primary-100/20 rounded-full blur-2xl">
        </div>

        <!-- شريط العنوان المحسن -->
        <div class="flex items-center justify-between mb-8 relative z-10">
            <div class="flex items-center">
                <div class="relative mr-4">
                    <!-- تأثير دائري متحرك -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl animate-pulse-slow">
                    </div>
                    <div
                        class="relative w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-200">
                        <span class="text-2xl text-white">💎</span>
                    </div>
                </div>
                <div>
                    <div class="flex items-center space-x-2 space-x-reverse">
                        <h3
                            class="text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            كنز اليوم
                        </h3>
                        <span v-if="currentTip"
                            class="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-xs font-medium rounded-full">
                            {{ currentTip.category }}
                        </span>
                    </div>
                    <div v-if="currentTip" class="text-sm text-gray-500 mt-1 flex items-center">
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ currentTip.date }}
                    </div>
                </div>
            </div>

            <!-- أزرار التحكم المحسنة -->
            <div class="flex items-center space-x-2 space-x-reverse">
                <button @click="shareTip"
                    class="group p-2.5 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary-100 transition-all duration-300 hover:-translate-y-0.5"
                    title="مشاركة الحكمة">
                    <svg class="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors duration-300"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                </button>
                <button @click="favoriteTip"
                    class="group p-2.5 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-lg hover:shadow-secondary-100 transition-all duration-300 hover:-translate-y-0.5"
                    title="حفظ النصيحة">
                    <svg class="w-5 h-5 text-gray-600 group-hover:text-secondary-600 transition-colors duration-300"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- بطاقة النصيحة المحسنة -->
        <div v-if="currentTip"
            class="relative mb-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100/50 group hover:border-primary-100 transition-all duration-500">
            <!-- زخرفة زاوية -->
            <div class="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                <div
                    class="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 transform -translate-x-8 -translate-y-8 rotate-45">
                </div>
            </div>

            <div class="relative z-10">
                <div
                    class="text-gray-700 leading-relaxed text-right text-lg font-light mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    "{{ currentTip.tip }}"
                </div>

                <!-- مؤشرات النصيحة -->
                <div class="flex items-center justify-between mt-6 pt-4 border-t border-gray-100/50">
                    <div class="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>دقيقة قراءة</span>
                    </div>
                    <div class="flex items-center space-x-1 space-x-reverse">
                        <div v-for="i in 5" :key="i"
                            class="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-300 to-secondary-300 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="relative mb-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center">
            <div
                class="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span class="text-3xl">📭</span>
            </div>
            <p class="text-gray-600">جاري تحميل النصائح...</p>
            <p class="text-sm text-gray-500 mt-2">سيتم عرض النصيحة قريباً</p>
        </div>

        <!-- أدوات التنقل المحسنة -->
        <div class="relative z-10 flex items-center justify-between">
            <button @click="prevTip"
                class="flex items-center px-5 py-2.5 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg hover:shadow-primary-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                :disabled="currentIndex === 0">
                <svg class="w-5 h-5 text-gray-600 group-hover:text-primary-600 group-hover:scale-110 transition-all duration-300 ml-2"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span class="text-gray-700 group-hover:text-primary-700 transition-colors duration-300">السابقة</span>
            </button>

            <!-- المؤشر التفاعلي -->
            <div class="flex items-center space-x-2 space-x-reverse">
                <div v-for="(tip, index) in visibleTips" :key="tip.id" @click="goToTip(index + startIndex)"
                    class="w-2 h-2 rounded-full cursor-pointer transition-all duration-300" :class="{
                        'bg-gradient-to-r from-primary-500 to-secondary-500 w-6': index + startIndex === currentIndex,
                        'bg-gray-300 hover:bg-gray-400': index + startIndex !== currentIndex
                    }">
                </div>
            </div>

            <button @click="nextTip"
                class="flex items-center px-5 py-2.5 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg hover:shadow-primary-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                :disabled="currentIndex === totalTips - 1">
                <span class="text-gray-700 group-hover:text-primary-700 transition-colors duration-300">التالية</span>
                <svg class="w-5 h-5 text-gray-600 group-hover:text-primary-600 group-hover:scale-110 transition-all duration-300 mr-2"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>

        <!-- العداد -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
            {{ currentIndex + 1 }} / {{ totalTips }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue';
import type { DailyTip } from '../data/dailyTips';

const props = defineProps<{
    tips: DailyTip[];
}>();

const currentIndex = ref(0);
const favoriteTips = ref<Set<number>>(new Set());
let interval: ReturnType<typeof setInterval> | null = null;

const currentTip = computed(() => {
    if (props.tips.length === 0) return null;
    if (currentIndex.value >= 0 && currentIndex.value < props.tips.length) {
        return props.tips[currentIndex.value];
    }
    return props.tips[0] || null;
});

const totalTips = computed(() => props.tips.length);

const visibleTips = computed(() => {
    const maxVisible = 5;
    const start = Math.max(0, Math.min(currentIndex.value - 2, props.tips.length - maxVisible));
    const end = Math.min(start + maxVisible, props.tips.length);
    return props.tips.slice(start, end);
});

const startIndex = computed(() => {
    const firstVisibleTip = visibleTips.value[0];
    return firstVisibleTip ? props.tips.indexOf(firstVisibleTip) : 0;
});

const nextTip = () => {
    if (currentIndex.value < props.tips.length - 1) {
        currentIndex.value++;
    }
};

const prevTip = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    }
};

const goToTip = (index: number) => {
    if (index >= 0 && index < props.tips.length) {
        currentIndex.value = index;
    }
};

const shareTip = async () => {
    const tip = currentTip.value;
    if (!tip) return;

    const text = `💎 كنز اليوم من تميمة الحلول\n\n"${tip.tip}"\n\n📅 ${tip.date}\n📍 ${tip.category}\n\nموقع حلول تميمة`;

    try {
        if (navigator.share) {
            await navigator.share({
                title: `نصيحة ${tip.date}`,
                text: text,
                url: window.location.href
            });
        } else {
            await navigator.clipboard.writeText(text);
            alert('✨ تم نسخ النصيحة إلى الحافظة!');
        }
    } catch (error) {
        console.error('Error sharing:', error);
    }
};

const favoriteTip = () => {
    if (favoriteTips.value.has(currentIndex.value)) {
        favoriteTips.value.delete(currentIndex.value);
    } else {
        favoriteTips.value.add(currentIndex.value);
    }
};

// تغيير تلقائي للنصائح كل 30 ثانية
watch(() => props.tips, () => {
    if (props.tips.length > 0) {
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(() => {
            nextTip();
        }, 30000);
    }
}, { immediate: true });

// تنظيف المؤقت عند تدمير المكون
onUnmounted(() => {
    if (interval) {
        clearInterval(interval);
    }
});
</script>

<style scoped>
@keyframes pulse-slow {

    0%,
    100% {
        opacity: 0.5;
    }

    50% {
        opacity: 0.8;
    }
}

.animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
}

.daily-tip-container {
    border: 1px solid rgba(241, 240, 249, 0.8);
    background: linear-gradient(135deg, #ffffff 0%, #fefefe 50%, #f9f7fe 100%);
}

.daily-tip-container:hover {
    border-color: rgba(211, 198, 245, 0.5);
}
</style>