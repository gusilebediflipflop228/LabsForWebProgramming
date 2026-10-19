// React нужен для JSX — HTML-подобной разметки внутри JavaScript.
// useState хранит состояние компонента, useEffect выполняет действие после его обновления.
import React, { useEffect, useState } from 'react';
// createRoot связывает React с элементом на HTML-странице.
import { createRoot } from 'react-dom/client';
// Подключаем оформление страницы.
import './style.css';

// Имя записи, под которым число хранится в памяти браузера.
const STORAGE_KEY = 'lab5-click-count';

// Главный компонент: хранит число и возвращает разметку счётчика.
function App() {
  // count — текущее число, setCount — функция для его изменения.
  // Функция внутри useState читает сохранение при создании компонента.
  const [count, setCount] = useState(() => {
    // localStorage хранит строки, поэтому преобразуем результат в число.
    // Если записи ещё нет, getItem вернёт null, а Number(null) даст 0.
    const savedCount = Number(localStorage.getItem(STORAGE_KEY));
    // Принимаем только целое число, которое JavaScript может хранить точно.
    // Если сохранённое значение некорректно, начинаем с нуля.
    return Number.isSafeInteger(savedCount) ? savedCount : 0;
  });

  // Записываем число в localStorage: оно останется после обновления страницы.
  useEffect(() => {
    // Перед сохранением явно преобразуем число в строку.
    localStorage.setItem(STORAGE_KEY, String(count));
  }, [count]); // Эффект выполняется при первом выводе и при изменении count.

  // JSX описывает содержимое страницы; className задаёт CSS-класс элемента.
  return (
    <main className="counter">
      {/* Подпись работы и основной заголовок. */}
      <p className="subtitle">Лабораторная работа № 5</p>
      <h1>Счётчик кликов</h1>
      {/* Фигурные скобки выводят count. aria-live сообщает изменения экранной читалке. */}
      <output className="value" aria-live="polite">{count}</output>
      {/* Контейнер располагает обе кнопки рядом с помощью CSS. */}
      <div className="buttons">
        {/* onClick обрабатывает клик. value — предыдущее значение счётчика.
            aria-label объясняет назначение кнопки пользователям экранных читалок. */}
        <button type="button" aria-label="Уменьшить на 1" onClick={() => setCount(value => value - 1)}>-</button>
        {/* Прибавляем 1 к предыдущему значению. React сам обновит число на странице. */}
        <button type="button" aria-label="Увеличить на 1" onClick={() => setCount(value => value + 1)}>+</button>
      </div>
      {/* Подсказка о сохранении результата. */}
      <p className="hint">Значение сохраняется при обновлении страницы.</p>
    </main>
  );
}

// Находим контейнер из index.html и выводим в него компонент App.
createRoot(document.getElementById('root')).render(<App />);
