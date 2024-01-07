{
    type Video = {
        title : string;
        author : string;
    };
    
    type Optional<T> = {
        [P in keyof T]?: T[P] // for...in 과 유사한 원리, 해당 type의 key를 순회한다.
    
    }
    
    type ReadOnly<T> = {
        readonly [P in keyof T] : T[P];
    };
    
    
    type VideoOptional = Optional<Video>;
    
    type Animal = {
        name : string;
        age : number;
    }
    
    type AnimalOption = Optional<Animal>
    
    const animal : AnimalOption = {
        name : 'dog',
        age : 13
    }
    
    const video : ReadOnly<Video> = {
        title : 'hi',
        author : 'woochang'
    }
    
    //video.author = 'ellie'  => readOnly이기 때문에 변경이 불가능
    
    type Nullable<T> = {
        [P in keyof T] : T[P] | null
    };
    const obj2 : Nullable<Video> = {
        title : 'hi',
        author : null
    }
    
    type Proxy<T> = {
        get() : T;
        set(value : T) : void;
    }
    
    type Proxify<T> = {
        [P in keyof T] : Proxy<T[P]>
    }
    
    }