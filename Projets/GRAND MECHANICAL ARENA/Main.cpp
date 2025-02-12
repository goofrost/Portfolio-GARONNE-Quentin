#include <iostream>
#include <memory>
#include "Game.hpp"
#include "Character.hpp"
#include "Mech.hpp"
#include "DrivedMech.hpp"

int main() {
    Game game;

    auto character1 = std::make_shared<Character>("Marcus the Brave");
    auto character2 = std::make_shared<Character>("Random guy");
    auto mech1 = std::make_shared<Mech>("Titanius Maximus");
    auto mech2 = std::make_shared<Mech>("Random mech");
    auto drivedMech1 = std::make_shared<DrivedMech>(character1, mech1);
    auto drivedMech2 = std::make_shared<DrivedMech>(character2, mech2);

    game.addElement(character1);
    game.addElement(character2);
    game.addElement(mech1);
    game.addElement(mech2);
    game.addElement(drivedMech1);
    game.addElement(drivedMech2);

    game.startBattle();

    return 0;
}