// import { ScrollViewStyleReset } from "expo-router/html";

// /**
//  * This file is web-only and used to configure the root HTML for every web page during static rendering.
//  * The contents of this function only run in Node.js environments and do not have access to the DOM or browser APIs.
//  */
// export default function Root({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, shrink-to-fit=no"
//         />

//         {/* Disable body scrolling on web. Remove this line to enable body scrolling */}
//         <ScrollViewStyleReset />

//         {/* Ensure background color consistency between light and dark mode */}
//         <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
//         {/* Add any additional <head> elements you want globally available on web... */}
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }

// const responsiveBackground = `
// body {
//   background-color: #fff;
// }
// @media (prefers-color-scheme: dark) {
//   body {
//     background-color: #000;
//   }
// }`;
