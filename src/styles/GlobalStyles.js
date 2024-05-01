import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
& , &.orange-theme{
  /* Theme */
  --color-orange-0: #ffeae6;
  --color-orange-50: #ff8f7d;
  --color-orange-100: #ff7963;
  --color-orange-200: #ff634a;
  --color-orange-400: #ff4d30;
  --color-orange-600: #ff3717;
  --color-orange-800: #fc2300;
  --color-orange-900: #e32000;

  --color-blue: #30e2ff;
  --color-blue-800: #00d9fc;
}
&.blue-theme{
  --color-orange-0: #e6fbff;
  --color-orange-50: #7dedff;
  --color-orange-100: #63e9ff;
  --color-orange-200: #4ae6ff;
  --color-orange-400: #30e2ff;
  --color-orange-600: #17dfff;
  --color-orange-800: #00d9fc;
  --color-orange-900: #00c3e3;

  --color-blue: #ff4d30;
  --color-blue-800: #fc2300;
}

  --color-black: #000000;
  --color-white: #ffffff;

   
    /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --border-theme: 2px solid var(--color-orange-400);
  --border-light: 2px solid var(--color-grey-50);
  --border-dark: 2px solid var(--color-grey-900);
  

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);


  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  --image-grayscale: 0;
  --image-opacity: 100%;

  --font-title: "Rubik", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-orange-50) var(--color-white);
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 10px;
  width: 10px;
}

*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: var(--color-white);
}

*::-webkit-scrollbar-track:hover {
  background-color: var(--color-white);
}

*::-webkit-scrollbar-track:active {
  background-color: var(--color-white);
}

*::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background-color: var(--color-orange-50);
}

*::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-orange-50);
}

*::-webkit-scrollbar-thumb:active {
  background-color: var(--color-orange-50);
}

h2 {
    font-size: 4.2rem;
    color: var(--color-grey-900);
  }

  h3 {
    font-size: 2.4rem;
  }

p{
  font-size: 1.6rem;
  color: var(--color-grey-900);
}
`;

export default GlobalStyles;
