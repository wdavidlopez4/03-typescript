import { findHeroById } from './services/Heroes.service'

const hero = findHeroById(1)
console.log(hero?.name ?? 'no existe')