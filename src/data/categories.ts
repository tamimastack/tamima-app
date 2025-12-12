export interface Category {
    id: string;
    title: string;
    icon: string;
    description: string;
    color: string;
}

export const categories: Category[] = [
    {
        id: 'work',
        title: 'مشاكل العمل',
        icon: '💼',
        description: 'حلول لمشاكل العمل والبيئة المهنية',
        color: 'bg-primary-100'
    },
    {
        id: 'study',
        title: 'مشاكل الدراسة',
        icon: '📚',
        description: 'حلول للتحديات الدراسية والأكاديمية',
        color: 'bg-blue-50'
    },
    {
        id: 'technical',
        title: 'مشاكل التقنية',
        icon: '💻',
        description: 'حلول للمشاكل التقنية والتكنولوجية',
        color: 'bg-purple-50'
    },
    {
        id: 'papers',
        title: 'مشاكل الأوراق والمعاملات',
        icon: '📄',
        description: 'تبسيط الإجراءات والمعاملات الرسمية',
        color: 'bg-green-50'
    },
    {
        id: 'daily-life',
        title: 'مشاكل الحياة اليومية',
        icon: '🏠',
        description: 'حلول للمشاكل اليومية المعتادة',
        color: 'bg-yellow-50'
    },
    {
        id: 'content-design',
        title: 'مشاكل المحتوى والتصميم',
        icon: '🎨',
        description: 'حلول لإبداع المحتوى والتصميم',
        color: 'bg-pink-50'
    },
    {
        id: 'projects',
        title: 'مشاكل المشاريع الصغيرة',
        icon: '🚀',
        description: 'إدارة وتنفيذ المشاريع الصغيرة',
        color: 'bg-indigo-50'
    },
    {
        id: 'communication',
        title: 'مشاكل التواصل والرسائل',
        icon: '📱',
        description: 'حلول لتحديات التواصل الفعال',
        color: 'bg-teal-50'
    },
    {
        id: 'marketing',
        title: 'مشاكل التسويق',
        icon: '📈',
        description: 'استراتيجيات وحلول تسويقية',
        color: 'bg-orange-50'
    },
    {
        id: 'time-management',
        title: 'مشاكل تنظيم الوقت',
        icon: '⏰',
        description: 'نصائح وتقنيات لتنظيم الوقت',
        color: 'bg-cyan-50'
    }
];