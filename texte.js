//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2017-2018 Heiko Wolf
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

var v_texte = ["",
           "Dorfhändler",
           "Zum Höhlensystem",           
           "Der Heiler kümmert sich um eure Wunden...",
           "Ihr benötigt keine Heilung.",
           "Kommt später zur mir, wenn ihr mächtiger seid.",                                                      //5
           "1. Ebene des Höhlensystems",
           "Eine verschlossene Luke versperrt euch den Weg.",
           "Nicht genügend Portalrollen vorhanden!",
           "Ihr steigt eine Stufe auf!",
           "Eure Lebenspunkte steigen um 8.",                                                                      //10
           "Eure Manapunkte steigen um eins.",
           "Eure Kraft steigt um eins.",
           "Eurer Geschick steig um eins.",
           "Eure Klugheit steigt um eins.",
           "Ihr habt keine Heiltränke",                                                                            //15
           "Eure Lebenspunkte sind voll, daher trinkt ihr keinen Heiltrank.",
           "Ihr habt keinen Manatrank!",
           "Eure Manapunkte sind voll, daher trinkt ihr keinen Manatrank.",
           "Spiel wurde gespeichert!",
           "Ihr habt keine Waren ausgewählt.",                                                                     //20
           "Ihr habt nicht genug Gold!",
           "Ihr zahlt ",
           " Goldmünzen.",
           "Nicht genug Manapunkte",
           "Eine verschlossene Tür versperrt euch den Weg.",                                                       //25
           "Kein Zauber ausgewählt!",
           "Ein grünschimmerndes Kraftfeld blockiert den Weg!"
          ];

var v_schildtexte = [ 
                      "Steige ab in die Dunkelheit...",
                      "Dritte Ebene...",
                      "Je tiefer hinab. umso dunkler wird es...",
                      "Der Tiefensee",
                      "Der Pilzwald",                                                                               
                      "Die Tempelruine"                                                                           //5
                ];

var v_questtexte = [  
                  "Aufgabe:",
                  "Im Höhlensystem gibt es einen Zauberstab. Geht runter und bringt",
                  "diesen Stab zu mir!",
                  "Ihr habt bereits eine Aufgabe!",
                  "Die Truhe ist verschlossen! Eine blauglühende Neun ist zu sehen.",
                  "Ihr findet in der Truhe einen Zauberstab.",                                                      //5
                  "Vielen Dank, dass ihr mir den Stab gebracht habt. Hier ist eure",
                  "Belohnung:",
                  "100 Goldmünzen und 25 Erfahrungspunkte erhalten!",
                  "Aufgabe:",
                  "Ein schöner roter Rubin soll sich da unten befinden.",                                           //10
                  "Geht runter und bringt ihn mir!",
                  "Die Truhe ist verschlossen! Eine blauglühende 40 ist zu sehen.",
                  "Ist er nicht wunderbar?! Danke für eure Mühe und hier ist eure Be-",
                  "lohnung:", 
                  "5 Heiltränke und 50 Erfahrungspunkte erhalten.",                                     //15
                  "Ihr findet in der Truhe einen Rubin.",
                  "Ich habe keine Aufgabe mehr für euch.",
                  "Der Rattenmensch wohnt im Höhlensystem. Tötet diese Bestie!",
                  "Rattenmensch töten",
                  "Endlich ist diese Bestie hinüber!",                                                             //20
                  "Hier ist eure Belohung:",
                  "1 Manatrank und 80 Erfahrungspunkte erhalten.",
                  "Die Blauschuppe ist beim Tiefensee zu finden. Holt diese mir!",
                  "Blauschuppe finden",
                  "Blauschuppe abgeben",                                                           //25
                  "Ihr findet in der Truhe die Blauschuppe.",
                  "Die Truhe ist verschlossen! Eine blauglühende 112 ist zu sehen.",
                  "Danke das Ihr mir die Blauschuppe gebracht habt. Hier das ist eure:",
                  "Belohnung:",
                  "Zwei Portalrollen und 100 Erfahrungspunkte erhalten.",             //30
                  "Geht zum Tiefensee und tötet den Riesenkrake!",
                  "Riesenkrake töten",
                  "Ihr wart also erfolgreich. Hier ist eure Belohnung:",
                  "1 Manatrank und 120 Erfahrung erhalten.",                        
                  "Im Pilzwald soll sich ein seltener Eichensamen",                               //35
                  "befinden. Sucht diesen Samen und bringt ihn mir!",
                  "Eichensamen finden",
                  "Eichensamen abgeben",
                  "Ihr findet einen Eichensamen in der Truhe",
                  "Danke für eure Mühe. Hier eure Belohnung:",                                  //40
                  "150 Gold und 150 Erfahrungspunkte erhalten",
                  "Der Pilzmensch lauert im Pilzwald. Sucht ihn und tötet dieses Monster!",
                  "Pilzmensch töten",
                  "8 Heiltränke und 300 Erfahrungspunkte erhalten",
                  "Keine Aufgabe aktiv",                                                       //45
                  "Ein Puppengeist geistert in der Tempelruine umher. Findet dieses Monster",
                  "und schafft es aus dieser Welt!",
                  "Puppengeist töten",
                  "Puppengeist getötet",
                  "Keine Aufgabe aktiv",                                                        //50
                  "2 Manatränke und 300 Erfahrungspunkte erhalten.",                                     
                  "In der Ebene ist ein seltendes Eisen zu finden. Geht dahin und bringt mir",
                  "einen Eisenstein.",
                  "450 Gold und 250 Erfahrungspunkte erhalten.",                                
                  "Ein schrecklicher Steinriese lauert in der Ebene. Macht euch dahin und",     //55
                  "tötet dieses Biest!",           
                  "1 Portalrolle, 1 Manatrank und 400 Erfahrungspunkte erhalten.",
                  "In der Globule ist die Seherkugel versteckt. Findet die Kugel und",
                  "bringt sie ins Dorf zurück.",                                                   
                  "300 Gold, 3 Heiltränke und 250 Erfahrungspunkte erhalten.",                   //60
                  "Seherkugel abgeben",
                  "Ihr holt die Seherkugel aus der Truhe...",
                  "Die Globule wird von dem Basilisk beherrscht. Erschlagt dieses",
                  "Monster und kehrt danach zu mir zurück!",
                  "5 Heiltränke, 2 Portalrollen und 500 Erfahrungspunkte erhalten."             //65
               ];

