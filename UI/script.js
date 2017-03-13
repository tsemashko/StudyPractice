var articles = [
    {
        id: 1,
        title: "Неделя за 10 ссылок: и снова про ПВТ и налоги",
        summary: "Лекция Цепкало о белорусском ИТ и налогах, рассказы айтишников-кочевников, личная история о тяготах работы" +
        " в «Яндексе»,а также новые техссылки.",
        createdAt: new Date("2017-02-27T23:00:00"),
        author: "Иванов Иван",
        content: "На прошлой неделе в рамках проекта AlterEdu с лекцией выступал Валерий Цепкало." +
        " Директор администрации ПВТ рассказал о налогообложении айтишников, об «айтишных ПТУшниках» и о карьере в ИТ." +
        " Выступление в чём-то перекликается с его предисловием к недавней книге, но также содержит ряд ответов на злободневные" +
        " текущие вопросы, например, о льготном налогооблажении в ПВТ."
    },
    {
        id: 2,
        title: "20 человек, которые создали Snapchat",
        summary: "Эти люди были первыми сотрудниками социального приложения, ставшего главным феноменом последних лет.",
        createdAt: new Date("2017-03-05T16:27:00"),
        author: "Петров Петр",
        content: "За пять лет Snapchat прошёл путь от созданного в общежитии приложения с сомнительной репутацией до" +
        " бизнеса стоимостью более $24 млрд. Важную роль в восхождении проекта сыграли его ранние работники," +
        " большинство из которых были однокурсниками основателей стартапа Эвана Шпигеля и Бобби Мёрфи в" +
        " Стэнфордском университете. Business Insider отобрал 20-ку первых сотрудников компании."
    },
    {
        id: 3,
        title: "Без программистов: стартап упрощает создание алгоритмов для трейдинга",
        summary: "Платформа Alrogiz позволяет пользователям использовать естественный язык для постановки задач биржевым «роботам».",
        createdAt: new Date("2017-03-04T14:58:00"),
        author: "Иванов Иван",
        content: "Стартап Algoriz разрабатывает платформу, клиенты которой могут создавать алгоритмы для " +
        "трейдинга с помощью простых текстовых запросов, рассказывает TechCrunch."
    },
    {
        id: 4,
        title: "Игры для Xbox cмогут создавать все желающие",
        summary: "Ранее Microsoft допускала к разработке только компании, прошедшие специальный отбор.",
        createdAt: new Date("2017-03-02T16:49:00"),
        author: "Семашко Таня",
        content: "Microsoft запустила программу Xbox Live Creators, задача которой — открыть для независимых" +
        " разработчиков создание игр под Xbox, сообщает The Verge."
    },
    {
        id: 5,
        title: "Топ-15 высказываний бывшего «главного айтишника Беларуси»",
        summary: "Вспоминаем яркие слова теперь уже бывшего главы ПВТ.",
        createdAt: new Date("2017-03-02T13:40:00"),
        author: "Иванов Иван",
        content: "Бессменный на протяжении 11 лет директор администрации Парка высоких технологий Валерий Цепкало" +
        " отправлен в отставку. dev.by выбрал самые яркие высказывания теперь уже экс-«главного белорусского " +
        "айтишника» за годы его работы на должности."
    },
    {
        id: 6,
        title: "Начало торгов: войдёт ли Snapchat в тройку крупнейших айтишных IPO?",
        summary: "Сегодня начинаются торги акциями Snap Inc, создателя Snapchat. Компания ожидает привлечь $3,4 млрд при оценке" +
        " в $24 млрд.",
        createdAt: new Date("2017-03-02T11:52:00"),
        author: "Петров Петр",
        content: "IPO Snapchat обещает стать одним из крупнейших в истории: акции компании размещены по цене $17 за штуку." +
        " Основатели надеются привлечь $3,4 млрд при оценке компании в $24 млрд, сообщает TechCrunch."
    },
    {
        id: 7,
        title: "Во что инвестируют Google, Microsoft и Amazon?",
        summary: "Поисковый гигант остаётся самым активным инвестором среди крупнейших американских ИТ-компаний.",
        createdAt: new Date("2017-02-28T12:00:00"),
        author: "Семашко Таня",
        content: "Google снизила инвестиционную активность в 2016 году, но, несмотря на активизацию Microsoft и Amazon," +
        " остаётся лидером технологической индустрии по объёму и количеству сделок, сообщает CB Insights."
    },
    {
        id: 8,
        title: "Впервые в истории: Маск отправит туристов к Луне уже через два года",
        summary: "Два пассажира проведут в путешествии вокруг Луны около недели.",
        createdAt: new Date("2017-02-28T09:57:00"),
        author: "Иванов Иван",
        content: "Компания Илона Маска SpaceX отправит двух космических туристов в полёт вокруг Луны на собственном" +
        " корабле в конце 2018 года. Об этом он сообщил в ходе пресс-брифинга 27 февраля."
    },
    {
        id: 9,
        title: "«Вы можете их узнать»: белорусы разыскивают преступников с помощью алгоритмов Facebook",
        summary: "Один из шести преступников, которые разыскиваются не только в реальном мире, но и в Facebook, уже арестован.",
        createdAt: new Date("2017-02-27T16:34:00"),
        author: "Иванов Иван",
        content: "В рамках инициативы «Вы можете их узнать» белорусы Анна Тишкевич и Алексей Литовка попытались" +
        " обновить «устаревший» механизм розыска преступников с привлечением широкой общественности." +
        " Вместо того, чтобы расклеивать фотороботы правонарушителей, они предлагают создавать их аккаунты в" +
        " Facebook и подключать пользователей к поискам через специальные алгоритмы, пишет cossa.ru."
    },
    {
        id: 10,
        title: "Голосовой помощник Alexa приходит на смартфоны",
        summary: "Первые «совместные» гаджеты появятся уже в 2017 году.",
        createdAt: new Date("2017-02-27T12:12:00"),
        author: "Иванов Иван",
        content: "Motorola объявила о начале партнёрства с Amazon, благодаря которому в новых смартфонах компании" +
        " появится голосовой помощник Alexa, сообщает TechCrunch."
    },
    {
        id: 11,
        title: "Nokia возродила легендарный «неубиваемый» телефон 3310",
        summary: "Оригинальный телефон Nokia 3310 вышел в сентябре 2000 года и стал одним из самых популярных мобильников.",
        createdAt: new Date("2017-02-26T21:40:00"),
        author: "Иванов Иван",
        content: "Компания HMD Global, владеющая правами на бренд Nokia, в воскресенье, 26 февраля, провела презентацию" +
        " на выставке Mobile World Congress (MWC 2017) в Барселоне, где представила обновленную версию телефона Nokia 3310," +
        " пишет «Сноб»."
    },
    {
        id: 12,
        title: "Исследователь вычислил самую депрессивную песню Radiohead с помощью языка R",
        summary: "В уравнении по вычислению так называемого «индекса мрачности» усредняется «валентность» песни и процент" +
        " присутствующих в ней печальных слов.",
        createdAt: new Date("2017-02-26T11:39:00"),
        author: "Иванов Иван",
        content: "Если у вас когда-либо возникало непреодолимое желание узнать, какая песня Radiohead является самой " +
        "печальной, то теперь вы получили такую возможность. Исследователю Чарли Томпсону с помощью языка программирования" +
        " R на основе немалого объёма данных удалось вычислить самую депрессивную композицию британской рок-группы," +
        " пишут 3DNews. Подробное описание — в блоге специалиста по анализу данных."
    },
    {
        id: 13,
        title: "Топ-6 вакансий в продуктовых компаниях на dev.by за неделю",
        summary: "Мы выбрали 6 самых интересных, на наш взгляд, вакансий в продуктовых компаниях.",
        createdAt: new Date("2017-02-24T17:51:00"),
        author: "Иванов Иван",
        content: "На портале jobs.dev.by, крупнейшей специализированной «доске объявлений» в белорусской ИТ-индустрии," +
        " сейчас представлено 228 вакансий как от крупнейших отечественных технологических компаний, так и от молодых" +
        " амбициозных стартапов. Мы выбрали 6 самых интересных, на наш взгляд, позиций в продуктовых компаниях."
    },
    {
        id: 14,
        title: "Инфографика: доля женщин в крупнейших технологических компаниях мира",
        summary: "Среди ИТ-управленцев женщин заметно больше, чем на технических позициях.",
        createdAt: new Date("2017-02-24T17:28:00"),
        author: "Иванов Иван",
        content: "Количество женщин в общем числе работников технологических компаний США по-прежнему намного меньше" +
        " среднего показателя по стране, отмечает Statista."
    },
    {
        id: 15,
        title: "«Корень из 1,2» и ещё 12 сложных вопросов с ИТ-собеседований",
        summary: "Крупнейший сайт по поиску работы Glassdoor провёл исследование, и отобрал топ вопросов, которые" +
        " пользователи проекта считают наиболее сложными",
        createdAt: new Date("2017-02-24T16:03:00"),
        author: "Иванов Иван",
        content: "Крупнейший сайт по поиску работы Glassdoor представил самые сложные, по мнению пользователей," +
        " вопросы с собеседований в США, а dev.by выбрал релевантные для ИТ-индустрии примеры."
    },
    {
        id: 16,
        title: "Юрликбез айтишника. Брачный договор как бизнес-документ",
        summary: "О брачном договоре как бизнес-документе — инструменте, позволяющем сохранить активы супругов.",
        createdAt: new Date("2017-02-24T12:39:00"),
        author: "Иванов Иван",
        content: "В продолжении совместного проекта dev.by и юридической компании Revera мы рассказываем о брачном договоре" +
        " как бизнес-документе — инструменте, позволяющем сохранить активы супругов."
    },
    {
        id: 17,
        title: "Цена биткоина достигла исторического максимума",
        summary: "Предыдущий рекорд держался с ноября 2013 года.",
        createdAt: new Date("2017-02-24T12:28:00"),
        author: "Семашко Таня",
        content: "Стоимость биткоина достигла исторического максимума в $1.206, что почти на $60 превышает предыдущий" +
        " рекорд, зафиксированный в ноябре 2013 года, сообщает TechCrunch."
    },
    {
        id: 18,
        title: "EPAM и американо-белорусский стартап WorkFusion будут вместе автоматизировать бизнес-процессы",
        summary: "Совместная работа компаний обеспечит доступ к новым рынкам и ускорение внедрения решений.",
        createdAt: new Date("2017-02-24T10:12:00"),
        author: "Семашко Таня",
        content: "Глобальный поставщик решений в области разработки ПО EPAM и американо-белорусский стартап," +
        " разработчик умных систем автоматизации WorkFusion объявили о начале партнёрства по подготовке решений " +
        "по автоматизации в финансовом, медиа- и трэвел-сегментах."
    },
    {
        id: 19,
        title: "Viber встроил шопинг в мессенджер",
        summary: "С подачи компании-лидера электронной коммерции Rakuten, которая купила Viber в 2014 году.",
        createdAt: new Date("2017-02-23T15:42:00"),
        author: "Семашко Таня",
        content: "Viber представит бета-версию мессенджера с новым функционалом 6 марта в США. Пользователи получат " +
        "оперативный доступ к продуктам и брендам в приложении и смогут совершать покупки, не прерывая общения," +
        " сообщают в компании."
    },
    {
        id: 20,
        title: "Исследование: без ПВТ экспорт ИТ-услуг Беларуси снизился бы втрое",
        summary: "Аналитическая записка Белорусского института стратегических исследований рассказывает о положительном" +
        " влиянии ПВТ на белорусскую ИТ-отрасль.",
        createdAt: new Date("2017-02-23T13:02:00"),
        author: "Иванов Иван",
        content: "Создание Парка высоких технологий позволило в три раза увеличить экспорт ИТ-услуг из Беларуси," +
        " утверждают аналитики Белорусского института стратегических исследований (BISS) в анализе на основе" +
        " статистического моделирования. Его результаты представили в Минске 22 февраля."
    }
];

