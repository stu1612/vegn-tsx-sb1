interface iCategories {
  id: number;
  title: string;
  content: string;
  caption: string;
}

interface iMenuItem {
  id: number;
  category: string;
  subtitle: string;
  slug: string;
  body: string;
  ingredients: string[];
  nutrients: string[];
}
