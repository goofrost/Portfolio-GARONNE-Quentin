#ifndef ELEMENT_H
#define ELEMENT_H

#include <string>
#include <iostream>
#include <memory>

class Element {
protected:
    std::string name;
    int healthPoints;
    int attackPoints;
    bool isDead;

public:
    Element(const std::string &name, int health, int attack)
        : name(name), healthPoints(health), attackPoints(attack), isDead(false) {}

    virtual void attack(std::shared_ptr<Element> target) {
        if (!isDead) {
            std::cout << name << " attacks " << target->getName() << " for " << attackPoints << " damage!" << std::endl;
            target->takeDamage(attackPoints);
        }
    }

    virtual void takeDamage(int damage) {
        if (!isDead) {
            healthPoints -= damage;
            if (healthPoints <= 0) {
                healthPoints = 0;
                isDead = true;
                std::cout << name << " is dead!" << std::endl;
            } else {
                std::cout << name << " has " << healthPoints << " HP remaining!" << std::endl;
            }
        }
    }

    bool getIsDead() const { return isDead; }
    std::string getName() const { return name; }
    int getHealth() const { return healthPoints; }
    int getAttack() const { return attackPoints; }

    virtual void print() const {
        std::cout << name << " - HP: " << healthPoints << ", Attack: " << attackPoints;
        if (isDead) {
            std::cout << " (Dead)";
        }
        std::cout << std::endl;
    }

    virtual ~Element() {}
};

#endif