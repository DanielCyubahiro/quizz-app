const newQuestion = document.querySelector('[data-js="new-question"]');
const newAnswer = document.querySelector('[data-js="new-answer"]');
const newTags = document.querySelector('[data-js="new-tags"]');
const form = document.querySelector('[data-js="form"]');
const questionCharacterCounter = document.querySelector('[data-js="question-character-counter"]');
const answerCharacterCounter = document.querySelector('[data-js="answer-character-counter"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (newQuestion.value.length && newAnswer.value.length) {

    const section = document.createElement('section');
    section.classList.add('card');

    const questionParagraph = document.createElement('p');
    questionParagraph.classList.add('card__question');
    questionParagraph.textContent = newQuestion.value;

    const button = document.createElement('button');
    button.classList.add('button', 'card__button',);
    button.setAttribute('data-js', 'new-answer-button');
    button.textContent = 'Show Answer';

    const answerParagraph = document.createElement('p');
    answerParagraph.classList.add('card__answer');
    answerParagraph.setAttribute('data-js', 'new-card-answer');
    answerParagraph.textContent = newAnswer.value;

    // Create the SVG element(Lucide icon)
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    icon.setAttribute("width", "24");
    icon.setAttribute("height", "24");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("fill", "none");
    icon.setAttribute("stroke", "currentColor");
    icon.setAttribute("stroke-width", "2");
    icon.setAttribute("stroke-linecap", "round");
    icon.setAttribute("stroke-linejoin", "round");
    icon.setAttribute('data-js', 'new-card-bookmark');
    icon.classList.add("lucide", "lucide-bookmark", 'card__icon');
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z");
    icon.appendChild(path);


    if(newTags.value.length) {
      const tagsList = document.createElement('ul');
      tagsList.classList.add('card__tags__list');

      //Handle tags
      newTags.value.split(',').forEach(tag => {
        const tagElement = document.createElement('li');
        tagElement.classList.add('card__tags__item');
        tagElement.textContent = `#${tag}`;
        tagsList.appendChild(tagElement);
      });
      section.append(questionParagraph, button, answerParagraph, icon, tagsList);
    } else {
      section.append(questionParagraph, button, answerParagraph, icon);
    }

    form.insertAdjacentElement('afterend', section);

    //Clear the inputs for a new question
    newQuestion.value = '';
    newAnswer.value = '';
    newTags.value = '';


    button.addEventListener('click', () => {
      answerParagraph.classList.toggle('show');
      button.textContent = button.textContent === 'Show Answer'
          ? 'Hide Answer'
          : 'Show Answer';
    });

    icon.addEventListener('click', () => {
      icon.classList.toggle('icon--active');
    });
  }
});

newQuestion.addEventListener('input', () => {
  const characterLeft = 150 - newQuestion.value.length;
  questionCharacterCounter.textContent = `${characterLeft} characters left`;
})

newAnswer.addEventListener('input', () => {
  const characterLeft = 150 - newAnswer.value.length;
  answerCharacterCounter.textContent = `${characterLeft} characters left`;
})

