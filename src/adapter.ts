export interface IStringComparer {
  compare(s1: string, s2: string, opts: any): number;
}