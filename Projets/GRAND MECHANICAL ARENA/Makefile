CXX = g++
CXXFLAGS = -std=c++17 -Wall

all: game

game: main.o Game.o Element.o Character.o Mech.o DrivedMech.o
	$(CXX) $(CXXFLAGS) -o game main.o Game.o Element.o Character.o Mech.o DrivedMech.o

main.o: main.cpp
	$(CXX) $(CXXFLAGS) -c main.cpp

Game.o: Game.cpp
	$(CXX) $(CXXFLAGS) -c Game.cpp

Element.o: Element.cpp
	$(CXX) $(CXXFLAGS) -c Element.cpp

Character.o: Character.cpp
	$(CXX) $(CXXFLAGS) -c Character.cpp

Mech.o: Mech.cpp
	$(CXX) $(CXXFLAGS) -c Mech.cpp

DrivedMech.o: DrivedMech.cpp
	$(CXX) $(CXXFLAGS) -c DrivedMech.cpp

clean:
	rm -f *.o game
