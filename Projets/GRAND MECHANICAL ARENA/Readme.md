# 🏟️ WELCOME TO THE GRAND MECHANICAL ARENA! 🤖

*A thunderous voice echoes through the ancient colosseum...*

LADIES AND GENTLEMEN! I, Marcus Compilius Debuggus, your eternal arena master, welcome you to the most extraordinary 
spectacle in all of the coding realms! Let me explain to you the incredible battle system that powers our legendary arena!

## 🎭 Our Combatants

In our arena, we witness three types of warriors:

### 👤 The Fragile Humans
```cpp
Character(const std::string &name) : Element(name, 1, 0)
```
Ah yes, mere mortals! With but a single health point and no attack power, they serve as pilots for our mighty machines. 
Alone, they're as threatening as a butterfly in a hurricane! *chuckles* They cannot attack, but their true power lies in their ability to bond 
with our mechanical titans!

### 🤖 The Mighty Mechs
```cpp
Mech(const std::string &name) : Element(name, 50, 10)
```
BEHOLD! Our mechanical gladiators! Each powered with 50 points of resilience and 10 points of devastating attack power! 
They've crushed mountains and leveled cities! But wait... there's more!

### 🦾 The Legendary DrivedMechs
```cpp
DrivedMech(std::shared_ptr<Character> c, std::shared_ptr<Mech> m)
```
*Voice rising with excitement*
When a human bonds with a mech, they become something greater! A fusion of flesh and steel! They combine their stats, their very essence becoming one! 
This is what we call a DrivedMech, ladies and gentlemen!

## 🎮 How The Battle System Works

### The Sacred Rules of Combat

1. Each warrior is an Element, blessed with:
   - A name to be sung in the halls of glory
   - Health points to endure the trials
   - Attack points to smite their foes
   - A status that marks them as living or fallen

2. The order of battle is circular, like the great arena itself! Each combatant attacks the next living warrior in line!

3. Combat continues until:
   - Only one warrior stands! VICTORY!
   - Or until all have fallen! TRAGEDY!

## 🏆 Running Your Own Tournament

To organize your own spectacular battle, follow these sacred steps:

```cpp
// Summon your warriors
auto character1 = std::make_shared<Character>("Marcus the Brave");
auto mech1 = std::make_shared<Mech>("Titanius Maximus");

// Create a legendary fusion
auto drivedMech1 = std::make_shared<DrivedMech>(character1, mech1);

// Add them to the grand arena
game.addElement(character1);
game.addElement(mech1);
game.addElement(drivedMech1);

// LET THE BATTLE BEGIN!
game.startBattle();
```

## 🎯 Files of Power

- **Element.hpp**: The sacred scroll defining all warriors
- **Character.hpp**: The manuscript of human limitations
- **Mech.hpp**: The blueprints of our mechanical titans
- **DrivedMech.hpp**: The forbidden texts of fusion
- **Game.hpp**: The very rules of the arena itself!

## 📜 Battle Dynamics

Each round, our system ensures:
- Dead warriors stay dead (no necromancy allowed in this arena!)
- Each living warrior attempts to attack the next living opponent
- Detailed battle reports are proclaimed for the audience's pleasure
- A winner is declared when they stand alone victorious!

## 🎥 Sample Battle Report

```
Initial Status:
Marcus the Brave - HP: 1, Attack: 0
Titanius Maximus - HP: 50, Attack: 10
DrivedMech: Marcus the Brave + Titanius Maximus - HP: 51, Attack: 10

Round 1:
Marcus the Brave cannot attack!
Titanius Maximus attacks DrivedMech for 10 damage!
...
```

*The arena master's voice drops to a theatrical whisper*

And now, dear code warriors, it's your turn to create history in our arena! May your algorithms be efficient and your battles legendary!

---

*Written by Marcus Compilius Debuggus*  
*Grand Master of the Mechanical Arena*  
*Keeper of the Sacred Source Code*

P.S. Should you witness any bugs in our sacred arena, please report them to the High Council of Code Review. We take our bloodsport seriously here! 🎭
