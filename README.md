This is a challenge by [Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC/hub/notification-page-using-nextjs-and-tailwind-7l70TIl20X) - a platform to hone Javascript skills. 

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
