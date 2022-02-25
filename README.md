
[![Build status](https://ci.appveyor.com/api/projects/status/9pdgwyv95s7761gj/branch/master?svg=true)](https://ci.appveyor.com/project/RebikHub/ra-events-dropdown/branch/master)

[Выпадающий список](https://rebikhub.github.io/ra-events-dropdown/)

===

Вам необходимо реализовать компоненты выпадающего списка.

## Описание проекта

![Выпадающий список](./assets/dropdown.png)

Реализуйте компонент `DropdownList`, аналогичный указанному на рисунке. Для позиционирования выпадающего списка воспользуйтес контейнером с `position: relatvie`. Для простоты будем считать, что размер кнопки, при нажатии на которой показывается выпадающий список - фиксированного размера (соответственно, вам не нужно через DOM API вычислять размеры и отступы).

Структура компонентов:
- `Dropdown` - содержит кнопку и `DropdownList` (внутри себя хранит состояние, показывать или нет выпадающий список)
- `DropdownList` - содержит список `DropdownItem`'ов, и хранит информацию о текущем выбранном элементе.

Вам нужно:
1. При клике на кнопку показывать и скрывать выпадающее меню
1. Отрисовывать список на базе массива, хранящегося в памяти (через `map`)
1. Подсвечивать выбранный элемент в списке (сделайте это на базе inline-стилей)

"Подглядеть" реализацию показа/сворачивания на чистом JS и CSS вы можете в исходниках, расположенных в этом же каталоге.

Вы можете реализовать данную задачу как с использованием Functional компонентов, так и на базе Class-Based компонентов.

Но мы рекомендуем Functional.