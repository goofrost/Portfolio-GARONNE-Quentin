#ifndef MECH_HPP
#define MECH_HPP

#include "Element.hpp"

class Mech : public Element {
public:
    Mech(const std::string &name)
        : Element(name, 50, 10) {}
};

#endif