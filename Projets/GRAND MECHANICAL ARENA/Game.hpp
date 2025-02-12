#ifndef GAME_HPP
#define GAME_HPP

#include <vector>
#include <memory>
#include "Element.hpp"

class Game {
    std::vector<std::shared_ptr<Element>> elements;

public:
    void addElement(std::shared_ptr<Element> element) {
        elements.push_back(element);
    }

    int countAliveElements() const {
        int count = 0;
        for (const auto& elem : elements) {
            if (!elem->getIsDead()) {
                count++;
            }
        }
        return count;
    }

    void startBattle() {
        std::cout << "\nInitial Status:\n";
        for (auto &elem : elements) {
            elem->print();
        }

        int round = 1;
        while (countAliveElements() > 1) {  // Changed condition to check for more than 1 alive
            std::cout << "\nRound " << round++ << ":\n";
            
            for (size_t i = 0; i < elements.size(); ++i) {
                if (elements[i]->getIsDead()) continue;
                
                // Find next alive target
                size_t targetIndex = (i + 1) % elements.size();
                while (targetIndex != i && elements[targetIndex]->getIsDead()) {
                    targetIndex = (targetIndex + 1) % elements.size();
                }
                
                if (targetIndex != i) {  // Only attack if we found a valid target
                    elements[i]->attack(elements[targetIndex]);
                }
            }

            std::cout << "\nStatus after round " << round - 1 << ":\n";
            for (auto &elem : elements) {
                elem->print();
            }

            if (countAliveElements() <= 1) {
                std::cout << "\nBattle is over!\n";
                break;
            }
        }

        // Announce winner if there is one
        for (const auto& elem : elements) {
            if (!elem->getIsDead()) {
                std::cout << "\nWinner: " << elem->getName() << "!\n";
                return;
            }
        }
        std::cout << "\nNo survivors - everyone is dead!\n";
    }
};

#endif
