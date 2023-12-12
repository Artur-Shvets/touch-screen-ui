# Документація JavaScript Code Visualizer

## Огляд

JavaScript Code Visualizer - це інструмент, що перетворює код JavaScript на 
візуалізоване HTML-представлення. Цей інструмент використовується для аналізу та 
відображення структури коду, роблячи його зрозумілим та легкодоступним.

## Компоненти

Система складається з наступних основних компонентів:

1. **AstGenerator:** Генерує абстрактне синтаксичне дерево (AST) з вхідного коду JavaScript.
2. **AstTraverser:** Обхід AST для ідентифікації ключових вузлів та структур.
3. **CodeVisualizer:** Створює HTML-представлення коду, використовуючи інформацію з AST.
4. **DomHandler:** Управління DOM для відображення візуалізованого коду.
5. **StructureTagsManager:** Управління тегами та структурами для візуалізації.

## Процес Візуалізації

1. **Генерація AST:**
   - Вхідний код JavaScript аналізується для створення AST.
   - Використовується Babel для перетворення коду.

2. **Обхід AST:**
   - AST обходиться для ідентифікації різних типів вузлів та їх відносин.

3. **Створення HTML-структури:**
   - На основі інформації з AST створюється HTML-представлення коду.
   - Код поділяється на рядки та блоки з відповідними CSS-класами.

4. **Відображення у DOM:**
   - Отримане HTML-представлення вставляється у DOM для відображення користувачу.

## Структура HTML

HTML-структура відображає різні частини коду, використовуючи такі класи:

- `row-block`: Представляє окремий рядок коду.
- `main-block`: Вказує на головний блок коду, наприклад функцію чи клас.
- `sub-block`: Представляє підблок в рамках більшого блоку, наприклад тіло функції.
- Типи вузлів, такі як `Identifier`, `StringLiteral` тощо, вказують на конкретний тип елементу в коді.

## Використання

Для використання інструменту:

1. Вставте вхідний код JavaScript у файл `input_code.js`.
2. Запустіть інструмент для генерації візуалізованого

 HTML.
3. Перегляньте візуалізований код у веб-браузері.

## Безпека

Під час роботи з HTML та DOM важливо враховувати потенційні ризики безпеки, особливо при використанні `innerHTML`.