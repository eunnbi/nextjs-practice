# ✏️ NextJS Study

NextJS를 공부하며 간단한 영화 정보 애플리케이션🎬 을 만들었습니다.

### App component 커스텀

- 공통 레이아웃 컴포넌트를 만들어 \_app.tsx에 렌더링
- [💅 Custom App](https://velog.io/@eunnbi/NextJS-Custom-App)
- [🗺️ Layout Component](https://velog.io/@eunnbi/NextJS-Layout-Head#%EF%B8%8F-layout)

### 페이지마다 html title 변경

- [🧠 Head Component](https://velog.io/@eunnbi/NextJS-Layout-Head#%F0%9F%A7%A0-head)

### NextJS의 Routing

- [🚗 automatic routing](https://velog.io/@eunnbi/NextJS-Routing#-pages-%ED%8F%B4%EB%8D%94)
- [💥 Dynamic Routes](https://velog.io/@eunnbi/NextJS-Routing#-dynamic-routes) 적용
- [🌐 Catch All Routes](https://velog.io/@eunnbi/NextJS-Routing#-catch-all-routes) 적용
  - `pages/movies/[...params].tsx`
- [🚧 404 page 커스텀](https://velog.io/@eunnbi/NextJS-Routing#-404-page)

### Rewrites 적용

- API_KEY를 외부에 노출되지 않기 위해 next.config.js에서 rewrites 설정
- source 경로가 destination 경로로 매핑이 되어 destination 경로를 source 경로로 mask할 수 있다.
- URL 프록시 역할을 한다.
- [👉 Redirects & Rewrites](https://velog.io/@eunnbi/NextJS-Redirects-Rewrites)

### getServerSideProps 함수 이용

- `Data fetching` : 페이지를 request할 때마다 getServerSideProps 함수를 실행하여 반환하는 데이터를 이용해 페이지를 pre-render한다.
- `Context Paramter` : getServerSideProps함수 인자로 들어오는 Context Parameter를 이용해 params와 query 데이터를 반환하여 페이지를 pre-render할 때 포함시킨다.
- [✨ getServerSideProps](https://velog.io/@eunnbi/NextJS-getServerSideProps)
