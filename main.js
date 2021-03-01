//      1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
//  Функція яка виведе всю інформацію про тварину. 
//  Функція яка виведе за скільки тварина зможе подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день). 
//  Функція яка зможе змінити назву тварини на більш детальну. 

    let animal = {
        name: "Tom",
        weight: 5,
        age: 8,
        averageSpeed: 48
    };

    function animalInfo(animalClone){
        for(let key in animalClone){
            console.log(`${key} : ${animalClone[key]}`);
        }
    }
    animalInfo(animal);

    function howLong(distance, animal){
        let time = distance / animal.averageSpeed;
        let day = 0;
        if(time >= 12){
            day = Math.floor(time / 12);
        }
        let distTime = Math.round(time - day * 12);
        return `${animal.name} подолає 1000 км за: ${day} дн. та ${distTime} год.`;
    }
    console.log(howLong(1000, animal));

    function detailedAnimal(animal, detailedName){
        animal.name = `${animal.name} ${detailedName}`;
    }
    detailedAnimal(animal, "The Cat");
    console.log(animal.name);

//      2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - рахувати площу фігури, 
//  периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.

    const FIGURE = {
        sideX: 12,
        sideY: 8,
        getSquare(){
            return (this.sideX * this.sideY) / 2;
        },
        getPerimeter(){
            return 2 * (this.sideX + this.sideY);
        },
        make3D(sideZ){
            this.sideZ = sideZ;
        },
        setName(name){
            this.name = name;
        },
        metersConverter(){
            this.sideX /= 100;
            this.sideY /= 100;
            this.sideZ /= 100;
        }
    };
    console.log(FIGURE.getSquare());
    console.log(FIGURE.getPerimeter());
    FIGURE.make3D(20);
    console.log(FIGURE.sideZ);
    FIGURE.setName("Прямокутник");
    console.log(FIGURE.name);
    FIGURE.metersConverter();
    console.log(`Значення в метрах. X: ${FIGURE.sideX} Y: ${FIGURE.sideY} Z: ${FIGURE.sideZ}`);

/*  3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )
{
  tomato: {
    count: 5,
    price: 50,
    buy: false,
    outOfstore: true
  } , ...
}
Виводимо список покупок - спочатку ті які є в магазині потім яких немає. 
Виводимо список покупок які ми купили.
Додаємо функцію яка дозволить купити продукт.
Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
Додаємо можливість збільшувати кількість товару.
Додаємо можливість зменшувати кількість товару(менше 0 бути не може).
*/

    let shoppingList = {
        tomato: {
            count: 5,
            price: 50,
            buy: false,
            outOfStore: true
          },
        bread: {
            count: 2,
            price: 20,
            buy: true,
            outOfStore: false
        },
        milk: {
            count: 3,
            price: 30,
            buy: false,
            outOfStore: true
        },
        tuna: {
            count: 1,
            price: 42,
            buy: true,
            outOfStore: true
        },
        juice: {
            count: 2,
            price: 30,
            buy: true,
            outOfStore: false
        }
    };
    
    function getShoppingList(obj){
        let inStock = [];
        let unavaliable = [];
        for(let item in obj) {
            if(obj[item].outOfStore === true) {
              unavaliable.push(item);
            } else {
              inStock.push(item);
            }
        }
        console.log(`В наявності: ${inStock.join(", ")}`);
        console.log(`Немає в наявності: ${unavaliable.join(", ")}`);
    };
    getShoppingList(shoppingList);

    function getBoughtGoods(obj){
        let bought = [];
        for(let item in obj) {
            if(obj[item].buy === true && obj[item].outOfStore === false) {
                bought.push(item);
            }
        }
        console.log(`Придбані товари: ${bought.join(", ")}`);
    };
    getBoughtGoods(shoppingList);

    function buyGoods(obj, wishfulItem){
        for (let item in obj) {
            if (item === wishfulItem) {
              obj[item].buy = true;
            } 
        }
    };
    console.log(`Before change: ${shoppingList.milk.buy}`);
    buyGoods(shoppingList, "milk");
    console.log(`After change: ${shoppingList.milk.buy}`);
    
    function sumAllPurchases(obj){
        let globalSum = [];
        for(let item in obj) {
            if(obj[item].buy === true) {
                let itemSum = obj[item].price * obj[item].count;
                globalSum.push(itemSum);
            }
        }
        return globalSum.reduce((a, b) => a + b);
    };
    console.log(`Сума усіх покупок: ${sumAllPurchases(shoppingList)}`);

    function increaseGoods(obj, product, quantity){
        for(let item in obj) {
            if(item === product) {
              obj[item].count += quantity;
            }
        }
    };
    console.log(`Before change: ${shoppingList.tuna.count}`);
    increaseGoods(shoppingList, "tuna", 2);
    console.log(`After change: ${shoppingList.tuna.count}`);
    
    function decreaseGoods(obj, product, quantity){
        for(let item in obj) {
            let canBeRemoved = obj[item].count - quantity;
            if(item === product && canBeRemoved >= 0) {
              obj[item].count -= quantity;
            }
        }
    };
    console.log(`Before change: ${shoppingList.bread.count}`);
    decreaseGoods(shoppingList, "bread", 1);
    console.log(`After change: ${shoppingList.bread.count}`);

    //TODO: 
//  4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. Вивести всіх адмінів. 
//Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.
