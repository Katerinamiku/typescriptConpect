const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 2.3;
const num: number = 3e10;

const message: string = "hello";

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['hello', 'array'];
const contact: [string, number] = ["vlad", 12345];
let variable: any = 42

variable = 'new string';
variable = [];

//====
function sayMyName(name: string): void {
    console.log(name);
}

sayMyName("Haise");

//Never - если точно будеть ошибка
function throwError(message: string): never {
    throw new Error(message);
}

//если будет бесконечная функция
function infinite(): never {
    while (true) {
    }
}
//Type создали свой тип
type Login = string
const login: Login = "admin";
//const login2: Login = 2; //нельзя

type ID = string | number
const id1: ID = 1234;
const id2: ID = "ggggg";
//const id3: ID = true //нельзя так как задали только строку и число

type Sometype = string | null | undefined
//но лучше использовать void








