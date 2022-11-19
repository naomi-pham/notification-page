This is a challenge by [Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC/hub/notification-page-using-nextjs-and-tailwind-7l70TIl20X) - a platform to improve your frontend skills by building real projects.

## Styling

I'm applying some strategies to reduce Tailwind CSS codes, one of which is Cube-CSS by [Andy Bell](https://cube.fyi/). (Do check this out! It is a brilliant CSS methodology). 

For example, I created a **stack** CSS class inside the **styles/compositions** folder for repeated Tailwind utility classes such as `flex flex-col gap-8` with modifications stack-sm (gap-4) and stack-xs (gap-2). 

```css
.stack {
   display: flex;
   flex-direction: column;
   gap: var(--col-space, 2rem);
}

.stack-sm {
   --col-space: 1rem;
}

.stack-xs {
   --col-space: .5rem;
}
```

Applying to the main code: 

```jsx
<div classname="stack"> // (flex flex-col gap-8)
   <card 1>
   <card 2>
   <card 3>
</div>
```

The long windy code is disheartening sometimes, but I really like using Tailwind in general as it makes coding responsive website so simple and intuitive. For instance, to adjust the padding for different screen sizes, I can just write `p-4 sm:p-8 lg:p-24` instead of creating two separate **@media-queries**.

## JavaScript

The objective of the project is to differentiate unread and read messages as well as mark all projects as read on click. Here's my steps to achieve it: 

### 1. Create a Card component

[Card.js](https://github.com/naomi-pham/notification-page/blob/main/components/Card/Card.js)

### 2. Set a `Messages` variable that takes Data (Array of notification messages) as the intialized state. 

### 3. Set a count variable that counts the number of unread messages in Data.

### 4. Create a `handleMark` function that returns the same `Messages` array but with message that has `isRead: true` switched to `isRead: false`

[index.js](https://github.com/naomi-pham/notification-page/blob/main/pages/index.js)

### 5. Pass `count` and `handleMark` to the Header components to display the number of unread messages and trigger `Mark all as read`

[Header.js](https://github.com/naomi-pham/notification-page/blob/main/components/Header/Header.js)


