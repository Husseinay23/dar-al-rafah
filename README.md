# دار الرفاه للدراسات والأبحاث (Dar Al Rafah)

منصة تعليمية متخصصة في التكنولوجيا والذكاء الاصطناعي باللغة العربية مع دعم اللغات الإنجليزية والفرنسية.

## 🚀 نظرة عامة

هذا المشروع عبارة عن منصة تعليمية شاملة تتكون من:

- **Backend**: Payload CMS مع دعم الترجمة الكامل (AR/EN/FR)
- **Frontend**: React + TypeScript + Tailwind CSS مع دعم RTL
- **قاعدة البيانات**: PostgreSQL
- **الميزات**: نظام إدارة المحتوى، دورات تدريبية، أخبار، أبحاث علمية

## 📁 هيكل المشروع

```
dar-al-rafah/
├── apps/
│   ├── backend/          # Payload CMS Backend
│   └── frontend/         # React Frontend
├── package.json          # Root package.json
└── README.md
```

## 🛠️ التقنيات المستخدمة

### Backend

- **Payload CMS** - نظام إدارة المحتوى
- **Node.js + Express** - خادم الويب
- **PostgreSQL** - قاعدة البيانات
- **TypeScript** - لغة البرمجة
- **Sharp** - معالجة الصور

### Frontend

- **React 18** - مكتبة واجهة المستخدم
- **TypeScript** - لغة البرمجة
- **Vite** - أداة البناء
- **Tailwind CSS** - إطار عمل CSS
- **React Router** - التوجيه
- **React i18next** - الترجمة
- **Lucide React** - الأيقونات

## 🚀 التثبيت والتشغيل

### المتطلبات الأساسية

- Node.js 18+
- PostgreSQL 13+
- npm أو pnpm

### 1. استنساخ المشروع

```bash
git clone <repository-url>
cd dar-al-rafah
```

### 2. تثبيت التبعيات

```bash
# تثبيت تبعيات المشروع الرئيسي
npm install

# تثبيت تبعيات جميع التطبيقات
npm run install:all
```

### 3. إعداد قاعدة البيانات

```bash
# إنشاء قاعدة بيانات PostgreSQL
createdb dar_al_rafah

# أو باستخدام psql
psql -c "CREATE DATABASE dar_al_rafah;"
```

### 4. إعداد متغيرات البيئة

#### Backend (.env)

```bash
cd apps/backend
cp env.example .env
```

قم بتعديل ملف `.env`:

```env
DATABASE_URI=postgresql://username:password@localhost:5432/dar_al_rafah
PAYLOAD_SECRET=your-secret-key-here
PAYLOAD_PUBLIC_FRONTEND_URL=http://localhost:5173
PORT=4000
NODE_ENV=development
```

#### Frontend (.env)

```bash
cd apps/frontend
cp env.example .env
```

قم بتعديل ملف `.env`:

```env
VITE_API_URL=http://localhost:4000/api
```

### 5. تشغيل المشروع

#### تشغيل جميع التطبيقات

```bash
npm run dev
```

#### تشغيل التطبيقات منفصلة

**Backend:**

```bash
npm run dev:backend
```

**Frontend:**

```bash
npm run dev:frontend
```

### 6. إنشاء المستخدم الأول

1. افتح المتصفح وانتقل إلى: `http://localhost:4000/admin`
2. سجل حساب جديد للمدير
3. استخدم هذا الحساب لإدارة المحتوى

### 7. إضافة البيانات التجريبية

```bash
npm run seed
```

## 📊 البيانات التجريبية

يحتوي المشروع على بيانات تجريبية شاملة تشمل:

- **6 مواضيع** (الذكاء الاصطناعي، التعلم الآلي، البيانات الضخمة، إلخ)
- **2 دورة تدريبية** مع دروس متعددة
- **2 مقال إخباري**
- **2 بحث علمي**
- **محتوى مترجم** بالعربية والإنجليزية والفرنسية

## 🌐 الوصول للتطبيقات

- **Frontend**: http://localhost:5173
- **Backend Admin**: http://localhost:4000/admin
- **API**: http://localhost:4000/api

