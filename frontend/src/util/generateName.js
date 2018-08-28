import names from 'util/names';
import adjectives from 'util/adjectives';

export default function generateName(genes){
  const index = parseInt(genes, 10);
  return adjectives[index % adjectives.length] + ' ' + names[index % names.length];
};
