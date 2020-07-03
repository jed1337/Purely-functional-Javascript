const Pair=(head)=>(tail)=>({head,tail})
const fst=(pair)=>pair.head
const snd=(pair)=>pair.tail

/**
 * A helper method to make sure that our functional code works
 * since inspecting the nested pair elements is a hassle
 * This violates the rules since it contains loops and arrays
 */
const pairToArray=(pair)=>{
	arr=[]
	while(pair!==null){
		arr.push(pair.head)
		pair=pair.tail
	}
	return arr
}

const arrayToPair=(array)=>{
	return array.length>0? Pair(array[0])(arrayToPair(array.slice(1))):null
}

const sum=(pair)=>{
	return pair?pair.head+sum(pair.tail):0
}

const len=(pair)=>{
	return pair?1+len(pair.tail):0
}

const range=(low)=>(high)=>{
	return low<=high ? Pair(low)(range(low+1)(high)) : null
}

const square=(x)=>x*x

const fizzBuzz=(x)=>{
	return ((x%3===0?"Fizz":"")+(x%5===0?"Buzz":""))||x
}

const map=(f)=>(xs)=>{
	return xs!==null?
		Pair(f(fst(xs)))(map(f)(snd(xs))):
		null
}
