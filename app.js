var express = require( 'express' ),
    bodyParser = require('body-parser'),
    app = express();

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use(express.static('public'));

//Пример данных
var itemMas = [
    {
        head: "1 Обозначение материала (код)", 
        item:[
            "453223450000",
            "464234460000",
            "475245470000",
            "453223450000",
            "464234460000",
            "475245470000",
            "453223450000",
            "464234460000",
            "475245470000",
            "453223450000",
            "464234460000",
            "475245470000",
            "453223450000",
            "464234460000",
            "475245470000",
            "453223450000",
            "464234460000",
            "475245470000",
            "453223450000",
            "464234460000",
            "475245470000",
            "453223450000",
            "464234460000",
            "475245470000",
            "453223450000",
            "464234460000",
            "475245470000",
            "453223450000",
            "464234460000",
            "475245470000",
            "453223450000",
            "464234460000",
            "475245470000",
            "453223450000",
            "464234460000",
            "475245470000",
        ]
    },
    {
        head: "2 Наименование материала", 
        item:[
            "ДИОД",
            "МИОД",
            "ЛОИДОТ",
            "ДИОД",
            "МИОД",
            "ЛОИДОТ",
            "ДИОД",
            "МИОД",
            "ЛОИДОТ",
            "ДИОД",
            "МИОД",
            "ЛОИДОТ",
            "ДИОД",
            "МИОД",
            "ЛОИДОТ",
            "ДИОД",
            "МИОД",
            "ЛОИДОТ",
            "ДИОД",
            "МИОД",
            "ЛОИДОТ",
            "ДИОД",
            "МИОД",
            "ЛОИДОТ",
            "ДИОД",
            "МИОД",
            "ЛОИДОТ",
            "ДИОД",
            "МИОД",
            "ЛОИДОТ",
            "ДИОД",
            "МИОД",
            "ЛОИДОТ",
            "ДИОД",
            "МИОД",
            "ЛОИДОТ",                
        ]
    },
    {
        head: "3 Изделие (Продукт)", 
        item:[
            "4123444234234324001",
            "4551232224535454002",
            "4522235455445335003",
            "4123444234234324001",
            "4551232224535454002",
            "4522235455445335003",
            "4123444234234324001",
            "4551232224535454002",
            "4522235455445335003",
            "4123444234234324001",
            "4551232224535454002",
            "4522235455445335003",
            "4123444234234324001",
            "4551232224535454002",
            "4522235455445335003",
            "4123444234234324001",
            "4551232224535454002",
            "4522235455445335003",
            "4123444234234324001",
            "4551232224535454002",
            "4522235455445335003",
            "4123444234234324001",
            "4551232224535454002",
            "4522235455445335003",
            "4123444234234324001",
            "4551232224535454002",
            "4522235455445335003",
            "4123444234234324001",
            "4551232224535454002",
            "4522235455445335003",
            "4123444234234324001",
            "4551232224535454002",
            "4522235455445335003",
            "4123444234234324001",
            "4551232224535454002",
            "4522235455445335003",
        ]
    },
    {
        head: "4 Наименование изделия", 
        item:[
            "АВТОМОБИЛЬ В СБОРЕ",
            "ШАССИ АВТОМОБИЛЯ",
            "ШАССИ а/м КАМАЗ-41114СКД",
            "АВТОМОБИЛЬ В СБОРЕ",
            "ШАССИ АВТОМОБИЛЯ",
            "ШАССИ а/м КАМАЗ-41114СКД",
            "АВТОМОБИЛЬ В СБОРЕ",
            "ШАССИ АВТОМОБИЛЯ",
            "ШАССИ а/м КАМАЗ-41114СКД",
            "АВТОМОБИЛЬ В СБОРЕ",
            "ШАССИ АВТОМОБИЛЯ",
            "ШАССИ а/м КАМАЗ-41114СКД",
            "АВТОМОБИЛЬ В СБОРЕ",
            "ШАССИ АВТОМОБИЛЯ",
            "ШАССИ а/м КАМАЗ-41114СКД",
            "АВТОМОБИЛЬ В СБОРЕ",
            "ШАССИ АВТОМОБИЛЯ",
            "ШАССИ а/м КАМАЗ-41114СКД",
            "АВТОМОБИЛЬ В СБОРЕ",
            "ШАССИ АВТОМОБИЛЯ",
            "ШАССИ а/м КАМАЗ-41114СКД",
            "АВТОМОБИЛЬ В СБОРЕ",
            "ШАССИ АВТОМОБИЛЯ",
            "ШАССИ а/м КАМАЗ-41114СКД",
            "АВТОМОБИЛЬ В СБОРЕ",
            "ШАССИ АВТОМОБИЛЯ",
            "ШАССИ а/м КАМАЗ-41114СКД",
            "АВТОМОБИЛЬ В СБОРЕ",
            "ШАССИ АВТОМОБИЛЯ",
            "ШАССИ а/м КАМАЗ-41114СКД",
            "АВТОМОБИЛЬ В СБОРЕ",
            "ШАССИ АВТОМОБИЛЯ",
            "ШАССИ а/м КАМАЗ-41114СКД",
            "АВТОМОБИЛЬ В СБОРЕ",
            "ШАССИ АВТОМОБИЛЯ",
            "ШАССИ а/м КАМАЗ-41114СКД",
        ]
    },
    {
        head: "5 ЕИ", 
        item:[
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
            "шт.",
        ]
    },
    {
        head: "6 Применяемость", 
        item:[
            2.00,
            3.01,
            1.15,
            2.00,
            3.01,
            1.15,
            2.00,
            3.01,
            1.15,
            2.00,
            3.01,
            1.15,
            2.00,
            3.01,
            1.15,
            2.00,
            3.01,
            1.15,
            2.00,
            3.01,
            1.15,
            2.00,
            3.01,
            1.15,
            2.00,
            3.01,
            1.15,
            2.00,
            3.01,
            1.15,
            2.00,
            3.01,
            1.15,
            2.00,
            3.01,
            1.15,
        ]
    },
    {
        head: "7 Потребностьпо плану ДУП, м/к", 
        item:[
            494,
            594,
            668,
            494,
            594,
            668,
            494,
            594,
            668,
            494,
            594,
            668,
            494,
            594,
            668,
            494,
            594,
            668,
            494,
            594,
            668,
            494,
            594,
            668,
            494,
            594,
            668,
            494,
            594,
            668,
            494,
            594,
            668,
            494,
            594,
            668,
        ]
    },
    {
        head: "8 Количество расхода на месяц(на план. объемы производства), кол-во, шт.", 
        item:[
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]
    },
    {
        head: "9 Цена без НДС, руб.", 
        item:[
            16.74,
            20.65,
            12.32,
            16.74,
            20.65,
            12.32,
            16.74,
            20.65,
            12.32,
            16.74,
            20.65,
            12.32,
            16.74,
            20.65,
            12.32,
            16.74,
            20.65,
            12.32,
            16.74,
            20.65,
            12.32,
            16.74,
            20.65,
            12.32,
            16.74,
            20.65,
            12.32,
            16.74,
            20.65,
            12.32,
            16.74,
            20.65,
            12.32,
            16.74,
            20.65,
            12.32,
        ]
    },
    {
        head: "10 Сумма расхода на месяц (на план. объемы производства), тыс. руб.", 
        item:[
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]
    },
    {
        head: "11 Плановый однодневный расход, тыс. руб.", 
        item:[
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]
    },
    {
        head: "12 Средний интервал поставки, дни", 
        item:[
            7,
            5,
            3,
            7,
            5,
            3,
            7,
            5,
            3,
            7,
            5,
            3,
            7,
            5,
            3,
            7,
            5,
            3,
            7,
            5,
            3,
            7,
            5,
            3,
            7,
            5,
            3,
            7,
            5,
            3,
            7,
            5,
            3,
            7,
            5,
            3,
        ]
    },
    {
        head: "13 Норма запасов разгрузка, приемка, сортировка, дни", 
        item:[
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
        ]
    },
    {
        head: "14 Норма запасов (анализ, подготовка к производству), дни", 
        item:[
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
            1,
            2,
            3,
        ]
    },
    {
        head: "15 Норма запасов текущий запас 35% (100% с интервалом поставки до 5 дней),дни", 
        item:[
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]
    },
    {
        head: "16 Норма запасов страховой запас, дни", 
        item:[
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]
    },
    {
        head: "17 Итого норма запасов,дни", 
        item:[
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]
    },
    {
        head: "18 Нормативы запасов, тыс.руб.", 
        item:[
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]
    },
    {
        head: "19 Дата загрузки", 
        item:[
            "23.11.2020",
            "12.02.2021",
            "15.06.2021",
            "23.11.2020",
            "12.02.2021",
            "15.06.2021",
            "23.11.2020",
            "12.02.2021",
            "15.06.2021",
            "23.11.2020",
            "12.02.2021",
            "15.06.2021",
            "23.11.2020",
            "12.02.2021",
            "15.06.2021",
            "23.11.2020",
            "12.02.2021",
            "15.06.2021",
            "23.11.2020",
            "12.02.2021",
            "15.06.2021",
            "23.11.2020",
            "12.02.2021",
            "15.06.2021",
            "23.11.2020",
            "12.02.2021",
            "15.06.2021",
            "23.11.2020",
            "12.02.2021",
            "15.06.2021",
            "23.11.2020",
            "12.02.2021",
            "15.06.2021",
            "23.11.2020",
            "12.02.2021",
            "15.06.2021",
        ]
    },
    {
        head: "20 Завод (Подразделение)", 
        item:[
            5800,
            8500,
            6700,
            5800,
            8500,
            6700,
            5800,
            8500,
            6700,
            5800,
            8500,
            6700,
            5800,
            8500,
            6700,
            5800,
            8500,
            6700,
            5800,
            8500,
            6700,
            5800,
            8500,
            6700,
            5800,
            8500,
            6700,
            5800,
            8500,
            6700,
            5800,
            8500,
            6700,
            5800,
            8500,
            6700,
        ]
    }
];

