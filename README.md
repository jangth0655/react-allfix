![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=400&section=header&text=ALLFlex&fontSize=70)

[✅ 배포링크](https://taehee-allflix.netlify.app)
<br />

1. 의존성 패키지를 설치합니다.

```zsh
$ npm install
```

2. 프로젝트를 실행합니다.

```zsh
$ npm start
```

## Content

- 🛠 [Built with](#built-with)
- 🔥 [코드개선](#코드개선)
- 🚀 [Project](#project)
- 📖 [Pages](#pages)

---

## Built with

### Front-end

- `React`
- `Typescript`
- `Styled-components`
- `Framer-motion`
- `React-hook-form`
- `react-Query`

### Deploy

- `Netlify`

---

<br />

## 🔥 개선한 점

- 반복적으로 사용하던 axios 코드를 유지보수성을 높이고 캡슐화 하기 위해 클래스로 모듈화하여
  개선하였습니다.
- 여러 컴포넌트에서 사용하던 useQuery를 재사용성을 높이고 독립적으로 관리하기 위해 hooks로 구현하여 개선하였습니다.
- 전역 상태관리와 새로고침할 경우 현재 데이터를 유지 하기 위해 query string을 사용하여 개선하였습니다.
- movie와 tv에 대한 중복하여 사용하던 컴포넌트를 하나의 컴포넌트로 통합하였습니다.
- 검색 기능을 구현하기 위해 useQuery에 enabled 속성과 isLoading & isFetching를 활용하여
lazy query를 구현하였습니다.

 <br />

---

## Pages

## Navigation

- 메인
- 영화
- TV 프로그램
- 검색

## 영화

- 인기 영화
- 현재 상영중
- 상영 예정
- 평점높은 영화
- 영화 상세정보

## TV 프로그램

- 인기 프로그램
- 현재 방영중
- 평점높은 프로그램
- TV 상세정보

## Project

> 배포영상

<br />

<img height="400" src="./preview/movie.gif" />

<br /><br />

<img height="400" src="./preview/responsive_search.gif" />

<br /><br />

> 영화

- 인기 영화, 현재 상영중, 상영 예정, 평점높은 영화를 확인할 수 있습니다.
- 영화 포스터와 영화 제목, 개봉 일, 평점을 확인할 수 있습니다.
- 클릭하면 영화 상세정보 페이지로 이동합니다.

<br />

> 영화 상세정보

- 영화제목과, 평점, 날짜 , 장르, 설명, 키워드, 포스터 등 영화 정보를 확인 할 수 있습니다.
- 카테고리 별로 트레일러, 배우, 추천영화, 리뷰를 확인할 수 있습니다.

<br />

> TV

- TV 페이지에서 인기 프로그램, 현재 방영중, 평점높은 프로그램을 확인할 수 있습니다.
- TV 포스터와 영화 제목, 개봉 일, 평점을 확인할 수 있습니다.
- 클릭하면 TV 상세정보 페이지로 이동합니다.

<br />

> TV 상세정보

- TV제목과, 평점, 날짜 , 장르, 설명, 키워드, 포스터 등 TV 정보를 확인 할 수 있습니다.
- 카테고리 별로 TV 출연자, 추천 TV, 리뷰를 확인할 수 있습니다.

<br />

> TV 프로그램, 영화 검색

- 검색 페이지에서 영화 또는 TV프로그램들을 검색할 수 있습니다.
- 영화 또는 TV프로그램의 제목을 입력하여 검색시, 해당 제목이 포함된 전체 영화와 TV프로그램을 찾을 수 있습니다.
