# 🃏 Node.js Card Guessing Game

## 🎯 Objective

The **Card Guessing Game** is a memory-based matching game built with **Node.js**. Players flip two cards at a time to find matching pairs. If the selected cards match, they remain visible. If not, they flip back. The game continues until all cards are successfully matched.

---

## 🖥️ Interface

- Designed with a **user-friendly**, intuitive interface.
- A **6x6 grid** (36 cards total) is dynamically generated.
- Cards are shuffled and hidden at the start of the game.
- Players flip **two cards per turn** to try and find a matching pair.
- Matched cards remain face-up; unmatched cards flip back after a short delay.
- A **congratulatory pop-up** appears when all cards have been matched.
- A **Reset button** allows players to restart the game with a newly shuffled board.

---

## ✨ Features

- 🔄 Automatically shuffles and hides cards when the game starts.
- 🎮 Interactive game logic for flipping and matching cards.
- ✅ Persistent matching for correct guesses.
- 🔁 Ability to reset the game at any time.
- 🎉 Congratulatory message when all matches are found.

---

## 🛠️ Installation & Setup

### 📋 Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- A modern web browser (e.g., Chrome, Firefox)

### 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/card-guessing-game.git
   cd card-guessing-game


This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
