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

## 🔥 코드개선

### ✓ Before

<details>
  <summary> 개선 전 - api 통신 </summary>
  <br />

```typescript
export const fetchPopularMovie = async ({ page }: MovieArg) => {
  const response = await (
    await axios(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko&page=${page}`
    )
  ).data;
  return response;
};

export const fetchNowPlayingMovie = async (page?: number) => {
  const response = await (
    await axios(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko&page=${page}`
    )
  ).data;
  return response;
};

export const fetchUpcomingMovie = async (page?: number) => {
  const response = await (
    await axios(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko&page=${page}`
    )
  ).data;
  return response;
};

export const fetchTopRatedMovie = async (page?: number) => {
  const response = await (
    await axios(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko&page=${page}`
    )
  ).data;
  return response;
};

export const fetchMovieDetail = async (id?: number) => {
  const response = await (
    await axios(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko`)
  ).data;
  return response;
};

export const fetchMovieRecommendation = async (id?: number) => {
  const response = await (
    await axios(
      `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=ko`
    )
  ).data;
  return response;
};

export const fetchMovieCasts = async (id?: number) => {
  const response = await (
    await axios(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=ko`
    )
  ).data;
  return response;
};

export const fetchMovieVideos = async (id?: number) => {
  const response = await (
    await axios(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=ko`)
  ).data;
  return response;
};

