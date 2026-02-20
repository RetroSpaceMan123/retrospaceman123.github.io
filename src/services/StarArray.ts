import { Star } from '../models/Star'

export const StarArray = (star_count: number) => {
  const stars: Star[] = Array.from({ length: star_count }, (_, i) => (new Star(i, Math.random() * 100, Math.random() * 100, (Math.random() * 3) - 3)));
  return stars;
}