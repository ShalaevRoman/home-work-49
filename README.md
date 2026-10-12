# ShopKit

Курсовий проєкт з React та Redux Toolkit — демонстраційний інтернет-магазин. Товари підтягуються з публічного API [Fake Store API](https://fakestoreapi.com), решта функціоналу (кошик, авторизація, замовлення) реалізована на фронтенді з прицілом на подальшу інтеграцію з власним бекендом.

## Можливості

- Перегляд товарів з фільтрацією за категоріями ([Fake Store API](https://fakestoreapi.com))
- Сторінка деталей товару
- Кошик покупок (додавання, зміна кількості, видалення, збереження між сесіями)
- Реєстрація / вхід / вихід
- Оформлення замовлення та історія замовлень (доступні лише авторизованим користувачам)

## Стек

- React 19 + TypeScript
- Redux Toolkit (slices, async thunks) + react-redux
- React Router
- Vite
- axios

## Встановлення та запуск

```bash
npm install
npm run dev
```

Проєкт буде доступний на `http://localhost:5173`.

Інші команди:

```bash
npm run build    # production-збірка
npm run preview  # перегляд production-збірки локально
npm run lint      # перевірка лінтером (oxlint)
```

## Структура проєкту

Архітектура побудована за принципом feature-sliced:

```
src/
├── app/        # Redux store, типізовані хуки
├── components/ # Перевикористовувані UI-компоненти без бізнес-логіки
├── features/   # Функціональні модулі: products, cart, auth, orders
├── layouts/    # Шаблони сторінок (Header + Outlet + Footer)
├── pages/      # Сторінки, що компонують features
├── routes/     # Налаштування роутингу, захищені маршрути
└── services/   # HTTP-клієнт (axios) та робота з localStorage
```

## Посилання на проєкт

- Демо: _буде додано після деплою_
- GitHub: https://github.com/ShalaevRoman/home-work-49
