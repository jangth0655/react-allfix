export type Genre = {
  id: number;
  name: string;
};

export type Video = {
  id: string;
  key: string;
  name: string;
};

export interface GetVideos {
  id: number;
  results: Video[];
}

type ReviewAuthor = {
  avatar_path: string;
  name: string;
  rating: number;
};

export type ReviewResult = {
  author: string;
  author_details: ReviewAuthor;
  created_at: Date;
  content: string;
};

export interface GetReview {
  id: number;
  page: number;
  results: ReviewResult[];
}
