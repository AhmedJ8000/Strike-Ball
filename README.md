![Strike Ball](img/strikeball_logo.png  width="300")
# Strike Ball  
*A Breakout-Style Browser Game Built with HTML5 Canvas & JavaScript*


## Overview

**Strike Ball** is a modern browser-based brick-breaker (Breakout) game developed using **HTML**, **CSS**, and **JavaScript**.  
The goal is simple: move the paddle, bounce the ball, break all the bricks, and set a new high score.

The project demonstrates:
- Interactive gameplay using **HTML5 Canvas**
- Page navigation & UI using HTML/CSS
- Game logic implemented entirely in JavaScript
- localStorage for saving persistent player data
- Clean code architecture split across multiple files

This project was built as part of a web development assignment and showcases essential front-end programming skills such as animation loops, collision detection, event handling, DOM manipulation, and responsive design.

---

## 🎯 Project Goals

The main objectives of Strike Ball were:

1. **Create a fully interactive game** using only front-end technologies.  
2. **Implement difficulty settings** that affect gameplay mechanics.  
3. **Use localStorage** for persistent high scores and saved settings.  
4. **Design a clean, usable UI** for navigation between screens.  
5. **Present clear, maintainable code** split across multiple scripts.

The result is a complete, fully functional browser game with menus, settings, scoreboards, and responsive gameplay.

---

## 🕹 Gameplay Features

### Classic Breakout Mechanics
- Move the paddle left and right to keep the ball in play
- Destroy bricks to earn points
- Levels increase in speed and difficulty over time
- Ball gradually speeds up based on hit count

### ⚙ Dynamic Difficulty Levels
Players can select the following difficulties from option menu:
- **Easy**
- **Normal**
- **Hard**

Difficulty affects:
- Paddle width  
- Ball speed scaling  
- High score category  
- Game challenge and pace  

This allows players of all skill levels to enjoy the game.

### 🎚 Paddle Sensitivity Slider
In the **Options** menu, players can adjust:
- Paddle movement speed (sensitivity)
- Stored automatically via localStorage

This allows customization for comfort and accessibility.

### High Score System
- Each difficulty tracks its own top 10 scores
- Displayed on the High Scores page
- Sorted in descending order
- Saves:
  - Player name  
  - Score  
  - Difficulty  

### ⎋ ESC-to-Quit Function
Pressing **ESC** during gameplay immediately:
- Pauses the game
- Returns to title screen


## 🧠 Core Technologies Used

### **HTML5 Canvas**
Used for:
- Rendering the ball  
- Paddle  
- Bricks  
- Collision boundaries  
- Score display  

Canvas allows smooth frame-by-frame animation at 60 FPS.

### **JavaScript (ES6)**
Handles:
- Game loop  
- Collision detection  
- Object movement  
- Event listeners (keyboard input)  
- Dynamic difficulty scaling  
- Saving/loading settings  

### **CSS3**
Handles:
- Page layout  
- Button styling  
- Menu spacing  
- Mobile-friendly adjustments  

### **localStorage API**
Stores:
- Difficulty preference  
- Paddle sensitivity  
- High scores  
- Player name  

Data persists even after closing the browser.


## How to Play

### Keyboard Controls
| Action | Key |
|--------|-----|
| Move Paddle Left | ⬅ Left Arrow |
| Move Paddle Right | ➡ Right Arrow |
| Launch Ball | Spacebar |
| Quit to Title | ESC |

### Goal
Break all bricks while preventing the ball from falling off the screen.  
Score points based on the number of bricks destroyed.

### Game Link Access
[Strike Ball](https://ahmedj8000.github.io/Strike-Ball)

## Challenges & Learning Outcomes

While developing Strike Ball, the following challenges were solved:

### ✔ Real-time collision detection  
Ball–brick, ball–paddle, and ball–wall collisions require accurate math and careful ordering.

### ✔ State management  
Tracking:
- Lives
- Score
- Current level
- Difficulty
- Paddle speed

All handled smoothly via JS functions.

### ✔ localStorage syncing  
Ensuring consistent saving/loading across multiple pages.

### ✔ UI consistency  
Designing separate HTML pages that feel connected.

### ✔ Game loop optimization  
Maintaining smooth animations and preventing speed inconsistencies.

This project reinforced skills in problem-solving, debugging, and structuring JavaScript-based applications.

---

## Future Improvements

Potential upgrades include:
- Sound effects & background music  
- Power-ups (multi-ball, larger paddle, slow motion)  
- Animated particle effects when bricks break  
- Mobile touch controls  
- Additional levels and difficulty modes  
- Themes or skins for the paddle and background  

## Acknowledgements

Strike Ball was built entirely from scratch to demonstrate full front-end development capability.
