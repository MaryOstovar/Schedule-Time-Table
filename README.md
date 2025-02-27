# جدول زمان‌بندی فعالیت‌ها

این پروژه یک **جدول زمان‌بندی پویا** است که با استفاده از **React**، **TypeScript** و **Tailwind CSS** ساخته شده است. این جدول زمان‌بندی شامل فعالیت‌ها برای یک هفته آینده است که از API به‌صورت دینامیک بارگذاری می‌شود. همچنین، کاربران می‌توانند جزئیات فعالیت‌ها را مشاهده کنند که در یک **پاپ‌آپ** (Modal) نمایش داده می‌شود.

## ویژگی‌ها

- نمایش **زمان‌بندی** یک هفته آینده به‌صورت **جدولی**.
- **مرتب‌سازی صعودی و نزولی** برای ساعات روز.
- **پاپ‌آپ** برای مشاهده جزئیات هر فعالیت.
- **پشتیبانی از تاریخ شمسی** با استفاده از کتابخانه **`dayjs`**.
- **بارگذاری دینامیک داده‌ها** از یک API (خدمات فعالیت‌ها).


## ساختار پروژه

پروژه از **React** برای رابط کاربری، **TypeScript** برای تایپینگ و **Tailwind CSS** برای استایل‌دهی استفاده می‌کند. همچنین برای مدیریت حالت‌ها از **React Query** و برای کار با تاریخ از **dayjs** استفاده شده است.

- `src/`: دایرکتوری حاوی کدهای منبع.
  - `components/`: شامل کامپوننت‌های مختلف مانند جدول زمان‌بندی و پاپ‌آپ (Modal).
  - `hooks/`: هوک‌های سفارشی React.
  - `services/`: فایل‌های مربوط به API و داده‌ها.
  - `helpers/`: توابع کمکی و ابزارهای استفاده‌شده در پروژه.



## تکنولوژی‌ها و کتابخانه‌ها

- **React**: برای ایجاد رابط کاربری.
- **TypeScript**: برای افزودن تایپ استاتیک به کد.
- **Tailwind CSS**: برای استایل‌دهی سریع و واکنش‌گرا.
- **React Query**: برای مدیریت داده‌ها و درخواست‌های API.
- **dayjs**: برای کار با تاریخ‌ها و تبدیل آن‌ها به تقویم شمسی.


