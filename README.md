# Підходи до стилізації


## Початок лекціі 

### **З чого почалась революція в стилях CSS**

Все почалось в 2014 році коли на конференціі NationJS виступив Крістофер Чедо, де він розповів з якими проблемами вони зіткнулись в Facebook 

- Глобальний простір імен
- Залежності
- Усунення мертвого коду
- Недетермінований дозвіл
- Ізоляція


1. Перша відома проблема з CSS в тому, що всі селектори є глобальними як би не структурували і організовували наш код використовуючи простори імен або процедури, такі як методологія Block, Element, Modifier (BEM) Зрештою, ми завжди забруднюємо глобальний простір імен, що, як ми всі знаємо, неправильно, але так само це призводить до багатьох помилок.
   
2. Друга проблема CSS полягає у визначенні залежностей. Складно дізнатися, що конктерний компонент залежить від певного CSS.
   
3. По-третє, розробники зовнішнього інтерфейсу зазвичай використовують препроцесори, щоб розділити свій CSS на підмодулі, але для браузера створюється один великий глобальний CSS. Оскільки кодова база CSS має тенденцію стає великою, що CSS каскадний, то видалення коду стає дуже проблімотичним і майже не реальним.
   
4. Також є проблема, що стосується недетермінованого розшернення, в CSS, яка може виникнути, коли два або більше правил стилів мають однаковий специфічний вагу і містять те ж саме властивість. У CSS порядок має значення, і якщо підвантажувати CSS на запит, то порядок не гарантується, що призведе до порушення стилів.  
   
   Припустимо, наприклад, що ми хочемо оптимізувати спосіб запиту CSS, завантажуючи CSS, що стосується конкретної сторінки, тільки тоді, коли користувачі переходять на неї. Якщо в CSS, пов'язаній з цією останньою сторінкою, є деякі правила, які також застосовуються до елементів інших сторінок, той факт, що він був завантажений останнім, може вплинути на стиль іншої частини програми.

5. Ізоляція CSS, проблема в тому що ми не можемо точно гарантувати нашому компонету ізоляцію від зовнішніх стилів. 
   
   Але в 2018 році в спеціфікацію ввели Shadow DOM, задопомогою него можно ізолювати наш компонент 
   


## БЕМ 

БЕМ (Блок-Елемент-Модифікатор) - це методологія найменування класів у CSS, яка допомагає спростити організацію та підтримку стилів у веб-додатках.

Ключові концепції методології БЕМ:

- Блок: самостійний компонент, що виконує певну функцію. Він є незалежною частиною інтерфейсу, яку можна перевикористовувати в різних місцях сайту.
  
- Елемент: складова частина блоку, яка має власного сенсу поза блоком. Наприклад, кнопка є елементом блоку Форма.
  
- Модифікатор: змінює вигляд або поведінку блоку або елемента. Наприклад, модифікатор "колір" може змінити колір тексту в блоці "Заголовок".
  
- Кожен блок та елемент має свій унікальний клас, який складається з імені блоку або елемента та його модифікаторів. Наприклад, блок "Заголовок" може мати клас "header", а елемент "Логотип" усередині блоку "Заголовок" може мати клас "header__logo". Модифікатор "колір" може змінити зовнішній вигляд елемента і застосовується до його класу, наприклад, "header__logo-color-white".

Переваги методології БЕМ:

- Покращена організація та підтримка стилів у веб-додатках.
- Зменшення можливості конфлікту імен класів.
- Покращена читаність коду CSS та HTML.
- Покращена перевикористовуваність блоків та елементів.
  
Недоліки методології БЕМ:

- Збільшення кількості класів у HTML і CSS, що може призвести до складнішого коду.
- Деякі розробники можуть вважати методологію БЕМ надмірною чи складною для невеликих проектів.
- Деякі розробники можуть порушувати правила методології, що може призвести до неузгоджених імен класів.

```html
<!-- Correct. The `error` block is semantically meaningful -->
<div class="error"></div>

<!-- Incorrect. It describes the appearance -->
<div class="red-text"></div>
```


## Внутрішні стилі в React 


Офіційна документація React каже нам використовувати вбудовані стилі для компонентів. Це може здатися дивним і бо поділу логіки JS і CSS не дотримується


### Розповісти як це працює в React

Вам потрібно включити модулі CSS у проекті React. Ви можете зробити це, встановивши пакети `css-loader` `style-loader` налаштувавши їх у `webpack configuration file`.

`css-loader` аналізує та інтерпретує код CSS і дозволяє будь-які імпорти або залежності, такі як оператори @importили url(), у коді CSS. Він також перетворює код CSS на об'єкт JavaScript.

`style-loader` бере згенерований об'єкт JavaScript `css-loader` і вставляє його в HTML-документ як `<style>` тег. Це дозволяє застосовувати CSS до відповідних компонентів у програмі React.

У React 17 з'явилася нова функція під назвою «автоматичний імпорт під час виконання», яка дозволяє використовувати модулі CSS без додаткового налаштування.


## Styled-Componets 

- Styled-components - це бібліотека React, яка дозволяє визначати стилі компонентів за допомогою JavaScript коду.

- Вона використовує теговані шаблони для визначення стилів, що дозволяє використовувати синтаксис шаблонних рядків для написання коду CSS.

- Styled-components використовує CSS-in-JS, що означає, що він генерує стилі під час виконання замість визначати їх у файлі CSS. Це дозволяє використовувати динамічні значення пропсів та глобальні змінні CSS усередині тегованих шаблонів.

- Styled-components також автоматично генерує унікальні імена класів для кожного компонента, що дозволяє уникнути конфліктів між класами програми та сторонніми бібліотеками.

- Крім того, styled-components підтримує створення глобальних стилів, використовуючи функцію "createGlobalStyle". Ця функція створює компонент, який може бути використаний для визначення глобальних стилів для всієї програми. Наприклад:


## Посилання 

- [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
- [BEM](https://en.bem.info/methodology/quick-start/)
- [Styled components](https://styled-components.com/)
- [Emotion](https://emotion.sh/docs/introduction)
