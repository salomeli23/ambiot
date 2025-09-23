export interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    points: {
      antiage: number;
      antimanchas: number;
      limpiador: number;
      micelar: number;
    };
  }[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface QuizResult {
  product: Product;
  score: number;
}