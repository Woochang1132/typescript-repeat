// Stack LIFO 
// 구현된 push, pop 사용하지 않고
// 문자열로 구현

interface Stack<T> {
    readonly _size : number;
    push(value : T): void;
    pop(): T;
}


type gStackNode<T> = {
    value : T,
    next ?: gStackNode<T>
}

class gStackImp<T> implements Stack<T>{
    _size: number = 0;
    private head ?: gStackNode<T>
    
    get size(){
        return this._size;
    }

    push(value: T): void {
        const node : gStackNode<T> = {
            value : value,
            next : this.head
        }
        this.head = node;
        this._size++; 
    }

    pop(): T {
        if(this.head == null){
            throw new Error('head state is null');
        }
        const node = this.head;
        this.head = node.next; // node.next도 결국엔 StackNode를 담고 있다.

        this._size--; 
        return node.value;
    }
}

const gstackResult = new gStackImp<string>()

gstackResult.push('최우창');
gstackResult.push('최우진');
gstackResult.push('최우영');
gstackResult.pop();

const gstack = new gStackImp<number>()
gstack.push(123);
gstack.push(456);
gstack.push(789);

while(gstack.size !==0 ){
    console.log(gstack.pop())
}
