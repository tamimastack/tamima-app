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
                                <span class="text-xl text-primary-600">⭐</span>
                            </div>
                            <div>
                                <h1 class="text-xl font-bold text-gray-900">خدمات تميمة</h1>
                                <p class="text-sm text-gray-600">خدمات احترافية لحل مشاكلك</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- محتوى صفحة الخدمات -->
        <main class="container mx-auto px-4 py-8">
            <!-- مقدمة -->
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">خدمات تميمة المميزة</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    نقدم مجموعة من الخدمات الاحترافية المصممة خصيصاً لحل مشاكلك اليومية وتعزيز إنتاجيتك
                </p>
            </div>

            <!-- جميع الخدمات -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <ServiceCard v-for="(service, index) in services" :key="service.id" :service="service" :index="index" />
            </div>

            <!-- كيف تعمل الخدمات -->
            <div class="bg-white rounded-xl shadow-card p-8 mb-12">
                <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">كيف تعمل خدمات تميمة؟</h3>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl text-primary-600">1</span>
                        </div>
                        <h4 class="font-bold text-gray-900 mb-2">اختر الخدمة</h4>
                        <p class="text-gray-600 text-sm">اختر الخدمة التي تناسب احتياجاتك من القائمة</p>
                    </div>

                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl text-primary-600">2</span>
                        </div>
                        <h4 class="font-bold text-gray-900 mb-2">تواصل معنا</h4>
                        <p class="text-gray-600 text-sm">اتصل بنا أو راسلنا عبر البريد للتفاصيل</p>
                    </div>

                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl text-primary-600">3</span>
                        </div>
                        <h4 class="font-bold text-gray-900 mb-2">استلم عملك</h4>
                        <p class="text-gray-600 text-sm">استلم عملك في الوقت المتفق عليه بجودة عالية</p>
                    </div>
                </div>
            </div>

            <!-- دعوة للتواصل -->
            <div class="bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl p-8 text-white text-center">
                <h3 class="text-2xl font-bold mb-4">هل تريد خدمة مخصصة؟</h3>
                <p class="mb-6 opacity-90">يمكننا تصميم خدمة خاصة بك حسب احتياجاتك المحددة</p>
                <router-link to="/contact"
                    class="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-medium rounded-xl hover:bg-gray-100 transition-colors">
                    تواصل معنا الآن
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </router-link>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import ServiceCard from '../components/ServiceCard.vue';
import { services } from '../data/services';
</script>