## 🎨 الميزات الرئيسية

### دعم الترجمة الكامل

- العربية (الافتراضية) مع دعم RTL
- الإنجليزية
- الفرنسية
- تبديل تلقائي للاتجاه (RTL/LTR)

### الوضع المظلم والفاتح

- تبديل سهل بين الأوضاع
- حفظ التفضيلات محلياً

### واجهة مستخدم متجاوبة

- تصميم متجاوب لجميع الأجهزة
- دعم كامل للعربية مع RTL
- خطوط عربية جميلة (Tajawal, Cairo)

### نظام إدارة المحتوى

- إدارة الدورات التدريبية
- إدارة الأخبار والمقالات
- إدارة الأبحاث العلمية
- رفع الملفات (صور، PDFs)

## 📱 الصفحات المتاحة

- **الرئيسية** (`/`) - عرض أحدث المحتوى
- **الدورات** (`/courses`) - قائمة وتفاصيل الدورات
- **الأخبار** (`/news`) - المقالات الإخبارية
- **الأبحاث** (`/research`) - الأبحاث العلمية
- **من نحن** (`/about`) - معلومات عن المنصة
- **اتصل بنا** (`/contact`) - نموذج التواصل

## 🔧 الأوامر المتاحة

```bash
# التطوير
npm run dev                 # تشغيل جميع التطبيقات
npm run dev:backend         # تشغيل Backend فقط
npm run dev:frontend        # تشغيل Frontend فقط

# البناء
npm run build               # بناء جميع التطبيقات
npm run build:backend       # بناء Backend فقط
npm run build:frontend      # بناء Frontend فقط

# الإنتاج
npm run start               # تشغيل جميع التطبيقات (الإنتاج)
npm run start:backend       # تشغيل Backend (الإنتاج)
npm run start:frontend      # تشغيل Frontend (الإنتاج)

# البيانات
npm run seed                # إضافة البيانات التجريبية
```

## 🗄️ هيكل قاعدة البيانات

### المجموعات (Collections)

1. **Users** - المستخدمون والصلاحيات
2. **Topics** - المواضيع والتصنيفات
3. **Media** - الملفات والصور
4. **Courses** - الدورات التدريبية
5. **Lessons** - دروس الدورات
6. **News** - المقالات الإخبارية
7. **Papers** - الأبحاث العلمية

### الترجمة

جميع النصوص قابلة للترجمة وتدعم:

- العربية (ar) - الافتراضية
- الإنجليزية (en)
- الفرنسية (fr)

## 🎯 الاستخدام

### إضافة محتوى جديد

1. سجل دخول إلى لوحة الإدارة: `http://localhost:4000/admin`
2. اختر المجموعة المطلوبة (Courses, News, Papers, etc.)
3. أضف المحتوى باللغة العربية
4. أضف الترجمات للغات الأخرى
5. انشر المحتوى

### تخصيص التصميم

- **الألوان**: عدّل ملف `tailwind.config.js`
- **الخطوط**: عدّل ملف `index.html`
- **المكونات**: عدّل ملفات في `src/components/`

## 🐛 استكشاف الأخطاء

### مشاكل شائعة

1. **خطأ في الاتصال بقاعدة البيانات**

   - تأكد من تشغيل PostgreSQL
   - تحقق من صحة `DATABASE_URI`

2. **خطأ CORS**

   - تأكد من صحة `PAYLOAD_PUBLIC_FRONTEND_URL`

3. **مشاكل في الترجمة**
   - تأكد من تحديث اللغة في المتصفح
   - امسح cache المتصفح

### سجلات الأخطاء

```bash
# Backend logs
cd apps/backend
npm run dev

# Frontend logs
cd apps/frontend
npm run dev
```

## 🤝 المساهمة

1. Fork المشروع
2. أنشئ فرع للميزة الجديدة
3. اعمل التغييرات
4. أرسل Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT.

## 📞 الدعم

للحصول على الدعم:

- البريد الإلكتروني: info@daralrafah.com
- الهاتف: +966 50 123 4567

---

**تم تطويره بـ ❤️ لخدمة المجتمع العربي في مجال التكنولوجيا**
