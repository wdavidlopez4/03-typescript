import { heroes } from '../data/Heroes'

export const findHeroById = (id : number) =>{
    return heroes.find((hero) => hero.id === id);
}