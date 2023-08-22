const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const sign = question.querySelector('.faq-sign');

        faqQuestions.forEach(otherQuestion => {
            const otherAnswer = otherQuestion.nextElementSibling;
            const otherSign = otherQuestion.querySelector('.faq-sign');
            if (otherQuestion !== question) {
                otherAnswer.style.maxHeight = '0';
                otherSign.textContent = '+';
            }
        });

        if (answer.style.maxHeight === '0px') {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            sign.textContent = '-';
        } else {
            answer.style.maxHeight = '0';
            sign.textContent = '+';
        }
    });
});
