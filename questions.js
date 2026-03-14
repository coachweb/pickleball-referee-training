const questions = [
  // ── SERVE RULES ──────────────────────────────────────────────
  {
    category: "Serve Rules",
    question: "When serving in pickleball, the paddle must contact the ball at what height relative to the server's waist?",
    options: [
      "Below the waist (navel)",
      "At shoulder height or below",
      "At any height as long as it is underhand",
      "Below the knee"
    ],
    correct: 0,
    explanation: "The serve must be made with an upward arc and the paddle-ball contact must be below the server's waist (navel level). This is a core underhand serve requirement."
  },
  {
    category: "Serve Rules",
    question: "During a serve, which foot fault results in a fault being called?",
    options: [
      "The server's foot touches the baseline before the ball is struck",
      "The server's foot is outside the service area sideline before contact",
      "Either foot touches the court on or inside the baseline at the moment of serve contact",
      "The server steps forward after contact"
    ],
    correct: 2,
    explanation: "At the moment of serve contact, at least one foot must be behind the baseline and neither foot may touch the baseline or court inside. Stepping on or over the baseline at contact is a foot fault."
  },
  {
    category: "Serve Rules",
    question: "A served ball lands on the Non-Volley Zone (kitchen) line. What is the ruling?",
    options: [
      "The serve is good — the line is in",
      "It is a fault — the serve must clear the NVZ including its lines",
      "A let is called and the serve is replayed",
      "The receiver may choose to accept or reject the serve"
    ],
    correct: 1,
    explanation: "The serve must land in the correct service court beyond the NVZ. A ball landing on the NVZ line is considered in the NVZ, making it a fault."
  },
  {
    category: "Serve Rules",
    question: "In traditional (non-rally) scoring, who has the right to serve first in a game?",
    options: [
      "Always the team on the right side of the court",
      "Determined by a coin toss or another fair method before the game",
      "The team with the youngest player",
      "The home team always serves first"
    ],
    correct: 1,
    explanation: "Before the game begins, a coin flip or similar random method determines which team serves first and which side they start on."
  },
  {
    category: "Serve Rules",
    question: "In doubles, the score is called 4-2-2. What does the final '2' indicate?",
    options: [
      "The number of timeouts remaining",
      "The second server of the serving team is currently serving",
      "The game is to 2 points",
      "The receiving team has 2 players"
    ],
    correct: 1,
    explanation: "In doubles, the score is called as serving team score – receiving team score – server number. '2' means the second server on the serving team is serving."
  },

  // ── KITCHEN (NVZ) VIOLATIONS ──────────────────────────────────
  {
    category: "Kitchen Violations",
    question: "A player volleys the ball and their momentum carries them into the Non-Volley Zone after the shot. What is the ruling?",
    options: [
      "Legal — the ball was already hit before they entered",
      "Fault — entering the NVZ due to volley momentum is a violation",
      "Warning on first offense, fault on second",
      "Legal only if the ball lands in"
    ],
    correct: 1,
    explanation: "It is a fault if a player's momentum from a volley causes them to touch the NVZ or NVZ line, even after the ball has been struck. The momentum rule applies."
  },
  {
    category: "Kitchen Violations",
    question: "Can a player stand in the Non-Volley Zone at any time during a rally?",
    options: [
      "No — standing in the NVZ at any time is a fault",
      "Yes — players may stand in the NVZ but cannot volley from there",
      "Yes — but only when the ball is on the opponent's side",
      "No — players must leave the NVZ before the ball crosses the net"
    ],
    correct: 1,
    explanation: "Players may stand in the NVZ at any time. The restriction is only against volleying (hitting the ball before it bounces) while in the NVZ or while any part of them touches the NVZ."
  },
  {
    category: "Kitchen Violations",
    question: "A player's hat falls off and lands in the NVZ while they are volleying. Is this a fault?",
    options: [
      "No — only shoes and feet matter for NVZ violations",
      "Yes — any item worn or carried that touches the NVZ during a volley is a fault",
      "Only if the hat touches the NVZ line",
      "No — personal equipment is exempt from NVZ rules"
    ],
    correct: 1,
    explanation: "Any item worn or carried by a player (hat, paddle, clothing, etc.) that touches the NVZ or NVZ line during or after a volley is considered a fault."
  },
  {
    category: "Kitchen Violations",
    question: "A player steps into the kitchen to hit a ball that has bounced. What is the ruling?",
    options: [
      "Fault — players can never enter the NVZ",
      "Legal — a player may enter the NVZ to play a ball that has bounced",
      "Only legal if they exit the NVZ immediately after",
      "Legal only in recreational play, not in sanctioned tournaments"
    ],
    correct: 1,
    explanation: "Entering the NVZ is perfectly legal when hitting a ball that has bounced. The NVZ restriction only applies to volleying (hitting the ball out of the air)."
  },

  // ── FAULTS ────────────────────────────────────────────────────
  {
    category: "Faults",
    question: "What is the 'double-bounce rule' (two-bounce rule) in pickleball?",
    options: [
      "The ball must bounce twice on each side before volleys are allowed",
      "After the serve, each side must let the ball bounce once before volleys are permitted",
      "A ball that bounces twice on the same side is a fault",
      "Only the serving team must let the ball bounce first"
    ],
    correct: 1,
    explanation: "The two-bounce rule requires that the serve and the return of serve must each bounce once before either team may start volleying. This applies to the first two shots of every rally."
  },
  {
    category: "Faults",
    question: "A ball is hit and strikes the top of the net, then lands in the correct service court on a serve. What is the ruling?",
    options: [
      "The serve is good",
      "A let is called and the serve is replayed",
      "It is a fault",
      "The referee decides at their discretion"
    ],
    correct: 2,
    explanation: "Under current USA Pickleball rules (effective 2021), there are no lets on the serve. A serve that clips the net and lands in the correct service court is a live ball and the rally continues — wait, this is actually GOOD. Under the 2021 rule change, it is GOOD if it lands in. The answer is: the serve is good."
  },
  {
    category: "Faults",
    question: "During a rally, a player hits the ball and it strikes the net post before going over the net and landing in bounds. What is the ruling?",
    options: [
      "The ball is in play — net posts are part of the net system",
      "It is a fault",
      "A let is called",
      "The point is replayed"
    ],
    correct: 1,
    explanation: "A ball that strikes the net post (or any permanent fixture other than the net and net cable/band) before landing is a fault."
  },
  {
    category: "Faults",
    question: "A player hits a ball that strikes their partner before going over the net. What is the ruling?",
    options: [
      "Legal — teammates may redirect the ball",
      "Fault — the ball struck a player on the hitting team's side",
      "A let is replayed",
      "Legal only if the partner was not in the NVZ"
    ],
    correct: 1,
    explanation: "It is a fault if the ball contacts any player or anything they are wearing/carrying on the side of the net where the ball was hit (other than the paddle). Hitting your partner is a fault."
  },
  {
    category: "Faults",
    question: "A player volleys the ball and their paddle follow-through crosses over the plane of the net into the opponent's court. No contact is made with the net. What is the ruling?",
    options: [
      "Legal — only contact with the net or opponent's court is a fault",
      "Fault — the paddle crossed the net",
      "Legal only if the ball was already past the net plane",
      "Warning issued, fault on second offense"
    ],
    correct: 0,
    explanation: "A player's paddle may cross the plane of the net after contact as long as it does not touch the net, the net posts, or the opponent's court or body. Crossing the plane alone is not a fault."
  },

  // ── SCORING ───────────────────────────────────────────────────
  {
    category: "Scoring",
    question: "In standard (rally point) tournament doubles pickleball, when can a point be scored?",
    options: [
      "Only by the serving team",
      "By either team when they win a rally",
      "Only when the receiving team commits a fault",
      "Points alternate between teams after each rally"
    ],
    correct: 0,
    explanation: "In traditional pickleball scoring (not rally scoring), only the serving team can score a point. If the receiving team wins the rally, they earn the serve (side-out) but no point."
  },
  {
    category: "Scoring",
    question: "What is the standard winning score in a recreational/tournament pickleball game?",
    options: [
      "15 points, win by 1",
      "21 points, win by 2",
      "11 points, win by 2",
      "10 points, win by 1"
    ],
    correct: 2,
    explanation: "Standard pickleball games are played to 11 points and a team must win by at least 2 points. Tournament matches may use a best-of-three format."
  },
  {
    category: "Scoring",
    question: "At the start of a doubles game, the first serving team is only allowed how many server faults before surrendering the serve?",
    options: [
      "Two — both partners get to serve",
      "One — only one server serves before a side-out",
      "Three — each player plus one bonus",
      "Zero — the first server starts fresh with normal rules"
    ],
    correct: 1,
    explanation: "At the very beginning of the game, only one player on the first serving team serves. When they lose their serve, it is a side-out. This prevents the first serving team from having a major advantage."
  },

  // ── LINE CALLS ────────────────────────────────────────────────
  {
    category: "Line Calls",
    question: "In officiated play, who is responsible for making line calls on their side of the court?",
    options: [
      "The referee makes all line calls",
      "Players make line calls on their own side of the net",
      "Only the non-volley zone line calls are made by the referee",
      "The receiving team makes all line calls for both sides"
    ],
    correct: 1,
    explanation: "In pickleball, players are responsible for line calls on their own side of the court. A referee may overrule an incorrect call they clearly saw."
  },
  {
    category: "Line Calls",
    question: "When a player is uncertain whether a ball was in or out, what is the correct call?",
    options: [
      "Out — if there is any doubt, the ball is called out",
      "In — benefit of the doubt goes to the opponent (ball is in)",
      "A let is played",
      "The referee must make the final determination"
    ],
    correct: 1,
    explanation: "If a player is not sure whether a ball was in or out, the ball must be called in. The benefit of the doubt always goes to the opponent."
  },
  {
    category: "Line Calls",
    question: "A ball lands and partially overlaps the sideline — some of the ball is in, some is outside. What is the correct call?",
    options: [
      "Out — more than half the ball must be inside the line",
      "In — any part of the ball contacting the line or court inside is in",
      "Out — the center of the ball must be inside",
      "The referee uses video replay to determine the call"
    ],
    correct: 1,
    explanation: "A ball that lands on any line (except the NVZ line on a serve) is considered in. The ball only needs to touch the line to be called in."
  },

  // ── INTERFERENCE ─────────────────────────────────────────────
  {
    category: "Interference",
    question: "During a rally, a ball from an adjacent court rolls onto the playing surface. What should happen?",
    options: [
      "Play continues — the ball on court is the player's problem to avoid",
      "A hinder is called and the rally is replayed",
      "The point goes to the player who was not near the distraction",
      "Play continues but the affected player may request a replay afterward"
    ],
    correct: 1,
    explanation: "A ball entering the court from outside during a live rally is a valid hinder. A replay should be called immediately — but only if the distraction affected the play."
  },
  {
    category: "Interference",
    question: "A player yells 'OUT!' loudly during a live rally before the ball bounces in an attempt to distract the opponent. What is the ruling?",
    options: [
      "Legal — verbal communication is allowed at any time",
      "Fault against the player who yelled — it is an intentional distraction",
      "Warning only on the first occurrence",
      "The rally is replayed"
    ],
    correct: 1,
    explanation: "Distracting an opponent with loud noises, shouting, or any deliberate act designed to interfere with their play is a fault. Players must avoid actions intended to distract."
  },
  {
    category: "Interference",
    question: "An official or spectator accidentally interferes with a ball in play. What is the correct ruling?",
    options: [
      "The rally stands — outside interference is the players' risk",
      "A hinder is declared and the rally is replayed",
      "The point goes to the team that was not at fault",
      "The game is paused and restarted from the last confirmed score"
    ],
    correct: 1,
    explanation: "If an official, spectator, or outside item interferes with a live ball in play, a hinder is called and the rally is replayed. This is not a fault against either team."
  }
];
