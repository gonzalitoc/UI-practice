type ResultProps = {
  searchText: string;
};

type ResultData = {
  extract: string;
  source: string;
  thumbnail?: {
    source: string;
  };
  title: string;
};

export type { ResultProps, ResultData };
