# FeTakehomeV1

---

```markdown
# 🧪 Angular Take-Home Challenge - Senior Frontend Developer

Thank you for your interest in joining our team! This take-home test is designed to evaluate your Angular skills in a practical way, while giving you space to demonstrate best practices, attention to detail, and your ability to write maintainable and scalable code.

---

## 🛒 Project Overview

You will be working on a **simple e-commerce Angular application**. The app contains:
- A list of products
- A shopping cart

Your task will be to **fix existing bugs** and **implement a few new features**. Some challenges are straightforward, while others are designed to test your architectural thinking and Angular mastery.

P.s: be aware of the version of Angular in this project.

---

## ⏱️ Timeframe

You will have **24 hours** (from the moment you have received the email with the challenge) to complete the challenge and send it back. Please respect this timebox, as it simulates realistic time constraints.

---

## 🐞 Bugs to Fix

The application contains some **existing bugs** that affect user experience, styling, performance, accessibility or break best practices. Part of this challenge is to **identify and fix these bugs proactively**.

Examples of potential issues include:
- Non-responsive or broken UI elements
- Performance bottlenecks
- Anti-patterns or poor code practices

We expect you to **critically review the code**, spot things that could be improved, and apply changes accordingly. This will be considered a strong signal of your senior-level experience.

---

## ✅ What Needs to Be Done

### 1. 🗑️ Cart Item Deletion
Allow users to remove individual items from the cart.

### 2. ✅ Add-To-Cart Feedback
When a product is added to the cart, show a success notification (e.g., a **Snackbar** or a similar toast mechanism).

### 3. 🔢 Item Quantity Counter
In the product list, show a counter (badge or text) on each item card that reflects how many units of that item have been added to the cart.

### 4. 📌 Fixed Header
Make the header persistent so that it **stays visible while scrolling**.

### 5. 🔄 Toggle List/Grid View (**Bonus**)
Add a toggle switch in the UI that allows the user to change the product display between:
- **Grid view**
- **List view**

This is a bonus feature and not mandatory, but completing it can demonstrate attention to UX and flexibility in Angular component design.

### 6. 💾 Cart Persistence with localStorage
Ensure that the contents of the cart are **saved in `localStorage`** so that:
- Reloading the page preserves the cart state.
- Items remain visible in the cart even after a full browser refresh.

### 7. 🧩 Lazy Load Cart Module + Route Restriction
- Convert the **Cart module** into a **lazy-loaded module**.
- Add a restriction: if the cart is **empty**, redirect the user to a new **"Page Not Found" module**, which must also be lazy-loaded.
  - Create a proper 404 route for this module.
  - If the user tries to access the cart with no items, redirect them to `/not-found` or similar.

---

## 🧪 What We’re Evaluating

- Code readability and maintainability
- Angular architecture decisions
- Use of Angular best practices (RxJS, change detection strategy, component design, etc.)
- UI/UX execution and attention to detail
- Bonus: Use of testing (unit tests or basic integration tests, if possible)
- Ability to proactively identify and fix bugs or weak points in the code

---

## 🚀 How to Deliver

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

1. Download the zipped folder.
2. Complete the tasks.
3. Save your changes.
4. Zip the folder.
5. Share the result with us by email once you're done.

---

## 🙌 Good Luck!

We’re excited to see how you approach the challenge. Feel free to include any notes or considerations you think are important.

Happy coding! 🚀
```




