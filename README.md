# search_input

Компонент поисковой строки. Реализован на Vue3/Vite.

## Project Overview

- Комопнент производит поиск по массиву имен, который хранится в отдельном Pinia сторе;
- Результаты поиска выводятся в реальном времени, если совпадений нет, то выводится строка No results found..
- Если в строке один и более символов, появляется крестик - кнопка очистки поля ввода;
- При работе с поисковой строкой остальная часть интерфеса накрывает оверлей;
- Компонент поддерживает навигацию с клавиатуры;
- Есть логика click outside - область подсказок сворачивается при клике вне компонента. Вынесена в отдельный композабл;
- Компонент адаптирован под устройства с меньшим размером экрана;
- Доабвил свитчер переключения темы на основе переменных, который поставляются в бойлерплейт нового vue/vite проекта;
- Добавил тесты на стор с именами и компонент поиска, тест-раннер - Vitest.

## Следующие шаги

- решить баг, при котором при выобре подсказки с клавиатуры не убирается оверлей (поздно обратил на это внимание, не устал уже фиксить);
- вынести некоторую логику из SerachInput в отдельный/е композабл;
- добавить логику обработки раельных запросов и использовать ее в сторе с именами;
- добавить ci/cd;
- импользовать свои цветовые решения;
- возможно, использовать css module вместо style scoped.

## Github Pages

Проект задеплоен на Github Pages c отдельной ветки gh-pages, в которой зранится только бандл проекта, необходимый для запуска.
https://raketich.github.io/search_input/

## Project Setup

Чтобы развернуть проект локально:

### Склонировать репозиторий из ветки main

```sh
git clone https://github.com/Raketich/search_input.git
```

### Установить зависимости

```sh
npm install
```

### Запуск в режиме разработки

```sh
npm run dev
```

### Сборка билда

```sh
npm run build
```

### Запуск тестов

```sh
npm run test:unit
```

### Проверка линтерами

В проекте установлен eslint и экспериментально oxlint

```sh
npm run lint
```
