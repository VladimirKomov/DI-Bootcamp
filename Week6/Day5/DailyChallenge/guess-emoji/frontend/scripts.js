document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const authMessage = document.getElementById('authMessage');
    const authForm = document.getElementById('authForm');
    const categoryArea = document.getElementById('categoryArea');
    const categoriesDisplay = document.getElementById('categoriesDisplay');
    const gameArea = document.getElementById('gameArea');
    const emojiDisplay = document.getElementById('emojiDisplay');
    const categoryDisplay = document.getElementById('categoryDisplay');
    const guessInput = document.getElementById('guessInput');
    const submitGuessBtn = document.getElementById('submitGuess');
    const resultDisplay = document.getElementById('result');
    let correctEmojiSlug = '';
    let selectedCategory = '';
    let currentUser = '';
    const userNameElement = document.getElementById('userName');
    const retryBtn = document.getElementById('retryBtn');
    let score = 0;

    // Fetch the current score for the user
    const loadScore = async () => {
        try {
            const response = await fetch(`/api/score?name=${currentUser}`);
            if (!response.ok) throw new Error('User not found');
            const data = await response.json();
            score = data.score.score;
            scoreDisplay.textContent = score;
        } catch (error) {
            console.error('Error loading score:', error);
        }
    };

    // Save the updated score for the user
    const saveScore = async () => {
        try {
            await fetch('/api/score', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: currentUser, score })
            });
        } catch (error) {
            console.error('Error saving score:', error);
        }
    };

    // Update and display the score
    const updateScore = (increment) => {
        score += increment;
        scoreDisplay.textContent = score;
        saveScore();
    };

    // Log the user in
    const login = async () => {
        const name = nameInput.value;
        const password = passwordInput.value;
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, password })
            });
            const data = await response.json();
            if (response.ok) {
                authForm.style.display = 'none';
                categoryArea.style.display = 'block';
                currentUser = name;
                await fetchCategories();
            } else {
                authMessage.textContent = data.error;
            }
        } catch (error) {
            authMessage.textContent = 'Error login';
        }
    };

    // Register a new user
    const register = async () => {
        const name = nameInput.value;
        const password = passwordInput.value;
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, password })
            });
            const data = await response.json();
            authMessage.textContent = data.message;
        } catch (error) {
            authMessage.textContent = 'Error register';
        }
    };

    // Fetch available categories
    const fetchCategories = async () => {
        try {
            const response = await fetch('/api/categories');
            const data = await response.json();
            displayCategories(data);
        } catch (error) {
            console.error('Error categories:', error);
        }
    };

    // Display the list of categories
    const displayCategories = (categories) => {
        categoriesDisplay.innerHTML = '';
        categories.forEach(category => {
            const categoryBtn = document.createElement('button');
            categoryBtn.textContent = category.slug;
            categoryBtn.addEventListener('click', () => {
                selectedCategory = category.slug;
                categoryArea.style.display = 'none';
                gameArea.style.display = 'block';
                fetchRandomEmojis(selectedCategory);
            });
            categoriesDisplay.appendChild(categoryBtn);
        });
    };

    // Fetch random emojis for the selected category
    const fetchRandomEmojis = async (category) => {
        userNameElement.textContent = `Hi, ${currentUser}!`;
        await loadScore();
        categoryDisplay.textContent = `Your category: ${category}`;
        try {
            const response = await fetch(`/api/random-emojis?category=${category}`);
            const data = await response.json();

            const emojis = data.emojis;
            const description = data.description;
            correctEmojiSlug = data.correctSlug;

            descriptionDisplay.textContent = `Choose an emoji based on the description: ${description}`;

            emojiContainer.innerHTML = '';
            resultDisplay.textContent = '';
            retryBtn.style.display = 'none';

            emojis.forEach((emoji) => {
                const emojiBtn = document.createElement('button');
                emojiBtn.classList.add('emoji-btn');
                emojiBtn.textContent = emoji.character;
                emojiBtn.addEventListener('click', () => checkAnswer(emoji.slug));
                emojiContainer.appendChild(emojiBtn);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Disable all emoji buttons
    const disableAllEmojiButtons = () => {
        const buttons = emojiContainer.querySelectorAll('.emoji-btn');
        buttons.forEach((button) => {
            button.disabled = true;
        });
    };

    // Check if the selected emoji is correct
    const checkAnswer = (selectedSlug) => {
        disableAllEmojiButtons();
        if (selectedSlug === correctEmojiSlug) {
            resultDisplay.textContent = 'Success!';
            updateScore(1);
        } else {
            resultDisplay.textContent = `Wrong!`;
            updateScore(-1);
        }
        retryBtn.style.display = 'block';
    };

    retryBtn.addEventListener('click', () => {
        fetchRandomEmojis(selectedCategory);
    });

    loginBtn.addEventListener('click', login);
    registerBtn.addEventListener('click', register);
});
