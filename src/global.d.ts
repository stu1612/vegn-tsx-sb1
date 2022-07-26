interface iCategories {
  id: number;
  title: string;
  image: string;
  content: string;
  caption: string;
}

interface iMenuItem {
  id: number;
  category: string;
  thumbnail: string;
  subtitle: string;
  slug: string;
  body: string;
  ingredients: string[];
  nutrients: string[];
}