//Подготавливаем пустой массив, потом сюда вложим данные полученные с сервера
var sqlResult = new Array();

//Подготавливаем подключение
var Connection = require('tedious').Connection;  

//настраиваем строку подключения (вписываем имя сервера, логин и пароль для подключения)
var config = {  
    server: 's0035',  //имя сервера
    authentication: {
        type: 'default',
        options: {
            userName: 'PBI', //логин
            password: 'KamazPBI2020'  //пароль
        }
    },
    options: {
        encrypt: true,
        database: 'IS'  //имя Базы Данных
    }
};

//создаем переменную подключения с настройками которые мы писали выше
var connection = new Connection(config); 

//выполняем подключение и вызываем функцию (которая возвращает в переменную "err" ошибки)
// connection.on('connect', function(err) {  
//     if(err){ //если в переменной есть какое либо значение значит произошла ошибка
//         console.log("ERORR" + err); 
//     }
//     else //если в переменной нет значений, значит ошибки нет.
//     console.log("Connected + ");  
//     executeStatement();  //вызываем функцию обработки запроса
// });
// connection.connect();

//создаем переменную запроса
var Request = require('tedious').Request;  
var strRequest = "SELECT * FROM [/BIC/OHZBA_OH06];"
// var TYPES = require('tedious').TYPES;  

