import randomword from 'random-words'

export const generate = (count = 100)=>{
    return new Array(count)
    .fill(null)
    .map(() => randomword())
    .join(' ');
}