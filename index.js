
        // JavaScript to toggle the visibility of the answer and change the plus/cross sign when the question is clicked
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.question');
            const answer = item.querySelector('.answer');
            const plusMinusIcon = question.querySelector('i.fas');

            question.addEventListener('click', () => {
                item.classList.toggle('active');
                plusMinusIcon.classList.toggle('fa-plus');
                plusMinusIcon.classList.toggle('fa-minus');
                answer.classList.toggle('hidden');
            });
        });
    