var baseFunctions = {
    getArticles: function getArticles(skip, number, filterConfig) {
        if (!skip) {
            skip = 0;
        }
        if (!number) {
            number = 10;
        }
        var mas = articles.slice();
        if (!filterConfig) {
            if ("author" in filterConfig) {
                for (var j = 0; j < mas.length;) {
                    if (mas[j].author != filterConfig.author) {
                        mas.splice(j, 1);
                    } else
                        j++;
                }
            }
        }
        mas.sort(function (a, b) {
            if (a.createdAt - b.createdAt < 0) {
                return 1;
            } else {
                return -1;
            }
        });
        var finalMas = [];
        for (var i = 0; i < number; i++) {
            finalMas[i] = mas[skip + i];
        }
        return finalMas;
    },

    getArticle: function getArticle(string) {
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id === string) {
                return articles[i];
            }
        }
        /*articles.find(function(item) {
         return articles[i].id === string;
         });
         return null;*/
    },

    validateArticle: function validateArticle(object) {
        if ("author" in object && "id" in object && "title" in object && "summary" in object && "createdAt" in object
            && "content" in object) {
            if ((typeof object.id) != "number" || (typeof object.title) != "string" || (typeof object.author) != "string"
                || (typeof object.summary) != "string" || (typeof object.createdAt) != "object" || (typeof object.content) != "string") {
                return false;
            }
            if (object.title.length < 100 && object.title !== "" && object.summary.length < 200 && object.summary !== ""
                && object.author !== "" && object.content !== "") {
                return true;
            } else return false;
        } else return false;
    },

    addArticle: function addArticle(array, object) {
        if (baseFunctions.validateArticle(object)) {
            array[array.length] = object;
            return true;
        } else return false;
    },

    editArticle: function editArticle(array, ID, articleObject) {
        if (baseFunctions.validateArticle(baseFunctions.getArticle(ID))) {
            if (articleObject != null) {
                if ("title" in articleObject && typeof articleObject.title == "string") {
                    array[ID - 1].title = articleObject.title;
                }
                if ("summary" in articleObject && typeof articleObject.summary == "string") {
                    array[ID - 1].summary = articleObject.summary;
                }
                if ("content" in articleObject && typeof articleObject.content == "string") {
                    array[ID - 1].content = articleObject.content;
                }
                return true;
            }
            return false;
        }
        return false;
    },

    removeArticle: function removeArticle(array, ID) {
        if (array[ID]) {
            array.splice(ID - 1, 1);
            return true;
        } else return false;
    }
}