//функция обработки запроса
function executeStatement() { 
    //выполняем запрос на получение таблицы и вызываем функцию (которая возвращает в переменную "err" ошибки) 
    request = new Request(strRequest, function(err) {  
        if (err) {  //если в переменной есть какое либо значение значит произошла ошибка, выводим эту ошибку в консоль
            console.log(err);
        }  
    });

    //добавляем переменную для записи в нее номер строки
    var index = 0;
    //пробегаемся по каждой строке таблицы
    request.on('row', function(columns) {  
        //добавляем переменную для записи в нее номер столбца
        var Jindex = 0;
        //создаем массив для записи в нее записи с каждого столбца
        inArray = new Array();
        //пробегаемся по каждому столбцу в строке
        columns.forEach(function(column) {  
            if (column.value === null) {  //если в ячейке нет значений то записываем значение "пусто" (на всякий случай)
                inArray[Jindex] = "пусто";
            } else { //если в ячейке есть значение то...
                inArray[Jindex] = column.value; //...записываем это значение в массив с индекссом номера столбца
            } 
            Jindex++; //переходим к следующему столбцу (прибавляем один к индексу номера столбца)
        });  
        sqlResult[index] = inArray;  //записываем массив столбцов в массив, который мы описали в самом начале кода с индексом номера строки
        //т.е мы в элемент массива равный номеру строки вставляем весь массив столбцов (массив в массиве)
        index++; //переходим к следующей строке (прибавляем один к индексу номера строки)
    });  
    
    //после записи данных в переменную закрываем подключение (чтобы не нагружать сервер)
    request.on("requestCompleted", function (rowCount, more) {
        connection.close();
        console.log("connection close");
    });
    connection.execSql(request);  
}  

//выдаем настройки страницы index.ejs
app.get("/", function (req,res){
    //рисуем файл и передаем туда значение itemMas и sqlResult (в том файле они будут как items и result соответсвенно)
    res.render('index.ejs', {items: itemMas, result:sqlResult});
    // console.log(sqlResult);
});

//выдаем настройки страницы post.ejs, "/:id" обозначает что мы передаем какой-то параметр, достаточно лишь значение дописать в ссылке (например http://mySite/post/5)
//в данном случае в качестве параметра id передаем номер строки
app.get( "/post/:id", function(req, res) {
    var id = req.params.id; //в переменную id передаем параметр id
    var oneItem = new Array(); //создаем новый массив, чтобы присвоить туда обработанный массив itemMas и передать в страницу post
    var i = 0; //добавляем переменную для записи в нее номер столбца
    //пробегаемся по каждому столбцу
    itemMas.forEach(function(_item){ 
        oneItem[i] = {}; //добавляем переменную для записи в нее номера столбца
        oneItem[i].head = _item.head; 
        oneItem[i].item = _item.item[id];
        i++;
    });
    res.render( 'post.ejs', {items: oneItem } )
} )

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

//запускаем сервак
app.listen(port,function () {
    console.log("Сервак запустился на" + port + " порту");
})
