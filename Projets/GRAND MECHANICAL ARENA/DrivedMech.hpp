#ifndef DRIVEDMECH_HPP
#define DRIVEDMECH_HPP

#include "Character.hpp"
#include "Mech.hpp"

class DrivedMech : public Element {
    std::shared_ptr<Character> character;
    std::shared_ptr<Mech> mech;

public:
    DrivedMech(std::shared_ptr<Character> c, std::shared_ptr<Mech> m)
        : Element(c->getName() + " + " + m->getName(), 
                 c->getHealth() + m->getHealth(), 
                 c->getAttack() + m->getAttack()), 
          character(c), mech(m) {}

    void print() const override {
        std::cout << "DrivedMech: " << name << " - HP: " << healthPoints 
                 << ", Attack: " << attackPoints << (isDead ? " (Dead)" : "") << std::endl;
    }
};

#endif