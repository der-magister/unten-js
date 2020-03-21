//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2017 Heiko Wolf
//
//   This program is free software; you can redistribute it and/or modify
//   it under the terms of the GNU General Public License As published by
//   the Free Software Foundation; either version 2 of the License, or
//   (at your option) any later version.
//
//   This program is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY Or FITNESS For A PARTICULAR PURPOSE.  See the
//   GNU General Public License For more details.
//
//   You should have received a copy of the GNU General Public License along
//   With this program; if not, write to the Free Software Foundation, Inc.,
//   51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//
//   Kontakt: unten@skywave-2000.de

var v_gegnerdaten = [
                      ["daten/gfk/kampf/gegner/ratte.png", "Ratte", 6, 6, 5, 6, "keine", 2, 1],
                      ["daten/gfk/kampf/gegner/spinne.png", "Spinne", 6, 6, 5, 6, "keine", 2, 1],
                      ["daten/gfk/kampf/gegner/schleim.png", "Schleim", 7, 7, 6, 6, "keine", 4, 2],
                      ["daten/gfk/kampf/gegner/fliegenschwarm.png", "Fliegenschwarm", 7, 7, 7, 6, "keine", 5, 3],  
                      ["daten/gfk/kampf/gegner/wurm.png", "Wurm", 8, 8, 7, 6, "keine", 5, 3 ],
                      ["daten/gfk/kampf/gegner/boss/rattenmensch.png", "Rattenmensch", 60, 60, 8, 9, "Zweifachschlag", 50, 20], //5
                      ["daten/gfk/kampf/gegner/fisch.png", "Fisch", 12, 12, 7, 7, "keine", 6, 3],                             
                      ["daten/gfk/kampf/gegner/krake.png", "Krake", 15, 15, 7, 7, "keine", 7, 4],
                      ["daten/gfk/kampf/gegner/boss/riesenkrake.png", "Riesenkrake", 80, 80, 9, 12, "Zweifachschlag", 70, 25],
                      ["daten/gfk/kampf/gegner/skorpion.png", "Skorpion", 18, 18, 8, 9, "keine", 10, 5],
                      ["daten/gfk/kampf/gegner/schlange.png", "Schlange", 20, 20, 8, 9, "keine", 11, 6],      //10
                      ["daten/gfk/kampf/gegner/boss/Pilzmensch.png", "Pilzmensch", 100, 100, 10, 13, "Zweifachschlag", 90, 30],
                      ["daten/gfk/kampf/gegner/Zombie.png", "Zombie", 22, 22, 9, 10, "keine", 15, 8],
                      ["daten/gfk/kampf/gegner/Fledermaus.png", "Fledermaus", 24, 24, 9, 11, "keine", 17, 9],
                      ["daten/gfk/kampf/gegner/boss/Puppengeist.png", "Puppengeist", 125, 125, 10, 14, "Dreifachschlag", 120, 45],
                      ["daten/gfk/kampf/gegner/Vogel.png", "Vogel", 28, 28, 9, 12, "keine", 20, 12],                        //15
                      ["daten/gfk/kampf/gegner/Windelementar.png", "Windelementar", 30, 30, 9, 13, "keine", 22, 13],
                      ["daten/gfk/kampf/gegner/boss/Steinriese.png", "Steinriese", 150, 150, 11, 15, "Dreifachschlag", 200, 70],
                      ["daten/gfk/kampf/gegner/Grüner-Schleim.png", "Grüner Schleim", 32, 32, 9, 13, "keine", 23, 16],
                      ["daten/gfk/kampf/gegner/Erdwurm.png", "Erdwurm", 33, 33, 9, 13, "keine", 24, 16],
                      ["daten/gfk/kampf/gegner/Riesenratte.png", "Riesenratte", 34, 34, 9, 13, "keine", 25, 18],         //20
                      ["daten/gfk/kampf/gegner/boss/Basilisk.png", "Basilisk", 180, 180, 12, 15, "Dreifachschlag", 500, 90],
                      ["daten/gfk/kampf/gegner/Wasserelementar.png", "Wasserelementar", 36, 36, 9, 13, "keine", 26, 19],
                      ["daten/gfk/kampf/gegner/Eismumie.png", "Eismumie", 37, 37, 9, 13, "keine", 27, 19],
                      ["daten/gfk/kampf/gegner/Eisfisch.png", "Eisfisch", 38, 38, 9, 13, "keine", 27, 19],
                      ["daten/gfk/kampf/gegner/boss/Frostriese.png", "Frostriese", 210, 210, 13, 16, "Vierfachschlag", 600, 120] //25
                    ];      
       