export const fetchMovieReviews = async ({ id, page }: MovieArg) => {
  try {
    const response = await (
      await axios(
        `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en&page=${page}`
      )
    ).data;
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchMovieKeywords = async (id?: number) => {
  const response = await (
    await axios(`${BASE_URL}/movie/${id}/keywords?api_key=${API_KEY}`)
  ).data;
  return response;
};

export const fetchMovieSearch = async ({ keyword }: MovieArg) => {
  const response = await (
    await axios(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ko&query=${keyword}`
    )
  ).data;
  return response;
};
```

</details>

<details>
  <summary>개선 전 - query 데이터 불러오기</summary>
  <br />

```typescript
return (
  <Layout isMainPaddingTop={true}>
    <Helmet>
      <title>{`${tapName.title}-AllFlix`}</title>
    </Helmet>
    <MainTitleContainer />
    <AnimatePresence>
      {tapName.title === '인기 영화' ? (
        <Suspense fallback={<Loading />}>
          <ComponentContainer
            variants={containerVar}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <PopularMovies />
          </ComponentContainer>
        </Suspense>
      ) : null}
    </AnimatePresence>

    <AnimatePresence>
      {tapName.title === '현재 상영중' ? (
        <Suspense fallback={<Loading />}>
          <ComponentContainer
            variants={containerVar}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <NowPlayingMovies />
          </ComponentContainer>
        </Suspense>
      ) : null}
    </AnimatePresence>

    <AnimatePresence>
      {tapName.title === '개봉 예정' ? (
        <Suspense fallback={<Loading />}>
          <ComponentContainer
            variants={containerVar}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <UpcomingMovies />
          </ComponentContainer>
        </Suspense>
      ) : null}
    </AnimatePresence>

    <AnimatePresence>
      {tapName.title === '평점높은 영화' ? (
        <Suspense fallback={<Loading />}>
          <ComponentContainer
            variants={containerVar}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <TopRatedMovies />
          </ComponentContainer>
        </Suspense>
      ) : null}
    </AnimatePresence>
  </Layout>
);
```

</details>

### ✓ After

- 반복적으로 사용된 api 통신 코드를 HttpClient 클래스로 만들고 캡슐화 하였습니다.
- HttpClient의 APIs를 사용하기 위해 MovieWithTvApi클래스를 만들고 HttpClient클래스를 주입 받아 사용하였습니다.
- 재사용성을 높이기 위해 movie와 tv, search에서 여기저서 사용하던 useQuery를 useFetchData 훅스를 만들어 하나의 모듈로 관리하고 사용하였습니다.
- 상태 관리를 하기위해 contextAPI와 query string을 활용하였습니다.
- movie와 tv에 대한 중복하여 사용하던 컴포넌트를 하나의 컴포넌트로 통합하였습니다.
<details>
  <summary>개선 후 - api 통신</summary>
  <br />

```typescript
export class HttpClient {
  private httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: `${BASE_URL}`,
      params: {
        api_key: API_KEY,
        language: 'ko',
      },
    });
  }

  list = async (params: ParamsType, currentPage: string, moviePage: string) => {
    return this.httpClient.get(`${currentPage}/${moviePage}`, {
      params,
    });
  };

  relatedList = async ({
    id,
    currentPage,
    pageType,
    language,
    page,
  }: RelatedListType) => {
    return this.httpClient.get(`${currentPage}/${id + ''}/${pageType}`, {
      params: {
        language,
        page,
      },
    });
  };

  detail = async (id?: number, currentPage?: string) => {
    return this.httpClient.get(`${currentPage}/${id + ''}`);
  };

  search = async (keyword?: string, currentPage?: string) => {
    return axios.get(
      `${BASE_URL}/search/${currentPage}?api_key=${API_KEY}&language=ko&query=${keyword}`
    );
  };
}

export class MovieWithTvApi {
  constructor(private api: HttpClient) {}

  listByCategory = async (
    page: number,
    currentPage: string,
    pageType: string
  ) => {
    try {
      const result = await this.api.list({ page }, currentPage, pageType);
      return result.data;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  relatedList = async ({
    id,
    currentPage,
    language,
    page,
    pageType,
  }: RelatedListType) => {
    try {
      const result = await this.api.relatedList({
        id,
        currentPage,
        pageType,
        language,
        page,
      });
      return result.data;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  detail = async (id?: number, currentPage?: string) => {
    try {
      const result = await this.api.detail(id, currentPage);
      return result.data;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  search = async (keyword?: string, currentPage?: string) => {
    if (!keyword || keyword === '') return;
    try {
      const result = await this.api.search(keyword, currentPage);
      return result.data;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };
}
```

</details>

<details>
  <summary>개선 후 - query 데이터 불러오기</summary>
  <br />

```typescript
const client = new HttpClient();
const movieWithTvApi = new MovieWithTvApi(client);

export const useList = <T = any>() => {
  const [query, _] = useSearchParams();
  const { pathname } = useLocation();
  const [errors, setErrors] = useState('');
  const queryKey = query.get(QUERY_KEY.CURRENT);
  const page = Number(query.get(QUERY_KEY.PAGE));

  const currentPage = pathname.split('/')[1];

  const { data: list, isLoading } = useQuery<T>(
    [queryKey, page, currentPage],
    async () => {
      try {
        return await movieWithTvApi.listByCategory(
          page || 1,
          currentPage,
          queryKey || PAGE_TYPE.POPULAR
        );
      } catch (error) {
        console.info(error);
        error instanceof HttpError && setErrors(error.errorMassage);
        return;
      }
    }
  );

  return {
    list,
    isLoading,
    errors,
  };
};

export const useDetail = <T = any>() => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const currentPage = pathname.split('/')[1];
  const itemId = Number(id);
  const [errors, setErrors] = useState('');

  const { data: detail, isLoading } = useQuery<T>(
    [id, currentPage],
    async () => {
      try {
        return await movieWithTvApi.detail(itemId, currentPage);
      } catch (error) {
        console.info(error);
        error instanceof HttpError && setErrors(error.errorMassage);
        return;
      }
    }
  );

  return {
    detail,
    isLoading,
    errors,
  };
};

export const useKeywords = <T = any>() => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const currentPage = pathname.split('/')[1];
  const itemId = Number(id);
  const [errors, setErrors] = useState('');

  const { data: keywords, isLoading } = useQuery<T>(
    [id, currentPage, 'keywords'],
    async () => {
      try {
        return await movieWithTvApi.relatedList({
          id: itemId,
          currentPage,
          pageType: 'keywords',
        });
      } catch (error) {
        console.info(error);
        error instanceof HttpError && setErrors(error.errorMassage);
        return;
      }
    }
  );

  return {
    keywords,
    isLoading,
    errors,
  };
};

export const useRelatedList = <T = any>() => {
  const [query, _] = useSearchParams();
  const { id } = useParams();
  const { pathname } = useLocation();
  const [errors, setErrors] = useState('');

  const queryKey = query.get(QUERY_KEY.TYPE) || detailCategoryType.VIDEO;
  const itemId = Number(id);
  const currentPage = pathname.split('/')[1];
  const page = Number(query.get(QUERY_KEY.PAGE) || 1);
  const language = queryKey === detailCategoryType.REVIEWS ? 'en' : 'ko';
  const { data: relatedList, isLoading } = useQuery<T>(
    [id, currentPage, queryKey, page],
    async () => {
      try {
        return await movieWithTvApi.relatedList({
          currentPage,
          id: itemId,
          pageType: queryKey,
          language,
          page,
        });
      } catch (error) {
        console.info(error);
        error instanceof HttpError && setErrors(error.errorMassage);
        return;
      }
    }
  );

  return {
    relatedList,
    isLoading,
    errors,
  };
};

export const useSearch = <T = any>() => {
  const [query, _] = useSearchParams();
  const keyword = query.get(QUERY_KEY.KEYWORD) || undefined;
  const currentPage = query.get(QUERY_KEY.CURRENT) || searchCategoryType.MOVIE;
  const [errors, setErrors] = useState('');

  const {
    data: search,
    isLoading,
    isFetching,
  } = useQuery<T>(
    [currentPage, keyword],
    async () => {
      try {
        return await movieWithTvApi.search(keyword || '', currentPage);
      } catch (error) {
        console.info(error);
        error instanceof HttpError && setErrors(error.errorMassage);
        return;
      }
    },
    {
      enabled: !!keyword,
    }
  );

  return {
    search,
    isLoading: isLoading && isFetching,
    errors,
  };
};
```

</details>

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

> 영화

- 인기 영화, 현재 상영중, 상영 예정, 평점높은 영화를 확인할 수 있습니다.
- 영화 포스터와 영화 제목, 개봉 일, 평점을 확인할 수 있습니다.
- 클릭하면 영화 상세정보 페이지로 이동합니다.

<br></br>

> 영화 상세정보

- 영화제목과, 평점, 날짜 , 장르, 설명, 키워드, 포스터 등 영화 정보를 확인 할 수 있습니다.
- 카테고리 별로 트레일러, 배우, 추천영화, 리뷰를 확인할 수 있습니다.

<br></br>
<img height="500" src="./preview/movie.gif" />
<br></br>

> TV

- TV 페이지에서 인기 프로그램, 현재 방영중, 평점높은 프로그램을 확인할 수 있습니다.
- TV 포스터와 영화 제목, 개봉 일, 평점을 확인할 수 있습니다.
- 클릭하면 TV 상세정보 페이지로 이동합니다.

<br></br>

> TV 상세정보

- TV제목과, 평점, 날짜 , 장르, 설명, 키워드, 포스터 등 TV 정보를 확인 할 수 있습니다.
- 카테고리 별로 TV 출연자, 추천 TV, 리뷰를 확인할 수 있습니다.

<br></br>

<img height="500" src="./preview/tv.gif" />
<br></br>

> TV 프로그램, 영화 검색

- 검색 페이지에서 영화 또는 TV프로그램들을 검색할 수 있습니다.
- 영화 또는 TV프로그램의 제목을 입력하여 검색시, 해당 제목이 포함된 전체 영화와 TV프로그램을 찾을 수 있습니다.

<br></br>
<img height="500" src="./preview/search.gif" />
