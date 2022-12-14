import { FilterType } from '../const.js';
import { isPointsFuture } from './point.js';

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isPointsFuture(point.dateFrom))
};

export {filter};
