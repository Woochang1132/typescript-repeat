// Stack LIFO 
// 구현된 push, pop 사용하지 않고
// 문자열로 구현

interface Stack<T> {
    readonly _size : number;
    push(value : T): void;
    pop(): T;
}
