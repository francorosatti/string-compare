import { IStringComparer } from "../adapter";

export class JaccardSimilarity implements IStringComparer {
  public compare(s1: string, s2: string, opts = { caseInsensitive: true }): number {
    if (opts.caseInsensitive) {
      s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();
    }
    const set1 = new Set(s1.split(' '));
    const set2 = new Set(s2.split(' '));
    const intersection = this.intersect(set1, set2);
    return intersection.size / (set1.size + set2.size - intersection.size);
  };
  
  private intersect(s1: Set<string>, s2: Set<string>): Set<string> {
    const intersection = new Set<string>();
    for (let elem of s1.values()) {
      if (s2.has(elem)) {
        intersection.add(elem);
      }
    }
    return intersection;
  }
}
