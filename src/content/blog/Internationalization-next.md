---
title: Internationalization i18n in Nextjs project
publishDate: 2024-02-11 00:00:00
img: https://th.bing.com/th/id/OIG1.4Fo_ijzjKtN.BOAqYxIv?pid=ImgGn
img_alt: Internationalization i18n in Nextjs project by sergio campbell dev
description: |
   Internationalization, also known as i18n (short for "internationalization"), is a crucial aspect to reach global audiences in web application development. In this article, we will guide you through the process of integrating internationalization into your Next.js project using the `next-intl` library.
tags:
- JavaScript
- i18n
- Nextjs
- next-intl
---

### Title: Integrating Internationalization (i18n) into your Next.js Project with next-intl

---

Internationalization, also known as i18n (short for "internationalization"), is a crucial aspect to reach global audiences in web application development. In this article, we will guide you through the process of integrating internationalization into your Next.js project using the `next-intl` library.

### What is next-intl?

`next-intl` is a library that facilitates internationalization in Next.js projects. It allows for content translation and management of date, time, and number formats in different languages in a simple and efficient manner.

### Steps to Integrate next-intl into your Next.js Project

#### 1. Installing Dependencies

   To get started, install the necessary dependencies by running the following command in your terminal:

   ```bash
   npm install next-intl
   ```

 and create the following file structure:

  ````bash
 ├── messages (1)
│   ├── en.json
│   └── ...
├── next.config.mjs (2)
└── src
    ├── i18n.ts (3)
    ├── middleware.ts (4)
    └── app
        └── [locale]
            ├── layout.tsx (5)
            └── page.tsx (6)
  ````

#### 2. Configuring next-intl

   In your `next.config.js` file, add the following configuration to enable support for `next-intl`:

   ```javascript
   const { withIntl } = require('next-intl');

   module.exports = withIntl();
   ```

#### 3. Creating Translation Files

   Create translation files for each language you wish to support in your application. For example, you can have files like `en.json` for English and `es.json` for Spanish, located in a directory such as `public/locales`.

   Example:

   ````bash
   {
  "Index": {
    "title": "Hello world!"
    }
    }
   ````

#### 4. Setting up next.config.mjs

Now, set up the plugin which creates an alias to provide your i18n configuration (specified in the next step) to Server Components.

If you're using ECMAScript modules for your Next.js config, you can use the plugin as follows:

```javascript
    import createNextIntlPlugin from 'next-intl/plugin';

    const withNextIntl = createNextIntlPlugin();

    /** @type {import('next').NextConfig} */
    const nextConfig = {};

export default withNextIntl(nextConfig);
```

If you're using CommonJS for your Next.js config, you can use the plugin as follows:

```javascript
    const createNextIntlPlugin = require('next-intl/plugin');

    const withNextIntl = createNextIntlPlugin();

    /** @type {import('next').NextConfig} */
    const nextConfig = {};

    module.exports = withNextIntl(nextConfig);
```

#### 5. Configure i18n.js

next-intl creates a configuration once per request. Here you can provide messages and other options depending on the locale of the user.

```typescript
// src/i18n.ts
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'de'];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
```

**🚨 Can I move this file somewhere else?**

This file is supported out-of-the-box both in the src folder as well as in the project root with the extensions .ts, .tsx, .js and .jsx.

If you prefer to move this file somewhere else, you can provide an optional path to the plugin:

```typescript
const withNextIntl = createNextIntlPlugin(
  // Specify a custom path here
  './somewhere/else/i18n.ts'
);
```

#### 6. Configure middleware.ts

The middleware matches a locale for the request and handles redirects and rewrites accordingly.

```typescript
//src/middleware.ts
import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'de'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*']
};
```

#### 7. Setting up app/[locale]/layout.tsx

   The `locale` that was matched by the middleware is available via the `locale` param and can be used to configure the document language.

   ```javascript
   //app/[locale]/layout.tsx
   export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
   ```

#### 6. Using Translations

   Use translations in your page components or anywhere else!

   ```typescript
   //app/[locale]/page.tsx
   import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('Index');
  return <h1>{t('title')}</h1>;
}
   ```

### Start Internationalizing your Next.js Application Today

With these simple steps, you can easily add internationalization support to your Next.js project using `next-intl`. Now, your application will be ready to reach a global audience and provide a localized and personalized experience.
Don't wait any longer and start internationalizing your application today!

**Remember to follow the documentation for more details**

---

*Sources:*

1. GitHub - Next.js: <https://github.com/vercel/next.js>
2. GitHub - next-intl: <https://github.com/amannn/next-intl>
