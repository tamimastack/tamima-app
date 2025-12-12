<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <!-- الهيدر المحدث -->
        <header class="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div
                            class="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center ml-3 shadow-lg shadow-primary-100">
                            <span class="text-3xl text-white">✨</span>
                        </div>
                        <div class="mr-4">
                            <h1
                                class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                تميمة الحلول</h1>
                            <p class="text-sm text-gray-500 mt-1">حلول ذكية لحياة أسهل</p>
                        </div>
                    </div>
                    <nav class="hidden md:flex items-center space-x-8 space-x-reverse">
                        <router-link to="/daily-tip"
                            class="group relative text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium">
                            <span class="group-hover:scale-105 transition-transform block">النصيحة اليومية</span>
                            <span
                                class="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
                        </router-link>
                        <router-link to="/services"
                            class="group relative text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium">
                            <span class="group-hover:scale-105 transition-transform block">خدمات تميمة</span>
                            <span
                                class="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
                        </router-link>
                        <router-link to="/contact"
                            class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-primary-200 transition-all duration-300 hover:-translate-y-0.5 font-medium">
                            تواصل معنا
                        </router-link>
                    </nav>
                    <button class="md:hidden text-gray-700">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>

        <!-- محتوى الصفحة الرئيسية -->
        <main class="container mx-auto px-4 py-8">
            <!-- شريط البحث المحسن -->
            <div class="mb-16">
                <div class="text-center mb-10">
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        ابحث عن حل
                        <span class="relative">
                            <span class="relative z-10">لمشكلتك</span>
                            <span
                                class="absolute bottom-2 right-0 w-full h-3 bg-gradient-to-r from-primary-200 to-secondary-200 -rotate-1"></span>
                        </span>
                    </h1>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">آلاف الحلول العملية لمختلف المشاكل اليومية، كل ما
                        تحتاجه في مكان واحد</p>
                </div>
                <div class="max-w-3xl mx-auto">
                    <SearchBar @select="handleSearchSelect" />
                </div>
            </div>

            <!-- أقسام المشاكل -->
            <section class="mb-20">
                <div class="flex items-center justify-between mb-10">
                    <div>
                        <h2 class="text-3xl font-bold text-gray-900">أقسام المشاكل</h2>
                        <p class="text-gray-600 mt-2">اختر القسم الذي يناسب مشكلتك</p>
                    </div>
                    <div
                        class="flex items-center bg-gradient-to-r from-primary-50 to-secondary-50 px-4 py-2 rounded-full">
                        <span class="text-primary-700 font-bold text-lg">{{ totalProblems }}</span>
                        <span class="text-gray-600 mr-2">حل متاح</span>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <CategoryCard v-for="category in categories" :key="category.id" :category="category"
                        :problems-count="getProblemsCount(category.id)" @click="goToCategory(category.id)" />
                </div>
            </section>

            <!-- النصيحة اليومية -->
            <section class="mb-20">
                <div class="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-1 shadow-xl shadow-gray-100">
                    <div class="bg-white rounded-3xl p-8">
                        <div class="flex items-center justify-between mb-8">
                            <div class="flex items-center">
                                <div
                                    class="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center ml-4">
                                    <span class="text-xl text-primary-600">💡</span>
                                </div>
                                <div>
                                    <h2 class="text-2xl font-bold text-gray-900">نصيحة اليوم</h2>
                                    <p class="text-gray-600">حكمة يومية لتحسين حياتك</p>
                                </div>
                            </div>
                            <div class="text-gray-400 text-sm">
                                {{ new Date().toLocaleDateString('ar-SA') }}
                            </div>
                        </div>
                        <DailyTip :tips="dailyTips" />
                    </div>
                </div>
            </section>

            <!-- خدمات تميمة -->
            <section class="mb-20">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-900 mb-3">خدمات تميمة المميزة</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">نقدم لك خدمات احترافية تساهم في حل مشاكلك بطرق مبتكرة
                        واحترافية</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard v-for="(service, index) in featuredServices" :key="service.id" :service="service"
                        :index="index" />
                </div>

                <div class="text-center mt-12">
                    <router-link to="/services"
                        class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:shadow-xl hover:shadow-primary-200 transition-all duration-300 hover:-translate-y-1 font-medium">
                        اكتشف جميع الخدمات
                        <svg class="w-5 h-5 mr-3 transform group-hover:translate-x-2 transition-transform" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </router-link>
                </div>
            </section>
        </main>

        <!-- الفوتر المحدث -->
        <footer class="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
            <div class="container mx-auto px-4 py-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div class="md:col-span-2">
                        <div class="flex items-start mb-6">
                            <div
                                class="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center ml-3 shadow-lg shadow-primary-100">
                                <span class="text-2xl text-white">✨</span>
                            </div>
                            <div class="mr-4">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">تميمة الحلول</h3>
                                <p class="text-gray-600 leading-relaxed">منصة عربية تقدم حلول عملية ومبتكرة للمشاكل
                                    اليومية، نهدف لجعل حياتك أسهل وأفضل.</p>
                            </div>
                        </div>
                        <div class="flex space-x-4 space-x-reverse">
                            <a href="https://instagram.com/tamima_works" target="_blank"
                                class="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-primary-50 hover:text-primary-600 transition-all duration-300">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com/tamima_works" target="_blank"
                                class="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-primary-50 hover:text-primary-600 transition-all duration-300">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 mb-6 text-lg">روابط سريعة</h4>
                        <ul class="space-y-3">
                            <li><router-link to="/daily-tip"
                                    class="text-gray-600 hover:text-primary-600 transition-colors">النصيحة
                                    اليومية</router-link></li>
                            <li><router-link to="/services"
                                    class="text-gray-600 hover:text-primary-600 transition-colors">خدمات
                                    تميمة</router-link></li>
                            <li><router-link to="/contact"
                                    class="text-gray-600 hover:text-primary-600 transition-colors">تواصل
                                    معنا</router-link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 mb-6 text-lg">القائمة البريدية</h4>
                        <p class="text-gray-600 mb-4">اشترك للحصول على أحدث الحلول والنصائح</p>
                        <div class="flex">
                            <input type="email" placeholder="بريدك الإلكتروني"
                                class="flex-1 bg-gray-100 rounded-r-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500">
                            <button
                                class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 rounded-l-xl hover:opacity-90 transition-opacity">
                                اشتراك
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
                    <p>© 2024 تميمة الحلول. جميع الحقوق محفوظة.</p>
                    <p class="mt-2 text-xs">صمم بعناية لتسهيل حياتك اليومية</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import CategoryCard from '../components/CategoryCard.vue';
import SearchBar from '../components/SearchBar.vue';
import DailyTip from '../components/DailyTip.vue';
import ServiceCard from '../components/ServiceCard.vue';
import { categories } from '../data/categories';
import { problems } from '../data/problems';
import { dailyTips } from '../data/dailyTips';
import { services } from '../data/services';

const router = useRouter();

const totalProblems = computed(() => problems.length);

const featuredServices = computed(() => services.slice(0, 3));

const getProblemsCount = (categoryId: string) => {
    return problems.filter(problem => problem.categoryId === categoryId).length;
};

const goToCategory = (categoryId: string) => {
    router.push(`/category/${categoryId}`);
};

const handleSearchSelect = (result: any) => {
    router.push(`/category/${result.categoryId}?problem=${result.id}`);
};
</script>