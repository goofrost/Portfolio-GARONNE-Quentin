#ifndef CHARACTER_HPP
#define CHARACTER_HPP

#include "Element.hpp"

class Character : public Element {
public:
    Character(const std::string &name)
        : Element(name, 1, 0) {}

    void attack(std::shared_ptr<Element> target) override {
        std::cout << name << " cannot attack!" << std::endl;
    }
};

#endif
