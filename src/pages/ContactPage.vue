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
                                    <span class="text-xl text-white">📞</span>
                                </div>
                            </div>
                            <div>
                                <h1 class="text-xl font-bold text-gray-900">تواصل معنا</h1>
                                <p class="text-sm text-gray-600 mt-1">نحن هنا لمساعدتك في أي وقت</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- محتوى صفحة التواصل -->
        <main class="container mx-auto px-4 py-8">
            <div class="max-w-6xl mx-auto">
                <!-- معلومات التواصل -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <!-- البريد الإلكتروني -->
                    <div
                        class="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl shadow-gray-100/50 border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-1">
                        <!-- تأثير خلفي -->
                        <div
                            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700">
                        </div>

                        <div class="relative z-10">
                            <div class="flex items-center mb-6">
                                <div class="relative mr-4">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-xl -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                    </div>
                                    <div
                                        class="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                                        <span class="text-2xl text-white">📧</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900">البريد الإلكتروني</h3>
                                    <p class="text-sm text-gray-600 mt-1">للتواصل المباشر والاستفسارات</p>
                                </div>
                            </div>
                            <a href="mailto:tamimaqueen111@gmail.com"
                                class="group/link block text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 border border-blue-100 hover:border-blue-300">
                                <span
                                    class="group-hover/link:text-blue-800 transition-colors">tamimaqueen111@gmail.com</span>
                                <svg class="w-5 h-5 inline-block mr-2 text-blue-500 group-hover/link:translate-x-1 transition-transform"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- الانستقرام -->
                    <div
                        class="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl shadow-gray-100/50 border border-gray-100 hover:border-pink-200 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-100/50 hover:-translate-y-1">
                        <!-- تأثير خلفي -->
                        <div
                            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-100/30 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700">
                        </div>

                        <div class="relative z-10">
                            <div class="flex items-center mb-6">
                                <div class="relative mr-4">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-200 rounded-xl -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                    </div>
                                    <div
                                        class="relative w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg shadow-pink-200">
                                        <span class="text-2xl text-white">📱</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900">حساب الانستقرام</h3>
                                    <p class="text-sm text-gray-600 mt-1">تابعنا للحصول على تحديثات يومية</p>
                                </div>
                            </div>
                            <a href="https://instagram.com/tamima_works" target="_blank"
                                class="group/link block text-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700 rounded-xl font-medium hover:shadow-lg hover:shadow-pink-100 transition-all duration-300 border border-pink-100 hover:border-pink-300">
                                <span class="group-hover/link:text-pink-800 transition-colors">@tamima_works</span>
                                <svg class="w-5 h-5 inline-block mr-2 text-pink-500 group-hover/link:translate-x-1 transition-transform"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- نموذج التواصل -->
                <div
                    class="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl shadow-gray-100/50 p-8 mb-12 border border-gray-100">
                    <!-- تأثير خلفي -->
                    <div
                        class="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary-100/20 to-secondary-100/20 rounded-full -translate-x-16 -translate-y-16">
                    </div>

                    <div class="relative z-10">
                        <div class="text-center mb-10">
                            <h2 class="text-3xl font-bold text-gray-900 mb-3">أرسل رسالة مباشرة</h2>
                            <p class="text-gray-600 text-lg">سنرد عليك في أقرب وقت ممكن</p>
                        </div>

                        <form @submit.prevent="submitForm" class="space-y-8">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="group">
                                    <label class="block text-gray-700 mb-3 text-right font-medium">الاسم الكامل</label>
                                    <input v-model="form.name" type="text" required
                                        class="w-full px-5 py-4 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-primary-500/30 focus:border-transparent text-gray-800 text-right placeholder-gray-500 transition-all duration-300 group-hover:shadow-md group-hover:border-primary-300"
                                        placeholder="أدخل اسمك" />
                                </div>

                                <div class="group">
                                    <label class="block text-gray-700 mb-3 text-right font-medium">البريد
                                        الإلكتروني</label>
                                    <input v-model="form.email" type="email" required
                                        class="w-full px-5 py-4 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-primary-500/30 focus:border-transparent text-gray-800 text-right placeholder-gray-500 transition-all duration-300 group-hover:shadow-md group-hover:border-primary-300"
                                        placeholder="أدخل بريدك الإلكتروني" />
                                </div>
                            </div>

                            <div class="group">
                                <label class="block text-gray-700 mb-3 text-right font-medium">نوع الاستفسار</label>
                                <select v-model="form.type"
                                    class="w-full px-5 py-4 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-primary-500/30 focus:border-transparent text-gray-800 text-right transition-all duration-300 group-hover:shadow-md group-hover:border-primary-300">
                                    <option value="service">طلب خدمة</option>
                                    <option value="problem">مشكلة تحتاج حل</option>
                                    <option value="suggestion">اقتراح</option>
                                    <option value="other">أخرى</option>
                                </select>
                            </div>

                            <div class="group">
                                <label class="block text-gray-700 mb-3 text-right font-medium">الرسالة</label>
                                <textarea v-model="form.message" rows="6" required
                                    class="w-full px-5 py-4 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-primary-500/30 focus:border-transparent text-gray-800 text-right placeholder-gray-500 transition-all duration-300 group-hover:shadow-md group-hover:border-primary-300 resize-none"
                                    placeholder="اكتب رسالتك هنا..."></textarea>
                            </div>

                            <button type="submit" :disabled="loading"
                                class="group/btn w-full py-5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-primary-200/50 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                                <span v-if="!loading" class="flex items-center justify-center">
                                    <span class="relative">
                                        <span class="group-hover/btn:opacity-0 transition-opacity duration-300">إرسال
                                            الرسالة</span>
                                        <span
                                            class="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">إرسال
                                            الآن</span>
                                    </span>
                                    <svg class="w-5 h-5 mr-2 group-hover/btn:translate-x-1 transition-transform"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                                <span v-else class="flex items-center justify-center">
                                    <svg class="animate-spin w-5 h-5 mr-2" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    جاري الإرسال...
                                </span>
                            </button>
                        </form>
                    </div>
                </div>

                <!-- معلومات إضافية -->
                <div
                    class="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-2xl shadow-primary-100/50 border border-primary-100">
                    <!-- تأثير خلفي -->
                    <div
                        class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary-200/20 to-transparent rounded-full -translate-y-12 translate-x-12">
                    </div>

                    <div class="relative z-10">
                        <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">ماذا تتوقع بعد التواصل؟</h3>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div
                                class="group text-center p-6 bg-white/80 rounded-2xl hover:bg-white transition-colors duration-300 hover:shadow-lg">
                                <div
                                    class="relative w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span class="text-2xl text-primary-600">⏱️</span>
                                </div>
                                <h4 class="font-bold text-gray-900 mb-2">رد سريع</h4>
                                <p class="text-gray-600 text-sm">خلال 24 ساعة عمل</p>
                            </div>

                            <div
                                class="group text-center p-6 bg-white/80 rounded-2xl hover:bg-white transition-colors duration-300 hover:shadow-lg">
                                <div
                                    class="relative w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span class="text-2xl text-primary-600">💬</span>
                                </div>
                                <h4 class="font-bold text-gray-900 mb-2">متابعة مستمرة</h4>
                                <p class="text-gray-600 text-sm">حتى حل مشكلتك</p>
                            </div>

                            <div
                                class="group text-center p-6 bg-white/80 rounded-2xl hover:bg-white transition-colors duration-300 hover:shadow-lg">
                                <div
                                    class="relative w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span class="text-2xl text-primary-600">✅</span>
                                </div>
                                <h4 class="font-bold text-gray-900 mb-2">حل عملي</h4>
                                <p class="text-gray-600 text-sm">جاهز للتنفيذ فوراً</p>
                            </div>
                        </div>

                        <div class="mt-8 pt-8 border-t border-primary-200/50 text-center">
                            <p class="text-gray-700">لديك استفسار عاجل؟ يمكنك التواصل مباشرة على الانستقرام</p>
                            <a href="https://instagram.com/tamima_works" target="_blank"
                                class="inline-flex items-center mt-4 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:shadow-lg hover:shadow-primary-200 transition-all duration-300">
                                <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                تواصل على الانستقرام
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface ContactForm {
    name: string;
    email: string;
    type: string;
    message: string;
}

const form = ref<ContactForm>({
    name: '',
    email: '',
    type: 'service',
    message: ''
});

const loading = ref(false);

const submitForm = () => {
    loading.value = true;

    // محاكاة إرسال النموذج
    setTimeout(() => {
        alert(`شكراً ${form.value.name}، تم استلام رسالتك بنجاح! سنتواصل معك قريباً على ${form.value.email}`);
        form.value = { name: '', email: '', type: 'service', message: '' };
        loading.value = false;
    }, 1500);
};
</script>

<style scoped>
.animate-spin {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>