var articlesService = {
    arrayOfArticles: [],
    user: "Иванов Иван",
    init: function init(articles) {
        articlesService.arrayOfArticles = articles;
    },
    displayArticles: function displayArticles(articles) {
        if (articles) {
            articlesService.arrayOfArticles = articles;
        }
        var elemById = document.getElementById("content");
        while (elemById.firstChild != null) {
            var child = elemById.firstChild;
            elemById.removeChild(child);
        }
        for (var i = 0; i < articlesService.arrayOfArticles.length; i++) {
            var elemNews = getNew(i);
            elemById.appendChild(document.createElement("br"));
            elemById.appendChild(elemNews);
        }
        function getNew(ID) {
            var News = document.createElement("article");
            var Title = document.createElement("h2");
            var Edit = document.createElement("a");
            Edit.textContent = "Редактировать";
            Edit.id = "edit";
            Edit.href = "";
            var Delete = document.createElement("a");
            Delete.textContent = "Удалить";
            Delete.className = "delete";
            Delete.href = "";
            var Summary = document.createElement("p");
            var Info = document.createElement("p");
            var ShowAll = document.createElement("a");
            ShowAll.textContent = "Показать полностью...";
            ShowAll.href = "";
            var Date = document.createElement("span");
            Date.id = "date";
            var Author = document.createElement("span");
            Author.id = "author";
            Info.appendChild(ShowAll);
            Info.appendChild(Date);
            Info.appendChild(Author);
            News.appendChild(Title);
            News.appendChild(Edit);
            News.appendChild(Delete);
            News.appendChild(Summary);
            News.appendChild(Info);

            var options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            };

            Title.textContent = articlesService.arrayOfArticles[ID].title;
            Summary.textContent = articlesService.arrayOfArticles[ID].summary;
            Date.textContent = articlesService.arrayOfArticles[ID].createdAt.toLocaleDateString("ru", options);
            Author.textContent = articlesService.arrayOfArticles[ID].author;

            return News;
        }
    },

    addNewArticle: function addNewArticle(object) {
        baseFunctions.addArticle(articlesService.arrayOfArticles, object);
        articlesService.displayArticles(articlesService.arrayOfArticles);
    },

    removeThisArticle: function removeThisArticle(ID) {
        baseFunctions.removeArticle(articlesService.arrayOfArticles, ID);
        articlesService.displayArticles(articlesService.arrayOfArticles);
    },

    editThisArticle: function editThisArticle(ID, object) {
        baseFunctions.editArticle(articlesService.arrayOfArticles, ID, object);
        articlesService.displayArticles(articlesService.arrayOfArticles);
    },
    ShowElementsForUser: function getElements(user) {}
};

var objectForAdding = {
    id: 50,
    title: "Новая новость",
    summary: "Добавлена функцией addArticles()",
    createdAt: new Date("2017-02-23T13:02:01"),
    author: "Автор",
    content: "sdfghjhdgfgjkhggdgfh"
};

var objectForEditing = {
    title: "Изменённое заглавие"
};

articlesService.init(articles);
//console.log(articlesService.arrayOfArticles);
//articlesService.displayArticles(articles);
//articlesService.addNewArticle(objectForAdding);
//articlesService.removeThisArticle(2);
//articlesService.editThisArticle(1, objectForEditing);
