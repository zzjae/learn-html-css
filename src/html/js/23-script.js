// DOM 선택
const flipButton = document.querySelector('.flip-button');
const card = document.querySelector('.card');

// 함수정의
const flipCard = () => card.classList.toggle('is-flipped');

// 이벤트 바인딩
flipButton.addEventListener('click', flipCard);
