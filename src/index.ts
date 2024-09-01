import { JaccardSimilarity } from "./jaccard/jaccard";

const jaccardSimilarity = new JaccardSimilarity

console.log(jaccardSimilarity.compare('Franco Rosatti', 'Franco L Rosatti'))
console.log(jaccardSimilarity.compare('Franco W Rosatti', 'Franco L Rosatti'))
console.log(jaccardSimilarity.compare('Rosatti Franco', 'franco rosatti'))
console.log(jaccardSimilarity.compare('Franco W L Rosatti', 'Franco L Rosatti'))
