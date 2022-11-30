import { movieCategory } from '../data/data';
import { CategoryType } from '../model/types';

class Category {
  constructor(private categories: CategoryType[]) {}

  get Categories() {
    return [...this.categories];
  }
}

export const movie = new Category(movieCategory);
