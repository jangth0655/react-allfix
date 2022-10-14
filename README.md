![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=400&section=header&text=ALLFlex&fontSize=70)

<div>
    <div>
    <a display="block" href="https://taehee-allflix.netlify.app" >
      https://taehee-allflix.netlify.app
    </a>
    </div>
    <br />
</div>

<br /><br />

## Content

- 🛠 [Built with](#built-with)
- 🚀 [Project](#project)
- 📖 [Pages](#pages)
- ✓ [Features](#features)
- 🔥 [Code](#code)

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

## Project

- `React.lazy`를 사용하여 컴포넌트를 동적으로 불러왔습니다.
  - 모든 코드를 한 번에 불러오지 않고 필요한 코드만 받아올 수 있어 성능을 향상시켰습니다.
  - Suspense의 fallback props로 로딩을 구현하여 코드가 불러올 때까지 로딩을 확인할 수 있습니다.
    <br />
- `React-Query`를 사용하여 서버에 부담을 줄이고 코드를 좀 더 간결하게 할 수 있었습니다.
  - 사용자가 참조한 페이지는 캐시되어 다음번에 참조할 떄에는 캐시데이터를 이용할 수 있어 성능을 향상 시킬 수 있었습니다.
  - 백그라운드에서 오래된 데이터는 업데이트 해줄 수 있어 앱을 효율적으로 동작시킬 수 있었습니다.
  - 중복된 요청은 제거하고 한번만 요청해줄 수 있게 하여 서버에 부담을 줄일 수 있었습니다.

<br />

> 영화

- 인기 영화, 현재 상영중, 상영 예정, 평점높은 영화를 확인할 수 있습니다.
- 영화 포스터와 영화 제목, 개봉 일, 평점을 확인할 수 있습니다.

<br></br>

> 영화 상세정보

- 영화제목과, 평점, 날짜 , 장르, 설명, 키워드, 포스터 등 영화 정보를 확인 할 수 있습니다.
- 영화 트레일러를 확인할 수 있습니다.
- `react-query`를 이용하여 서버에서 영화 데이터를 가져왔습니다.
- 영화 배우를 확인할 수 있습니다.
- 추천영화들을 확인해 볼 수 있습니다.

<br></br>
<img height="500" src="./preview/movie.gif" />
<br></br>

> TV

- TV 페이지에서 인기 프로그램, 현재 방영중, 평점높은 프로그램을 확인할 수 있습니다.
- TV 포스터와 영화 제목, 개봉 일, 평점을 확인할 수 있습니다.
- 클릭하면 TV 상세정보 페이지로 이동합니다.
- 총 5페이지로 구분하여 데이터를 페이지별로 확인할 수 있습니다.

<br></br>

> TV 상세정보
> <br></br>

- TV제목과, 평점, 날짜 , 장르, 설명, 키워드, 포스터 등 TV 정보를 확인 할 수 있습니다.
- `react-query`를 이용하여 서버에서 영화 데이터를 가져왔습니다.
- TV 출연자를 확인할 수 있습니다.
- 추천TV들을 확인해 볼 수 있습니다.

<br></br>
<img height="500" src="./preview/tv.gif" />
<br></br>

> TV 프로그램, 영화 검색

- 검색 페이지에서 영화 또는 TV프로그램들을 검색할 수 있습니다.
- 영화 또는 TV프로그램의 제목을 입력하여 검색시, 해당 제목이 포함된 전체 영화와 TV프로그램을 찾을 수 있습니다.

<br></br>
<img height="500" src="./preview/search.gif" />

<br></br>
<br></br>

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

---

<br></br>

## Features

### 🎬

- 인기 영화, 현재 상영, 개봉예정, 평점높은 영화 보기
- 상세정보 확인하기
- 트레일러 보기
- 배우 보기
- keyword 확인하기
- 추천 영화 보기

### 📺

- 인기 TV 프로그램, 상영 TV 프로그램, 평점높은 TV프로그램 보기
- 상세정보 확인하기
- 트레일러 보기
- 배우 보기
- keyword 확인하기
- 추천 TV 프로그램 보기

---

<br></br>

## Code

<a href="https://github.com/jangth0655/react-allfix">🔥 GitHub</a>

<br /><br />
