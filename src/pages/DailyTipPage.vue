<template>
    <div class="min-h-screen bg-background">
        <!-- الهيدر -->
        <header class="bg-white shadow-sm">
            <div class="container mx-auto px-4 py-6">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <router-link to="/"
                            class="flex items-center text-gray-600 hover:text-primary-600 transition-colors mr-4">
                            <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7" />
                            </svg>
                            العودة
                        </router-link>
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center ml-3">
                                <span class="text-xl text-primary-600">💡</span>
                            </div>
                            <div>
                                <h1 class="text-xl font-bold text-gray-900">النصيحة اليومية</h1>
                                <p class="text-sm text-gray-600">نصيحة يومية قصيرة لتطوير حياتك</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- محتوى صفحة النصائح -->
        <main class="container mx-auto px-4 py-8">
            <div class="max-w-4xl mx-auto">
                <!-- النصيحة الرئيسية -->
                <div class="mb-12">
                    <DailyTip :tips="dailyTips" />
                </div>

                <!-- جميع النصائح -->
                <div class="bg-white rounded-xl shadow-card p-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-6">مجموعة النصائح</h2>

                    <div class="space-y-6">
                        <div v-for="tip in dailyTips" :key="tip.id"
                            class="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary-200 transition-colors">
                            <div class="flex items-center justify-between mb-4">
                                <div class="flex items-center">
                                    <span
                                        class="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                                        {{ tip.category }}
                                    </span>
                                    <span class="mr-3 text-gray-500 text-sm">{{ tip.date }}</span>
                                </div>
                                <button @click="shareTip(tip)" class="p-2 hover:bg-white rounded-lg transition-colors">
                                    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                </button>
                            </div>
                            <p class="text-gray-700 leading-relaxed text-lg">{{ tip.tip }}</p>
                        </div>
                    </div>
                </div>

                <!-- اشتراك في النصائح -->
                <div class="mt-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl p-8 text-white">
                    <div class="text-center">
                        <h3 class="text-2xl font-bold mb-4">هل تريد نصائح يومية في بريدك؟</h3>
                        <p class="mb-6 opacity-90">سجل بريدك الإلكتروني لتصلك النصائح اليومية مباشرة</p>

                        <div class="max-w-md mx-auto">
                            <div class="flex">
                                <input v-model="email" type="email" placeholder="بريدك الإلكتروني"
                                    class="flex-1 px-4 py-3 rounded-r-xl text-gray-800 focus:outline-none" />
                                <button @click="subscribe"
                                    class="px-6 py-3 bg-white text-primary-600 font-medium rounded-l-xl hover:bg-gray-100 transition-colors">
                                    اشتراك
                                </button>
                            </div>
                            <p class="text-sm opacity-80 mt-3">لن نرسل أي بريد مزعج لك</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DailyTip from '../components/DailyTip.vue';
import { dailyTips } from '../data/dailyTips';

const email = ref('');

const shareTip = (tip: any) => {
    const text = `نصيحة ${tip.date} من تميمة:\n${tip.tip}\n\nموقع تميمة الحلول`;

    if (navigator.share) {
        navigator.share({
            title: `نصيحة ${tip.date}`,
            text: text
        });
    } else {
        navigator.clipboard.writeText(text);
        alert('تم نسخ النصيحة إلى الحافظة!');
    }
};

const subscribe = () => {
    if (!email.value.trim()) {
        alert('الرجاء إدخال بريد إلكتروني صحيح');
        return;
    }

    alert(`شكراً لتسجيلك ${email.value}! ستصل النصائح يومياً إلى بريدك.`);
    email.value = '';
};
</script>