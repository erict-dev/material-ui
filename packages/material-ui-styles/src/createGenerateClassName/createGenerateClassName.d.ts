import { GenerateId } from 'jss';

export interface GenerateClassNameOptions {
  dangerouslyUseGlobalCSS?: boolean;
  productionPrefix?: string;
  seed?: string;
}

export default function createGenerateClassName(options?: GenerateClassNameOptions): GenerateId;
