# ✏️ NextJS Study

NextJS를 공부하며 간단한 영화 정보 애플리케이션🎬 을 만들었습니다.

<br/>

## 📚 Study 내용

### App component 커스텀

- 공통 레이아웃 컴포넌트를 만들어 \_app.tsx에 렌더링
> [💅 Custom App](https://www.eunnbi.dev/posts/next-custom-app), [🗺️ Layout Component](https://www.eunnbi.dev/posts/next-layout-head#layout)

### 페이지마다 html title 변경

> [🧠 Head Component](https://www.eunnbi.dev/posts/next-layout-head#head)

### NextJS의 Routing

- 🚗 automatic routing
- 💥 Dynamic Routes 적용
- 🌐 Catch All Routes 적용: `pages/movies/[...params].tsx`
- 🚧 404 page 커스텀

> [Next.js Routing](https://www.eunnbi.dev/posts/next-routing)

### Rewrites 적용

- API_KEY를 외부에 노출되지 않기 위해 next.config.js에서 rewrites 설정
- source 경로가 destination 경로로 매핑이 되어 destination 경로를 source 경로로 mask할 수 있다.
- URL 프록시 역할을 한다.

> [next.config.js](https://github.com/eunnbi/nextjs-practice/blob/main/next.config.js#L6), [Redirects & Rewrites](https://www.eunnbi.dev/posts/next-redirects-rewrites)

### getServerSideProps 함수 이용

- 페이지를 request할 때마다 getServerSideProps 함수를 실행하여 데이터를 fetch한다. fetch한 데이터를 반환하고 이 데이터를 이용해 페이지를 pre-render한다.
  - [💻 date fetching code example](https://github.com/eunnbi/nextjs-practice/blob/main/pages/index.tsx#L15)
- getServerSideProps함수 인자로 Context Parameter가 들어온다. 이를 이용해 params와 query 데이터를 반환하여 페이지를 pre-render할 때 포함시킨다.
  - [💻 context parameter code example](https://github.com/eunnbi/nextjs-practice/blob/main/pages/movies/%5B...params%5D.tsx#L34)
  
> [✨ getServerSideProps](https://www.eunnbi.dev/posts/next-getServerSideProps), [👍 NextJS의 pre-rendering](https://www.eunnbi.dev/posts/next-pre-rendering)

### styled-components와 함께 사용하기

- html 파일에 CSS-in-JS 형식으로 작성된 스타일 요소를 미리 주입하여 스타일이 적용되지 않은 html 코드가 먼저 렌더링되는 문제 해결
  - [pages/\_document.tsx](https://github.com/eunnbi/nextjs-practice/blob/main/pages/_document.tsx#L1)
- server와 client에서 생성하는 class 해시값이 충돌하는 문제 해결
  - [.babelrc](https://github.com/eunnbi/nextjs-practice/blob/main/.babelrc#L1)

> [💅 styled-components와 함께 사용하기](https://www.eunnbi.dev/posts/next-styled-components)

### img 태그 대신 Image 컴포넌트 사용하기

> [🖼️ 이미지 최적화](https://www.eunnbi.dev/posts/next-image): 왜 img 태그 대신 Image 컴포넌트를 사용했는지, Image 컴포넌트의 장점과 사용법에 대해 정리

### React Query 이용하여 Server-side Rendering하기

> [🌺 NextJS + React Query (with SSR)](https://www.eunnbi.dev/posts/next-react-query)

  <br/>

## 🛠️ Tech Stack

<img alt="TypeScript" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=flat-square&logo=TypeScript&logoColor=white"/> <img alt="NextJS" src ="https://img.shields.io/badge/NextJS-000000.svg?&style=flat-square&logo=Next.js&logoColor=white"/>
<img alt="React Query" src ="https://img.shields.io/badge/React Query-FF4154.svg?&style=flat-square&logo=React Query&logoColor=white"/>
<img alt="Styled Components" src ="https://img.shields.io/badge/Styled Components-DB7093.svg?&style=flat-square&logo=styled-components&logoColor=white"/>
<img alt="Sass" src ="https://img.shields.io/badge/Sass-CC6699.svg?&style=flat-square&logo=Sass&logoColor=white"/>
<img alt="Vercel" src ="https://img.shields.io/badge/Vercel-000000.svg?&style=flat-square&logo=Vercel&logoColor=white"/>

<br/>

> [Next.js App을 Vercel에 deploy하기](https://nextjs.org/learn/basics/deploying-nextjs-app/setup)<br/>
>
> 🐛 bug issues
>
> - [🚧 배포 사이트 error 발생 (absolute url)](https://github.com/eunnbi/nextjs-practice/issues/1)
> - [🌍 vercel 배포 프로젝트에 환경변수 넣기](https://github.com/eunnbi/nextjs-practice/issues/2)
