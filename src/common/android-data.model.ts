import { Shape } from './shape.enum';

export interface AndroidData {
  elevation: number;
  pressedElevation?: number;
  shape?: Shape;
  bgcolor?: string;
  cornerRadius?: number;
  translationZ?: number;
  pressedTranslationZ?: number;
  forcePressAnimation?: boolean;
}