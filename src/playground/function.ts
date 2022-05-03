type Result = {
  title: string;
  url: string;
  abstract: string;
};

// haha now it does makes more sense
function search(query: string, tags?: string[]): Promise<Result[]> {
  let queryString = `?query=${query}`;

  if (tags && tags.length) {
    queryString += `&tags=${tags.join()}`;
  }

  return fetch(`/search${queryString}`).then((res) => res.json());
}

type serachFn = typeof search;

type AssembleFn = (includeTags: boolean) => string;
type Query = {
  query: string;
  tags?: string[];
  assemble: AssembleFn;
};

const query: Query = {
  query: "Ember",
  tags: ["javascript"],
  assemble(includeTags = false) {
    let query = `?query=${this.query}`;
    if (includeTags && typeof this.tags !== "undefined") {
      query += `&${this.tags.join(",")}`;
    }
    return query;
  },
};

declare function displaySearch(
  inputId: string,
  outputId: string,
  search: serachFn
): void;

displaySearch("searchField", "result", function (query, tags) {
  return Promise.resolve([
    {
      title: `The ${query} test book`,
      url: `/${query}-design-patterns`,
      abstract: `A practical book on ${query}`,
    },
  ]);
});

export {};