var v_kampftexte = [  
                  " wird von euch zuerst angegriffen.",
                  " greift euch zuerst an!",
                  "Ihr geht siegreich aus dem Kampf hervor!",
                  "Schlachfeld ist erledigt.",
                  " Erfahrungspunkte erhalten.",                                                                   
                  " Gold erhalten.",                                                                          //5
                  "Ihr erhaltet einen Heiltrank.",
                  "Ihr erhaltet einen Manatrank",
                  "Ihr erhaltet eine Portalrolle",
                  "Ihr flüchtet aus dem Kampf.",
                  "Eure Flucht misslingt!",                                                                         //10
                  "Schlachtfeld erledigt!",
                  "BOSSKAMPF: ",
                  "Ihr seid tot. GAME OVER!"
               ];

var v_truhentexte = [ 
                  "Die Truhe ist offen und leer...",
                  "Ihr öffnet die Truhe und findet: ",
                  "Ihr öffnet die Truhe und findet: ",
                  "Ihr öffnet die Truhe und findet: ",
                  "Ihr öffnet die Truhe und findet ein Kurzschwert darin.",
                  "Ihr öffnet die Truhe und findet eine Portalrolle darin.",                                  //5
                  "Ihr öffnet die Truhe und findet eine Lederrüstung darin.",
                  "Die Truhe ist verschlossen! Eine blauglühende 90 ist zu sehen.",
                  "Ihr öffnet die Truhe und findet 100 Gold darin.",
                  "Ihr öffnet die Truhe und findet ein Holzschild darin.",
                  "Die Truhe ist verschlossen! Eine blauglühende 123 ist zu sehen.",                         //10
                  "Ihr erhaltet den Zauber Regnen!",
                  " Gold",
                  " Heiltrank",
                  " Manatrank",
                  " Portalrolle",                                                                           //15
                  "Ihr erhaltet den Zauber Sporen!",
                  "Die Truhe ist verschlossen! Eine blauglühende 156 ist zu sehen.",
                  " 60 Gold",
                  "Proviant"
                ];


// Texte zu Waffen
var v_waffenitemtexte =
[
  "Dolch",
  "Stock",
  "Rostiges Kurzschwert",
  "Rostiger Langdolch",
  "Ast",
  "Bronzekurzschwert",                                                                                    //5
  "Bronzelangdolch",
  "Wanderstock",
  "Eisenkurzschwert",
  "Eisenlangdolch",
  "Eibenkurzstab",                                                                                        //10
  "Stahlkurzschwert",
  "Stahllangdolch",
  "Eibenstab",
  "Bronzeschwert",
  "Bronzezackendolch",                                                                                   //15
  "Kurzer Kampfstab",
  "Eisenschwert",
  "Eisenzackendolch",
  "Kampfstab",
  "Stahlschwert",                                                                                       //20
  "Stahlzackendolch",
  "Magierstab"
];

//Texte zu Rüstungen
var v_ruestungsitemtexte =
[
  "Straßenkleidung",
  "Wappenrock",
  "Feste Kleidung",
  "Leichte Robe",
  "Lederüstung",
  "Leichte Lederrüstung",                                                                                 //5
  "Kutte",
  "Kettenhemd",
  "Lederüstung",
  "Leinenrobe",
  "Eisenküras",                                                                                          //10
  "Nietenlederrüstung",
  "Baumwollrobe",
  "Ritterrüstung",
  "Schwarzlederrüstung",
  "Drachenhautrobe"                                                                                     //15
];

var v_schilditemtexte =
[
  "keins",
  "Holzschild",
  "Parierdolch",
  "Grünes Energiefeld",
  "Lederschild",
  "Parierstange",                                                                                      //5
  "Gelbes Energiefeld",                                                                                
  "Schwarzlederschild",
  "Handholzschild",
  "Oranges Energieschild",
  "Stahlschild",                                                                                      //10
  "Handeisenschild",                                                                                  
  "Blaues Energiefeld",
  "Großschild",
  "Handstahlschild",
  "Weißes Energieschild"                                                                              //15
];
