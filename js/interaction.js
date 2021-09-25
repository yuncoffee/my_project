

var person = new Map()
person.set([123], 'kim')
person.set('age', '20')

console.log(person)

console.log(person.get('age'))
console.log(person.size)

for (let key of person.keys()){
    console.log(key)
}

let 출석부 = ['john', 'tom', 'andy', 'tom']

let 출석부2 = new Set(['john', 'tom', 'andy', 'tom'])

console.log(출석부2)


출석부2.add('sally')
console.log(출석부2)
출석부2.delete('john')
console.log(출석부2)
console.log(출석부2.size)


console.log()


