//создаем некоторый тип корорый в осносном служит для обьктов и для классов где мы указываем какие фукнции должны
// быть у этих обьектов
interface Rect {
    readonly id: string,
    color?: string, //под знаком ? поле необязательное
    size: {
        width: number;
        height: number;
    }
}
const rect1: Rect = {
  id: "1234",
  size: {
      width: 20,
      height: 30
  },
    color: "#ccc"
}
const rect2: Rect = {
    id: "123435",
    size: {
        width: 10,
        height: 29
    }
  }
  rect2.color = "black";
// rect2.id = '12345' нельзя так как значение id только для чтения

const rect3 = {} as Rect  // привели к типу Rect или так:
const rect4 = <Rect>{}

//======= Наследование  интерфейса
//RectWithArea буде наследовать свойства от Rect
interface RectWithArea extends Rect {
getArea: () => number
}
const rect5: RectWithArea = {
    id: "123",
    size: {
        width: 20,
        height:10
    },
    getArea(): number  {
        return this.size.width * this.size.height
    }
}
//======== взаимодействие с классами. Чтобы понять что данный класс имплементируется от интурфкйса и должен
// реализовать его метлоды мы пишем implements и интерфкйс
interface IClock {
    time: Date,
    setTime(date: Date): void
}
class Clock implements IClock {
time: Date = new Date()
    setTime(date: Date): void {
    this.time = date
    }
}

//======== только для динамических больших обьемов стилей, марджинов и тд
//перечислять типы для каждого возможного стиля невозможно, тогда устанавлитваем тип ключа
// [key: string] - это для border, margin radius, а [key: string]: string - это для '1px solid black', '2px' и тд
interface  Styles {
    [key: string]: string
}
const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}