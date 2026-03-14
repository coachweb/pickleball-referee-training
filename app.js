// ── State ───────────────────────────────────────────────────────
let shuffledQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

// ── DOM References ───────────────────────────────────────────────
const quizScreen       = document.getElementById('quiz-screen');
const endScreen        = document.getElementById('end-screen');
const questionCounter  = document.getElementById('question-counter');
const scoreDisplay     = document.getElementById('score-display');
const progressBar      = document.getElementById('progress-bar');
const categoryBadge    = document.getElementById('question-category');
const questionText     = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackArea     = document.getElementById('feedback-area');
const nextBtn          = document.getElementById('next-btn');
const restartBtn       = document.getElementById('restart-btn');

// End screen elements
const endEmoji    = document.getElementById('end-emoji');
const endTitle    = document.getElementById('end-title');
const endScore    = document.getElementById('end-score');
const endPercent  = document.getElementById('end-percent');
const endMessage  = document.getElementById('end-message');

// ── Fisher-Yates Shuffle ────────────────────────────��────────────
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── Initialise / Restart ─────────────────────────────────────────
function startQuiz() {
  shuffledQuestions = shuffle(questions);
  currentIndex = 0;
  score = 0;
  answered = false;

  endScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');

  renderQuestion();
}

// ── Render Question ──────────────────────────────────────────────
function renderQuestion() {
  answered = false;
  feedbackArea.classList.add('hidden');
  feedbackArea.className = 'feedback-area hidden';
  nextBtn.classList.add('hidden');

  const q     = shuffledQuestions[currentIndex];
  const total = shuffledQuestions.length;

  // Meta
  questionCounter.textContent = `Question ${currentIndex + 1} of ${total}`;
  scoreDisplay.textContent    = `Score: ${score}`;
  progressBar.style.width     = `${(currentIndex / total) * 100}%`;

  // Question
  categoryBadge.textContent = q.category;
  questionText.textContent  = q.question;

  // Options
  optionsContainer.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((optionText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="label">${labels[idx]}</span><span class="text">${optionText}</span>`;
    btn.addEventListener('click', () => handleAnswer(idx));
    optionsContainer.appendChild(btn);
  });
}

// ── Handle Answer ────────────────────────────────────────────────
function handleAnswer(selectedIdx) {
  if (answered) return;
  answered = true;

  const q       = shuffledQuestions[currentIndex];
  const buttons = optionsContainer.querySelectorAll('.option-btn');
  const isRight = selectedIdx === q.correct;

  if (isRight) score++;

  // Style buttons
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correct) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx && !isRight) {
      btn.classList.add('wrong');
    }
  });

  // Feedback
  feedbackArea.classList.remove('hidden', 'correct-feedback', 'wrong-feedback');
  if (isRight) {
    feedbackArea.classList.add('correct-feedback');
    feedbackArea.innerHTML = `
      <span class="feedback-icon">✅</span><strong>Correct!</strong>
      <p class="explanation">${q.explanation}</p>`;
  } else {
    feedbackArea.classList.add('wrong-feedback');
    feedbackArea.innerHTML = `
      <span class="feedback-icon">❌</span><strong>Incorrect.</strong>
      <p class="explanation">${q.explanation}</p>`;
  }

  // Update score display immediately
  scoreDisplay.textContent = `Score: ${score}`;

  // Show Next button
  nextBtn.classList.remove('hidden');

  // Last question: change button label
  if (currentIndex === shuffledQuestions.length - 1) {
    nextBtn.textContent = 'See Results 🏆';
  } else {
    nextBtn.textContent = 'Next Question →';
  }
}

// ── Next Question ────────────────────────────────────────────────
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= shuffledQuestions.length) {
    showEndScreen();
  } else {
    // Animate card refresh
    quizScreen.style.animation = 'none';
    quizScreen.offsetHeight; // reflow
    quizScreen.style.animation = '';
    renderQuestion();
  }
});

// ── End Screen ───────���───────────────────────────────────────────
function showEndScreen() {
  quizScreen.classList.add('hidden');
  endScreen.classList.remove('hidden');

  const total   = shuffledQuestions.length;
  const pct     = Math.round((score / total) * 100);

  endScore.textContent   = `You scored ${score} out of ${total}`;
  endPercent.textContent = `${pct}%`;

  // Emoji rating
  let emoji, title, message;
  if (pct === 100) {
    emoji   = '🏆'; title   = 'Perfect Score!';
    message = 'Exceptional! You are ready to officiate at the highest level.';
  } else if (pct >= 85) {
    emoji   = '🥇'; title   = 'Outstanding!';
    message = 'Excellent knowledge of pickleball rules. Nearly flawless!';
  } else if (pct >= 70) {
    emoji   = '🥈'; title   = 'Well Done!';
    message = 'Good understanding of the rules. Review a few more details.';
  } else if (pct >= 50) {
    emoji   = '🥉'; title   = 'Keep Practicing!';
    message = 'A solid start — brush up on the areas you missed.';
  } else {
    emoji   = '📚'; title   = 'More Study Needed';
    message = 'Review the USA Pickleball rulebook and try again!';
  }

  endEmoji.textContent   = emoji;
  endTitle.textContent   = title;
  endMessage.textContent = message;

  // Final progress bar = 100%
  progressBar.style.width = '100%';
}

// ── Restart ──────────────────────────────────────────────────────
restartBtn.addEventListener('click', startQuiz);

// ── Boot ─────────────────────────────────────────────────────────
startQuiz();
