//   Unten - ein Rollenspiel im Retrodesign
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

"use strict";

var v_kaufheiltrank = document.getElementById ("KaufHeiltrank");
var v_kaufmanatrank = document.getElementById ("KaufManatrank");
var v_kaufportalrolle = document.getElementById ("KaufPortalrolle");
var v_kaufproviant = document.getElementById ("KaufProviant");

//Startbildschirmbuttons
var v_buttonNSpiel = document.getElementById ("ButtonNSpiel");
var v_buttonASpiel = document.getElementById ("ButtonASpiel");
var v_buttonKredits = document.getElementById ("ButtonKredits");

var v_textName = document.getElementById ("TextName");

//Steuerbuttons
var v_buttonN = document.getElementById ("ButtonN");
var v_buttonS = document.getElementById ("ButtonS");
var v_buttonW = document.getElementById ("ButtonW");
var v_buttonO = document.getElementById ("ButtonO");
var v_buttonI = document.getElementById ("ButtonI");

//Inventarbuttons
var v_buttonHeiltrank = document.getElementById ("ButtonHeiltrank");
var v_buttonManatrank = document.getElementById ("ButtonManatrank");
var v_buttonPortalrolle = document.getElementById ("ButtonPortalrolle");

//Verlassen-/Fluchtbutton
var v_buttonVerlassen = document.getElementById ("ButtonVerlassen");

//Canvas
var v_fenstercanvas = document.getElementById ("fenstercanvas");
var v_fenstercanvas_context = v_fenstercanvas.getContext ("2d");

var v_ausgabecanvas = document.getElementById ("ausgabecanvas");
var v_ausgabecanvas_context = v_ausgabecanvas.getContext ("2d");

var v_enginecanvas = document.getElementById ("enginecanvas");
var v_enginecanvas_context = v_enginecanvas.getContext ("2d");

var v_kampfhintergrundcanvas = document.getElementById ("hintergrundcanvas");
var v_kampfhintergrundcanvas_context = v_kampfhintergrundcanvas.getContext ("2d");

var v_statuscanvas = document.getElementById ("statuscanvas");
var v_statuscanvas_context = v_statuscanvas.getContext ("2d");

var v_ausgabe2canvas = document.getElementById ("ausgabe2canvas");
var v_ausgabe2canvas_context = v_ausgabe2canvas.getContext ("2d");

var v_kampfmeldungscanvas = document.getElementById ("kampfmeldungscanvas");
var v_kampfmeldungscanvas_context = v_kampfmeldungscanvas.getContext ("2d");

var v_lvl = 1;
var v_zone = "Gebiet";
var v_keylock = false;
var v_go = false;
var v_schlachtfeld = 0;
var v_version_old = "";
var v_version = "004b";
var v_stand = "neu";

var v_hintergrundcanvas = document.getElementById ("hintergrundcanvas");
var v_hintergrundcanvas_context = v_hintergrundcanvas.getContext ("2d");

var v_hintergrund = new Image ();

//var win = nw.Window.get ();

v_hintergrund.src = "daten/gfk/gui/hintergrund.png";

//Ressourcen
var v_gamemap = [[]];
var v_background = new Image ();

var v_musikArray = new Array ();

for (let v_i = 0; v_i <= 10; v_i++) 
{ 
  v_musikArray [v_i] = new Audio();
  v_musikArray [v_i].loop = true;
}

var v_soundArray = new Array ();

for (let v_i = 0; v_i <= 6; v_i++) 
{ 
  v_soundArray [v_i] = new Audio();
  v_soundArray [v_i].loop = false;
}

var o_charakter = new c_charakter ();
var o_engine = new c_engine ();
var o_fenster = new c_fenster ();
var o_ausgabe = new c_ausgabe ();
var o_sound = new c_sound ();
var o_musik = new c_musik ();
var o_gui = new c_gui ();
var o_heiler = new c_heiler ();
var o_haendler = new c_haendler ();
var o_heiltrank = new c_heiltrank ();
var o_manatrank = new c_manatrank ();
var o_medizintrank = new c_medizintrank ();
var o_portalrolle = new c_portalrolle ();
var o_proviant = new c_proviant ();
var o_truhen = new c_truhen ();
var o_schlachtfelder = new c_schlachtfelder ();
var o_schilder = new c_schilder ();
var o_questen = new c_questen ();
var o_gegner = new c_gegner ();
var o_flucht = new c_flucht ();
var o_zauber = new c_zauber ();
var o_kampf = new c_kampf ();
var o_portale = new c_portale ();
var o_manabrunnen = new c_manabrunnen ();
var o_gfx = new c_gfx ();

var o_lvl0001 = new c_lvl0001 ();
var o_lvl0002 = new c_lvl0002 ();
var o_lvl0003 = new c_lvl0003 ();
var o_lvl0004 = new c_lvl0004 ();
var o_lvl0005 = new c_lvl0005 ();
var o_lvl0006 = new c_lvl0006 ();
var o_lvl0007 = new c_lvl0007 ();
var o_lvl0008 = new c_lvl0008 ();
var o_lvl0009 = new c_lvl0009 ();
var o_lvl0010 = new c_lvl0010 ();
var o_lvl0011 = new c_lvl0011 ();
var o_lvl0012 = new c_lvl0012 ();
var o_lvl0013 = new c_lvl0013 ();
var o_lvl0014 = new c_lvl0014 ();
var o_lvl0015 = new c_lvl0015 ();
var o_lvl0016 = new c_lvl0016 ();
var o_lvl0017 = new c_lvl0017 ();
var o_lvl0018 = new c_lvl0018 ();
var o_lvl0019 = new c_lvl0019 ();
var o_lvl0020 = new c_lvl0020 ();
var o_lvl0021 = new c_lvl0021 ();
var o_lvl0022 = new c_lvl0022 ();
var o_lvl0023 = new c_lvl0023 ();
var o_lvl0024 = new c_lvl0024 ();
var o_lvl0025 = new c_lvl0025 ();
var o_lvl0026 = new c_lvl0026 ();
var o_lvl0027 = new c_lvl0027 ();
var o_lvl0028 = new c_lvl0028 ();
var o_lvl0029 = new c_lvl0029 ();
var o_lvl0030 = new c_lvl0030 ();
var o_lvl0031 = new c_lvl0031 ();
var o_lvl0032 = new c_lvl0032 ();
var o_lvl0033 = new c_lvl0033 ();
var o_lvl0034 = new c_lvl0034 ();
var o_lvl0035 = new c_lvl0035 ();
var o_lvl0036 = new c_lvl0036 ();
var o_lvl0037 = new c_lvl0037 ();
var o_lvl0038 = new c_lvl0038 ();
var o_lvl0039 = new c_lvl0039 ();
var o_lvl0040 = new c_lvl0040 ();
var o_lvl0041 = new c_lvl0041 ();
var o_lvl0042 = new c_lvl0042 ();
var o_lvl0043 = new c_lvl0043 ();

var o_laden = new c_laden ();
var o_speichern = new c_speichern ();

v_version_old = localStorage.getItem ("unten_version");

if (v_version_old == null)
{
  document.getElementById ("ButtonASpiel").disabled = "true";
  document.getElementById ("ButtonASpiel").title = "Kein gespeichertes Spiel vorhanden.";
}

//Zufallszahlgenerator
function f_randomize (v_min, v_max) 
{
	return Math.floor (Math.random () * (v_max - v_min + 1)) + v_min;
}

//Eventlistener Startscreen
document.getElementById ("ButtonNSpiel").addEventListener ("click", f_init, false);
document.getElementById ("ButtonASpiel").addEventListener ("click", f_init2, false);

document.getElementById ("TextName").value = "Hier Charakternamen eingeben"
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

function f_leveldaten ()
{
  if (v_lvl == 1)
  {
     v_gamemap = [
      [".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],
      [".","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","."],
      [".","=",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","=","."],
      [".","=",".",".",".",".",".",".",".",".",".",".",".","=","=","=","=","=",".","=","."],
      [".","=",".",".",".",".",".",".",".",".",".","2",".","=","-","-","-","=",".","=","."],
      [".","=",".","+","+","+",".",".",".",".","+","+","+","X","-","#","-","=",".","=","."],
      [".","=",".","+","1","+",".",".",".",".","+",".","T","=","-","-","-","=",".","=","."],
      [".","=",".","+","+","+",".",".",".",".","+",".",".","=","=","=","=","=",".","=","."],
      [".","=",".",".","+",".",".",".",".",".","+",".",".",".",".",".",".",".",".","=","."],
      [".","=",".",".","+","+","+","+","+","+","+",".",".",".",".",".",".",".",".","=","."],
      [".","=",".",".",".",".",".","+",".",".",".",".",".",".",".",".",".",".",".","=","."],
      [".","=",".","=","=","=",".","+","+",".",".",".",".",".",".","+","+","+",".","=","."],
      [".","=",".","=","-","=",".",".","+","+","+",".",".",".",".","+","+","+",".","=","."],
      [".","=",".","=","-","-","=",".",".",".","+",".",".",".",".","+","+","+",".","=","."],
      [".","=",".","=","-","-","-","=",".",".","+",".",".",".",".",".","+",".",".","=","."],
      [".","=",".","=","-","O","-","X","+","+","+","+","+","+","+","+","+",".",".","=","."],
      [".","=",".","=","-","-","-","=","T",".",".",".",".",".",".",".",".",".",".","=","."],
      [".","=",".","=","=","=","=","=",".",".",".",".","O",".",".",".",".",".",".","=","."],
      [".","=",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","=","."],
      [".","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","."],
      [".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."]
    ];
  }
  else if (v_lvl == 2)
  {
    v_gamemap = [
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","+","+","+","+","f","+","+","+","f","f","f","+","?","+","f","f","f","T","f"],
      ["f","+","f","f","f","+","f","+","[","+","f","f","f","+","+","+","f","f","f","+","f"],
      ["f","+","f","f","f","+","f","+","+","+","f","f","f","f","X","f","f","f","f","#","f"],
      ["f","+","f","f","f","+","f","f","X","f","f","f","f","f","+","f","f","f","f","+","f"],
      ["f","+","f","f","f","+","f","f","+","f","f","f","f","+","+","f","f","f","f","+","f"],
      ["f","+","f","f","f","+","+","+","+","+","+","s","+","+","f","f","f","f","f","+","f"],
      ["f","s","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","s","f"],
      ["f","+","f","+","+","+","+","s","+","+","+","+","f","+","+","+","+","f","f","+","f"],
      ["f","+","f","+","f","f","f","f","f","f","f","+","f","+","?","+","+","+","X","+","f"],
      ["f","+","f","+","f","f","f","f","f","f","f","+","f","+","+","+","+","f","f","+","f"],
      ["f","+","f","+","f","f","f","f","f","f","f","+","f","f","f","f","f","f","f","+","f"],
      ["f","+","f","+","+","+","+","s","+","+","f","+","+","+","+","s","+","+","+","+","f"],
      ["f","+","f","f","f","f","f","f","f","+","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","s","f","f","f","f","f","f","f","+","+","+","+","s","+","+","+","+","+","+","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f"],
      ["f","+","f","+","+","f","+","s","+","f","f","f","f","f","f","f","f","f","f","s","f"],
      ["f","+","f","+","+","f","+","f","+","f","f","f","f","f","f","f","f","f","f","+","f"],
      ["f","+","f","+","+","f","+","f","+","f","f","+","+","s","+","+","f","f","f","+","f"],
      ["f","+","+","+","s","+","+","f","+","+","+","+","f","f","f","+","+","s","+","+","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]
    ];
  }
  else if (v_lvl == 3)
  {
    v_gamemap = [
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","T","f","f","f","+","+","+","f","+","+","+","+","f","f","f","f","f","f"],
      ["f","f","f","+","f","f","f","+","[","+","f","+","f","f","+","f","f","f","f","f","f"],
      ["f","f","f","+","f","f","f","+","+","+","f","+","f","f","+","f","f","f","f","f","f"],
      ["f","f","f","s","f","f","f","f","X","f","f","+","f","f","+","f","f","f","f","f","f"],
      ["f","f","f","+","f","f","f","f","+","+","s","+","f","f","+","+","s","+","+","+","f"],
      ["f","f","f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f"],
      ["f","f","f","+","f","f","f","f","+","s","+","+","+","+","+","+","+","+","s","+","f"],
      ["f","#","+","+","f","f","f","f","+","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","+","f","f","f","f","+","s","+","+","+","+","+","+","+","+","+","+","f"],
      ["f","+","s","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f"],
      ["f","+","f","+","f","f","f","f","+","+","+","f","f","f","+","+","+","f","f","+","f"],
      ["f","+","s","+","f","f","f","f","+","?","+","f","f","f","+","?","+","+","X","+","f"],
      ["f","f","+","f","f","f","f","f","+","+","+","f","f","f","+","+","+","f","f","+","f"],
      ["f","f","+","+","s","+","+","f","f","+","f","f","f","f","f","f","f","f","f","+","f"],
      ["f","f","f","f","f","f","+","f","f","X","f","f","f","f","+","+","s","+","+","+","f"],
      ["f","f","f","f","f","f","+","f","f","+","f","f","f","f","+","f","f","f","f","f","f"],
      ["f","+","+","s","+","+","+","f","f","+","f","f","f","f","+","+","s","+","+","+","f"],
      ["f","+","f","f","f","f","f","f","f","+","f","f","f","f","f","f","f","f","f","+","f"],
      ["f","+","s","+","+","+","+","+","+","s","+","+","+","+","+","+","+","+","s","+","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]

    ];
  }
  else if (v_lvl == 4)
  {
    v_gamemap = [
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","s","+","+","+","+","+","s","+","f","+","+","+","+","s","+","+","+","+","f"],
      ["f","+","f","f","f","f","f","+","f","+","f","s","f","f","f","f","f","f","f","+","f"],
      ["f","+","f","f","f","f","f","T","f","+","f","+","f","f","+","+","+","f","f","+","f"],
      ["f","+","s","+","s","+","f","f","f","s","f","+","f","f","+","?","+","X","+","+","f"],
      ["f","f","f","f","f","+","f","f","f","+","f","+","f","f","+","+","+","f","f","+","f"],
      ["f","+","+","f","f","+","f","f","f","+","f","+","f","f","f","f","f","f","f","s","f"],
      ["f","#","+","X","+","+","f","+","+","+","f","+","f","f","+","+","+","+","+","+","f"],
      ["f","+","+","f","f","f","f","+","f","f","f","s","f","f","s","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","s","f","f","f","+","f","f","+","+","+","+","+","+","f"],
      ["f","f","f","f","f","f","f","+","f","f","f","+","f","f","f","f","f","f","f","+","f"],
      ["f","+","+","+","s","+","+","+","f","f","f","+","f","f","f","f","f","f","f","+","f"],
      ["f","s","f","f","f","f","f","f","f","f","f","+","f","f","f","f","+","s","+","+","f"],
      ["f","+","f","f","+","+","f","f","f","f","f","+","f","f","f","f","+","f","f","f","f"],
      ["f","+","+","X","+","?","f","f","f","f","f","+","f","f","f","f","+","f","f","f","f"],
      ["f","+","f","f","+","+","f","f","f","f","f","s","f","f","f","+","+","+","+","+","f"],
      ["f","+","f","f","f","f","f","f","f","+","+","+","f","f","f","s","f","f","f","s","f"],
      ["f","+","f","f","f","f","f","f","f","+","f","f","f","f","f","+","+","+","+","+","f"],
      ["f","s","f","+","+","+","s","+","+","+","f","f","f","f","f","f","f","f","+","f","f"],
      ["f","+","+","+","f","f","f","f","f","f","f","f","[","+","X","+","s","+","+","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]
    ];
  }
  else if (v_lvl == 5)
  {
    v_gamemap = [
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","+","+","+","s","+","+","+","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","+","+","f","f","f","f","f","+","+","+","+","s","+","+","+","+","+","f","f"],
      ["f","s","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f","f"],
      ["f","+","+","s","+","+","+","+","f","f","f","+","+","s","+","+","f","f","[","f","f"],
      ["f","f","f","f","f","f","f","+","f","f","f","+","f","f","f","+","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","+","+","+","+","+","f","f","f","+","f","f","+","+","f"],
      ["f","+","+","s","+","f","f","f","f","f","f","f","f","f","f","+","+","X","+","?","f"],
      ["f","+","f","f","+","+","+","+","s","+","+","+","s","+","+","+","f","f","+","+","f"],
      ["f","+","+","s","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","+","+","+","+","s","+","+","+","+","f","f","+","+","+","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","+","f","f","+","?","+","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","+","f","f","+","+","+","f","f","f","f","f"],
      ["f","f","f","+","+","+","s","+","+","+","+","f","f","f","X","f","f","f","f","f","f"],
      ["f","f","f","+","f","f","f","f","f","f","f","f","f","f","+","f","f","f","f","f","f"],
      ["f","f","f","+","f","f","f","f","f","f","f","f","f","f","+","f","f","f","f","f","f"],
      ["f","f","f","+","+","+","+","+","s","+","+","+","+","+","+","+","s","+","+","+","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","#","+","+","+","+","+","+","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]
    ];
  }
  else if (v_lvl == 6)
  {
    v_gamemap = [
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","+","+","+","+","+","+","+","s","+","+","+","+","+","+","+","+","+","[","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","+","+","+","+","+","+","+","s","+","+","+","+","+","+","+","+","+","+","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f"],
      ["f","+","+","+","+","+","+","+","+","s","+","+","+","+","+","+","+","+","+","+","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","+","+","+","+","+","+","+","s","+","+","+","+","+","+","+","+","+","+","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f"],
      ["f","+","+","+","+","+","+","+","+","s","+","+","+","+","+","+","+","+","+","+","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","+","+","+","+","+","+","+","s","+","+","+","+","+","+","+","+","+","+","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f"],
      ["f","+","+","+","+","+","+","+","+","s","+","+","+","+","+","+","+","+","+","+","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","+","+","+","+","+","+","+","s","+","+","+","+","+","+","+","+","+","+","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f"],
      ["f","+","+","+","+","+","+","+","+","s","+","+","+","+","+","+","+","+","+","+","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","+","+","+","+","+","+","+","s","+","+","+","+","+","+","+","+","+","#","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]
    ];
  }
  else if (v_lvl == 7)
  {
    v_gamemap = [
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","+","+","+","f","f","f","f","+","+","+","+","s","+","+","+","+","[","f","f"],
      ["f","f","+","f","+","f","f","f","f","+","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","+","f","+","+","s","+","+","+","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","s","f","f","f","f","f","f","f","f","+","+","+","f","f","f","f","f","f","f"],
      ["f","f","+","f","f","f","f","f","f","f","f","+","?","+","f","f","f","f","f","f","f"],
      ["f","f","+","f","f","f","f","f","f","f","f","+","+","+","f","f","f","f","f","f","f"],
      ["f","f","+","f","f","f","f","f","f","f","f","f","X","f","f","f","f","f","f","f","f"],
      ["f","f","+","f","f","f","f","f","f","f","f","f","+","f","f","f","f","f","f","f","f"],
      ["f","f","+","f","f","f","f","f","+","+","s","+","+","+","+","s","+","+","f","f","f"],
      ["f","f","+","f","f","f","f","f","+","f","f","f","f","f","f","f","f","+","f","f","f"],
      ["f","f","+","f","f","f","f","f","s","f","f","f","f","f","f","f","f","+","f","f","f"],
      ["f","f","+","f","f","f","f","f","+","f","f","f","f","f","f","f","f","+","+","T","f"],
      ["f","f","+","f","f","f","f","f","+","+","+","s","+","+","+","f","f","+","f","f","f"],
      ["f","f","+","f","f","f","f","f","f","f","f","f","f","f","+","f","f","+","f","f","f"],
      ["f","f","+","f","f","f","f","f","f","f","f","f","f","f","s","f","f","+","f","f","f"],
      ["f","f","s","f","f","f","f","f","f","f","f","f","f","f","+","f","f","s","f","f","f"],
      ["f","f","+","f","f","+","+","+","+","+","s","+","+","+","+","f","f","+","f","f","f"],
      ["f","f","+","f","f","+","f","f","f","f","f","f","f","f","f","f","f","+","f","f","f"],
      ["f","f","+","+","+","+","f","f","f","f","f","f","f","f","f","f","f","+","+","#","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]
    ];
  }
  else if (v_lvl == 8)
  {
    v_gamemap = [
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","[","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","s","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f"],
      ["f","f","f","f","f","f","f","f","f","f","+","+","s","+","+","+","+","s","+","+","f"],
      ["f","f","f","f","f","f","f","f","f","f","+","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","s","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","+","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","+","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","s","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","+","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","+","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","+","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","s","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","+","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","+","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","+","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","#","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]
    ];
  }
  else if (v_lvl == 9)
  {
    v_gamemap = [
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","#","f","f"],
      ["f","+","+","+","s","+","+","+","+","+","+","+","s","+","+","+","+","+","+","f","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","s","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","s","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","+","+","+","f","f","f","f","f","f","f"],
      ["f","+","+","+","+","s","+","+","+","+","X","+","?","+","f","f","f","f","f","f","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","+","+","+","f","f","f","f","f","f","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","s","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","s","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","+","+","+","s","+","+","+","+","+","+","+","s","+","+","+","+","+","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","[","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]
    ];
  }
  else if (v_lvl == 10)
  {
    v_gamemap = [
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","[","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","+","f","f"],
      ["f","f","+","+","+","+","+","+","+","+","S","+","+","+","+","+","+","+","+","f","f"],
      ["f","f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","+","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","#","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"],
      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]
    ];

  }
  else if (v_lvl == 11)
  {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","T","=","#","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","=","-","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","-","-","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=",".","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","-","-",".","-","-","-","-","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","-","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","-","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","-","-","=","=","=","=","=",".","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","-","=","=","="],
      ["=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","-","-","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","=","=","=","=","-","-","-","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","-","-",".","-","-","=","=","=","=","=","="],
      ["=","=","=","=","=","-",".","-","-","-","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","-","-","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=",".","-","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","-","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["#","-","-","-","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ];
  }
  else if (v_lvl == 12)
  {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","#","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","="],
      ["=","=","=","=","=","=","=","=","=","=","-","-","-","-","-","-",".","-","-","-","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","-","-","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","?","-","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","-","-","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","-","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","-","-","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","-","-","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","-","-","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","-","-",".","-","-","#"],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ];
  }
  else if (v_lvl == 13)
  {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","-","-","-","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","-","?","-","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","-","-","-","-","-","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","-","-","=","=","=","=","=","=","=","-","-","-","=","="],
      ["=","=","=","=","=","=","-","-","=","=","=","=","=","=","=","=","-","?","-","=","="],
      ["=","=","=","=","=","-","-","=","=","=","=","=","=","=","=","=","-","-","-","=","="],
      ["=","=","=","=","-","-","=","=","=","=","=","=","=","=","=","-","-","=","=","=","="],
      ["=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","="],
      ["=","=","=","=","-","=","=","=","=","=","=","=","=","=","=",".","=","=","=","=","="],
      ["=","=","=","=",".","=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","="],
      ["=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","="],
      ["=","=","=","=","-","-","-","-",".","-","-",".","-","-","-","-","=","=","=","=","="],
      ["=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","-","-","=","=","=","="],
      ["#","-",".","-","-","=","=","=","=","=","=","=","=","=","=","=","-","-",".","-","#"],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ];
  }
  else if (v_lvl == 14)
  {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","-","-","-","-","-","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","-","-","?","-","-","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","-","-","-","-","-","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","-","-","-","-","-","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","-","-","-","-","-","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","-","-","-","-","-","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["#","-",".","-","-","-",".","-","-","-",".","-","-","-",".","-","-","-",".","-","#"],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ];
  }
  else if (v_lvl == 15)
  {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","-","-","#"],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","-","-","-"],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","-","-","-"],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","-","-","-","-","-","-"],
      ["=","=","=","=","=","=","=","=","=","=","=","=","-","-","-","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","-","-","-","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","="],
      ["#","-","-","-","-","-","-","-","-","-","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ];
  }
  else if (v_lvl == 16)
  {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","T","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","-","-","-",".","-","-","-",".","-","-","-",".","-","-","#"],
      ["=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","-","-","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","-","-","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","-","-","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","-","-","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["#","-","-","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ];
  }
  else if (v_lvl == 17)
  {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","#","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","-","-","-","="],
      ["#","-","-","-","-",".","-","-","-","-","-","-","-","-",".","-","-","-","?","-","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","-","-","-","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","#","=","=","=","=","=","=","=","=","=","="]
    ];
  }
  else if (v_lvl == 18)
  {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","-","-","-",".","-","-",".","-","-","#"],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","#","=","=","=","=","=","=","=","=","=","="]
    ];
  }
  else if (v_lvl == 19)
  {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","-","-","-","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","-","-","-","="],
      ["#","-",".","-","-",".","-","-","-",".","-","-",".","-","-","-","-","-","?","-","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","-","-","-","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","-","-","-","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ];
  }
  else if (v_lvl == 20)
  {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","#","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","-","-","-",".","-","-","-",".","-","#"],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ];
  }
  else if (v_lvl == 21)
  {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","-","-","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","?","-","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","-","-","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=",".","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","=","=","=","="],
      ["#","-","-","-",".","-","-",".","-","-","-","-",".","-","-","-","-","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","-","=","=","=","=","=","=","-","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","-","=","=","=","="],
      ["=","=","=","=","=","=","=","-","-","-","=","=","=","=","=","=",".","=","=","=","="],
      ["=","=","=","=","=","=","=","-","=","=","=","=","=","=","=","=","-","=","=","=","="],
      ["=","-","-","-","-","=","=",".","=","=","=","=","=","=","=","=","-","-","-","=","="],
      ["=","-","-","-","-","=","-","-","=","=","=","=","=","=","=","=","=","=","-","-","#"],
      ["=","-","?","-","-","-","-","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","-","-","-","-","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","-","-","-","-","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ]
  }
  else if (v_lvl == 22)
  {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","-","-","-",".","-","-","-","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","-","-","=","=","=","=","=","-","-","=","=","=","=","=","="],
      ["=","=","=","=","=","-","-","=","=","=","=","=","=","=","-","-","=","=","=","=","="],
      ["=","=","=","=","-","-","=","=","=","=","=","=","=","=","=","-","-","=","=","=","="],
      ["=","=","=","-","-","=","=","=","=","=","=","=","=","=","=","=","-","-","=","=","="],
      ["=","=","-","-","=","=","=","=","=","=","=","=","=","=","=","=","=","-","-","=","="],
      ["#","-","-","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","-","-","#"],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ]
  }
  else if (v_lvl == 23)
  {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","?","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","=","=","=","=","=","=","=","="],
      ["-","-","-","-","-","-","-",".","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","=","+","+",".","+","#","+","="],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","-","+","-","-","-","-","T","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","-","+","+","+",".","+","+","X","+",".","+","+","+","+","="],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","=","+","+",".","+","+","+","="],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","+","+","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","+","+","-","-","-","-","-","-","=","=","=","=","=","=","=","="],
      ["#","+","+",".","+","+","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 24)
  {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","=","=","=","=","=","=","="],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","+","+","+","+","#","+","="],
      ["-","-","-","-","-","?","-","-","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","+","-","-","-","-","-","-","-","=","+",".","+","+","+","+","="],
      ["-","-","-","-","-","+","-","-","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-",".","-","-","-","-","-","-","-","=","+","+","+",".","+","+","="],
      ["-","-","-","-","-","+","-","-","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","+","-","-","-","-","-","-","-","=","+","+","+","+","#","+","="],
      ["-","-","-","-","-","+","-","-","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-",".","-","-","-","-","-","-","-","=","=","=","X","=","=","=","="],
      ["-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","+","-","-","-","-"],
      ["-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-",".","-","-","-","-"],
      ["-","-","-","-","-","+","+","+","+","+",".","+","+","+","+","+","+","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 25)
  {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["#","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","+","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","+","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","=","=","=","X","=","=","="],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","+","+","+",".","+","+","="],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","+","+","+","+","#","+","="],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","+","+","+","+","+","+","="],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","=","=","=","=","=","=","=","="],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 26) {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","+","+","+",".","+",".","+","+","+","#"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["#","+","+",".","+","+","+","+",".","+","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 27) {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["#","+","+","+",".","+","+",".","+","+",".","+","+",".","+","+",".","+","+","+","#"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 28) {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","#","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","+","+","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","?","+","+",".","+","+","+","+","+","+","+",".","+","+","+","+",".","+","+","#"],
      ["-","+","+","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","#","-","-","-","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 29) {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","+","+","+","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","+","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","+","+","+","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","+","+","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","+","+","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","+","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","+","+","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","+","+","+",".","+","+",".","+","+",".","+","#"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","#","-","-","-","-","-","-","-","-","-","-"]
    ]
  } 
  else if (v_lvl == 30) {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+",".","+","+",".","+","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","+","+","-","-","-","-","+","+","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","+","+","-","-","-","-","-","-","+","+","-","-","-","-","-","-"],
      ["-","-","-","-","+","+","-","-","-","-","-","-","-","-","+","+","-","-","-","-","-"],
      ["-","-","-","+","+","-","-","-","-","-","-","-","-","-","-","+","+","-","-","-","-"],
      ["#","+",".","+","-","-","-","-","-","-","-","-","-","-","-","-",".","-","-","-","-"],
      ["-","-","-","+","+","-","-","-","-","-","-","-","-","-","-","+","+","-","-","-","-"],
      ["-","-","-","-","+","+","-","-","-","-","-","-","-","-","+","+","-","-","-","-","-"],
      ["-","-","-","-","-","+","+","-","-","-","-","-","-","+","+","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","+","+","-","-","-","-","+","+","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+",".","+","+",".","+","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 31) {
    v_gamemap = [
      ["-","-","-","-","-","-","-","#","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","+","+","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","#","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 32) {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","#","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","#","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 33) {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","#","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","+","+",".","+","+","+","+","+","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","+","-","-","-","-","-","-","+","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-",".","-","-","-","-","-","-",".","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","+","-","-","-","-","-","-","+","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-",".","-","-","-","-","-","-",".","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","+","-","-","-","-","-","-","+","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","+","-","-","-","-","-","-","+","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-",".","-","-","-","-","-","-",".","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","+","-","-","-","-","-","-","+","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","+","+",".","+","+","+","+","+","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","#","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 34) {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","#","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","T","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","+","+",".","+","+","+",".","+","+","#"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","+","+","+","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","+","?","+","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","+","+","+","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]

    ]
  }
  else if (v_lvl == 35) {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["#","+",".","+","+",".","+","+","+","+",".","+","+","+","+",".","+","+",".","+","#"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 36) {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","#","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["#","+","+",".","+","+","+",".","+","+","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","T","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","#","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 37) {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","+",".","+","+",".","+","+","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","-",".","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-",".","-","-","-","-","-","-","+","+","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","+",".","+","-","-","-"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","+","-","-","-"],
      ["-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","+",".","+","#"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+",".","+","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+",".","+","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","+","+","+","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","#","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 38) {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","+","+","+","-"],
      ["#","+",".","+","+",".","+","+","+","+","+","+",".","+","+",".","+","+","?","+","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","+","+","+","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 39) {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","#","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["#","+","+","+","+",".","+","+","+","+","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","+","+","+","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","+","?","+","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","+","+","+","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 40) {
    v_gamemap = [
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","+","+","+","+","+","+","+","+","+","#"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-",".","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","+","+","+","+","+","+","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","+","+","+","+","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","+","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["#","+","+","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]
    ]
  }
  else if (v_lvl == 41) {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","+","+",".","+","+","+","=","=","=","=","=","=","=","=","="],
      ["=","+","+","+","+","+","+","=","=","=","=","+","=","=","=","=","=","=","=","=","="],
      ["=","+","=","=","=","=","+","=","=","=","=","+","=","=","+","+",".","+","+","+","="],
      ["=","+","=","=","=","=","+","+",".","+","+","+","=","=","+","=","=","=","=","+","="],
      ["=",".","=","=","=","=","=","=","=","=","=","+","=","=","+","=","=","=","=","+","="],
      ["=","+","=","=","=","=","=","=","=","=","=","+","=","=","+","+","+","+","=","+","="],
      ["=","+","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","+","=","+","="],
      ["=","+","+","+","+","+","+","+","+","+","=","+","=","=","=","=","=","+","=","+","="],
      ["=","=","=","=","=","=","=","=","=",".","=","+","=","=","=","=","=","+","=","+","="],
      ["=","=","=","=","+","+","+","+","+","+","=","+","+","+",".","+","+","+","=",".","="],
      ["=","=","=","=",".","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","="],
      ["=","=","=","=","+","+","+","+","+","+",".","+","+","+","+","+","+","=","=","+","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","=","+","="],
      ["=","=","=","=","+","+","+","+",".","+","+","+","+","=","=","=","+","=","=","+","="],
      ["=","=","=","=","+","=","=","=","=","=","=","=","+","=","=","=",".","=","=","+","="],
      ["=","=","=","=","+","=","=","=","=","=","=","=","+","=","=","=","+","=","=","+","="],
      ["=","=","=","=",".","=","=","=","=","+","+","+","+","=","=","=","+","=","=","+","#"],
      ["=","=","=","=","+","=","=","=","=","+","=","=","=","=","=","=","+","=","=","+","="],
      ["=","=","=","=","+","=","=","=","=","+","+","+","+",".","+","+","+","=","=","T","="],
      ["=","=","=","=","#","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ]
  }
  else if (v_lvl == 42) {
    v_gamemap = [
      ["=","=","=","=","#","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","+","+","+","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=",".","=","=","=","=","=","=","=","+","+","+","+","+",".","+","+","+","+","+","="],
      ["=","+","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","+","="],
      ["=","+","+","+","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","+","="],
      ["=","=","=",".","=","=","=","=","=",".","=","=","=","+",".","+","+","=","=",".","="],
      ["=","=","=","+","=","=","=","=","=","+","=","=","=","+","=","=","+","=","=","+","="],
      ["=","=","=","+","+","+",".","+","+","+","=","=","=","+","=","=","+","=","=","+","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=",".","=","=","+","+","+","+","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","="],
      ["=","=","=","=","+","+","+","+",".","+","+","+","+","+","=","=","=","=","=","=","="],
      ["=","=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","+",".","+","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","+","+",".","+","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","#","=","=","=","=","=","=","=","=","=","="]
    ]
  }
  else if (v_lvl == 43) {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","#","=","=","=","=","=","=","=","=","=","="],
      ["=","=","+","?","+","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","+","+","+","=","=","=","=","=","+","+","+","+",".","+","+","+","+","=","="],
      ["=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","="],
      ["=","=","=",".","=","=","=","=","=","=","=","=","=","=","=","=","=","=",".","=","="],
      ["=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","="],
      ["=","=","=","+","+","+",".","+","+","+","+",".","+","+","+",".","+","+","+","=","="],
      ["=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","+","+","+","+",".","+","+","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","+","+",".","+","+","=","="],
      ["=","=","=","+","+","+","+","+","=","=",".","=","=","=","+","=","=","=","+","=","="],
      ["=","=","=","+","=","=","=","+","=","=","+","=","=","=","+","=","=","=","+","=","="],
      ["=","=","=","+","+","+","=","+","=","=","+","=","=","=","+","=","=","=",".","=","="],
      ["=","=","=","=","=","+","=",".","=","=","+","+",".","+","+","=","=","=","+","=","="],
      ["+","+","+","+","=",".","=","+","=","=","=","=","=","=","=","=","=","=","+","=","="],
      ["+","=","=","+","=","+","=","+","=","=","=","=","=","=","=","=","=","=","+","=","="],
      ["#","=","=","+","+","+","=","+","+",".","+","+","+","+","+","+",".","+","+","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ]
  }
  else if (v_lvl == 44) {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","+","+","+",".","+","+","+","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","+","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=",".","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","+","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","+","+","+","=","=","=","+","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","=","=","+","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","=","=","+","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","=","=","+","=","=","="],
      ["#","+","+",".","+","+","+","=","=","=","=","=","=",".","=","=","=",".","=","=","="],
      ["=","=","=","=","=","=","+","=","=","=","=","=","=","+","=","=","=","+","=","=","="],
      ["=","=","=","=","=","=","+","=","=","=","=","=","=","+","=","=","=","+","=","=","="],
      ["=","=","=","=","=","=","+","=","=","=","=","=","=","+","=","=","=","+","=","=","="],
      ["=","=","=","=","=","=","+","+","+","+",".","+","+","+","=","=","=","+","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=",".","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","+","+","#"],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ]
  }
  else if (v_lvl == 45) {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","+","+",".","+","+","+","+",".","+","+","=","=","=","=","=","=","=","=","="],
      ["=","=","+","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","="],
      ["=","=","+","=","=","=","+","+","+","+","=","+","=","=","=","=","=","=","=","=","="],
      ["=","=",".","=","=","=","+","=","=","+","=","+","=","=","=","=","=","=","=","=","="],
      ["=","=","+","=","=","=","+","=","=","+","=",".","=","=","=","=","=","=","=","=","="],
      ["=","=","+","=","=","=",".","=","=",".","=","+","=","=","=","=","=","=","=","=","="],
      ["=","=","+","=","=","=","+","=","=","+","=","+","=","=","=","=","=","=","=","=","="],
      ["=","=","+","=","=","=","+","=","=","+","=","+","+","+","+",".","+","+","+","+","#"],
      ["=","+","+","=","=","=","+","=","=","+","=","=","=","=","=","=","=","=","=","=","="],
      ["=","+","=","=","=","=","+","=","=","+","=","=","=","=","=","=","=","=","=","=","="],
      ["=","+","=","=","+","+","+","=","=","+","+","+","+","+","=","=","=","=","=","=","="],
      ["=",".","=","=","+","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","="],
      ["=","+","=","=","+","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","="],
      ["=","+","=","=",".","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","="],
      ["=","+","=","=","+","=","=","=","=","=","+","+","+","+","=","=","=","=","=","=","="],
      ["=","+","=","=","+","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","="],
      ["=","+","+","+","+","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","#","=","=","=","=","=","=","=","=","=","="]
    ]
  }
  else if (v_lvl == 46) {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","#","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","=","=","=","+","+",".","+","+","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","+","=","=","=","+","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","+","=","=","=",".","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=",".","=","=","=","+","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","+","=","=","=","+","=","="],
      ["=","=","=","=","=","=","=","+","+","+","+","+","+","+","+","=","=","=","+","=","="],
      ["=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","=",".","=","="],
      ["=","=","=","=","=","+","+","+","=","=","=","=","=","=","=","=","=","=","+","=","="],
      ["=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","+","=","="],
      ["=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","+","=","="],
      ["=","=","=","=","=","+","+","+",".","+","+","+","+","=","=","=","=","=","+","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","+","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","+","=","="],
      ["=","=","+","+",".","+","+","+","+","+",".","+","+","=","=","=","=","=","+","+","#"],
      ["=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","+","+","+","+","+","+","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","#","=","=","=","=","=","=","=","=","=","=","=","=","="]   
    ]
  }
  else if (v_lvl == 47) {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","+","+",".","+","+","+",".","+","+","+",".","+","+","#"],
      ["=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["#","+","+",".","+","+","+","+","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ]
  }
  else if (v_lvl == 48) {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","+","+","+","+","+","+","+",".","+","+","+","+","+","+","+","+","=","="],
      ["=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","="],
      ["=","=","=",".","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","="],
      ["=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=",".","=","="],
      ["=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","="],
      ["=","=","=","+","=","+","+","+","=","=","=","=","=","=","=","=","=","=","+","=","="],
      ["#","+","+","+","=","+","?","+","+","+","+",".","+","+","+","+","+","+","+","=","="],
      ["=","=","=","+","=","+","+","+","=","=","=","=","=","=","=","=","=","=","+","=","="],
      ["=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","="],
      ["=","=","=",".","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","="],
      ["=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=",".","=","="],
      ["=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","=","="],
      ["=","=","=","+","+","+","+","+","+","+","+","+",".","+","+","+","+","+","+","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ]
  }
  else if (v_lvl == 49) {
    v_gamemap = [
      ["=","=","=","=","=","=","=","#","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","+","+",".","+","+","+","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","+","+","+",".","+","+","+","+","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=",".","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+","="],
      ["=","=","=","+","+","+",".","+","+","+","+","+","+","+","+","+",".","+","+","+","="],
      ["=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","+","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","+","+","+","+",".","+","+","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","#","=","=","=","=","=","=","=","=","=","="]
    ]
  }
  else if (v_lvl == 50) {
    v_gamemap = [
      ["=","=","=","=","=","=","=","=","=","=","#","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=",".","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","+","+","+","+","+","+","+","+","+","+","#"],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="],
      ["=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","="]
    ]
  }
}
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

var v_stufenschwelle = [0, 50, 125, 275, 575, 1175, 2375, 4775, 9550, 19125, 38275, 76575];
//   Unten - ein Rollenspiel im Retrodesign
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

var v_preiseHeiltrank = [ 0, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56,
                      59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92, 95, 98, 101, 104, 107,
                      110, 113, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149,
                      152, 155, 158, 161, 164, 167, 170, 173, 176, 179, 182, 185, 188, 191,
                      194, 197, 200, 203, 206, 209, 212, 215, 218, 221, 224, 227, 230, 233,
                      236, 239, 242, 245, 248, 251, 254, 257, 260, 263, 266, 269, 272, 275,
                      278, 281, 284, 287, 290, 293, 296, 299, 302
                    ];

var v_preiseManatrank = [ 0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
                      180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310,
                      320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450,
                      460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590,
                      600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730,
                      740, 750, 760, 770, 780, 790, 800, 810, 820, 830, 840, 850, 860, 870,
                      880, 890, 900, 910, 920, 930, 940, 950, 960, 970, 980, 990, 1000, 1010
                    ];

var v_preisePortalrolle = [ 0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
                        95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160,
                        165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230,
                        235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300,
                        305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360, 365, 370,
                        375, 380, 385, 390, 395, 400, 405, 410, 415, 420, 425, 430, 435, 440,
                        445, 450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 500, 505
                      ];

var v_preiseProviant =  [ 0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
                      27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
                      46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64,
                      65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
                      84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101,
                      102, 103, 104, 105, 106, 107
                    ];

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

function c_engine () 
{ 
  this.v_tile = new Image;
  this.v_tileset = "dorf";
}

c_engine.p_init = function ()
{
  this.v_tileset = "dorf";
}

c_engine.prototype.p_drawMap = function (v_tilerubrik, v_load)
{
  if (v_load == true)
  {
    //
    if (v_lvl >= 11 && v_lvl <= 43)
    {
      this.v_tile.src = "daten/gfk/tiles/" + v_tilerubrik + "/" + "tiles.png";
    }
    else
    {
      this.v_tile.src = "daten/gfk/tiles/tilesheet/tilesheet.png";
    }
    
    v_load = false;
  }
  if (v_load == false)
  {
    this.v_tile.onload = function ()
    {
      o_engine.p_drawMapX ();
    }
    o_engine.p_drawMapX ();
  }   
}

//lädt und zeichnet Tile an übergebener Position
c_engine.prototype.p_drawTile = function (v_sx, v_sy, v_x, v_y)
{
  v_enginecanvas_context.drawImage (this.v_tile, v_sx, v_sy, 20, 20, v_x, v_y, 20, 20);
}

//zeichnet TileMap
c_engine.prototype.p_drawMapX = function ()
{
  for (let v_i = 0; v_i < v_gamemap.length; v_i++ )
  {
    for (let v_j = 0; v_j < v_gamemap[v_i].length; v_j++)
    {
      switch (v_gamemap [v_i][v_j])
      {
        case "." : this.p_drawTile (0, 0, 20 * v_j, 20 * v_i); break;   //Grass
        case "-" : this.p_drawTile (20, 0, 20 * v_j, 20 * v_i); break;   //Boden
        case "=" : this.p_drawTile (40, 0, 20 * v_j, 20 * v_i); break;   //Mauer
        case "T" : this.p_drawTile (60, 0, 20 * v_j, 20 * v_i); break;   //Schild
        case "X" : this.p_drawTile (80, 0, 20 * v_j, 20 * v_i); break;   //Tür
        case "?" : this.p_drawTile (100, 0, 20 * v_j, 20 * v_i); break;   //Truhe
        case "+" : this.p_drawTile (120, 0, 20 * v_j, 20 * v_i); break;   //Weg
        case "#" : this.p_drawTile (140, 0, 20 * v_j, 20 * v_i); break;   //Treppe nach unten
        case "O" : this.p_drawTile (160, 0, 20  * v_j, 20 * v_i); break;   //NPC
        case "1" : this.p_drawTile (180, 0, 20  * v_j, 20 * v_i); break;   //NPC1
        case "2" : this.p_drawTile (0, 20, 20  * v_j, 20 * v_i); break;   //NPC2
        case "[" : this.p_drawTile (20, 20, 20  * v_j, 20 * v_i); break;   //Treppe nach oben
        case "s" : this.p_drawTile (40, 20, 20  * v_j, 20 * v_i); break;   //Schlachtfeld
        case "f" : this.p_drawTile (60, 20, 20  * v_j, 20 * v_i); break;   //Fels - Kolision 
        case "S" : this.p_drawTile (80, 20, 20  * v_j, 20 * v_i); break;   //Bosschlachtfeld
        case "~" : this.p_drawTile (100, 20, 20  * v_j, 20 * v_i); break;   //Wasser - Kolision
        case "U" : this.p_drawTile (120, 20, 20  * v_j, 20 * v_i); break;   //Durchgang
        case "o" : this.p_drawTile (140, 20, 20  * v_j, 20 * v_i); break;   //Übergang
      }
    }
  }
}

c_engine.prototype.p_changeLvl = function (v_Lvl, v_tileSet, v_Load, v_mXk, v_mYk)
{
    o_gui.p_hideAllButtons ();
    v_lvl = v_Lvl; v_keylock = true;
    f_leveldaten ();
    this.v_tileset = v_tileSet;
    o_engine.p_drawMap (this.v_tileset, v_Load);
    o_charakter.v_mxk = v_mXk; o_charakter.v_myk = v_mYk;
    v_statuscanvas_context.clearRect (0, 0, 400, 400);
    o_truhen.p_status (); o_schlachtfelder.p_status ();
    o_charakter.p_setSprite (o_charakter.v_mxk * 20 + 10, o_charakter.v_myk * 20 + 10);
    o_ausgabe.p_writeLevel ();
    o_gui.p_visibleAllButtons ();
    if (v_Lvl > o_charakter.v_mlvl) { o_charakter.v_mlvl = v_Lvl; } 
    v_keylock = false;
}
//
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
//
// Charakterdefinitionen

function c_charakter ()
{
  this.v_name = "";
  this.v_klasse = "";

  this.v_klugheit  = 8;
  this.v_kraft     = 8;
  this.v_geschick  = 8;

  this.v_lebenspunkte  = 40;    //Lebenspunkte
  this.v_mlebenspunkte = 40;    //max. Lebenspunkte
  this.v_manapunkte    = 1;     //Manapunkte
  this.v_mmanapunkte   = 1;     //max. Lebenpunkte

  this.v_status  = "";  //postive Zustände
  this.v_zustand = "";  //negative Zustände

  this.v_erfahrungspunkte = 0;  //Erfahrungspunkte
  this.v_stufe            = 1;  //aktuelle Erfahrungsstufe

  this.v_waffe         = "Dolch";              //getragene Waffe
  this.v_ruestung      = "Straßenkleidung";     //getragende Rüstung
  this.v_schild        = "keins";                    //gehaltendes schild
  this.v_trefferpunkte = 6;                 //Trefferpunkte der Waffe
  this.v_ruestungswert = 0;                 //Rüstungsschutz der Rüstung
  this.v_schildwert    = 0;                 //Rüstungsschutz des Schildes

  this.v_gold = 25;
  this.v_heiltrank = 5;                     //Heiltränke
  this.v_manatrank   = 0;
  this.v_medizintrank = 0;
  this.v_portalrolle = 0;
  this.v_schluessel  = 0;
  this.v_proviant    = 10;
  this.v_waffenorb   = 0;                  //Anzahl Waffenorbs zur Verbesserung der Waffe
  this.v_ruestungsorb = 0;
  this.v_schildorb = 0;

  this.v_regnen     = "deaktiviert";              //wenn aktiv, dann Zauber aktiv
  this.v_sporen     = "deaktiviert";
  this.v_umwandlung = "deaktiviert";
  this.v_wiederbelebung = "deaktiviert";
  this.v_portal         = "deaktiviert";
  this.v_feuerball      = "deaktiviert";
  this.v_blitz          = "deaktiviert";

  this.v_schritte       = 0;
  this.v_schlachtfelder = 0;              //erledigte Schlachtfelder
  this.v_quest          = "false";        //wenn true, dann ist eine Quest aktiv
  this.v_questitem      = "";
  this.v_queststand     = "Keine Aufgabe aktiv";
  this.v_equest         = 0;              //Anzahl der erledigten Questen

  this.v_xk  = 0;
  this.v_yk  = 0;
  this.v_mxk = 16;
  this.v_myk = 12;
  this.v_mlvl = 1;                        //maximal erreichtes Spiellevel

  this.v_sound = 0;
}

//Init
c_charakter.prototype.p_init = function ()
{
  this.v_klugheit = 8; this.v_kraft = 8; this.v_geschick = 8; this.v_lebenspunkte = 40; this.v_mlebenspunkte = 40;
  this.v_manapunkte = 1; this.v_mmanapunkte = 1; this.v_erfahrungspunkte = 0; this.v_stufe = 1; this.v_schild = v_schilditemtexte [0];
  this.v_waffe = v_waffenitemtexte [0]; this.v_ruestung = v_ruestungsitemtexte [0]; this.v_trefferpunkte = 6; this.v_ruestungswert = 0;
  this.v_schildwert = 0; this.v_gold = 25; this.v_heiltrank = 5; this.v_manatrank = 0; this.v_portalrolle = 0;
  this.v_schluessel = 0; this.v_proviant = 10; this.v_medizintrank = 0; this.v_regnen = "deaktiviert"; 
  this.v_sporen = "deaktiviert"; this.v_umwandlung = "deaktiviert"; this.v_wiederbelebung = "deaktiviert";
  this.v_portal = "deaktiviert"; this.v_feuerball = "deaktiviert"; this.v_blitz = "deaktiviert"; this.v_schritte = 0;
  this.v_status = "Keiner", this.v_zustand = "Gesund"; this.v_schlachtfelder = 0; this.v_quest = "false";
  this.v_questitem = ""; this.v_queststand = v_questtexte [45]; this.v_equest = 0; this.v_mlvl = 1; this.v_waffenorb = 0;
  this.v_ruestungsorb = 0; this.v_schildorb = 0;

  //Festlegung der klassenspezifischen Aspekte
  if (document.getElementsByName ("klasse")[0].checked)
  {
    //für Krieger
    this.v_klasse = "Krieger"; this.v_kraft++, this.v_lebenspunkte += 5; this.v_mlebenspunkte += 5;
    document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-1.png";
  }
  else if (document.getElementsByName ("klasse")[1].checked)
  {
    //für Dieb
    this.v_klasse = "Dieb"; this.v_geschick++; this.v_lebenspunkte += 5; this.v_mlebenspunkte += 5; 
    document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-1.png";
  }
  else if (document.getElementsByName ("klasse")[2].checked)
  {
    //für Zauberer
    this.v_klasse = "Zauberer"; this.v_klugheit++; this.v_manapunkte++; this.v_mmanapunkte++;
    document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-1.png";
    this.v_waffe = v_waffenitemtexte [1];
  }
}

//setzt Charaktersprite an angegebener Position
c_charakter.prototype.p_setSprite = function (v_x, v_y)
{
  this.v_xk = v_x;
  this.v_yk = v_y;

  this.v_mxk = (this.v_xk - 10) / 20;
  this.v_myk = (this.v_yk - 10) / 20;

  document.getElementById ("spielersprite").style.left = this.v_xk + "px";
  document.getElementById ("spielersprite").style.top = this.v_yk + "px";
}

//bewegt Spielersprite nach Norden
c_charakter.prototype.p_bewegNord = function ()
{
  if (this.v_yk == 10 || v_gamemap [this.v_myk - 1][this.v_mxk] == "=" || v_gamemap [this.v_myk - 1][this.v_mxk] == "f" ||
                         v_gamemap [this.v_myk - 1][this.v_mxk] == "~")
  {
  }
  else
  {
    v_keylock = true;

    if (this.v_sound == 0)
    {
      o_sound.p_play (0);
      this.v_yk -= 20; this.v_myk--; this.v_sound = 1; this.v_schritte++;
    }

    setTimeout (function ()
    {
      o_charakter.p_setSprite (o_charakter.v_xk, o_charakter.v_yk); 
      console.log ("XK: " + o_charakter.v_xk + " YK: " + o_charakter.v_yk);
      o_charakter.v_sound = 0; o_sound.p_stop (0); v_keylock = false; o_charakter.v_schritte++;
    }, 70);
  } 
}

//bewegt Spielersprite nach Süden
c_charakter.prototype.p_bewegSued = function ()
{
  if (this.v_yk == 410 || v_gamemap [this.v_myk + 1][this.v_mxk] == "=" || v_gamemap [this.v_myk + 1][this.v_mxk] == "f" ||
                          v_gamemap [this.v_myk + 1][this.v_mxk] == "~") 
  {
  }
  else
  {
    v_keylock = true;

    if (this.v_sound == 0)
    {
      o_sound.p_play (0);
      this.v_yk += 20;  this.v_myk++; this.v_sound = 1; this.v_schritte++;
    }

    setTimeout (function ()
    {
      o_charakter.p_setSprite (o_charakter.v_xk, o_charakter.v_yk); 
      console.log ("XK: " + o_charakter.v_xk + " YK: " + o_charakter.v_yk);
      o_charakter.v_sound = 0; o_sound.p_stop (0); v_keylock = false;
    }, 70);
  } 
}

//bewegt Spielersprite nach Westen
c_charakter.prototype.p_bewegWest = function ()
{
  if (this.v_xk == 10 || v_gamemap [this.v_myk][this.v_mxk - 1] == "=" || v_gamemap [this.v_myk][this.v_mxk - 1] == "f" || 
                         v_gamemap [this.v_myk][this.v_mxk - 1] == "~") 
  {
  }
  else
  {      
    v_keylock = true;
        
    if (this.v_sound == 0)
    {
      o_sound.p_play (0);
      this.v_xk -= 20;  this.v_mxk--; this.v_sound = 1; this.v_schritte++;
    }
      
    setTimeout (function ()
    {
      o_charakter.p_setSprite (o_charakter.v_xk, o_charakter.v_yk);
      console.log ("XK :" + o_charakter.v_xk + " YK :" + o_charakter.v_yk);
      o_charakter.v_sound = 0; o_sound.p_stop (0); v_keylock = false;
    }, 70);
  } 
}

//bewegt Spielersprite nach Osten
c_charakter.prototype.p_bewegOst = function ()
{
  if (this.v_xk == 410 || v_gamemap [this.v_myk][this.v_mxk + 1] == "=" || v_gamemap [this.v_myk][this.v_mxk + 1] == "f" ||
                          v_gamemap [this.v_myk][this.v_mxk + 1] == "~") 
  {}
  else
  {
    v_keylock = true; 

    if (this.v_sound == 0)
    {
      o_sound.p_play (0);
      this.v_xk += 20;  this.v_mxk++; this.v_sound = 1; this.v_schritte++;
    }
    
    setTimeout (function ()
    {
      o_charakter.p_setSprite (o_charakter.v_xk, o_charakter.v_yk);
      console.log ("XK :" + o_charakter.v_xk + " YK :" + o_charakter.v_yk);
      o_charakter.v_sound = 0; o_sound.p_stop (0); v_keylock = false;
    }, 70);
  } 
}
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

function c_ausgabe () {}

c_ausgabe.prototype.p_init = function ()
{
  v_ausgabecanvas_context.fillStyle ="white";
  v_ausgabecanvas_context.textBaseline = "top";
  v_ausgabecanvas_context.font = "12px Arial";

  v_ausgabe2canvas_context.fillStyle = "white";
  v_ausgabe2canvas_context.font = "10px Arial";
  v_ausgabe2canvas_context.textBaseline = "top";
  
}

c_ausgabe.prototype.p_writeAll = function ()
{
  v_ausgabecanvas_context.fillText ("Stats", 110, 0);
  v_ausgabecanvas_context.fillText ("Stats", 110, 0);
  
  this.p_writeName ();
  this.p_writeLebenspunkte ();
  this.p_writeManapunkte ();
  this.p_writeStatus ();
  this.p_writeZustand ();
  this.p_writeErfahrungspunkte ();
  this.p_writeStufe ();
  
  v_ausgabecanvas_context.fillText ("Inventar", 102, 118);
  v_ausgabecanvas_context.fillText ("Inventar", 102, 118);
  
  this.p_writeWaffe ();
  this.p_writeRuestung ();
  this.p_writeSchild ();
  this.p_writeGold ();
  this.p_writeHeiltrank ();
  this.p_writeManatrank ();
  this.p_writeMedizintrank ();
  this.p_writePortalrolle ();
  this.p_writeProviant ();
  
  v_ausgabecanvas_context.fillText ("Handwerk", 95, 269);
  v_ausgabecanvas_context.fillText ("Handwerk", 95, 269);
  
  this.p_writeWaffenorb ();
  this.p_writeRuestungsorb ();
  this.p_writeSchildorb ();
  
  v_ausgabecanvas_context.fillText ("Journal", 102,  329);
  v_ausgabecanvas_context.fillText ("Journal", 102,  329);
  
  this.p_writeSchlachtfelder ();
  this.p_writeQueststand ();
  
  v_ausgabecanvas_context.fillText ("System", 102,  505);
  v_ausgabecanvas_context.fillText ("System", 102,  505);
}

c_ausgabe.prototype.p_writeName = function ()
{
  v_ausgabecanvas_context.clearRect (5, 15, 220, 12);
  v_ausgabecanvas_context.fillText ("Name", 5, 15);
  v_ausgabecanvas_context.fillText (":", 107, 15);
  v_ausgabecanvas_context.fillText (o_charakter.v_name, 113, 15);
}

c_ausgabe.prototype.p_writeLebenspunkte = function ()
{
  v_ausgabecanvas_context.clearRect (5, 30, 220, 12);
  v_ausgabecanvas_context.fillText ("Lebenspunkte", 5, 30);
  v_ausgabecanvas_context.fillText (":", 107, 30);
  v_ausgabecanvas_context.fillText (o_charakter.v_lebenspunkte  + "/" + o_charakter.v_mlebenspunkte, 113, 30);
}

c_ausgabe.prototype.p_writeManapunkte = function ()
{
  v_ausgabecanvas_context.clearRect (5, 45, 220, 12);
  v_ausgabecanvas_context.fillText ("Manapunkte", 5, 45);
  v_ausgabecanvas_context.fillText (":", 107, 45);
  v_ausgabecanvas_context.fillText (o_charakter.v_manapunkte + "/" + o_charakter.v_mmanapunkte, 113, 45);
}

c_ausgabe.prototype.p_writeStatus = function ()
{
  v_ausgabecanvas_context.clearRect (5, 60, 220, 12);
  v_ausgabecanvas_context.fillText ("Status", 5, 60);
  v_ausgabecanvas_context.fillText (":", 107, 60);
  v_ausgabecanvas_context.fillText (o_charakter.v_status, 113, 60);
}

c_ausgabe.prototype.p_writeZustand = function ()
{
  v_ausgabecanvas_context.clearRect (5, 75, 220, 12);
  v_ausgabecanvas_context.fillText ("Zustand", 5, 75);
  v_ausgabecanvas_context.fillText (":", 107, 75); 
  v_ausgabecanvas_context.fillText (o_charakter.v_zustand, 113, 75)
}

c_ausgabe.prototype.p_writeErfahrungspunkte = function ()
{
  v_ausgabecanvas_context.clearRect (5, 90, 220, 13);
  v_ausgabecanvas_context.fillText ("Erfahrungspunkte", 5, 90);
  v_ausgabecanvas_context.fillText (":", 107, 90);
  v_ausgabecanvas_context.fillText (o_charakter.v_erfahrungspunkte, 113, 90);
}

c_ausgabe.prototype.p_writeStufe = function ()
{
  v_ausgabecanvas_context.clearRect (5, 105, 220, 13);
  v_ausgabecanvas_context.fillText ("Stufe", 5, 105);
  v_ausgabecanvas_context.fillText (":", 107, 105);
  v_ausgabecanvas_context.fillText (o_charakter.v_stufe, 113, 105);
}

c_ausgabe.prototype.p_writeWaffe = function ()
{
  v_ausgabecanvas_context.clearRect (5, 135, 240, 13);
  v_ausgabecanvas_context.fillText ("Waffe", 5, 135);
  v_ausgabecanvas_context.fillText (":", 107, 135);
  v_ausgabecanvas_context.fillText (o_charakter.v_waffe, 113, 135);
}

c_ausgabe.prototype.p_writeRuestung = function ()
{
  v_ausgabecanvas_context.clearRect (5, 150, 240, 14);
  v_ausgabecanvas_context.fillText ("Rüstung", 5, 150);
  v_ausgabecanvas_context.fillText (":", 107, 150);
  v_ausgabecanvas_context.fillText (o_charakter.v_ruestung, 113, 150);
}

c_ausgabe.prototype.p_writeSchild = function ()
{
  v_ausgabecanvas_context.clearRect (5, 165, 240, 13);
  v_ausgabecanvas_context.fillText ("Schild", 5, 165);
  v_ausgabecanvas_context.fillText (":", 107, 165); 
  v_ausgabecanvas_context.fillText (o_charakter.v_schild, 113, 165);
}

c_ausgabe.prototype.p_writeGold = function ()
{
  v_ausgabecanvas_context.clearRect (5, 180, 220, 13);
  v_ausgabecanvas_context.fillText ("Goldmünzen", 5, 180);
  v_ausgabecanvas_context.fillText (":", 107, 180);
  v_ausgabecanvas_context.fillText (o_charakter.v_gold, 113, 180);
}

c_ausgabe.prototype.p_writeHeiltrank = function ()
{
  v_ausgabecanvas_context.clearRect (5, 195, 220, 13);
  v_ausgabecanvas_context.fillText ("Heiltränke", 5, 195);
  v_ausgabecanvas_context.fillText (":", 107, 195);
  v_ausgabecanvas_context.fillText (o_charakter.v_heiltrank, 113, 195);
}

c_ausgabe.prototype.p_writeManatrank = function ()
{
  v_ausgabecanvas_context.clearRect (5, 210, 220, 13);
  v_ausgabecanvas_context.fillText ("Manatränke", 5, 210); 
  v_ausgabecanvas_context.fillText (":", 107, 210);
  v_ausgabecanvas_context.fillText (o_charakter.v_manatrank, 113, 210);
}

c_ausgabe.prototype.p_writeMedizintrank = function ()
{
  v_ausgabecanvas_context.clearRect (5, 225, 220, 13);
  v_ausgabecanvas_context.fillText ("Medizintränke", 5, 225); 
  v_ausgabecanvas_context.fillText (":", 107, 225);
  v_ausgabecanvas_context.fillText (o_charakter.v_medizintrank, 113, 225);
}

c_ausgabe.prototype.p_writePortalrolle = function ()
{
  v_ausgabecanvas_context.clearRect (5, 240, 220, 13);
  v_ausgabecanvas_context.fillText ("Portalrolle", 5, 240);
  v_ausgabecanvas_context.fillText (":", 107, 240);
  v_ausgabecanvas_context.fillText (o_charakter.v_portalrolle, 113, 240);
}

c_ausgabe.prototype.p_writeProviant = function ()
{
  v_ausgabecanvas_context.clearRect (5, 255, 220, 13);
  v_ausgabecanvas_context.fillText ("Proviant", 5, 255);
  v_ausgabecanvas_context.fillText (":", 107, 255);
  v_ausgabecanvas_context.fillText (o_charakter.v_proviant, 113, 255);
}

c_ausgabe.prototype.p_writeWaffenorb = function ()
{
  v_ausgabecanvas_context.clearRect (5, 285, 220, 13);
  v_ausgabecanvas_context.fillText ("Waffenorbs", 5, 285);
  v_ausgabecanvas_context.fillText (":", 107, 285);
  v_ausgabecanvas_context.fillText (o_charakter.v_waffenorb, 113, 285);
}

c_ausgabe.prototype.p_writeRuestungsorb = function ()
{
  v_ausgabecanvas_context.clearRect (5, 300, 220, 13);
  v_ausgabecanvas_context.fillText ("Rüstungsorbs", 5, 300);
  v_ausgabecanvas_context.fillText (":", 107, 295);
  v_ausgabecanvas_context.fillText (o_charakter.v_ruestungsorb, 113, 300);
}

//Gibt Anzahl der Schildorbs aus
c_ausgabe.prototype.p_writeSchildorb = function ()
{
  v_ausgabecanvas_context.clearRect (5, 315, 220, 13);
  v_ausgabecanvas_context.fillText ("Schildorbs", 5, 315);
  v_ausgabecanvas_context.fillText (":", 107, 315);
  v_ausgabecanvas_context.fillText (o_charakter.v_schildorb, 113, 315);
}

c_ausgabe.prototype.p_writeSchlachtfelder = function ()
{
  v_ausgabecanvas_context.clearRect (5, 344, 220, 14);
  v_ausgabecanvas_context.fillText ("Schlachtfelder", 5, 344);
  v_ausgabecanvas_context.fillText (":", 107, 344);
  v_ausgabecanvas_context.fillText (o_charakter.v_schlachtfelder, 113, 344);
}

c_ausgabe.prototype.p_writeQueststand = function ()
{
  v_ausgabecanvas_context.clearRect (5, 359, 240, 14);
  v_ausgabecanvas_context.fillText ("Aufgabe", 5, 359);
  v_ausgabecanvas_context.fillText (":", 107, 359);
  v_ausgabecanvas_context.fillText (o_charakter.v_queststand, 113, 359);
}

c_ausgabe.prototype.p_writeKoords = function ()
{
  v_ausgabe2canvas_context.clearRect (0, 0, 150, 15);
  v_ausgabe2canvas_context.fillText ("Koordinaten: " + o_charakter.v_mxk + "/" + o_charakter.v_myk, 0, 0);
}

c_ausgabe.prototype.p_writeLevel = function ()
{
  v_ausgabe2canvas_context.clearRect (180, 0, 150, 14);
  v_ausgabe2canvas_context.fillText ("Level: " + v_lvl, 180, 0);
}

c_ausgabe.prototype.p_writeSchlachtfeldNummer = function ()
{
  v_ausgabe2canvas_context.clearRect (320, 0, 150, 14);
  v_ausgabe2canvas_context.fillText ("Ebene: " + o_schlachtfelder.v_etage [v_schlachtfeld],  320, 0);
}
//   Unten - ein Rollenspiel im Retrodesign
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

function c_fenster ()
{
  this.v_xk = 0; 
  this.v_yk = 0; 
  this.v_aktiv = false; 
  this.v_grafik = new Image ();
}

c_fenster.prototype.p_init = function ()
{
  this.v_grafik.src = "daten/gfk/system/fenster.png"; 
  v_fenstercanvas_context.fillStyle = "white";
  v_fenstercanvas_context.font = "12px Arial"; 
  v_fenstercanvas_context.textBaseline = "top";
} 

c_fenster.prototype.p_drawWindow = function ()
{
  if (v_zone != "Haendler") 
  {
    o_sound.p_play (1);
  } 

  o_gui.p_hideMoveButtons ();
  o_gui.p_hideItemButtons ();
  o_gui.p_hideZaubernButtons ();
  o_gui.p_hideKontrollButtons ();
  document.getElementById ("ButtonVollbild").style.visibility = "hidden";

  document.getElementById ("ButtonI").title = "Interaktionen"; 

  if ((v_zone == "Kampf") || (v_zone == "Bosskampf"))
  {
    document.getElementById ("spielersprite").style.visibility = "hidden";
    document.getElementById ("gegnersprite").style.visibility = "hidden";
  }

  if (o_charakter.v_yk > 240)
  {
    document.getElementById ("spielersprite").style.visibility = "hidden"; 
  }

  this.v_xk = 0, this.v_yk = 0; this.v_aktiv = true; 
  v_fenstercanvas_context.drawImage (this.v_grafik, this.v_xk, this.v_yk);
}

c_fenster.prototype.p_clearWindow = function ()
{
  this.v_xk = 0, this.v_yk = 0; this.v_aktiv = false; 
  v_fenstercanvas_context.clearRect (this.v_xk, this.v_yk, this.v_xk + 380, this.v_yk + 140); 
  o_sound.p_stop (1);

  if ((o_charakter.v_yk > 240) && (v_zone == "Gebiet"))
  {
    document.getElementById ("spielersprite").style.visibility = "visible";
  }

  if ((v_zone == "Kampf") || (v_zone == "Bosskampf"))
  {
    document.getElementById ("spielersprite").style.visibility = "visible";
    document.getElementById ("gegnersprite").style.visibility = "visible";
    o_gui.p_visibleItemButtons ();
    o_gui.p_visibleZaubernButtons ();
    document.getElementById ("ButtonVerlassen").style.visibility = "visible";

    if (v_zone == "Kampf") { o_kampf.p_angriffGegner (); }
  }
  else if (v_zone == "Haendler")
  {
    document.getElementById ("ButtonI").style.visibility = "visible";
    document.getElementById ("ButtonVerlassen").style.visibility = "visible";
  }
  else if (v_zone == "Gebiet")
  {
    o_gui.p_visibleMoveButtons ();
    o_gui.p_visibleItemButtons ();
    o_gui.p_visibleZaubernButtons ();
    o_gui.p_visibleKontrollButtons ();
    document.getElementById ("ButtonVollbild").style.visibility = "visible";
  }
} 

c_fenster.prototype.p_writeText = function (a, b, c, d, e)
{
  v_fenstercanvas_context.fillText (a, 5, 5); 
  v_fenstercanvas_context.fillText (b, 5, 20); 
  v_fenstercanvas_context.fillText (c, 5, 32);
  v_fenstercanvas_context.fillText (d, 5, 45); 
  v_fenstercanvas_context.fillText (e, 5, 58);
}
//   Unten - ein Rollenspiel im Retrodesign
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

function c_gui () {}

c_gui.prototype.p_enableButtons = function ()
{
  this.p_enableMoveButtons ();

  v_buttonHeiltrank.disabled = "";
  v_buttonManatrank.disabled = "";
  v_buttonPortalrolle.disabled = "";

  v_buttonHeiltrank.title = "Benutzt einen Heiltrank";
  v_buttonManatrank.title = "Benutzt einen Manatrank";
  v_buttonPortalrolle.title = "Benutzt eine Portalrolle";

  document.getElementById ("ButtonSpeichern").disabled = "";
  document.getElementById ("ButtonSpeichern").title = "Speichert das aktuelle Spiel (vorheriger Speicherstand wird überschrieben!";
}

c_gui.prototype.p_enableKampfButtons = function ()
{
  v_buttonHeiltrank.disabled = "";
  v_buttonManatrank.disabled = "";
  v_buttonPortalrolle.disabled = "";

  v_buttonHeiltrank.title = "Benutzt einen Heiltrank";
  v_buttonManatrank.title = "Benutzt einen Manatrank";
  v_buttonPortalrolle.title = "Benutzt eine Portalrolle";
  document.getElementById ("ButtonVerlassen").disabled = "";
}

//versteckt alle Canvas
c_gui.prototype.p_disableCanvas = function ()
{
  v_enginecanvas.style.visibility = "hidden";
  v_fenstercanvas.style.visibility = "hidden";
  v_ausgabecanvas.style.visibility = "hidden";
  v_statuscanvas.style.visibility = "hidden";
  v_hintergrundcanvas.style.visibility = "hidden";
  document.getElementById ("ausgabe2canvas").style.visibility = "hidden";
}


//Aktiviert alle Händlerelemente
c_gui.prototype.p_enableGuiHaendler = function ()
{
  this.p_disableCanvas ();
  v_ausgabecanvas.style.visibility = "visible";
  v_fenstercanvas.style.visibility = "visible";
  v_hintergrundcanvas.style.visibility = "visible";
  this.p_hideAllButtons ();
  document.getElementById ("ButtonI").style.visibility = "visible";
  document.getElementById ("ButtonVerlassen").style.visibility = "visible";
  
  document.getElementsByTagName("h3")[0].style.visibility = "visible";

  //aktuelle Preise setzen
  document.getElementById ("PreisHeiltrank").value = "Heiltrank (" + v_preiseHeiltrank [o_charakter.v_stufe] + " Gold/Stück):";
  document.getElementById ("PreisHeiltrank").style.visibility = "visible";
  
  document.getElementById ("PreisManatrank").value = "Manatrank (" + v_preiseManatrank [o_charakter.v_stufe] + " Gold/Stück):";
  document.getElementById ("PreisManatrank").style.visibility = "visible";

  document.getElementById ("PreisPortalrolle").value = "Portalrolle (" + v_preisePortalrolle [o_charakter.v_stufe] + " Gold/Stück):";
  document.getElementById ("PreisPortalrolle").style.visibility = "visible";

  document.getElementById ("PreisProviant").value = "Proviant (" + v_preiseProviant [o_charakter.v_stufe] + " Gold/Stück):";
  document.getElementById ("PreisProviant").style.visibility = "visible";
  
  v_kaufheiltrank.value = 0;
  v_kaufmanatrank.value = 0;
  v_kaufportalrolle.value = 0;
  v_kaufproviant.value = 0;

  v_kaufheiltrank.style.visibility = "visible";
  v_kaufmanatrank.style.visibility = "visible";
  v_kaufportalrolle.style.visibility = "visible";
  v_kaufproviant.style.visibility = "visible";


  v_buttonI.title = "Ausgewählte Gegenstände kaufen";
  v_buttonVerlassen.title = "Händler verlassen";
}

//Deaktiviert alle Händlerelemente
c_gui.prototype.p_disableGuiHaendler = function ()
{
  this.p_visibleAllButtons ();
  document.getElementsByTagName("h3")[0].style.visibility = "hidden";
  document.getElementById ("PreisHeiltrank").style.visibility = "hidden";
  document.getElementById ("PreisManatrank").style.visibility = "hidden";
  document.getElementById ("PreisPortalrolle").style.visibility = "hidden";
  document.getElementById ("PreisProviant").style.visibility = "hidden";

  //canvas sichtbar machen
  v_ausgabecanvas.style.visibility = "visible";
  v_enginecanvas.style.visibility = "visible";
  v_fenstercanvas.style.visibility = "visible";
  v_statuscanvas.style.visibility = "visible";

  //Haendlerbuttons unsichtbar schalten
  v_kaufheiltrank.style.visibility = "hidden";
  v_kaufmanatrank.style.visibility = "hidden";
  v_kaufportalrolle.style.visibility = "hidden";
  v_kaufproviant.style.visibility = "hidden";

  //Button Tooltip unbenennen
  v_buttonI.title = "Interaktion";
  v_buttonVerlassen.title = "Beendet Spiel und geht zum Startbildschirm zurück";
}

c_gui.prototype.p_enableGuiKampf = function ()
{
  this.p_disableMoveButtons ();
  v_buttonI.title = "Angriff";
  v_buttonVerlassen.title = "Flucht";
}

//Deaktiviert alle Ingame-Elemente
c_gui.prototype.p_disableAllGame = function ()
{
  //Canvas unsichtbar
  this.p_disableCanvas ()

  //Buttons unsichtbar
  v_buttonN.style.visibility = "hidden";
  v_buttonS.style.visibility = "hidden";
  v_buttonW.style.visibility = "hidden";
  v_buttonO.style.visibility = "hidden";

  v_buttonI.style.visibility = "hidden";

  v_buttonHeiltrank.style.visibility = "hidden";
  v_buttonManatrank.style.visibility = "hidden";
  document.getElementById ("ButtonMedizintrank").style.visibility ="hidden";
  v_buttonPortalrolle.style.visibility = "hidden";

  v_buttonVerlassen.style.visibility = "hidden";
  document.getElementById ("ButtonSpeichern").style.visibility = "hidden";
  document.getElementById ("ButtonZaubern").style.visibility = "hidden";
  document.getElementById ("Zauberliste").style.visibility = "hidden";
  document.getElementById ("spielersprite").style.visibility = "hidden";
  document.getElementById ("ButtonMusik").style.visibility = "hidden";
  document.getElementById ("ButtonSound").style.visibility = "hidden";
  document.getElementById ("ButtonVollbild").style.visibility = "hidden";
}

//Aktiviert Startbildschirm
c_gui.prototype.p_enableStartscreen = function ()
{
  document.getElementById ("spielersprite").style.visibility = "hidden";

  document.getElementsByTagName("h1")[0].style.visibility = "visible";

  v_textName.style.visibility = "visible";

  document.getElementById ("krieger").style.visibility = "visible";
  document.getElementById ("dieb").style.visibility = "visible";
  document.getElementById ("zauberer").style.visibility = "visible";

  document.getElementsByTagName("label")[0].style.display = "";
  document.getElementsByTagName("label")[1].style.display = "";
  document.getElementsByTagName("label")[2].style.display = "";

  v_buttonNSpiel.style.visibility = "visible";
  v_buttonASpiel.style.visibility = "visible";
  document.getElementById ("kredits").style.visibility = "visible";

  if (o_charakter.v_regnen == "aktiv")
  {
    document.getElementById("Zauberliste").remove (1);
  }

  if (o_charakter.v_sporen == "aktiv")
  {
    document.getElementById("Zauberliste").remove (2);
  }
}

//versteck Bewegungsbuttons
c_gui.prototype.p_hideMoveButtons = function ()
{
  document.getElementById ("ButtonN").style.visibility = "hidden";
  document.getElementById ("ButtonS").style.visibility = "hidden";
  document.getElementById ("ButtonW").style.visibility = "hidden";
  document.getElementById ("ButtonO").style.visibility = "hidden";
}

//Schaltet Bewegungsbuttons sichtbar
c_gui.prototype.p_visibleMoveButtons = function ()
{
  document.getElementById ("ButtonN").style.visibility = "visible";
  document.getElementById ("ButtonS").style.visibility = "visible";
  document.getElementById ("ButtonW").style.visibility = "visible";
  document.getElementById ("ButtonO").style.visibility = "visible";
}

//Schaltet ItemButtons unsichtbar
c_gui.prototype.p_hideItemButtons = function ()
{
  document.getElementById ("ButtonHeiltrank").style.visibility = "hidden";
  document.getElementById ("ButtonManatrank").style.visibility = "hidden";
  document.getElementById ("ButtonMedizintrank").style.visibility = "hidden";
  document.getElementById ("ButtonPortalrolle").style.visibility = "hidden";
}

//Schaltet ItemButtons sichtbar
c_gui.prototype.p_visibleItemButtons = function ()
{
  document.getElementById ("ButtonHeiltrank").style.visibility = "visible";
  document.getElementById ("ButtonManatrank").style.visibility = "visible";
  document.getElementById ("ButtonMedizintrank").style.visibility = "visible";
  document.getElementById ("ButtonPortalrolle").style.visibility = "visible";
}

c_gui.prototype.p_hideZaubernButtons = function ()
{
  document.getElementById ("ButtonZaubern").style.visibility = "hidden";
  document.getElementById ("Zauberliste").style.visibility = "hidden";
}

c_gui.prototype.p_visibleZaubernButtons = function ()
{
  document.getElementById ("ButtonZaubern").style.visibility = "visible";
  document.getElementById ("Zauberliste").style.visibility = "visible";
}

c_gui.prototype.p_hideKontrollButtons = function ()
{
  document.getElementById ("ButtonSpeichern").style.visibility = "hidden";
  document.getElementById ("ButtonVerlassen").style.visibility = "hidden";
  document.getElementById ("ButtonMusik").style.visibility = "hidden";
  document.getElementById ("ButtonSound").style.visibility = "hidden";
}

c_gui.prototype.p_visibleKontrollButtons = function ()
{
  document.getElementById ("ButtonSpeichern").style.visibility = "visible";
  document.getElementById ("ButtonVerlassen").style.visibility = "visible";
  document.getElementById ("ButtonMusik").style.visibility = "visible";
  document.getElementById ("ButtonSound").style.visibility = "visible";
}

c_gui.prototype.p_hideAllButtons = function ()
{
  this.p_hideMoveButtons ();
  this.p_hideItemButtons ();
  this.p_hideZaubernButtons ();
  this.p_hideKontrollButtons ();

  document.getElementById ("ButtonI").style.visibility = "hidden";
  document.getElementById ("ButtonVollbild").style.visibility = "hidden";
}

c_gui.prototype.p_visibleAllButtons = function ()
{
  this.p_visibleMoveButtons () ;
  this.p_visibleItemButtons () ;
  this.p_visibleZaubernButtons ();
  this.p_visibleKontrollButtons ();

  document.getElementById ("ButtonI").style.visibility = "visible";
  document.getElementById ("ButtonVollbild").style.visibility = "visible";
}
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

function c_heiler () {}

c_heiler.prototype.p_start = function ()
{
  o_fenster.p_drawWindow (20, 260);
  
  if (o_charakter.v_lebenspunkte < o_charakter.v_mlebenspunkte)
  {
    o_fenster.p_writeText (v_texte [3], "", "", "", "");
    o_charakter.v_lebenspunkte = o_charakter.v_mlebenspunkte;
    o_ausgabe.p_writeLebenspunkte ();
  }
  else
  {
    o_fenster.p_writeText (v_texte [4], "", "", "", "");
  }
}
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

function c_questen ()
{
  this.v_quest = []; //Statuscodes: 0 - Quest nicht angenommen, 1 - Quest aktiv, 2 - Quest erledigt
}

c_questen.prototype.p_init = function ()
{
  for (let v_i = 1; v_i < 256; v_i++) { this.v_quest [v_i] = 0; }
}

c_questen.prototype.p_start = function ()
{
  o_fenster.p_drawWindow (20, 260);

  //Quest 1: Zauberstab finden
  if ((this.v_quest [1] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [0], v_questtexte [1], v_questtexte [2], "", "");
    this.v_quest [1] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = "Zauberstab finden";
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [1] == 1) && (o_charakter.v_questitem == "Zauberstab"))
  {
    o_fenster.p_writeText (v_questtexte [6], v_questtexte [7], "", v_questtexte [8], "");
    this.v_quest [1] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_gold = o_charakter.v_gold + 100;
    o_charakter.v_queststand = "Keine Aufgabe aktiv"; o_charakter.v_questitem = ""; 
    o_charakter.v_erfahrungspunkte = o_charakter.v_erfahrungspunkte + 25; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeGold ();
  }
  //Quest 2: Rubin finden
  else if ((this.v_quest [2] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [9], v_questtexte [10], v_questtexte [11], "", "");
    this.v_quest [2] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = "Rubin finden";
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [2] == 1) && (o_charakter.v_questitem == "Rubin"))
  {
    o_fenster.p_writeText (v_questtexte [13], v_questtexte [14], "", v_questtexte [15], "");
    this.v_quest [2] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_heiltrank = o_charakter.v_heiltrank + 5;
    o_charakter.v_queststand = "Keine Aufgabe aktiv"; o_charakter.v_erfahrungspunkte = o_charakter.v_erfahrungspunkte + 50;
    o_charakter.v_schluessel++; o_charakter.v_questitem = "";
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeHeiltrank ();
  }
  //Quest 3: Rattenmensch töten
  else if ((this.v_quest [3] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [0], "", v_questtexte [18], "", "");
    this.v_quest [3] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = v_questtexte [19];
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [3] == 1) && (o_charakter.v_questitem == "Rattenmensch"))
  {
    o_fenster.p_writeText (v_questtexte [20], "", v_questtexte [21], "", v_questtexte [22]);
    this.v_quest [3] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_manatrank++;
    o_charakter.v_queststand = "Keine Aufgabe aktiv"; o_charakter.v_erfahrungspunkte = o_charakter.v_erfahrungspunkte + 80;
    o_charakter.v_schluessel++; o_charakter.v_questitem = "";
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeManatrank ();
  }
  //Quest 4: Blauschuppe finden
  else if ((this.v_quest [4] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [0], "", v_questtexte [23], "", "");
    this.v_quest [4] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = v_questtexte [24];
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [4] == 1) && (o_charakter.v_questitem == "Blauschuppe"))
  {
    o_fenster.p_writeText (v_questtexte [28], v_questtexte [29], "", v_questtexte [30], "");
    this.v_quest [4] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_portalrolle += 2;
    o_charakter.v_queststand = "Keine Aufgabe aktiv"; o_charakter.v_erfahrungspunkte = o_charakter.v_erfahrungspunkte + 100;
    o_charakter.v_schluessel++; o_charakter.v_questitem = "";
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writePortalrolle ();
  }
  //Quest 5: Riesenkrake töten
  else if ((this.v_quest [5] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [0], "", v_questtexte [31], "", "");
    this.v_quest [5] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = v_questtexte [32];
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [5] == 1) && (o_charakter.v_questitem == "Riesenkrake"))
  {
    o_fenster.p_writeText (v_questtexte [33], "", v_questtexte [34], "", "");
    this.v_quest [5] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = "Keine Aufgabe aktiv";
    o_charakter.v_questitem = "";
    o_charakter.v_manatrank += 1; o_charakter.v_erfahrungspunkte += 120; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeManatrank ();
  }

  //Quest 6: Eichensamen finden
  else if ((this.v_quest [6] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [0], v_questtexte [35], v_questtexte [36], "", "");
    this.v_quest [6] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = v_questtexte [37];
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [6] == 1) && (o_charakter.v_questitem == "Eichensamen"))
  {
    o_fenster.p_writeText (v_questtexte [40], "", v_questtexte [41], "", "");
    this.v_quest [6] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = "Keine Aufgabe aktiv";
    o_charakter.v_questitem = "";
    o_charakter.v_gold += 150; o_charakter.v_erfahrungspunkte += 150; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeGold ();
  }
  //Quest 7: Pilzmensch töten
  else if ((this.v_quest [7] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [0], v_questtexte [42], "", "", "");
    this.v_quest [7] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = v_questtexte [43];
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [7] == 1) && (o_charakter.v_questitem == "Pilzmensch"))
  {
    o_fenster.p_writeText (v_questtexte [33], "", v_questtexte [44], "", "");
    this.v_quest [7] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = "Keine Aufgabe aktiv";
    o_charakter.v_questitem = "";
    o_charakter.v_heiltrank += 8; o_charakter.v_erfahrungspunkte += 200; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeHeiltrank ();
  }
  //Quest 8: Puppengeist töten
  else if ((this.v_quest [8] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText (v_questtexte [0], v_questtexte [46], v_questtexte [47], "", "");
    this.v_quest [8] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = v_questtexte [48];
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [8] == 1) && (o_charakter.v_questitem == "Puppengeist"))
  {
    o_fenster.p_writeText (v_questtexte [33], "", v_questtexte [51], "", "");
    this.v_quest [8] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = v_questtexte [50];
    o_charakter.v_questitem = "";
    o_charakter.v_manatrank += 2; o_charakter.v_erfahrungspunkte += 300; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeManatrank ();
  }
  //Quest 9: Eisenstein finden
  else if ((this.v_quest [9] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText ("Aufgabe:", v_questtexte [52], v_questtexte [53], "", "");
    this.v_quest [9] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = "Eisenstein finden";
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [9] == 1) && (o_charakter.v_questitem == "Eisenstein")) 
  {
    o_fenster.p_writeText (v_questtexte [33], "", v_questtexte [54], "", "");
    this.v_quest [9] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = "Keine Aufgabe aktiv";
    o_charakter.v_questitem = "";
    o_charakter.v_gold += 450; o_charakter.v_erfahrungspunkte += 250; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeGold ();
  }
  //Quest 10: Steinriese töten
  else if ((this.v_quest [10] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText ("Aufgabe:", v_questtexte [55], v_questtexte [56], "", "");
    this.v_quest [10] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = "Steinriese töten";
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [10] == 1) && (o_charakter.v_questitem == "Steinriese")) 
  {
    o_fenster.p_writeText (v_questtexte [33], "", v_questtexte [57], "", "");
    this.v_quest [10] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = "Keine Aufgabe aktiv";
    o_charakter.v_questitem = "";
    o_charakter.v_portalrolle++; o_charakter.v_manatrank++, o_charakter.v_erfahrungspunkte += 400; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writePortalrolle ();
    o_ausgabe.p_writeManatrank ();
  }
  //Quest 11: Seherkugel finden
  else if ((this.v_quest [11] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText ("Aufgabe:", v_questtexte [58], v_questtexte [59], "", "");
    this.v_quest [11] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = "Seherkugel finden";
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [11] == 1) && (o_charakter.v_questitem == "Seherkugel")) 
  {
    o_fenster.p_writeText (v_questtexte [33], "", v_questtexte [60], "", "");
    this.v_quest [11] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = "Keine Aufgabe aktiv";
    o_charakter.v_questitem = "";
    o_charakter.v_gold += 300; ; o_charakter.v_heiltrank +=3; o_charakter.v_erfahrungspunkte += 250; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeGold ();
    o_ausgabe.p_writeHeiltrank ();
  }
  //Quest 12: Basilisk töten
  else if ((this.v_quest [12] == 0) && (o_charakter.v_quest == "false"))
  {
    o_fenster.p_writeText ("Aufgabe:", v_questtexte [63], v_questtexte [64], "", "");
    this.v_quest [12] = 1; o_charakter.v_quest = "true";
    o_charakter.v_queststand = "Basilisk töten";
    o_ausgabe.p_writeQueststand (); 
  }
  else if ((this.v_quest [12] == 1) && (o_charakter.v_questitem == "Basilisk")) 
  {
    o_fenster.p_writeText (v_questtexte [33], "", v_questtexte [65], "", "");
    this.v_quest [12] = 2; o_charakter.v_quest = "false"; o_charakter.v_equest++; o_charakter.v_queststand = "Keine Aufgabe aktiv";
    o_charakter.v_questitem = "";
    o_charakter.v_portalrolle += 2; ; o_charakter.v_heiltrank +=5; o_charakter.v_erfahrungspunkte += 500; o_charakter.v_schluessel++;
    o_ausgabe.p_writeQueststand ();
    o_ausgabe.p_writeErfahrungspunkte ();
    o_ausgabe.p_writeGold ();
    o_ausgabe.p_writeHeiltrank ();
  }

  //wenn Quest aktiv
  else if (o_charakter.v_quest == "true")
  {
    o_fenster.p_writeText (v_questtexte [3], "", "", "", "");
  }

  else
  {
    o_fenster.p_writeText (v_questtexte [17], "", "", "","");
  }
}

c_questen.prototype.p_kampfquest = function ()
{
  if (v_zone == "Bosskampf")
  {
    if (o_gegner.v_name == "Rattenmensch")
    {
      o_questen.v_quest [3] = 1; o_charakter.v_quest = "true";
      o_charakter.v_queststand = "Rattenmensch getötet"; o_charakter.v_questitem = "Rattenmensch";
      o_ausgabe.p_writeQueststand ();   
    } 
    else if (o_gegner.v_name == "Riesenkrake")
    {
      o_questen.v_quest [5] = 1; o_charakter.v_quest = "true";
      o_charakter.v_queststand = "Riesenkrake getötet"; o_charakter.v_questitem = "Riesenkrake";
      o_ausgabe.p_writeQueststand ();
    } 
    else if (o_gegner.v_name == "Pilzmensch")
    {
      o_questen.v_quest [7] = 1; o_charakter.v_quest = "true";
      o_charakter.v_queststand = "Pilzmensch getötet"; o_charakter.v_questitem = "Pilzmensch";
      o_ausgabe.p_writeQueststand ();
    }
    else if (o_gegner.v_name == "Puppengeist")
    {
      o_questen.v_quest [8] = 1; o_charakter.v_quest = "true";
      o_charakter.v_queststand = v_questtexte [49]; o_charakter.v_questitem = "Puppengeist";
    }
    else if (o_gegner.v_name == "Steinriese")
    {
      o_questen.v_quest [10] = 1; o_charakter.v_quest = "true";
      o_charakter.v_queststand = "Steinriese getötet"; o_charakter.v_questitem = "Steinriese";
      o_ausgabe.p_writeQueststand ();
    }
    else if (o_gegner.v_name == "Basilisk")
    {
      o_questen.v_quest [12] = 1; o_charakter.v_quest = "true";
      o_charakter.v_queststand = "Basilisk getötet"; o_charakter.v_questitem = "Basilisk";
      o_ausgabe.p_writeQueststand ();
    }
    o_ausgabe.p_writeQueststand ();
  }
}
//
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

function c_haendler () {}

c_haendler.prototype.p_start = function ()
{
  v_zone = "Haendler";
  o_gui.p_enableGuiHaendler ();
  document.getElementById ("ButtonVerlassen").style.left = "380px";
  document.getElementById ("spielersprite").style.visibility = "hidden";
}

c_haendler.prototype.p_kaufen = function ()
{
  var v_anzahlHeiltrank = 0;
  var v_anzahlManatrank = 0;
  var v_anzahlPortalrolle = 0;
  var v_anzahlProviant = 0;
  var v_preisGesamt = 0;

  //Anzahl holen
  v_anzahlHeiltrank = parseInt (document.getElementById ("KaufHeiltrank").value);
  v_anzahlManatrank = parseInt (document.getElementById ("KaufManatrank").value);
  v_anzahlPortalrolle = parseInt (document.getElementById ("KaufPortalrolle").value);
  v_anzahlProviant = parseInt (document.getElementById ("KaufProviant").value);
  
  v_preisGesamt = (v_preiseHeiltrank [o_charakter.v_stufe] * v_anzahlHeiltrank) + (v_preiseManatrank [o_charakter.v_stufe] * v_anzahlManatrank) + (v_preisePortalrolle [o_charakter.v_stufe] * v_anzahlPortalrolle) + (v_preiseProviant [o_charakter.v_stufe] *  v_anzahlProviant);

  if (v_preisGesamt > o_charakter.v_gold)
  {
    o_sound.p_play (1);
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [21], "", "", "", "");
  }
  else if (v_preisGesamt == 0)
  {
    o_sound.p_play (1);
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [20], "", "", "", "");
  }
  else
  {
    o_sound.p_play (3); 
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [22] + v_preisGesamt + v_texte [23], "", "", "", "");

    document.getElementById ("KaufHeiltrank").value = 0;
    document.getElementById ("KaufManatrank").value = 0;
    document.getElementById ("KaufPortalrolle").value = 0;
    document.getElementById ("KaufProviant").value = 0;

    o_charakter.v_gold = o_charakter.v_gold - v_preisGesamt;
    
    o_charakter.v_heiltrank = o_charakter.v_heiltrank + v_anzahlHeiltrank;
    o_charakter.v_manatrank = o_charakter.v_manatrank + v_anzahlManatrank;
    o_charakter.v_portalrolle = o_charakter.v_portalrolle + v_anzahlPortalrolle;
    o_charakter.v_proviant = o_charakter.v_proviant + v_anzahlProviant;

    o_ausgabe.p_writeGold ();
    o_ausgabe.p_writeHeiltrank ();
    o_ausgabe.p_writeManatrank ();
    o_ausgabe.p_writePortalrolle ();
    o_ausgabe.p_writeProviant ();
  }
}
//   Unten - ein Rollenspiel im Retrodesign
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

function c_heiltrank () {}

c_heiltrank.prototype.p_benutzHeiltrank = function ()
{
  //wenn keine Heiltränke vorhanden
  if (o_charakter.v_heiltrank <= 0)
  {
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [15], "", "", "", "");
  } 

  //wenn Lebenspunkte voll
  else if (o_charakter.v_lebenspunkte == o_charakter.v_mlebenspunkte)
  {
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [16], "", "", "", "");
  }
  //wenn Lebenspunkte nicht voll
  else if (o_charakter.v_lebenspunkte < o_charakter.v_mlebenspunkte)
  {
    o_sound.p_play (4); 
    v_keylock = true; o_gui.p_hideAllButtons ();

    if (o_charakter.v_mlebenspunkte / 2 + o_charakter.v_lebenspunkte  > o_charakter.v_mlebenspunkte)
    {
      o_charakter.v_lebenspunkte = o_charakter.v_mlebenspunkte;
    }
    else
    {
      o_charakter.v_lebenspunkte = Math.round (o_charakter.v_mlebenspunkte / 2 + o_charakter.v_lebenspunkte);
    }
    o_charakter.v_heiltrank = o_charakter.v_heiltrank - 1;
    
    switch (o_charakter.v_klasse)
    {
      case "Krieger": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-2.png"; break; 
      case "Dieb": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-2.png"; break;
      case "Zauberer": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-2.png"; break;
    }
    
    setTimeout (function ()
    {
      switch (o_charakter.v_klasse)
      {
        case "Krieger": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-1.png"; break; 
        case "Dieb": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-1.png"; break;
        case "Zauberer": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-1.png"; break;
      }

      if ((v_zone == "Kampf") || (v_zone == "Bosskampf")) 
      {
        o_gui.p_visibleItemButtons ();
        o_gui.p_visibleZaubernButtons ();
        document.getElementById ("ButtonI").style.visibility = "visible";
        document.getElementById ("ButtonVerlassen").style.visibility = "visible";
        o_kampf.p_lebensleiste ();        
        o_kampf.p_angriffGegner ();
      }
      else
      {
        o_gui.p_visibleAllButtons ();
      }

    }, 
    800);

    o_ausgabe.p_writeLebenspunkte ();
    o_ausgabe.p_writeHeiltrank ();

  }
  v_keylock = false;
} 

c_heiltrank.prototype.p_wuerfleHeiltrank = function ()
{
  var v_zufall = 0;

  console.log ("Würfle auf Heiltrank");

  v_zufall = f_randomize (1, 100);

  console.log (v_zufall);

  if (v_zufall <= 50)
  {
    v_enginecanvas_context.fillText (v_kampftexte [6], 80, 110);
    o_charakter.v_heiltrank++;
    o_ausgabe.p_writeHeiltrank ();
  }
}

function c_manatrank () {}

//Manatrank benutzen
c_manatrank.prototype.p_benutzManatrank = function ()
{
  //wenn keine Manatränke vorhanden
  if (o_charakter.v_manatrank <= 0)
  {
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [17], "", "", "", "");
  } 

  //wenn Manapunkte voll
  else if (o_charakter.v_manapunkte == o_charakter.v_mmanapunkte)
  {
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [18], "", "", "", "");
  }
  //wenn Manapunkte nicht voll
  else if (o_charakter.v_manapunkte < o_charakter.v_mmanapunkte)
  {
    o_sound.p_play (4); 
    o_charakter.v_manapunkte++;
    o_charakter.v_manatrank--;
    
    switch (o_charakter.v_klasse)
    {
      case "Krieger": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-3.png"; break; 
      case "Dieb": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-3.png"; break;
      case "Zauberer": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-3.png"; break;
    }
    
    setTimeout (function ()
    {
      switch (o_charakter.v_klasse)
      {
        case "Krieger": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-1.png"; break; 
        case "Dieb": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-1.png"; break;
        case "Zauberer": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-1.png"; break;
      }

      if ((v_zone == "Kampf") || (v_zone == "Bosskampf")) 
      {
        o_gui.p_visibleItemButtons ();
        o_gui.p_visibleZaubernButtons ();
        document.getElementById ("ButtonI").style.visibility = "visible";
        document.getElementById ("ButtonVerlassen").style.visibility = "visible";
        o_kampf.p_lebensleiste ();        
        o_kampf.p_angriffGegner ();
      }
      else
      {
        o_gui.p_visibleAllButtons ();
      }
    }, 
    800);

    o_ausgabe.p_writeManapunkte ();
    o_ausgabe.p_writeManatrank ();
  }
}

function c_medizintrank () {}

c_medizintrank.prototype.p_benutzMedizintrank = function ()
{
  //wenn keine Medizintränke vorhanden
  if (o_charakter.v_medizintrank <= 0)
  {
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText ("Keine Medizintränke vorhanden!", "", "", "", "");
  } 

  //wenn Manapunkte voll
  else if (o_charakter.v_manapunkte == o_charakter.v_mmanapunkte)
  {
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [18], "", "", "", "");
  }
  //wenn Manapunkte nicht voll
  else if (o_charakter.v_manapunkte < o_charakter.v_mmanapunkte)
  {
    o_sound.p_play (4); 
    o_charakter.v_manapunkte++;
    o_charakter.v_manatrank--;
    
    switch (o_charakter.v_klasse)
    {
      case "Krieger": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-9.png"; break; 
      case "Dieb": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-9.png"; break;
      case "Zauberer": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-9.png"; break;
    }
    
    setTimeout (function ()
    {
      switch (o_charakter.v_klasse)
      {
        case "Krieger": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-1.png"; break; 
        case "Dieb": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-1.png"; break;
        case "Zauberer": document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-1.png"; break;
      }

      if ((v_zone == "Kampf") || (v_zone == "Bosskampf")) 
      {
        o_gui.p_visibleItemButtons (4);
        o_gui.p_visibleZaubernButtons ();
        document.getElementById ("ButtonI").style.visibility = "visible";
        document.getElementById ("ButtonVerlassen").style.visibility = "visible";
        o_kampf.p_lebensleiste ();        
        o_kampf.p_angriffGegner ();
      }
      else
      {
        o_gui.p_visibleAllButtons ();
      }
    }, 
    800);

    o_ausgabe.p_writeManapunkte ();
    o_ausgabe.p_writeManatrank ();
  }
}

c_manatrank.prototype.p_wuerfleManatrank = function ()
{
  var v_zufall = 0;

  console.log ("Würfle auf Manatrank");

  v_zufall = f_randomize (1, 100);

  console.log (v_zufall);

  if (v_zufall <= 12)
  {
    v_enginecanvas_context.fillText (v_kampftexte [7], 80, 110);
    o_charakter.v_manatrank++;
    o_ausgabe.p_writeManatrank ();
  }
} 

function c_portalrolle () {}

c_portalrolle.prototype.p_benutzPortalrolle = function ()
{
  if (o_charakter.v_portalrolle > 0)
  {
    //Teleport ins Dorf
    if (v_zone == "Gebiet")
    {
      o_musik.p_stop (1);
      v_keylock = true;
      o_gui.p_hideAllButtons ();
      v_lvl = 1;
      f_leveldaten ();
      o_engine.v_tileset = "dorf";
      o_engine.p_drawMap (o_engine.v_tileset, true);
      o_charakter.v_mxk = 16; o_charakter.v_myk = 12;
      o_charakter.p_setSprite (330, 250);
      v_statuscanvas_context.clearRect (0, 0, 420, 420);
      o_charakter.v_portalrolle--;
      o_portale.p_draw ();
      o_ausgabe.p_writePortalrolle ();
      o_ausgabe.p_writeKoords ();
      o_ausgabe.p_writeLevel ();
      v_keylock = false;
      o_gui.p_visibleAllButtons ();
      o_musik.p_play (0);
    }
    //Im Kampf - Teleport aus Kampf
    else if ((v_zone == "Kampf") || (v_zone == "Bosskampf"))
    {
      o_musik.p_stopAll ();
      v_keylock = true;
      o_gui.p_hideAllButtons ();
      f_leveldaten ();
      o_engine.p_drawMap (o_engine.v_tileset, false);
      o_charakter.p_setSprite (o_charakter.v_xk, o_charakter.v_yk);
      v_statuscanvas_context.clearRect (0, 0, 420, 420);
      o_charakter.v_portalrolle--;
      o_ausgabe.p_writePortalrolle ();
      v_keylock = false;
      o_gui.p_visibleAllButtons ();
      document.getElementById ("gegnersprite").style.visibility = "hidden";
      o_schlachtfelder.p_status ();
      o_truhen.p_status ();
      o_musik.p_play (1);
    }
  }
  else
  {
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_texte [8], "", "", "", "");
  } 
}

//Würfelt nach Item Portalrolle nach Kampf
c_portalrolle.prototype.p_wuerflePortalrolle = function ()
{
  var v_zufall = 0;

  console.log ("Würfle auf Portalrolle");

  v_zufall = f_randomize (1, 100);

  console.log (v_zufall);

  if (v_zufall <= 15)
  {
    v_enginecanvas_context.fillText (v_kampftexte [8], 80, 110);
    o_charakter.v_portalrolle++;
    o_ausgabe.p_writePortalrolle ();
  }
}
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

function c_proviant () {}

c_proviant.prototype.p_test = function ()
{
  if (o_charakter.v_schritte == 300) 
  {
    if (o_charakter.v_proviant >= 1)
    {
      o_charakter.v_proviant--; o_charakter.v_schritte = 0;
      o_ausgabe.p_writeProviant ();
    }
    else
    {
      o_charakter.v_lebenspunkte -= 15;
      o_ausgabe.p_writeLebenspunkte ();
      o_charakter.v_zustand = "hungrig";
      o_ausgabe.p_writeZustand ();

      if (o_charakter.v_lebenspunkte <= 0)
      {
        v_enginecanvas_context.clearRect (0, 0, 420, 420);
        v_enginecanvas_context.fillText (v_kampftexte [13], 75, 50);
        document.getElementById ("gegnersprite").style.visibility = "hidden";
        document.getElementById ("spielersprite").style.visibility = "hidden";

        setTimeout (function ()
        {
          keylock = true;
          document.getElementById ("ausgabe2canvas").style.visibility = "hidden";
          o_gui.p_disableAllGame ();
          o_gui.p_enableStartscreen ();
          v_textName.value = "Hier Charakternamen eingeben";
        }, 4000);
      }

    }
  }
}
//   Unten - ein Rollenspiel im Retrodesign
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

function c_truhen ()
{
  this.v_status = [];     // 0 - Truhe verschlossen, 1 - Truhe geöffnet
}

c_truhen.prototype.p_init = function ()
{
  for (let v_i = 0; v_i < 256; v_i++) { this.v_status [v_i] = 0; }
}

c_truhen.prototype.p_open = function (xk, yk)
{
  v_statuscanvas_context.fillStyle = "#000000";
  v_statuscanvas_context.fillRect (xk * 20, yk * 20, 20, 8);
}

c_truhen.prototype.p_goldtruhe = function (v_xk, v_yk, v_nr, v_hoehe)
{
  if ((o_charakter.v_mxk == v_xk) && (o_charakter.v_myk == v_yk))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [v_nr] == 0)
    {
      o_fenster.p_writeText (v_truhentexte  [1] + v_hoehe + v_truhentexte [12], "", "", "", "");
      o_charakter.v_gold += v_hoehe;
      o_ausgabe.p_writeGold ();
      o_truhen.v_status [v_nr] = 1;
      o_truhen.p_status ();
    }
    else
    {
      o_fenster.p_writeText (v_truhentexte  [0], "", "", "", "");
    }
  }
}

c_truhen.prototype.p_heiltranktruhe = function (v_xk, v_yk, v_nr, v_anzahl)
{
  if ((o_charakter.v_mxk == v_xk) && (o_charakter.v_myk == v_yk))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [v_nr] == 0)
    {
      o_fenster.p_writeText (v_truhentexte  [2] + v_anzahl + v_truhentexte [13], "", "", "", "");
      o_charakter.v_heiltrank += v_anzahl;
      o_ausgabe.p_writeHeiltrank ();
      o_truhen.v_status [v_nr] = 1;
      o_truhen.p_status ();
    }
    else
    {
      o_fenster.p_writeText (v_truhentexte  [0], "", "", "", "");
    }
  }
}

c_truhen.prototype.p_manatranktruhe = function (v_xk, v_yk, v_nr, v_anzahl)
{
  if ((o_charakter.v_mxk == v_xk) && (o_charakter.v_myk == v_yk))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [v_nr] == 0)
    {
      o_fenster.p_writeText (v_truhentexte [3] + v_anzahl + v_truhentexte [14], "", "", "", "");
      o_charakter.v_manatrank += v_anzahl;
      o_ausgabe.p_writeManatrank ();
      o_truhen.v_status [v_nr] = 1;
      o_truhen.p_status ();
    }
    else
    {
      o_fenster.p_writeText (v_truhentexte  [0], "", "", "", "");
    }
  }
}

c_truhen.prototype.p_portalrolletruhe = function (v_xk, v_yk, v_nr, v_anzahl)
{
  if  ((o_charakter.v_mxk == v_xk) && (o_charakter.v_myk == v_yk))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [v_nr] == 0)
    {
      if (v_anzahl == 1)
      {
        o_fenster.p_writeText (v_truhentexte [1] + v_anzahl + v_truhentexte [15], "", "", "", "");
      }
      else if (v_anzahl > 1)
      {
        o_fenster.p_writeText (v_anzahl + " Portalrollen erhalten!", "", "", "", "");
      }
      o_charakter.v_portalrolle += v_anzahl; 
      o_truhen.v_status [v_nr] = 1;
      o_ausgabe.p_writePortalrolle ();
      o_truhen.p_status ();
    }
  }
}

c_truhen.prototype.p_provianttruhe = function (v_xk, v_yk, v_nr, v_anzahl)
{
  if  ((o_charakter.v_mxk == v_xk) && (o_charakter.v_myk == v_yk))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [v_nr] == 0)
    {
      o_fenster.p_writeText (v_anzahl + " Proviant erhalten", "", "", "", "", "");
      o_charakter.v_proviant += v_anzahl; 
      o_truhen.v_status [v_nr] = 1;
      o_ausgabe.p_writeProviant ();
      o_truhen.p_status ();
    }
  }
} 

//Rüstungstruhe (XK, YK, Truhennummer, Anzahl benötigter Schlachtfelder, Rüstungsname Krieger, Rüstungsname Dieb, Rüstungsname Zauberer, Rüstungswert)
c_truhen.prototype.p_ruestungstruhe = function (v_xk, v_yk, v_nr, v_aschlachtfelder, v_rstxt1, v_rstxt2, v_rstxt3, v_rswert)
{
  if ((o_charakter.v_mxk == v_xk) && (o_charakter.v_myk == v_yk))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [v_nr] == 0)
    {
      
      if (o_charakter.v_schlachtfelder >= v_aschlachtfelder)
      { 
        if (o_charakter.v_klasse == "Krieger")
        {
          o_charakter.v_ruestung = v_rstxt1;
        }
        else if (o_charakter.v_klasse == "Dieb")
        {
          o_charakter.v_ruestung = v_rstxt2;
        }
        else if (o_charakter.v_klasse == "Zauberer")
        {
          o_charakter.v_ruestung = v_rstxt3;
        }

        o_charakter.v_ruestungswert = v_rswert;
        o_ausgabe.p_writeRuestung ();  
        o_fenster.p_writeText (v_truhentexte [1] + o_charakter.v_ruestung, "", "", "", "");
        o_truhen.v_status [v_nr] = 1;
        o_truhen.p_status ();
      }
      else
      {
        o_fenster.p_writeText ("Die Truhe ist verschlossen! Eine blauglühende " + v_aschlachtfelder + " ist zu sehen.", "", "", "", "");
      }
    }
    else if (o_truhen.v_status [v_nr] == 1)
    {
      o_fenster.p_writeText (v_truhentexte [0], "", "", "", "");
    }
  }
}

c_truhen.prototype.p_status = function ()
{
  document.getElementById ("statuscanvas").style.visibility = "visible";

  if (v_lvl == 2)
  {
    if (this.v_status [1] == 1) { this.p_open (14, 9); }
    if (this.v_status [2] == 1) { this.p_open (14, 1); }
  }
  else if (v_lvl == 3)
  {
    if (this.v_status [3] == 1) { this.p_open (15, 12); }
    if (this.v_status [4] == 1) { this.p_open (9, 12); }
  }
  else if (v_lvl == 4)
  {
    if (this.v_status [5] == 1) { this.p_open (15, 4); }
    if (this.v_status [6] == 1) { this.p_open (5, 14); }
  }
  else if (v_lvl == 5)
  {
    if (this.v_status [7] == 1) { this.p_open (14, 12); }
    if (this.v_status [8] == 1) { this.p_open (19, 7); }
  }
  else if (v_lvl == 7)
  {
    if (this.v_status [9] == 1) { this.p_open (12, 5); }
  }
  else if (v_lvl == 9)
  {
    if (this.v_status [10] == 1) { this.p_open (12, 9); }
  }
  else if (v_lvl == 12)
  {
    if (this.v_status [11] == 1) { this.p_open (10, 10); }
  }
  else if (v_lvl == 13) 
  {
    if (this.v_status [12] == 1) { this.p_open (11, 7); }
    if (this.v_status [13] == 1) { this.p_open (17, 10); }
  }
  else if (v_lvl == 14)
  {
    if (this.v_status [14] == 1) { this.p_open (10, 3); }
  }
  else if (v_lvl == 17)
  {
    if (this.v_status [15] == 1) { this.p_open (18, 10); }
  }
  else if (v_lvl == 19)
  {
    if (this.v_status [16] == 1) { this.p_open (18, 10); }
  }
  else if (v_lvl == 21)
  {
    if (this.v_status [17] == 1) { this.p_open (2, 17); }
    if (this.v_status [18] == 1) { this.p_open (16, 2); }
  }
  else if (v_lvl == 23)
  {
    if (this.v_status [19] == 1) { this.p_open (7, 2); }
  }
  else if (v_lvl == 24)
  {
    if (this.v_status [20] == 1) { this.p_open (5, 8); }
  }
  else if (v_lvl == 28)
  {
    if (this.v_status [21] == 1) { this.p_open (1, 10); }
  }
  else if (v_lvl == 34)
  {
    if (this.v_status [23] == 1) { this.p_open (10, 14); }
  }
  else if (v_lvl == 38)
  {
    if (this.v_status [24] == 1) { this.p_open (18, 10); }
  }
  else if (v_lvl == 39)
  {
    if (this.v_status [25] == 1) { this.p_open (10, 18); }
  }
  else if (v_lvl == 43)
  {
    if (this.v_status [26] == 1) { this.p_open (3, 1); }
  }
}
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

function c_schlachtfelder ()
{
  this.v_etage = [];
  this.v_erledigt = [];    //0 - nein, 1 - ja
}

c_schlachtfelder.prototype.p_feld = function (v_sx, v_sy, v_snr)
{
  if ((o_charakter.v_mxk == v_sx) && (o_charakter.v_myk == v_sy))
  {
    console.log ("Starte mit Schlachtfeld");

    if (o_schlachtfelder.v_erledigt [v_snr] == 0)
    {
      console.log ("1");
      v_schlachtfeld = v_snr;
      o_kampf.p_start ("kein");
    }
    else if (o_schlachtfelder.v_erledigt [v_snr] == 1)
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_kampftexte [3], "", "", "", "");
    }
  }
}

c_schlachtfelder.prototype.p_init = function ()
{
  for (let v_i = 1; v_i <= 512; v_i++) {this.v_erledigt [v_i] = 0; }

  // Schlachfelder Lvl 2
  for (let v_i = 1; v_i < 14; v_i++) { this.v_etage [v_i] = 1; }

  // Schlachtfelder Lvl 3
  for (let v_i = 14; v_i < 29; v_i++) { this.v_etage [v_i] = 2; }

  //Schlachfelder Lvl 4
  for (let v_i = 29; v_i < 49; v_i++) { this.v_etage [v_i] = 2; }

  //Schlachtfelder Lvl 5
  for (let v_i = 49; v_i < 62; v_i++) { this.v_etage [v_i] = 3; }

  //Schlachtfelder Lvl 6
  for (let v_i = 62; v_i < 72; v_i++) { this.v_etage [v_i] = 3; }
  
  //Schlachtfelder Lvl 7
  for (let v_i = 72; v_i < 83; v_i++) { this.v_etage [v_i] = 3; }

  //Schlachtfelder Lvl 8
  for (let v_i = 83; v_i < 89; v_i++) { this.v_etage [v_i] = 3; }

  //Schlachtfelder Lvl 9
  for (let v_i = 89; v_i < 98; v_i++) { this.v_etage [v_i] = 4; }

  //Schlachtfeld lvl 10
  this.v_etage [98] = 1;

  //Schlachfelder lvl 11
  for (let v_i = 99; v_i < 106; v_i++) { this.v_etage [v_i] = 2; }

  //Schlachtfelder lvl 12 und 13
  for (let v_i = 106; v_i < 116; v_i++) { this.v_etage [v_i] = 3; }

  //lvl 14
  for (let v_i = 116; v_i < 123; v_i++) { this.v_etage [v_i] = 4; }

  //lvl 15
  this.v_etage [123] = 1;

  //lvl 16-20
  for (let v_i = 124; v_i < 149; v_i++) { this.v_etage [v_i] = 3; }

  //lvl 21
  for (let v_i = 149; v_i < 156; v_i++) { this.v_etage [v_i] = 4; }

  //lvl 22
  this.v_etage [156] = 1; 

  //lvl 23
  for (let v_i = 157; v_i < 163; v_i++) { this.v_etage [v_i] = 3; }

  //lvl 24
  for (let v_i = 164; v_i < 168; v_i++) { this.v_etage [v_i] = 3; }

  //25
  this.v_etage [169] = 1; 

  //26
  for (let v_i = 170; v_i < 176; v_i++) { this.v_etage [v_i] = 3; }

  //27
  for (let v_i = 176; v_i <= 180; v_i++) { this.v_etage [v_i] = 3; }

  //28
  for (let v_i = 181; v_i <= 189; v_i++) { this.v_etage [v_i] = 3; }

  //29
  for (let v_i = 190; v_i <= 196; v_i++) { this.v_etage [v_i] = 3; }

  //30
  for (let v_i = 197; v_i <= 202; v_i++) { this.v_etage [v_i] = 3; }

  //31
  this.v_etage [203] = 1;

  //33
  for (let v_i = 204; v_i <= 214; v_i++) { this.v_etage [v_i] = 2; }

  //34
  for (let v_i = 215; v_i <= 218; v_i++) { this.v_etage [v_i] = 3; }

  //35
  for (let v_i = 219; v_i <= 223; v_i++) { this.v_etage [v_i] = 3; }

  //36
  for (let v_i = 224; v_i <= 229; v_i++) { this.v_etage [v_i] = 3; }

  //37
  for (let v_i = 230; v_i <= 240; v_i++) { this.v_etage [v_i] = 3; }
  
  //38
  for (let v_i = 241; v_i <= 244; v_i++) { this.v_etage [v_i] = 3; }
  
  //39
  for (let v_i = 245; v_i <= 249; v_i++) { this.v_etage [v_i] = 4; }
  
  //40
   this.v_etage [250] = 1;
   
   //41
   for (let v_i = 251; v_i <= 263; v_i++) { this.v_etage [v_i] = 2; }
   
   //42
   for (let v_i = 264; v_i <= 274; v_i++) { this.v_etage [v_i] = 2; }

   //43
   for (let v_i = 275; v_i <= 289; v_i++) { this.v_etage [v_i] = 3; }
}

c_schlachtfelder.prototype.p_clean = function (xk, yk)
{
  v_statuscanvas_context.fillStyle = "#000000";
  v_statuscanvas_context.fillRect (xk * 20 + 1, yk * 20 + 1 , 18, 18);
}

c_schlachtfelder.prototype.p_status = function ()
{
  document.getElementById ("statuscanvas").style.visibility = "visible";

  if (v_lvl == 2)
  {
    if (this.v_erledigt [1] == 1) { this.p_clean (19, 7); }
    if (this.v_erledigt [2] == 1) { this.p_clean (15, 12); }
    if (this.v_erledigt [3] == 1) { this.p_clean (7, 8); }
    if (this.v_erledigt [4] == 1) { this.p_clean (7, 12); }
    if (this.v_erledigt [5] == 1) { this.p_clean (13, 14); }
    if (this.v_erledigt [6] == 1) { this.p_clean (19, 16); }
    if (this.v_erledigt [7] == 1) { this.p_clean (17, 19); }
    if (this.v_erledigt [8] == 1) { this.p_clean (13, 18); }
    if (this.v_erledigt [9] == 1) { this.p_clean (7, 16); }
    if (this.v_erledigt [10] == 1) { this.p_clean (4, 19); }
    if (this.v_erledigt [11] == 1) { this.p_clean (1, 14); }
    if (this.v_erledigt [12] == 1) { this.p_clean (1, 7); }
    if (this.v_erledigt [13] == 1) { this.p_clean (11, 6); }
  }
  else if (v_lvl == 3)
  {
    if (this.v_erledigt [14] == 1) { this.p_clean (10, 5); }
    if (this.v_erledigt [15] == 1) { this.p_clean (16, 5); }
    if (this.v_erledigt [16] == 1) { this.p_clean (18, 7); }
    if (this.v_erledigt [17] == 1) { this.p_clean (9, 7); }
    if (this.v_erledigt [18] == 1) { this.p_clean (9, 9); }
    if (this.v_erledigt [19] == 1) { this.p_clean (16, 15); }
    if (this.v_erledigt [20] == 1) { this.p_clean (16, 17); }
    if (this.v_erledigt [21] == 1) { this.p_clean (18, 19); }
    if (this.v_erledigt [22] == 1) { this.p_clean (9, 19); }
    if (this.v_erledigt [23] == 1) { this.p_clean (2, 19); }
    if (this.v_erledigt [24] == 1) { this.p_clean (3, 17); }
    if (this.v_erledigt [25] == 1) { this.p_clean (4, 14); }
    if (this.v_erledigt [26] == 1) { this.p_clean (2, 12); }
    if (this.v_erledigt [27] == 1) { this.p_clean (2, 10); }
    if (this.v_erledigt [28] == 1) { this.p_clean (3, 4); }
  }
  else if (v_lvl == 4)
  {
    if (this.v_erledigt [29] == 1) { this.p_clean (4, 4); }
    if (this.v_erledigt [30] == 1) { this.p_clean (2, 4); }
    if (this.v_erledigt [31] == 1) { this.p_clean (2, 1); }
    if (this.v_erledigt [32] == 1) { this.p_clean (8, 1); }
    if (this.v_erledigt [33] == 1) { this.p_clean (9, 4); }
    if (this.v_erledigt [34] == 1) { this.p_clean (7, 9); }
    if (this.v_erledigt [35] == 1) { this.p_clean (4, 11); }
    if (this.v_erledigt [36] == 1) { this.p_clean (1, 12); }
    if (this.v_erledigt [37] == 1) { this.p_clean (1, 18); }
    if (this.v_erledigt [38] == 1) { this.p_clean (6, 18); }
    if (this.v_erledigt [39] == 1) { this.p_clean (11, 15); }
    if (this.v_erledigt [40] == 1) { this.p_clean (11, 8); }
    if (this.v_erledigt [41] == 1) { this.p_clean (11, 2); }
    if (this.v_erledigt [42] == 1) { this.p_clean (15, 1); }
    if (this.v_erledigt [43] == 1) { this.p_clean (19, 6); }
    if (this.v_erledigt [44] == 1) { this.p_clean (14, 8); }
    if (this.v_erledigt [45] == 1) { this.p_clean (17, 12); }
    if (this.v_erledigt [46] == 1) { this.p_clean (15, 16); }
    if (this.v_erledigt [47] == 1) { this.p_clean (19, 16); }
    if (this.v_erledigt [48] == 1) { this.p_clean (16, 19); }
  }
  else if (v_lvl == 5)
  {
    if (this.v_erledigt [49] == 1) { this.p_clean (16, 17); }
    if (this.v_erledigt [50] == 1) { this.p_clean (8, 17); }
    if (this.v_erledigt [51] == 1) { this.p_clean (6, 14); }
    if (this.v_erledigt [52] == 1) { this.p_clean (6, 11); }
    if (this.v_erledigt [53] == 1) { this.p_clean (3, 9); }
    if (this.v_erledigt [54] == 1) { this.p_clean (3, 7); }
    if (this.v_erledigt [55] == 1) { this.p_clean (8, 8); }
    if (this.v_erledigt [56] == 1) { this.p_clean (12, 8); }
    if (this.v_erledigt [57] == 1) { this.p_clean (13, 4); }
    if (this.v_erledigt [58] == 1) { this.p_clean (3, 4); }
    if (this.v_erledigt [59] == 1) { this.p_clean (1, 3); }
    if (this.v_erledigt [60] == 1) { this.p_clean (6, 1); }
    if (this.v_erledigt [61] == 1) { this.p_clean (13, 2); }
  }
  else if (v_lvl == 6)
  {
     if (this.v_erledigt [62] == 1) { this.p_clean (9, 1); }
     if (this.v_erledigt [63] == 1) { this.p_clean (9, 3); }
     if (this.v_erledigt [64] == 1) { this.p_clean (9, 5); }
     if (this.v_erledigt [65] == 1) { this.p_clean (9, 7); }
     if (this.v_erledigt [66] == 1) { this.p_clean (9, 9); }
     if (this.v_erledigt [67] == 1) { this.p_clean (9, 11); }
     if (this.v_erledigt [68] == 1) { this.p_clean (9, 13); }
     if (this.v_erledigt [69] == 1) { this.p_clean (9, 15); }
     if (this.v_erledigt [70] == 1) { this.p_clean (9, 17); }
     if (this.v_erledigt [71] == 1) { this.p_clean (9, 19); }
  }
  else if (v_lvl == 7)
  {
     if (this.v_erledigt [72] == 1) { this.p_clean (17, 16); }
     if (this.v_erledigt [73] == 1) { this.p_clean (15, 9); }
     if (this.v_erledigt [74] == 1) { this.p_clean (10, 9); }
     if (this.v_erledigt [75] == 1) { this.p_clean (8, 11); }
     if (this.v_erledigt [76] == 1) { this.p_clean (11, 13); }
     if (this.v_erledigt [77] == 1) { this.p_clean (14, 15); }
     if (this.v_erledigt [78] == 1) { this.p_clean (10, 17); }
     if (this.v_erledigt [79] == 1) { this.p_clean (2, 16); }
     if (this.v_erledigt [80] == 1) { this.p_clean (2, 4); }
     if (this.v_erledigt [81] == 1) { this.p_clean (6, 3); }
     if (this.v_erledigt [82] == 1) { this.p_clean (13, 1); }
  }
  else if (v_lvl == 8)
  {
    if (this.v_erledigt [83] == 1) { this.p_clean (19, 4); }
    if (this.v_erledigt [84] == 1) { this.p_clean (17, 6); }
    if (this.v_erledigt [85] == 1) { this.p_clean (12, 6); }
    if (this.v_erledigt [86] == 1) { this.p_clean (10, 8); }
    if (this.v_erledigt [87] == 1) { this.p_clean (10, 11); }
    if (this.v_erledigt [88] == 1) { this.p_clean (10, 15); }
  }
  else if (v_lvl == 9)
  {
    if (this.v_erledigt [89] == 1) { this.p_clean (12, 18); }
    if (this.v_erledigt [90] == 1) { this.p_clean (4, 18); }
    if (this.v_erledigt [91] == 1) { this.p_clean (1, 15); }
    if (this.v_erledigt [92] == 1) { this.p_clean (1, 12); }
    if (this.v_erledigt [93] == 1) { this.p_clean (5, 9); }
    if (this.v_erledigt [94] == 1) { this.p_clean (1, 7); }
    if (this.v_erledigt [95] == 1) { this.p_clean (1, 4); }
    if (this.v_erledigt [96] == 1) { this.p_clean (4, 2); }
    if (this.v_erledigt [97] == 1) { this.p_clean (12, 2); }
  }
  else if (v_lvl == 10)
  {
    if (this.v_erledigt [98] == 1) { this.p_clean (10, 9); }
  }
  else if (v_lvl == 11)
  {
    if (this.v_erledigt [99] == 1) { this.p_clean (17, 4); }
    if (this.v_erledigt [100] == 1) { this.p_clean (13, 7); }
    if (this.v_erledigt [101] == 1) { this.p_clean (17, 10); }
    if (this.v_erledigt [102] == 1) { this.p_clean (9, 12); }
    if (this.v_erledigt [103] == 1) { this.p_clean (12, 14); }
    if (this.v_erledigt [104] == 1) { this.p_clean (6, 15); }
    if (this.v_erledigt [105] == 1) { this.p_clean (3, 17); }
  }
  else if (v_lvl == 12)
  {
    if (this.v_erledigt [106] == 1) { this.p_clean (16, 3); }
    if (this.v_erledigt [107] == 1) { this.p_clean (10, 6); }
    if (this.v_erledigt [108] == 1) { this.p_clean (10, 13); }
    if (this.v_erledigt [109] == 1) { this.p_clean (17, 19); }
  }
  else if (v_lvl == 13)
  {
    if (this.v_erledigt [110] == 1) { this.p_clean (2, 19); }
    if (this.v_erledigt [111] == 1) { this.p_clean (4, 15); }
    if (this.v_erledigt [112] == 1) { this.p_clean (8, 17); }
    if (this.v_erledigt [113] == 1) { this.p_clean (11, 17); }
    if (this.v_erledigt [114] == 1) { this.p_clean (15, 14); }
    if (this.v_erledigt [115] == 1) { this.p_clean (18, 19); }
  }
  else if (v_lvl == 14)
  {
    if (this.v_erledigt [116] == 1) { this.p_clean (2, 19); }
    if (this.v_erledigt [117] == 1) { this.p_clean (6, 19); }
    if (this.v_erledigt [118] == 1) { this.p_clean (10, 19); }
    if (this.v_erledigt [119] == 1) { this.p_clean (14, 19); }
    if (this.v_erledigt [120] == 1) { this.p_clean (18, 19); }
    if (this.v_erledigt [121] == 1) { this.p_clean (10, 15); }
    if (this.v_erledigt [122] == 1) { this.p_clean (10, 10); }
  }
  else if (v_lvl == 15)
  {
    if (this.v_erledigt [123] == 1) { this.p_clean (9, 10); }
  }
  else if (v_lvl == 16)
  {
    if (this.v_erledigt [124] == 1) { this.p_clean (6, 14); }
    if (this.v_erledigt [125] == 1) { this.p_clean (6, 8); }
    if (this.v_erledigt [126] == 1) { this.p_clean (9, 10); }
    if (this.v_erledigt [127] == 1) { this.p_clean (13, 10); }
    if (this.v_erledigt [128] == 1) { this.p_clean (17, 10); }
  }
  else if (v_lvl == 17)
  {
    if (this.v_erledigt [129] == 1) { this.p_clean (5, 10); }
    if (this.v_erledigt [130] == 1) { this.p_clean (14, 10); }
    if (this.v_erledigt [131] == 1) { this.p_clean (10, 7); }
    if (this.v_erledigt [132] == 1) { this.p_clean (10, 3); }
    if (this.v_erledigt [133] == 1) { this.p_clean (10, 13); }
    if (this.v_erledigt [134] == 1) { this.p_clean (10, 17); }
  }
  else if (v_lvl == 18)
  {
    if (this.v_erledigt [135] == 1) { this.p_clean (10, 17); }
    if (this.v_erledigt [136] == 1) { this.p_clean (10, 14); }
    if (this.v_erledigt [137] == 1) { this.p_clean (10, 10); }
    if (this.v_erledigt [138] == 1) { this.p_clean (14, 10); }
    if (this.v_erledigt [139] == 1) { this.p_clean (17, 10); }
  }
  else if (v_lvl == 19)
  {
    if (this.v_erledigt [140] == 1) { this.p_clean (2, 10); }
    if (this.v_erledigt [141] == 1) { this.p_clean (5, 10); }
    if (this.v_erledigt [142] == 1) { this.p_clean (9, 10); }
    if (this.v_erledigt [143] == 1) { this.p_clean (12, 10); }
  }
  else if (v_lvl == 20)
  {
    if (this.v_erledigt [144] == 1) { this.p_clean (10, 2); }
    if (this.v_erledigt [145] == 1) { this.p_clean (10, 6); }
    if (this.v_erledigt [146] == 1) { this.p_clean (10, 10); }
    if (this.v_erledigt [147] == 1) { this.p_clean (14, 10); }
    if (this.v_erledigt [148] == 1) { this.p_clean (18, 10); }
  }
  else if (v_lvl == 21)
  {
    if (this.v_erledigt [149] == 1) { this.p_clean (4, 10); }
    if (this.v_erledigt [150] == 1) { this.p_clean (7, 10); }
    if (this.v_erledigt [151] == 1) { this.p_clean (12, 10); }
    if (this.v_erledigt [152] == 1) { this.p_clean (9, 12); }
    if (this.v_erledigt [153] == 1) { this.p_clean (7, 15); }
    if (this.v_erledigt [154] == 1) { this.p_clean (16, 6); }
    if (this.v_erledigt [155] == 1) { this.p_clean (16, 13); }
  }
  else if (v_lvl == 22)
  { 
    if (this.v_erledigt [156] == 1) { this.p_clean (10, 10); }
  }
  else if (v_lvl == 23)
  {
    if (this.v_erledigt [157] == 1) { this.p_clean (3, 16); }
    if (this.v_erledigt [158] == 1) { this.p_clean (7, 5); }
    if (this.v_erledigt [159] == 1) { this.p_clean (10, 10); }
    if (this.v_erledigt [160] == 1) { this.p_clean (15, 10); }
    if (this.v_erledigt [161] == 1) { this.p_clean (16, 7); }
    if (this.v_erledigt [162] == 1) { this.p_clean (16, 12); }
  }
  else if (v_lvl == 24)
  {
    if (this.v_erledigt [163] == 1) { this.p_clean (15, 9); }
    if (this.v_erledigt [164] == 1) { this.p_clean (17, 11); }
    if (this.v_erledigt [165] == 1) { this.p_clean (16, 17); }
    if (this.v_erledigt [166] == 1) { this.p_clean (10, 18); }
    if (this.v_erledigt [167] == 1) { this.p_clean (5, 15); }
    if (this.v_erledigt [168] == 1) { this.p_clean (5, 11); }
  }
  else if (v_lvl == 25)
  {
    if (this.v_erledigt [169] == 1) { this.p_clean (17, 8); }
  }
  else if (v_lvl==26)
  {
    if (this.v_erledigt [170] == 1) { this.p_clean (16, 1); }
    if (this.v_erledigt [171] == 1) { this.p_clean (14, 1); }
    if (this.v_erledigt [172] == 1) { this.p_clean (10, 4); }
    if (this.v_erledigt [173] == 1) { this.p_clean (10, 6); }
    if (this.v_erledigt [174] == 1) { this.p_clean (8, 10); }
    if (this.v_erledigt [175] == 1) { this.p_clean (3, 10); }    
  }
  else if (v_lvl==27)
  {
    if (this.v_erledigt [176] == 1) { this.p_clean (16, 10); }
    if (this.v_erledigt [177] == 1) { this.p_clean (13, 10); }
    if (this.v_erledigt [178] == 1) { this.p_clean (10, 10); }
    if (this.v_erledigt [179] == 1) { this.p_clean (7, 10); }
    if (this.v_erledigt [180] == 1) { this.p_clean (4, 10); }
  }
  else if (v_lvl==28)
  {
    if (this.v_erledigt [181] == 1) { this.p_clean (17, 10); }
    if (this.v_erledigt [182] == 1) { this.p_clean (12, 10); }
    if (this.v_erledigt [183] == 1) { this.p_clean (4, 10); }
    if (this.v_erledigt [184] == 1) { this.p_clean (10, 2); }
    if (this.v_erledigt [185] == 1) { this.p_clean (10, 5); }
    if (this.v_erledigt [186] == 1) { this.p_clean (10, 8); }
    if (this.v_erledigt [187] == 1) { this.p_clean (7, 12); }
    if (this.v_erledigt [188] == 1) { this.p_clean (7, 15); }
    if (this.v_erledigt [189] == 1) { this.p_clean (7, 18); }
  }
  else if (v_lvl==29)
  {
    if (this.v_erledigt [190] == 1) { this.p_clean (10, 18); }
    if (this.v_erledigt [191] == 1) { this.p_clean (10, 15); }
    if (this.v_erledigt [192] == 1) { this.p_clean (10, 12); }
    if (this.v_erledigt [193] == 1) { this.p_clean (5, 5); }
    if (this.v_erledigt [194] == 1) { this.p_clean (12, 10); }
    if (this.v_erledigt [195] == 1) { this.p_clean (15, 10); }
    if (this.v_erledigt [196] == 1) { this.p_clean (18, 10); }
  }
  else if (v_lvl == 30)
  {
    if (this.v_erledigt [197] == 1) { this.p_clean (2, 10); }
    if (this.v_erledigt [198] == 1) { this.p_clean (8, 5); }
    if (this.v_erledigt [199] == 1) { this.p_clean (11, 5); }
    if (this.v_erledigt [200] == 1) { this.p_clean (8, 15); }
    if (this.v_erledigt [201] == 1) { this.p_clean (11, 15); }
    if (this.v_erledigt [202] == 1) { this.p_clean (16, 10); }
  }
  else if (v_lvl == 31)
  {
    if (this.v_erledigt [203] == 1) { this.p_clean (10, 10); }
  }
  else if (v_lvl == 33)
  {
    if (this.v_erledigt [204] == 1) { this.p_clean (10, 2); }
    if (this.v_erledigt [205] == 1) { this.p_clean (10, 5); }
    if (this.v_erledigt [206] == 1) { this.p_clean (8, 7); }
    if (this.v_erledigt [207] == 1) { this.p_clean (6, 9); }
    if (this.v_erledigt [208] == 1) { this.p_clean (6, 11); }
    if (this.v_erledigt [209] == 1) { this.p_clean (6, 14); }
    if (this.v_erledigt [210] == 1) { this.p_clean (8, 16); }
    if (this.v_erledigt [211] == 1) { this.p_clean (10, 18); }
    if (this.v_erledigt [212] == 1) { this.p_clean (13, 14); }
    if (this.v_erledigt [213] == 1) { this.p_clean (13, 11); }
    if (this.v_erledigt [214] == 1) { this.p_clean (13, 9); }
  }
  else if (v_lvl == 34)
  {
    if (this.v_erledigt [215] == 1) { this.p_clean (10, 3); }
    if (this.v_erledigt [216] == 1) { this.p_clean (10, 10); }
    if (this.v_erledigt [217] == 1) { this.p_clean (13, 6); }
    if (this.v_erledigt [218] == 1) { this.p_clean (17, 6); }
  }
  else if (v_lvl == 35)
  {
    if (this.v_erledigt [219] == 1) { this.p_clean (2, 6); }
    if (this.v_erledigt [220] == 1) { this.p_clean (5, 6); }
    if (this.v_erledigt [221] == 1) { this.p_clean (10, 6); }
    if (this.v_erledigt [222] == 1) { this.p_clean (15, 6); }
    if (this.v_erledigt [223] == 1) { this.p_clean (18, 6); }
  }
  else if (v_lvl == 36)
  {
    if (this.v_erledigt [224] == 1) { this.p_clean (3, 6); }
    if (this.v_erledigt [225] == 1) { this.p_clean (7, 6); }
    if (this.v_erledigt [226] == 1) { this.p_clean (10, 3); }
    if (this.v_erledigt [227] == 1) { this.p_clean (10, 9); }
    if (this.v_erledigt [228] == 1) { this.p_clean (10, 13); }
    if (this.v_erledigt [229] == 1) { this.p_clean (10, 17); }
  }
  else if (v_lvl == 37)
  {
    if (this.v_erledigt [230] == 1) { this.p_clean (10, 18); }
    if (this.v_erledigt [231] == 1) { this.p_clean (7, 16); }
    if (this.v_erledigt [232] == 1) { this.p_clean (8, 14); }
    if (this.v_erledigt [233] == 1) { this.p_clean (8, 12); }
    if (this.v_erledigt [234] == 1) { this.p_clean (7, 10); }
    if (this.v_erledigt [235] == 1) { this.p_clean (7, 7); }
    if (this.v_erledigt [236] == 1) { this.p_clean (9, 5); }
    if (this.v_erledigt [237] == 1) { this.p_clean (12, 5); }
    if (this.v_erledigt [238] == 1) { this.p_clean (14, 6); }
    if (this.v_erledigt [239] == 1) { this.p_clean (16, 8); }
    if (this.v_erledigt [240] == 1) { this.p_clean (18, 10); }
  }
  else if (v_lvl == 38)
  {
    if (this.v_erledigt [241] == 1) { this.p_clean (2, 10); }
    if (this.v_erledigt [242] == 1) { this.p_clean (5, 10); }
    if (this.v_erledigt [243] == 1) { this.p_clean (12, 10); }
    if (this.v_erledigt [244] == 1) { this.p_clean (15, 10); }
  }
  else if (v_lvl == 39)
  {
    if (this.v_erledigt [245] == 1) { this.p_clean (10, 2); }
    if (this.v_erledigt [246] == 1) { this.p_clean (5, 3); }
    if (this.v_erledigt [247] == 1) { this.p_clean (10, 5); }
    if (this.v_erledigt [248] == 1) { this.p_clean (10, 10); }
    if (this.v_erledigt [249] == 1) { this.p_clean (10, 15); }
  }
  else if (v_lvl == 40)
  {
    if (this.v_erledigt [250] == 1) { this.p_clean (10, 9); }
  }
  else if (v_lvl == 41)
  {
    if (this.v_erledigt [251] == 1) { this.p_clean (19, 10); }
    if (this.v_erledigt [252] == 1) { this.p_clean (16, 3); }
    if (this.v_erledigt [253] == 1) { this.p_clean (14, 10); }
    if (this.v_erledigt [254] == 1) { this.p_clean (8, 1); }
    if (this.v_erledigt [255] == 1) { this.p_clean (8, 4); }
    if (this.v_erledigt [256] == 1) { this.p_clean (1, 5); }
    if (this.v_erledigt [257] == 1) { this.p_clean (9, 9); }
    if (this.v_erledigt [258] == 1) { this.p_clean (4, 11); }
    if (this.v_erledigt [259] == 1) { this.p_clean (10, 12); }
    if (this.v_erledigt [260] == 1) { this.p_clean (16, 15); }
    if (this.v_erledigt [261] == 1) { this.p_clean (13, 19); }
    if (this.v_erledigt [262] == 1) { this.p_clean (8, 14); }
    if (this.v_erledigt [263] == 1) { this.p_clean (4, 17); }
  }
  else if (v_lvl == 42)
  {
    if (this.v_erledigt [264] == 1) { this.p_clean (1, 3); }
    if (this.v_erledigt [265] == 1) { this.p_clean (3, 6); }
    if (this.v_erledigt [266] == 1) { this.p_clean (6, 8); }
    if (this.v_erledigt [267] == 1) { this.p_clean (9, 6); }
    if (this.v_erledigt [268] == 1) { this.p_clean (14, 3); }
    if (this.v_erledigt [269] == 1) { this.p_clean (19, 6); }
    if (this.v_erledigt [270] == 1) { this.p_clean (14, 6); }
    if (this.v_erledigt [271] == 1) { this.p_clean (13, 9); }
    if (this.v_erledigt [272] == 1) { this.p_clean (8, 12); }
    if (this.v_erledigt [273] == 1) { this.p_clean (5, 14); }
    if (this.v_erledigt [274] == 1) { this.p_clean (8, 16); }
  }
  else if (v_lvl == 43)
  {
    if (this.v_erledigt [275] == 1) { this.p_clean (14, 2); }
    if (this.v_erledigt [276] == 1) { this.p_clean (18, 4); }
    if (this.v_erledigt [277] == 1) { this.p_clean (14, 2); }
  }
}
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

function c_schilder () {}

c_schilder.prototype.p_set = function (v_xk, v_yk, v_text)
{

  if ((o_charakter.v_mxk == v_xk) && (o_charakter.v_myk == v_yk))
  {
    o_fenster.p_drawWindow ();
    o_fenster.p_writeText (v_text, "", "", "", "")
  }
}
//   Unten - ein Rollenspiel im Retrodesign
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

function c_gegner()
{
  this.v_sprite = ""; 
  this.v_name = ""; 
  this.v_lebenspunkte = 0; 
  this.v_mlebenspunkte = 0; 
  this.v_angriffswert = 0; 
  this.v_trefferpunkte = 0; 
  this.v_spezial = "";
  this.v_erfahrungspunkte = 0; 
  this.v_gold = 0;
}

c_gegner.prototype.p_prepare = function (v_id)
{
  this.v_sprite = v_gegnerdaten [v_id] [0]; 
  this.v_name = v_gegnerdaten [v_id] [1];
  this.v_lebenspunkte = v_gegnerdaten [v_id] [2]; 
  this.v_mlebenspunkte = v_gegnerdaten [v_id] [3]; 
  this.v_angriffswert = v_gegnerdaten [v_id] [4]; 
  this.v_trefferpunkte = v_gegnerdaten [v_id] [5]; 
  this.v_spezial = v_gegnerdaten [v_id] [6]; 
  this.v_erfahrungspunkte = v_gegnerdaten [v_id] [7]; 
  this.v_gold = v_gegnerdaten [v_id] [8]; 
  document.getElementById ("gegnersprite").src = this.v_sprite;
}
//   Unten - ein Rollenspiel im Retrodesign
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

function c_flucht () {}

c_flucht.prototype.p_test = function ()
{
  var v_zufall = 0;

  v_zufall = f_randomize (1, 20);

  if ((v_zone == "Kampf") || (v_zone = "Bosskampf"))
  {
    if (v_zufall <= o_charakter.v_geschick)
    {
      o_musik.p_stopAll ();
      v_enginecanvas_context.clearRect (0, 0, 420, 420);
      v_enginecanvas_context.fillText (v_kampftexte [9], 80, 50);
      document.getElementById ("spielersprite").style.visibility = "hidden";
      document.getElementById ("gegnersprite").style.visibility = "hidden";
      v_keylock = true; o_gui.p_hideAllButtons ();
      document.getElementById ("ButtonVerlassen").src = "daten/gfk/gui/beenden.png";
      document.getElementById ("ButtonI").src = "daten/gfk/gui/interaktion.png";
      document.getElementById ("ButtonVerlassen").title = "Beendet Spiel und geht zum Startbildschirm zurück";
      document.getElementById ("ButtonI").title = "Interaktionen";
      document.getElementById ("ButtonVerlassen").style.left = "630px";

      setTimeout (function ()
      {
        o_engine.p_drawMap (o_engine.v_tileset, false);
        o_charakter.p_setSprite (o_charakter.v_xk, o_charakter.v_yk);
        document.getElementById ("spielersprite").style.visibility = "visible";
        v_statuscanvas.style.visibility = "visible";
        o_gui.p_visibleAllButtons ();
        v_zone = "Gebiet";
        v_keylock = false;
        o_musik.p_play (1);

      }, 2000);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_kampftexte [10], "", "", "", "");
      document.getElementById ("ButtonI").title = "Angriff";
    }    
  }
}
//   Unten - ein Rollenspiel im Retrodesign
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

function c_zauber () 
{
  this.v_anregnenSprite = new Image ();
  this.v_sporenSprite = new Image ();
  this.v_umwandlungSprite = new Image ();
}

c_zauber.prototype.p_init = function () 
{
    
}

//Zauber Regnen
c_zauber.prototype.p_regnen = function ()
{
  if (o_charakter.v_regnen == "aktiv")
  {
    if (o_charakter.v_manapunkte >= 2)
    {
      document.getElementById ("spielersprite").src = "daten/gfk/zauber/regnen.png"
      o_charakter.v_manapunkte -= 2;
      o_charakter.v_lebenspunkte = o_charakter.v_mlebenspunkte;
      o_gui.p_hideAllButtons ();
      keylock = true;

      setTimeout (function ()
      {
        keylock = false;

        if ((v_zone == "Kampf") || (v_zone == "Bosskampf") || (v_zone == "Gebiet"))
        {
          o_gui.p_visibleItemButtons ();
          o_gui.p_visibleZaubernButtons ();
          document.getElementById ("ButtonVerlassen").style.visibility = "visible";
          document.getElementById ("ButtonI").style.visibility = "visible";
        }
        if (v_zone == "Gebiet") { o_gui.p_visibleMoveButtons (); }
      
        if (o_charakter.v_klasse == "Krieger") { document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-1.png" }
        else if (o_charakter.v_klasse == "Dieb") { document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-1.png" }
        else if (o_charakter.v_klasse == "Zauberer") { document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-1.png" }

        if ((v_zone == "Kampf") || (v_zone == "Bosskampf")) 
        { 
          o_kampf.p_lebensleiste (); 
          o_kampf.p_angriffGegner ();
        }

        o_ausgabe.p_writeManapunkte ();
        o_ausgabe.p_writeLebenspunkte ();
      }, 600);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [24], "", "", "", "");
    }
  } 
}

//Zauber Sporen
c_zauber.prototype.p_sporen = function ()
{
  let v_zufall = 0;

  if (o_charakter.v_sporen == "aktiv")
  {
    if (o_charakter.v_manapunkte >= 2)
    {
      if ((v_zone == "Kampf") || (v_zone == "Bosskampf"))
      {
        o_gui.p_hideAllButtons ();
        o_charakter.v_manapunkte -= 2;
        document.getElementById ("gegnersprite").src = "daten/gfk/zauber/sporen.png"

        v_zufall = f_randomize (1, 8);
        o_gegner.v_lebenspunkte -= v_zufall;
        console.log ("Schaden des Spielers:" + v_zufall);

        setTimeout (function ()
        {
          o_gui.p_visibleItemButtons ();
          o_gui.p_visibleZaubernButtons ();
          document.getElementById ("ButtonVerlassen").style.visibility = "visible";
          document.getElementById ("ButtonI").style.visibility = "visible";

          document.getElementById ("gegnersprite").src = o_gegner.v_sprite;

          o_ausgabe.p_writeManapunkte ();
          o_ausgabe.p_writeLebenspunkte ();

          if (o_gegner.v_lebenspunkte > 0)
          {
            o_kampf.p_angriffGegner ();
          }

          if (o_gegner.v_lebenspunkte <= 0)
          {
            o_kampf.p_kampfend ();
        
            setTimeout (function ()
            {
               o_musik.p_stop (4); o_sound.p_stop (2);
              o_kampf.p_kampfclear ();
              o_musik.p_play (1);
            }, 4000);
          }

        }, 600)
      }
    }
    else 
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [24], "", "", "", "");
    }
  }
}

//Zauber Umwandlung
c_zauber.prototype.p_umwandlung = function ()
{
  if (o_charakter.v_umwandlung == "aktiv")
  {
    if ((o_charakter.v_lebenspunkte >= 16) && (o_charakter.v_manapunkte != o_charakter.v_mmanapunkte)) 
    {
      document.getElementById ("spielersprite").src = "daten/gfk/zauber/umwandlung.png"
      o_charakter.v_lebenspunkte -= 15;
      o_charakter.v_manapunkte += 1;
      o_gui.p_hideAllButtons ();
      keylock = true;

      setTimeout (function ()
      {
        keylock = false;

        if ((v_zone == "Kampf") || (v_zone == "Bosskampf") || (v_zone == "Gebiet"))
        {
          o_gui.p_visibleItemButtons ();
          o_gui.p_visibleZaubernButtons ();
          document.getElementById ("ButtonVerlassen").style.visibility = "visible";
          document.getElementById ("ButtonI").style.visibility = "visible";
        }
        if (v_zone == "Gebiet") { o_gui.p_visibleMoveButtons (); }
      
        if (o_charakter.v_klasse == "Krieger") { document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-1.png" }
        else if (o_charakter.v_klasse == "Dieb") { document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-1.png" }
        else if (o_charakter.v_klasse == "Zauberer") { document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-1.png" }

        if ((v_zone == "Kampf") || (v_zone == "Bosskampf")) 
        { 
          o_kampf.p_lebensleiste (); 
          o_kampf.p_angriffGegner ();
        }

        o_ausgabe.p_writeManapunkte ();
        o_ausgabe.p_writeLebenspunkte ();
      }, 600);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText ("Der Zauber kann nicht gewirkt werden!" , "", "", "", "");
    }
  }
}
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

function c_kampf () 
{
  this.v_kboss = "kein";
}

//Lebensleiste des Spieler
c_kampf.prototype.p_lebensleiste = function ()
{
  v_enginecanvas_context.fillStyle ="#00FF00";

    if (o_charakter.v_lebenspunkte <= o_charakter.v_mlebenspunkte / 2) 
    {
       v_enginecanvas_context.fillStyle ="#FFFF00";
    }
    if (o_charakter.v_lebenspunkte <= o_charakter.v_mlebenspunkte / 4)
    {
      v_enginecanvas_context.fillStyle ="#FF0000";
    }

    v_enginecanvas_context.beginPath ();
    v_enginecanvas_context.fillRect (180, 370, 2, 20);
    v_enginecanvas_context.fillStyle = "black";
    v_enginecanvas_context.closePath ();
}

//lädt Hintergrundbild und setzt Lebensleiste
c_kampf.prototype.p_init = function ()
{
  if (this.v_kboss == "kein")
  {
    v_background.src = "daten/gfk/kampf/hintergruende/hintergrund-" + o_engine.v_tileset + ".png";
  }
  else
  {
    v_background.src = "daten/gfk/kampf/hintergruende/hintergrund-" + o_engine.v_tileset.substring (0, o_engine.v_tileset.length - 1) + ".png";
  }
               
  v_background.onload = function ()
  {
    v_enginecanvas_context.drawImage (v_background, 0 , 0);
    o_kampf.p_lebensleiste ();
  } 
}

c_kampf.prototype.p_start = function (v_boss)
{
  var v_zufall = 0;

  this.v_kboss = v_boss;

  o_gui.p_hideAllButtons ();

  o_musik.p_stop (1);

  if (v_boss == "kein")
  {
    o_musik.p_play (2);
  }
  else 
  {
    o_musik.p_play (3);
  }

  v_keylock = true;
  v_enginecanvas_context.fillStyle ="white";
  v_enginecanvas_context.font = "12px Arial";
  v_enginecanvas_context.textBaseline = "middle";
    
  v_zone = "Kampf";

  v_statuscanvas.style.visibility = "hidden";
  document.getElementById ("spielersprite").style.left = "200px";
  document.getElementById ("spielersprite").style.top = "380px";

  o_ausgabe.p_writeSchlachtfeldNummer ();

  //Wahl des Gegners
  if (v_boss == "kein")
  {
    if (v_lvl <= 3) { v_zufall = f_randomize (0, 1); }
    else if ((v_lvl >=4) && (v_lvl <= 5)) { v_zufall = f_randomize (0, 2); }
    else if ((v_lvl >= 6) && (v_lvl <= 9)) { v_zufall = f_randomize (0, 4);}
    else if ((v_lvl >= 11) && (v_lvl <= 14)) { v_zufall = f_randomize (6, 7); }
    else if ((v_lvl >= 16) && (v_lvl <= 21)) { v_zufall = f_randomize (9, 10); }
    else if ((v_lvl >= 23) && (v_lvl <= 25)) { v_zufall = f_randomize (12, 13); }
    else if ((v_lvl >= 26) && (v_lvl <= 30)) { v_zufall = f_randomize (15, 16); }
    else if ((v_lvl >= 33) && (v_lvl <= 39)) { v_zufall = f_randomize (18, 20); }
    else if ((v_lvl >= 40) && (v_lvl <= 49)) { v_zufall = f_randomize (22, 24); }
  }

  //Bei Bosskampf, Gegner über Parameter
  if (v_boss == "Rattenmensch") { v_zufall = 5; }
  if (v_boss == "Riesenkrake") { v_zufall = 8; }
  if (v_boss == "Pilzmensch") { v_zufall = 11; }
  if (v_boss == "Puppengeist") { v_zufall = 14; }
  if (v_boss == "Steinriese") { v_zufall = 17; }
  if (v_boss == "Basilisk") { v_zufall = 21; }

  o_gegner.p_prepare (v_zufall);

  document.getElementById ("spielersprite").style.visibility = "hidden";
  v_enginecanvas_context.clearRect (0, 0, 420, 420);

  if (v_boss == "kein")
  {
    v_zufall = f_randomize (1, 20);

    if (v_zufall <= 10) 
    { 
      v_enginecanvas_context.fillText (o_gegner.v_name + v_kampftexte [0], 80, 50); 
    }
    else
    { 
      v_enginecanvas_context.fillText (o_gegner.v_name + v_kampftexte [1], 80, 50); 
    }

    document.getElementById ("gegnersprite").style.top = "330"
    document.getElementById ("gegnersprite").style.left = "200"
    document.getElementById ("gegnersprite").style.width = "20px";
    document.getElementById ("gegnersprite").style.height = "20px";
  }
  else
  {
    v_enginecanvas_context.fillText (v_kampftexte [12] + o_gegner.v_name + v_kampftexte [1], 75, 50);
    
    document.getElementById ("gegnersprite").style.top = "310px";
    document.getElementById ("gegnersprite").style.left = "190px";
    document.getElementById ("gegnersprite").style.height = "40px";
    document.getElementById ("gegnersprite").style.width = "40px";
    
    v_zone = "Bosskampf";
    v_zufall = 11;
  }

  document.getElementById ("ButtonVerlassen").src = "daten/gfk/gui/flucht.png";
  document.getElementById ("ButtonI").src = "daten/gfk/gui/angriff.png";
  document.getElementById ("ButtonI").title = "Angriff";
  document.getElementById ("ButtonVerlassen").title = "Fluchtversuch";
  o_ausgabe.p_writeSchlachtfeldNummer ();
  document.getElementById ("ButtonVerlassen").style.left = "380px";

  //Spieler
  if (v_zufall <= 10)
  {
    setTimeout (function () 
    {
      o_gui.p_visibleItemButtons ();
      o_gui.p_visibleZaubernButtons ();
      document.getElementById ("ButtonVerlassen").style.visibility = "visible";
      document.getElementById ("ButtonI").style.visibility = "visible";      
      document.getElementById ("gegnersprite").style.visibility = "visible";
      document.getElementById ("spielersprite").style.visibility = "visible";
      o_kampf.p_init ();
      v_keylock = false;
    }, 2550);  
  }
  //Gegner
  else if ((v_zufall <= 20) && (v_zufall >= 11)) 
  { 
    setTimeout (function () 
    { 
      document.getElementById ("gegnersprite").style.visibility = "visible";
      document.getElementById ("spielersprite").style.visibility = "visible";
      o_kampf.p_init ();
      o_kampf.p_angriffGegner ();
      v_keylock = false;

    }, 2550);
  }
}

c_kampf.prototype.p_angriffGegner = function ()
{
  let v_zufall = 0;

  v_zufall = f_randomize (1, 10);

  if (o_gegner.v_spezial == "Zweifachschlag")
  {
    if (v_zufall <= 2) 
    {
      o_kampf.p_zweifachschlag ();
    }
    else
    {
      o_kampf.p_attackGegner ();
    }
  }
  else if (o_gegner.v_spezial == "Dreifachschlag")
  {
    if (v_zufall <= 2) 
    {
      o_kampf.p_dreifachschlag ();
    }
    else
    {
      o_kampf.p_attackGegner ();
    }
  }
  else
  {
    o_kampf.p_attackGegner ();
  }
}

//Spezialattacke Zweifachschlag
c_kampf.prototype.p_zweifachschlag = function ()
{
  o_kampf.p_attackGegner ();

  setTimeout (function ()
  {
    o_kampf.p_attackGegner ();
  }, 600);
}

//Spezialattacke Dreifachschlag
c_kampf.prototype.p_dreifachschlag = function ()
{
  console.log ("Dreifachschlag");
  o_kampf.p_attackGegner ();

  setTimeout (function ()
  {
    o_kampf.p_attackGegner ();
    
    setTimeout (function ()
    {
      o_kampf.p_attackGegner ();
      console.log ("---");
    }, 600);

  }, 600);  
}
  
//Angriffsroutine des Gegners
c_kampf.prototype.p_attackGegner = function ()
{
  var v_schaden = 0;
  var v_krit = false;
  var v_zufall = 0;
  
  v_keylock = true; 
  o_gui.p_hideAllButtons ();

  v_zufall = f_randomize (1, 20);

  o_sound.p_play (2);

  if (v_zufall <= o_gegner.v_angriffswert)
  {
    v_schaden = f_randomize (1, o_gegner.v_trefferpunkte) - o_charakter.v_ruestungswert - o_charakter.v_schildwert;
    
    if (v_zufall == 1)
    {
      if (v_schaden > 0)
      {
        o_charakter.v_lebenspunkte = o_charakter.v_lebenspunkte - (2 * v_schaden);
        v_krit = true;
        this.p_lebensleiste ();
      }
    }
    else 
    {
      if (v_schaden > 0)
      {
        o_charakter.v_lebenspunkte = o_charakter.v_lebenspunkte - v_schaden;  
        this.p_lebensleiste ();
      }
    }
    
    o_ausgabe.p_writeLebenspunkte ();

    //wenn Schaden <= 0, dann Blockanzeige
    if (v_schaden <= 0)
    {
      document.getElementById ("blocksprite").style.left ="200px";
      document.getElementById ("blocksprite").style.top ="380px";
      document.getElementById ("blocksprite").style.visibility = "visible";
    }

    //wenn Schaden > 0, dann Trefferanzeige
    else if (v_schaden > 0)
    {
      if (v_krit == true)
      {
        document.getElementById ("kritsprite").style.left ="200px";
        document.getElementById ("kritsprite").style.top ="380px";
        document.getElementById ("kritsprite").style.visibility = "visible";
        v_krit = false;
      }
      else
      {
        document.getElementById ("treffersprite").style.left ="200px";
        document.getElementById ("treffersprite").style.top ="380px";
        document.getElementById ("treffersprite").style.visibility = "visible";
      }
      document.getElementById ("kampfmeldungscanvas").style.left = "225px"
      document.getElementById ("kampfmeldungscanvas").style.top = "380px";
      v_kampfmeldungscanvas_context.clearRect (0, 0, 60, 20);
      v_kampfmeldungscanvas_context.fillText ("-" + v_schaden + " LP", 0, 0);
      document.getElementById ("kampfmeldungscanvas").style.visibility = "visible";
    }
  }
  else if (v_zufall > o_gegner.v_angriffswert)
  {
    document.getElementById ("misssprite").style.left ="200px";
    document.getElementById ("misssprite").style.top ="380px";
    document.getElementById ("misssprite").style.visibility = "visible";
    console.log ("Gegner verfehlt");
  }
  
  setTimeout (function () 
  { 
    document.getElementById ("kritsprite").style.visibility = "hidden";
    document.getElementById ("blocksprite").style.visibility = "hidden";
    document.getElementById ("treffersprite").style.visibility = "hidden";
    document.getElementById ("misssprite").style.visibility = "hidden";
    document.getElementById ("kampfmeldungscanvas").style.visibility = "hidden";
   
    v_keylock = false; o_sound.p_stop (2);

    o_gui.p_visibleItemButtons ();
    o_gui.p_visibleZaubernButtons ();
    document.getElementById ("ButtonVerlassen").style.visibility = "visible";
    document.getElementById ("ButtonI").style.visibility = "visible";
    

    if (o_charakter.v_lebenspunkte <= 0)
    {
      o_musik.p_stopAll ();
      o_gui.p_hideAllButtons ();

      o_musik.p_play (5)
      v_enginecanvas_context.clearRect (0, 0, 420, 420);
      v_enginecanvas_context.fillText (v_kampftexte [13], 75, 50);
      document.getElementById ("gegnersprite").style.visibility = "hidden";
      document.getElementById ("spielersprite").style.visibility = "hidden";

      setTimeout (function ()
      {
        o_musik.p_stop (5);

        document.getElementById ("musik0").play ();
        keylock = true;
        document.getElementById ("ButtonVerlassen").title = "Beendet Spiel und geht zum Startbildschirm zurück";
        document.getElementById ("ButtonI").title = "Interaktionen";
        document.getElementById ("ausgabe2canvas").style.visibility = "hidden";
        document.getElementById ("musik0").style.visibility = "hidden";
        o_gui.p_disableAllGame ();
        o_gui.p_enableStartscreen ();
        v_textName.value = "Hier Charakternamen eingeben";
      }, 6500);

    }
  }, 500);
}

//Angriffsroutine des Spielers
c_kampf.prototype.p_angriffSpieler = function ()
{
  var v_schaden = 0;
  var v_zufall = 0;

  v_keylock = true;
  o_gui.p_hideAllButtons ();
  
  v_zufall = f_randomize (1, 20);

  o_sound.p_play (2);

  if (v_zufall <= o_charakter.v_kraft)
  { 
    //bei kritischen Treffer
    if (v_zufall == 1)
    {
      v_schaden = 2 * f_randomize (1, o_charakter.v_trefferpunkte);
      o_gegner.v_lebenspunkte = o_gegner.v_lebenspunkte - v_schaden;
      document.getElementById ("kritsprite").style.left = "200px";
      document.getElementById ("kritsprite").style.top = "330px";
      document.getElementById ("kritsprite").style.visibility = "visible";
    }
    else
    {
      v_schaden = f_randomize (1, o_charakter.v_trefferpunkte);
      o_gegner.v_lebenspunkte = o_gegner.v_lebenspunkte - v_schaden;
      document.getElementById ("treffersprite").style.left = "200px";
      document.getElementById ("treffersprite").style.top = "330px";
      document.getElementById ("treffersprite").style.visibility = "visible";
    }
    
    if (v_zone == "Bosskampf")
    {
      document.getElementById ("kampfmeldungscanvas").style.left = "240px"
      document.getElementById ("kampfmeldungscanvas").style.top = "335px";
    }
    else if (v_zone == "Kampf")
    {
      document.getElementById ("kampfmeldungscanvas").style.left = "225px"
      document.getElementById ("kampfmeldungscanvas").style.top = "330px";
    }
    v_kampfmeldungscanvas_context.clearRect (0, 0, 60, 20);
    v_kampfmeldungscanvas_context.fillText ("-" + v_schaden + " LP", 0, 0);
    document.getElementById ("kampfmeldungscanvas").style.visibility = "visible";
  }
  else if (v_zufall >= o_charakter.v_kraft)
  {
    
    document.getElementById ("misssprite").style.left = "200px";
    document.getElementById ("misssprite").style.top = "330px";
    document.getElementById ("misssprite").style.visibility = "visible";
  }

  setTimeout (function () 
  { 
    var v_zufall = 0;

    document.getElementById ("treffersprite").style.visibility = "hidden";
    document.getElementById ("misssprite").style.visibility = "hidden";
    document.getElementById ("kritsprite").style.visibility = "hidden";
    o_gui.p_visibleItemButtons ();
    o_gui.p_visibleZaubernButtons ();
    document.getElementById ("ButtonVerlassen").style.visibility = "visible";
    document.getElementById ("ButtonI").style.visibility = "visible";
    document.getElementById ("kampfmeldungscanvas").style.visibility = "hidden";

    if (o_gegner.v_lebenspunkte >= 1)
    { 
      o_kampf.p_angriffGegner ();
    }
    else if (o_gegner.v_lebenspunkte <= 0)
    {
      o_kampf.p_kampfend ();

      setTimeout (function ()
      {
        o_musik.p_stop (4); o_sound.p_stop (2);
        o_kampf.p_kampfclear ();
        o_musik.p_play (1);

      }, 4000);
    }

  }, 500);
}

c_kampf.prototype.p_kampfend = function ()
{
  if (o_kampf.v_kboss == "kein")
  {
    o_musik.p_stop (2);
  }
  else 
  {
    o_musik.p_stop (3);
  }
  
  for (let v_i = 1; v_i <= 10; v_i++)
  {
    o_musik.p_stop (v_i);
  }
  
  o_musik.p_play (4);

  o_gui.p_hideAllButtons ();

  document.getElementById ("ButtonVerlassen").src = "daten/gfk/gui/beenden.png";
  document.getElementById ("ButtonI").src = "daten/gfk/gui/interaktion.png";

  v_enginecanvas_context.clearRect (0, 0, 420, 420);
  v_enginecanvas_context.fillStyle ="white";
  v_enginecanvas_context.fillText (v_kampftexte [2], 80, 50);
  v_enginecanvas_context.fillText (o_gegner.v_erfahrungspunkte + v_kampftexte [4], 80, 70);
  v_enginecanvas_context.fillText (o_gegner.v_gold + v_kampftexte [5], 80, 90);

  v_zufall = f_randomize (1, 30);

  if (v_zufall <= 10) 
  { 
    o_heiltrank.p_wuerfleHeiltrank (); 
  }
  else if ((v_zufall >= 10) && (v_zufall <= 20))
  {
    o_manatrank.p_wuerfleManatrank ();
  }
  else if (v_zufall >= 20)
  {
    o_portalrolle.p_wuerflePortalrolle ();
  }

  o_charakter.v_erfahrungspunkte = o_charakter.v_erfahrungspunkte + o_gegner.v_erfahrungspunkte;
  o_charakter.v_gold = o_charakter.v_gold + o_gegner.v_gold;
  o_schlachtfelder.v_etage [v_schlachtfeld]--; 

  if (o_schlachtfelder.v_etage [v_schlachtfeld] <= 0)
  {
    v_enginecanvas_context.fillText (v_kampftexte [11], 80, 250);
  }

  if (o_charakter.v_erfahrungspunkte >= v_stufenschwelle [o_charakter.v_stufe])
  {
    o_charakter.v_stufe++;
    o_charakter.v_mlebenspunkte = o_charakter.v_mlebenspunkte + 8;
    o_charakter.v_lebenspunkte = o_charakter.v_mlebenspunkte;

    v_enginecanvas_context.fillText (v_texte [9], 80, 130);
    v_enginecanvas_context.fillText (v_texte [10], 80, 150);
    o_ausgabe.p_writeStufe ();
    o_ausgabe.p_writeLebenspunkte ();

    if ((o_charakter.v_stufe == 3) || (o_charakter.v_stufe == 6) || (o_charakter.v_stufe == 9) || (o_charakter.v_stufe == 12) ||    
        (o_charakter.v_stufe == 15))
    {
      o_charakter.v_mmanapunkte++;
      o_charakter.v_manapunkte = o_charakter.v_mmanapunkte;
      v_enginecanvas_context.fillText (v_texte [11], 80, 170);
      o_ausgabe.p_writeManapunkte ();
    }

    if ((o_charakter.v_stufe == 5) || (o_charakter.v_stufe == 10) || (o_charakter.v_stufe == 15) || (o_charakter.v_stufe == 20) || 
        (o_charakter.v_stufe == 25))
    {
      o_charakter.v_kraft++, o_charakter.v_geschick++; o_charakter.v_klugheit++;
      v_enginecanvas_context.fillText (v_texte [12], 80, 190);
      v_enginecanvas_context.fillText (v_texte [13], 80, 210);
      v_enginecanvas_context.fillText (v_texte [14], 80, 230);
    }
  }

  o_ausgabe.p_writeErfahrungspunkte ();
  o_ausgabe.p_writeGold ();

  document.getElementById ("spielersprite").style.visibility = "hidden";
  document.getElementById ("gegnersprite").style.visibility = "hidden";
  document.getElementById ("ButtonI").disabled = "disabled";

  o_questen.p_kampfquest ();
}

c_kampf.prototype.p_kampfclear = function ()
{
  o_engine.p_drawMap (o_engine.v_tileset, false);
  document.getElementById ("spielersprite").style.left = o_charakter.v_xk + "px";
  document.getElementById ("spielersprite").style.top = o_charakter.v_yk + "px";
  document.getElementById ("spielersprite").style.visibility = "visible";
  v_statuscanvas.style.visibility = "visible";
  document.getElementById ("ButtonI").disabled = "";
  document.getElementById ("ButtonI").title = "Interaktionen";
  document.getElementById ("ButtonVerlassen").title = "Beendet Spiel und geht zum Startbildschirm zurück";
  document.getElementById ("ButtonSpeichern").disabled = "";
  document.getElementById ("ButtonSpeichern").title = "Speichert das aktuelle Spiel (alter Spielstand wird überschrieben!)"; 
  document.getElementById ("ButtonVerlassen").style.left = "630px"; 
  document.getElementById ("ButtonVollbild").style.visibility = "visible";

  if (o_schlachtfelder.v_etage [v_schlachtfeld] == 0) 
  { 
    o_schlachtfelder.v_erledigt [v_schlachtfeld] = 1;
    o_charakter.v_schlachtfelder++;
    o_ausgabe.p_writeSchlachtfelder ();
    o_schlachtfelder.p_status (); 
  }

  v_ausgabe2canvas_context.clearRect (320, 0, 380, 14);

  o_gui.p_visibleAllButtons ();
  v_zone = "Gebiet";
  v_keylock = false;
}
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

function c_portale () 
{ 
  this.v_portale = [];
}

c_portale.prototype.p_init = function ()
{
  this.v_img = new Image;

  for (let v_i = 1; v_i < 7; v_i++)
  {
    this.v_portale [v_i] = 0;
  }

  this.v_img.src = "daten/gfk/portale/portale.png";

  this.v_img.onload = function ()
  {
    if (v_lvl == 1)
    {
      o_portale.p_draw ();
    }
  }
}

c_portale.prototype.p_draw = function ()
{
  v_statuscanvas_context.clearRect (0, 0, 420, 420);

  if (this.v_portale [1] == 1) { v_statuscanvas_context.drawImage (this.v_img, 0, 0, 20, 20, 300, 220, 20, 20); }
  if (this.v_portale [2] == 1) { v_statuscanvas_context.drawImage (this.v_img, 20, 0, 20, 20, 320, 220, 20, 20); }
  if (this.v_portale [3] == 1) { v_statuscanvas_context.drawImage (this.v_img, 40, 0, 20, 20, 340, 220, 20, 20); }
  if (this.v_portale [4] == 1) { v_statuscanvas_context.drawImage (this.v_img, 60, 0, 20, 20, 15 * 20, 12 * 20, 20, 20); }
  if (this.v_portale [5] == 1) { v_statuscanvas_context.drawImage (this.v_img, 80, 0, 20, 20, 17 * 20, 12 * 20, 20, 20); }
  if (this.v_portale [6] == 1) { v_statuscanvas_context.drawImage (this.v_img, 100, 0, 20, 20, 15 * 20, 13 * 20, 20, 20); }
}
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

function c_sound () 
{
  this.v_on = true;
}

c_sound.prototype.p_init = function () {}

c_sound.prototype.p_load = function ()
{
  console.log ("--- Lade Sounddateien ---")

  v_soundArray [0].oncanplaythrough = function ()
  {
    v_soundArray [0].oncanplaythrough = null;

    v_soundArray [1].oncanplaythrough = function ()
    {
      v_soundArray [1].oncanplaythrough = null;

      v_soundArray [2].oncanplaythrough = function ()
      {
        v_soundArray [2].oncanplaythrough = null;
        
        v_soundArray [3].oncanplaythrough = function ()
        {
          v_soundArray [3].oncanplaythrough = null;

          v_soundArray [4].oncanplaythrough = function ()
          {
            v_soundArray [4].oncanplaythrough = null;
            console.log ("--- Fertig ---");
            o_musik.p_load (v_stand);
          }
          v_soundArray [4].src = "daten/sfx/rpg_sound_pack/inventory/bottle.wav";
          v_soundArray [4].load ();
        }
        v_soundArray [3].src = "daten/sfx/rpg_sound_pack/inventory/coin.wav";
        v_soundArray [3].load ();
      }
      v_soundArray [2].src = "daten/sfx/rpg_sound_pack/battle/swing3.wav";
      v_soundArray [2].load ();

    }
    v_soundArray [1].src = "daten/sfx/rpg_sound_pack/interface/interface1.wav";
    v_soundArray [1].load ();
  }
  v_soundArray [0].src = "daten/sfx/RPGsounds_Kenney/OGG/footstep06.ogg";
  v_soundArray [0].load ();
}

c_sound.prototype.p_play = function (v_nummer) 
{
  if (this.v_on == true)
  {
    v_soundArray [v_nummer].play ();
  }
} 

c_sound.prototype.p_stop = function (v_nummer) 
{
  v_soundArray [v_nummer].pause ();
  v_soundArray [v_nummer].currentTime = 0; 
}

c_sound.prototype.p_kontroll = function ()
{
    if (this.v_on == true)
    {
      this.v_on = false;
    }
    else if (this.v_on == false)
    {
      this.v_on = true;
    }
}
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

function c_musik () 
{
  this.v_on = true;
  this.v_nr = 1;

}

//Lädt Musikdateien
c_musik.prototype.p_load = function ()
{
  console.log ("--- Lade Musikdateien ---")
  v_musikArray[0].oncanplaythrough = function ()
  {
    v_musikArray [0].oncanplaythrough = null;
    console.log ("daten/musik/remaxim/old_city_theme.ogg geladen");

    v_musikArray [1].oncanplaythrough = function ()
    {
      v_musikArray [1].oncanplaythrough = null;
      console.log ("daten/musik/remaxim/overworld_theme.ogg geladen");
      
      v_musikArray [2].oncanplaythrough = function ()
      {
        v_musikArray [2].oncanplaythrough = null;
        console.log ("daten/musik/remaxim/battle_theme.ogg geladen");

        v_musikArray [3].oncanplaythrough = function ()
        {
          v_musikArray [3].oncanplaythrough = null;
          console.log ("daten/musik/remaxim/boss_theme.ogg geladen");

          v_musikArray [4].oncanplaythrough = function ()
          {
            v_musikArray [4].oncanplaythrough = null;
            console.log ("daten/musik/remaxim/win_music_3.ogg geladen");

            v_musikArray [5].oncanplaythrough = function ()
            {
              v_musikArray [5].oncanplaythrough = null;
              console.log ("daten/musik/remaxim/lose_music_1.ogg geladen");

              v_musikArray [6].oncanplaythrough = function ()
              {
                v_musikArray [6].oncanplaythrough = null;
                console.log ("daten/musik/remaxim/magical_theme.ogg geladen");
                console.log ("--- Fertig ---");
                if (v_stand == "neu")
                {
                  f_init_go ();
                } 
                else if (v_stand == "alt")
                {
                  f_init2_go ();
                }
              }
              v_musikArray[6].src = "daten/musik/remaxim/magical_theme.ogg";;
              v_musikArray[6].load ();
            }
            v_musikArray[5].src = "daten/musik/remaxim/lose_music_1.ogg";;
            v_musikArray[5].load ();
          }
          v_musikArray[4].src = "daten/musik/remaxim/win_music_3.ogg";;
          v_musikArray[4].load ();
        }
        v_musikArray[3].src = "daten/musik/remaxim/boss_theme.ogg";;
        v_musikArray[3].load ();
      }
      v_musikArray[2].src = "daten/musik/remaxim/battle_theme.ogg";;
      v_musikArray[2].load ();
    }

    v_musikArray[1].src = "daten/musik/remaxim/overworld_theme.ogg";;
    v_musikArray[1].load ();
  }
    
  v_musikArray[0].src = "daten/musik/remaxim/old_city_theme.ogg";
  v_musikArray[0].load ();
}

//Spielt angegebenes Musikstück
c_musik.prototype.p_play = function (v_nummer)
{
  this.v_nr = v_nummer;
  
  if (this.v_on == true)
  {
    v_musikArray [v_nummer].play ();
  }
} 

//Stopt angegebens Musikstück
c_musik.prototype.p_stop = function (v_nummer)
{
  v_musikArray [v_nummer].pause ();
  v_musikArray [v_nummer].currentTime = 0; 
}

c_musik.prototype.p_stopAll = function ()
{
  for (v_i = 0; v_i <=6; v_i++)
  {
    v_musikArray [v_i].pause ();
    v_musikArray [v_i].currentTime = 0; 
  }
}

//Musikkontrolle
c_musik.prototype.p_kontroll = function ()
{
  if (this.v_on == true)
  {
    this.v_on = false;
    this.p_stop (this.v_nr);
  }
  else if (this.v_on == false)
  {
    this.v_on = true;
    this.p_play (this.v_nr);
  }
}
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

function c_manabrunnen () 
{
  this.v_erledigt = []; //0 - nein, 1 - ja
}

c_manabrunnen.prototype.p_init = function ()
{
  for (let v_i = 1; v_i <= 20; v_i++)
  {
    this.v_erledigt [v_i] = 0;
  }
}

c_manabrunnen.prototype.p_manabrunnen = function (v_mbx, v_mby, v_mbnr)
{
  if ((o_charakter.v_mxk == v_mbx) && (o_charakter.v_myk == v_mby))
  {
    if (this.v_erledigt [v_mbnr] == 0)
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText ("Du trinkst von dem Wasser des Manabrunnens...", "", "", "Deine Manapunkte erhöhen sich permanent um 1!", "");
      o_charakter.v_mmanapunkte++; o_charakter.v_manapunkte = o_charakter.v_mmanapunkte; this.v_erledigt [v_mbnr] = 1;
      o_ausgabe.p_writeManapunkte (); 
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText ("Das Wasser des Manabrunnens ist versiegt...", "", "", "", "");
    }
  }
}
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

//Startfunktion bei Neuem Spiel

function f_init ()
{
  if (document.getElementById ("TextName").value == "Hier Charakternamen eingeben" || 
     (document.getElementById ("TextName").value == "Erst Charakternamen definieren!") ||
     (document.getElementById ("TextName").value == "")) 
  {
    document.getElementById ("TextName").value = "Erst Charakternamen definieren!";
  }
  else
  {
    //Startbildschirmelemente verstecken
    document.getElementsByTagName ("h1")[0].style.visibility = "hidden";   
  
    v_textName.style.visibility = "hidden";

    document.getElementById ("krieger").style.visibility = "hidden";
    document.getElementById ("dieb").style.visibility = "hidden";
    document.getElementById ("zauberer").style.visibility = "hidden";
    document.getElementsByTagName ("label")[0].style.display = "none";
    document.getElementsByTagName ("label")[1].style.display = "none";
    document.getElementsByTagName ("label")[2].style.display = "none";

    v_buttonNSpiel.style.visibility = "hidden";
    v_buttonASpiel.style.visibility = "hidden";

    document.getElementById ("kredits").style.visibility = "hidden";
    document.getElementById ("changelog").style.visibility = "hidden"; 
    document.getElementById ("lade").style.visibility = "visible";

    v_stand = "neu";

    o_gfx.p_init ();
    o_sound.p_load ();
  }
}

function f_init_go ()
{   
  //Titelmusik stoppen
  document.getElementById ("musik0").pause ();
  
  //Variablen setzen
  v_lvl = 1;
  v_zone = "Gebiet";
  v_keylock = false;
  v_schlachtfeld = 0;

  document.getElementById ("lade").style.visibility = "hidden";
    
  //Steuerbuttons sichtbar machen
  v_buttonN.style.visibility = "visible";
  v_buttonS.style.visibility = "visible";
  v_buttonW.style.visibility = "visible";
  v_buttonO.style.visibility = "visible";
  v_buttonI.style.visibility = "visible";
  v_buttonHeiltrank.style.visibility = "visible";
  v_buttonManatrank.style.visibility = "visible";
  document.getElementById ("ButtonMedizintrank").style.visibility = "visible";
  v_buttonPortalrolle.style.visibility = "visible";
  v_buttonVerlassen.style.visibility = "visible";
  document.getElementById ("ButtonSpeichern").style.visibility = "visible";
  document.getElementById ("Zauberliste").style.visibility = "visible";
  document.getElementById ("ButtonZaubern").style.visibility = "visible";
  document.getElementById ("ButtonMusik").style.visibility = "visible";
  document.getElementById ("ButtonSound").style.visibility = "visible";
  document.getElementById ("ButtonVollbild").style.visibility = "visible";
  
  v_kampfmeldungscanvas_context.fillStyle ="yellow";
  v_kampfmeldungscanvas_context.textBaseline = "top";
  v_kampfmeldungscanvas_context.font = "10px bold Arial";
  

  //Canvas sichtbar machen
  v_fenstercanvas.style.visibility = "visible";
  v_ausgabecanvas.style.visibility = "visible";
  v_statuscanvas.style.visibility = "visible";
  v_ausgabe2canvas.style.visibility = "visible";
    
  v_enginecanvas_context.clearRect (0, 0, 400, 400);
  v_statuscanvas_context.clearRect (0, 0, 400, 400);

  o_sound.p_init ();

  //Leveldaten
  f_leveldaten ();

  o_charakter.v_name = document.getElementById ("TextName").value;
  
  v_hintergrundcanvas_context.drawImage (v_hintergrund, 0, 0);

  v_tileset = "dorf"
  o_engine.p_drawMap (v_tileset, true);
  v_hintergrundcanvas.style.visibility = "visible";
  v_enginecanvas.style.visibility = "visible";

  o_zauber.p_init ();
  o_portale.p_init ();
    
  o_charakter.p_init ();
  o_charakter.p_setSprite (330, 250);
    
  o_ausgabe.p_init ();
  o_ausgabe.p_writeAll ();

  o_fenster.p_init ();
  o_truhen.p_init ();
  o_schlachtfelder.p_init ();
  o_questen.p_init ();
  o_manabrunnen.p_init ();

  //Tastatursteuerung
  document.addEventListener ("keydown", f_taste_druecken, false);

  //Spielersprite sichtbar schalten
  document.getElementById ("spielersprite").style.visibility = "visible";
  o_ausgabe.p_writeKoords ();
  o_ausgabe.p_writeLevel ();

  o_musik.p_play (0);
}
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



function f_init2 ()
{
  v_version_old = localStorage.getItem ("unten_version");

  if (v_version_old != null)
  {
    v_keylock = false;
    v_zone = "Gebiet";

    document.getElementsByTagName("h1")[0].style.visibility = "hidden";
    v_textName.style.visibility = "hidden";

    document.getElementById ("krieger").style.visibility = "hidden";
    document.getElementById ("dieb").style.visibility = "hidden";
    document.getElementById ("zauberer").style.visibility = "hidden";
    document.getElementsByTagName("label")[0].style.display = "none";
    document.getElementsByTagName("label")[1].style.display = "none";
    document.getElementsByTagName("label")[2].style.display = "none";

    v_buttonNSpiel.style.visibility = "hidden";
    v_buttonASpiel.style.visibility = "hidden";
    document.getElementById ("kredits").style.visibility = "hidden";
    document.getElementById ("changelog").style.visibility = "hidden";
    
    v_stand = "alt";
    o_sound.p_load ();
  }
}

function f_init2_go ()
{
  //Steuerbuttons sichtbar machen
  v_buttonN.style.visibility = "visible";
  v_buttonS.style.visibility = "visible";
  v_buttonW.style.visibility = "visible";
  v_buttonO.style.visibility = "visible";
  v_buttonI.style.visibility = "visible";
  v_buttonHeiltrank.style.visibility = "visible";
  v_buttonManatrank.style.visibility = "visible";
  document.getElementById ("ButtonMedizintrank").style.visibility = "visible";
  v_buttonPortalrolle.style.visibility = "visible";
  v_buttonVerlassen.style.visibility = "visible";
  document.getElementById ("ButtonSpeichern").style.visibility = "visible";
  document.getElementById ("Zauberliste").style.visibility = "visible";
  document.getElementById ("ButtonZaubern").style.visibility = "visible";
  document.getElementById ("ButtonMusik").style.visibility = "visible";
  document.getElementById ("ButtonSound").style.visibility = "visible";
  document.getElementById ("ButtonVollbild").style.visibility = "visible";

  //Canvas sichtbar machen
  v_hintergrundcanvas.style.visibility = "visible";
  v_enginecanvas.style.visibility = "visible";
  v_ausgabecanvas.style.visibility = "visible";
  v_statuscanvas.style.visibility = "visible";
  v_fenstercanvas.style.visibility = "visible";
  v_ausgabe2canvas.style.visibility = "visible";
  
  o_charakter.p_init ();
  o_truhen.p_init ();
  o_schlachtfelder.p_init ();
  o_ausgabe.p_init ();
  o_fenster.p_init ();
  o_questen.p_init (); 
  o_zauber.p_init ();
  o_portale.p_init ();
  o_manabrunnen.p_init ();
  o_laden.p_laden ();

  o_sound.p_init ();

  if (o_charakter.v_klasse == "Krieger")
  {
    document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-1.png"
  }
  else if  (o_charakter.v_klasse == "Dieb")
  {
    document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-1.png"
  }
  else if  (o_charakter.v_klasse == "Zauberer")
  {
    document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-1.png"
  }

  v_kampfmeldungscanvas_context.fillStyle ="yellow";
  v_kampfmeldungscanvas_context.textBaseline = "top";
  v_kampfmeldungscanvas_context.font = "bold 10px Arial";

  //Leveldaten
  f_leveldaten ();
  v_hintergrundcanvas_context.drawImage (v_hintergrund, 0, 0);
  o_engine.p_drawMap (o_engine.v_tileset, true);
  o_charakter.p_setSprite (o_charakter.v_xk, o_charakter.v_yk);

  if (v_lvl != 1)
  {
    o_truhen.p_status ();
    o_schlachtfelder.p_status ();
  }
  else
  {
    o_portale.p_draw ();
  }

  //Spielersprite sichtbar schalten
  document.getElementById ("spielersprite").style.visibility = "visible";
    
  document.getElementById ("musik0").pause ();

  o_ausgabe.p_writeKoords ();
  o_ausgabe.p_writeLevel ();
  o_ausgabe.p_writeAll ();  

  //Tastatursteuerung
  document.addEventListener ("keydown", f_taste_druecken, false);

  if (v_lvl != 1)
  { 
    o_musik.p_play (1);
  }
  else
  {
    o_musik.p_play (0);
  }
}
//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2018 Heiko Wolf
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

function c_gfx () 
{
    this.v_angriffsIcon = new Image ();
    this.v_vollbild = false;
}

c_gfx.prototype.p_init = function ()
{
  this.v_angriffsIcon.src = "daten/gfk/gui/angriff.png";
}

c_gfx.prototype.p_vollbild = function ()
{
  /*if (this.v_vollbild == false)
  {
    win.enterFullscreen ();    
    this.v_vollbild = true;
  }
  else if (this.v_vollbild == true)
  {
    win.leaveFullscreen ()
    this.v_vollbild = false;
  }*/
  //win.toggleFullscreen ();
}
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

function c_lvl0001 () {}

c_lvl0001.prototype.p_aktion = function ()
{
  //Schilder
  o_schilder.p_set (8, 16, v_texte [1]);
  o_schilder.p_set (12, 6, v_texte [2]);

  //Personen
  //Heiler
  if ((o_charakter.v_mxk == 4) && (o_charakter.v_myk == 6))
  {
    o_heiler.p_start ();
  }

  //Questgeber 1
  if ((o_charakter.v_mxk == 11) && (o_charakter.v_myk == 4))
  {
    o_questen.p_start ();
  }

  //Questgeber 2 - noch nicht entwickelt
  if ((o_charakter.v_mxk == 12) && (o_charakter.v_myk == 17))
  {
    o_fenster.p_drawWindow (20, 260);
    o_fenster.p_writeText (v_texte [5], "", "", "", "");
  }

  //Haendler
  if ((o_charakter.v_mxk == 5) && (o_charakter.v_myk == 15))
  {
    o_haendler.p_start ();
  }

  //Levelwechsel 0002
  if ((o_charakter.v_mxk == 15) && (o_charakter.v_myk == 5))
  {
    o_musik.p_stop (0);
    o_engine.p_changeLvl (2, "d1", true, 19, 3);
    o_musik.p_play (1);

    if (o_charakter.v_mlvl < 2) { o_charakter.v_mlvl = 2; }
  }

  //Levelwechsel Portale
  if ((o_charakter.v_mxk == 15) && (o_charakter.v_myk == 11))
  {
    o_musik.p_stop (0);
    o_engine.p_changeLvl (11, "d2", true, 19, 1);
    o_musik.p_play (1);
  }
  else if ((o_charakter.v_mxk == 16) && (o_charakter.v_myk == 11))
  {
    o_musik.p_stop (0);
    o_engine.p_changeLvl (16, "d3", true, 0, 20);
    o_musik.p_play (1);
  } 
  else if ((o_charakter.v_mxk == 15) && (o_charakter.v_myk == 11))
  {
    o_musik.p_stop (0);
    o_engine.p_changeLvl (23, "d4", true, 0, 16);
    o_musik.p_play (1);
  }
  else if ((o_charakter.v_mxk == 17) && (o_charakter.v_myk == 12))
  {
    o_musik.p_stop (0);
    o_engine.p_changeLvl (33, "d6", true, 10, 0);
    o_musik.p_play (1);
  }
  else if ((o_charakter.v_mxk == 15) && (o_charakter.v_myk == 12))
  {
    o_musik.p_stop (0);
    o_engine.p_changeLvl (26, "d5", true, 20, 1);
    o_musik.p_play (1);
  }
  else if ((o_charakter.v_mxk == 15) && (o_charakter.v_myk == 13))
  {
    o_musik.p_stop (0);
    o_engine.p_changeLvl (41, "d7", true, 20, 17);
    o_musik.p_play (1);
  }
}
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

function c_lvl0002 () {}

c_lvl0002.prototype.p_aktion = function ()
{
  //Schild
  o_schilder.p_set (19, 1, v_texte [6]);

  o_truhen.p_goldtruhe (14, 9, 1, 25);

  //Truhe (Truhe 2) mit Zauberstab - Quest 1
  if ((o_charakter.v_mxk == 14) && (o_charakter.v_myk == 1))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [2] == 0)
    {
      if (o_charakter.v_schlachtfelder >= 9)
      {
        o_questen.v_quest [1] = 1; o_charakter.v_quest = "true";
        o_charakter.v_queststand = "Zauberstab abgeben";
        o_charakter.v_questitem = "Zauberstab"
        o_ausgabe.p_writeQueststand ();  
        o_fenster.p_writeText (v_questtexte [5], "", "", "", "");
        o_truhen.v_status [2] = 1;
        o_truhen.p_status ();
      }
      else
      {
        o_fenster.p_writeText (v_questtexte [4], "", "", "", "");
      }
    }
    else if (o_truhen.v_status [2] == 1)
    {
      o_fenster.p_writeText ("Die Truhe ist geöffnet und leer.", "", "", "", "");
     
    }
  }
  
  //Schlachtfelder
  o_schlachtfelder.p_feld (19, 7, 1);
  o_schlachtfelder.p_feld (15, 12, 2);
  o_schlachtfelder.p_feld (7, 8, 3);
  o_schlachtfelder.p_feld (7, 12, 4);
  o_schlachtfelder.p_feld (13, 14, 5);
  o_schlachtfelder.p_feld (19, 16, 6);
  o_schlachtfelder.p_feld (17, 19, 7);
  o_schlachtfelder.p_feld (13, 18, 8);
  o_schlachtfelder.p_feld (7, 16, 9);
  o_schlachtfelder.p_feld (4, 19, 10);
  o_schlachtfelder.p_feld (1, 14, 11);
  o_schlachtfelder.p_feld (1, 7, 12);
  o_schlachtfelder.p_feld (11, 6, 13);

  //Levelwechsel 0001
  if ((o_charakter.v_mxk == 19) && (o_charakter.v_myk == 3))
  {
    o_musik.p_stop (1);
    o_engine.p_changeLvl (1, "dorf", true, 15, 5);
    o_portale.p_draw ();
    o_musik.p_play (0);
  } 
  //Levelwechsel 0003
  if ((o_charakter.v_mxk == 8) && (o_charakter.v_myk == 2))
  {
    if (o_charakter.v_schluessel >= 1)
    {
      if (o_charakter.v_mlvl < 3) { o_charakter.v_mlvl = 3; }
      o_engine.p_changeLvl (3, "d1", false, 8, 2);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
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

//Seite 6 Buch 1

function c_lvl0003 () {}

c_lvl0003.prototype.p_aktion = function ()
{
  //Schild
  o_schilder.p_set (3, 1, v_schildtexte [0]);
  
  //Truhen 
  o_truhen.p_goldtruhe (15, 12, 3, 50);
  o_truhen.p_heiltranktruhe (9, 12, 4, 1);

  //Schlachtfelder
  o_schlachtfelder.p_feld (10, 5, 14)
  o_schlachtfelder.p_feld (16, 5, 15);  
  o_schlachtfelder.p_feld (18, 7, 16);
  o_schlachtfelder.p_feld (9, 7, 17);
  o_schlachtfelder.p_feld (9, 9, 18);
  o_schlachtfelder.p_feld (16, 15, 19);
  o_schlachtfelder.p_feld (16, 17, 20);  
  o_schlachtfelder.p_feld (18, 19, 21);
  o_schlachtfelder.p_feld (9, 19, 22);
  o_schlachtfelder.p_feld (2, 19, 23);
  o_schlachtfelder.p_feld (3, 17, 24);  
  o_schlachtfelder.p_feld (4, 14, 25);
  o_schlachtfelder.p_feld (2, 12, 26);
  o_schlachtfelder.p_feld (2, 10,27);
  o_schlachtfelder.p_feld (3, 4, 28);

  //Levelwechsel
  //Lvl0002
  if ((o_charakter.v_mxk == 8) && (o_charakter.v_myk == 2))
  {   
      o_engine.p_changeLvl (2, "d1", false, 8, 2);
  }

  //Lvl0004
  else if ((o_charakter.v_mxk == 1) && (o_charakter.v_myk == 8))
  {   
      if (o_charakter.v_mlvl < 4) { o_charakter.v_mlvl = 4; }
      o_engine.p_changeLvl (4, "d1", false, 1, 7);
  }
}
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

function c_lvl0004 () {}

c_lvl0004.prototype.p_aktion = function ()
{
  //Schild
  o_schilder.p_set (7, 3, v_schildtexte [1]);

  //Truhen
  o_truhen.p_manatranktruhe (15, 4, 5, 1);
  
  //Truhe mit Rubin - Quest 2
  if ((o_charakter.v_mxk == 5) && (o_charakter.v_myk == 14))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [6] == 0)
    {
      if (o_charakter.v_schlachtfelder >= 40)
      {
        o_questen.v_quest [2] = 1; o_charakter.v_quest = "true";
        o_charakter.v_queststand = "Rubin abgeben";
        o_charakter.v_questitem = "Rubin"
        o_ausgabe.p_writeQueststand ();  
        o_fenster.p_writeText (v_questtexte [16], "", "", "", "");
        o_truhen.v_status [6] = 1;
        o_truhen.p_status ();
      }
      else
      {
        o_fenster.p_writeText (v_questtexte [12], "", "", "", "");
      }
    }
    else if (o_truhen.v_status [6] == 1)
    {
      o_fenster.p_writeText (v_truhentexte [0], "", "", "", "");   
    }
  }
 
  //Schlachtfelder
  o_schlachtfelder.p_feld (4, 4, 29);
  o_schlachtfelder.p_feld (2, 4, 30);  
  o_schlachtfelder.p_feld (2, 1, 31);
  o_schlachtfelder.p_feld (8, 1, 32);
  o_schlachtfelder.p_feld (9, 4, 33);
  o_schlachtfelder.p_feld (7, 9, 34);  
  o_schlachtfelder.p_feld (4, 11, 35);
  o_schlachtfelder.p_feld (1, 12, 36);
  o_schlachtfelder.p_feld (1, 18, 37);
  o_schlachtfelder.p_feld (6, 18, 38);
  o_schlachtfelder.p_feld (11, 15, 39);
  o_schlachtfelder.p_feld (11, 8, 40);
  o_schlachtfelder.p_feld (11, 2, 41);
  o_schlachtfelder.p_feld (15, 1, 42);
  o_schlachtfelder.p_feld (19, 6, 43);
  o_schlachtfelder.p_feld (14, 8, 44);
  o_schlachtfelder.p_feld (17, 12, 45);
  o_schlachtfelder.p_feld (15, 16, 46);
  o_schlachtfelder.p_feld (19, 16, 47);
  o_schlachtfelder.p_feld (16, 19, 48);
   
  //Levelwechsel
  //Lvl 0003
  if ((o_charakter.v_mxk == 1) && (o_charakter.v_myk == 7))
  {   
    o_engine.p_changeLvl (3, "d1", false, 1, 8);
  }

  //Lvl0005
  else if ((o_charakter.v_mxk == 12) && (o_charakter.v_myk == 19))
  {   
    if (o_charakter.v_schluessel >= 2)
    {
      if (o_charakter.v_mlvl < 5) { o_charakter.v_mlvl = 5; }
      o_engine.p_changeLvl (5, "d1", false, 13, 19);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
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

function c_lvl0005 () {}

c_lvl0005.prototype.p_aktion = function ()
{
  //Truhe neuer Waffe
  if ((o_charakter.v_mxk == 14) && (o_charakter.v_myk == 12))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [7] == 0)
    {
      if (o_charakter.v_klasse == "Krieger") 
      {
        o_charakter.v_waffe = v_waffenitemtexte [2]; 
      }
      else if (o_charakter.v_klasse == "Dieb") 
      {  
        o_charakter.v_waffe = v_waffenitemtexte [3]; 
      }

      else if (o_charakter.v_klasse == "Zauberer") 
      {  
        o_charakter.v_waffe = v_waffenitemtexte [4];
      }

      o_fenster.p_writeText (v_truhentexte [1] + o_charakter.v_waffe, "", "", "", "");
      o_charakter.v_trefferpunkte = 7;
      o_ausgabe.p_writeWaffe ();
      o_truhen.v_status [7] = 1;
      o_truhen.p_status ();
    }
    else
    {
      o_fenster.p_writeText (v_truhentexte  [0], "", "", "", "");
    }
  }

  //Truhe mit Portalrolle
  o_truhen.p_portalrolletruhe (19, 7, 8, 1);

  //Schlachtfelder
  o_schlachtfelder.p_feld (16, 17, 49);
  o_schlachtfelder.p_feld (8, 17, 50);
  o_schlachtfelder.p_feld (6, 14, 51);
  o_schlachtfelder.p_feld (6, 11, 52);
  o_schlachtfelder.p_feld (3, 9, 53);
  o_schlachtfelder.p_feld (3, 7, 54);  
  o_schlachtfelder.p_feld (8, 8, 55);
  o_schlachtfelder.p_feld (12, 8, 56);
  o_schlachtfelder.p_feld (13, 4, 57);
  o_schlachtfelder.p_feld (3, 4, 58);
  o_schlachtfelder.p_feld (1, 3, 59);
  o_schlachtfelder.p_feld (6, 1, 60);
  o_schlachtfelder.p_feld (13, 2, 61);

  //Levelwechsel
  //Lvl 0004
  if ((o_charakter.v_mxk == 13) && (o_charakter.v_myk == 19))
  {   
    o_engine.p_changeLvl (4, "d1", false, 12, 19);
  }

  //Lvl0006
  else if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 4))
  {   
     if (o_charakter.v_mlvl < 6) { o_charakter.v_mlvl = 6; }
    o_engine.p_changeLvl (6, "d1", false, 19, 1);
  }
}
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

function c_lvl0006 () {}

c_lvl0006.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (9, 1, 62);
  o_schlachtfelder.p_feld (9, 3, 63);
  o_schlachtfelder.p_feld (9, 5, 64);
  o_schlachtfelder.p_feld (9, 7, 65);
  o_schlachtfelder.p_feld (9, 9, 66);
  o_schlachtfelder.p_feld (9, 11, 67);
  o_schlachtfelder.p_feld (9, 13, 68);
  o_schlachtfelder.p_feld (9, 15, 69);
  o_schlachtfelder.p_feld (9, 17, 70);
  o_schlachtfelder.p_feld (9, 19, 71)

  //Levelwechsel
  //Lvl 0005
  if ((o_charakter.v_mxk == 19) && (o_charakter.v_myk == 1))
  {   
    o_engine.p_changeLvl (5, "d1", false, 18, 4);
  }

  //Lvl0007
  else if ((o_charakter.v_mxk == 19) && (o_charakter.v_myk == 19))
  {   
     if (o_charakter.v_mlvl < 7) { o_charakter.v_mlvl = 7; }
    o_engine.p_changeLvl (7, "d1", false, 19, 19);
  }
}
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

function c_lvl0007 () {}

c_lvl0007.prototype.p_aktion = function ()
{
  //Schild
  o_schilder.p_set (19, 12, v_schildtexte [2]);

  //Truhe mit 1 Heiltrank
  o_truhen.p_heiltranktruhe (12, 5, 9, 1);

  //Schlachtfelder
  o_schlachtfelder.p_feld (17, 16, 72);
  o_schlachtfelder.p_feld (15, 9, 73);
  o_schlachtfelder.p_feld (10, 9, 74);
  o_schlachtfelder.p_feld (8, 11, 75);
  o_schlachtfelder.p_feld (11, 13, 76);
  o_schlachtfelder.p_feld (14, 15, 77);
  o_schlachtfelder.p_feld (10, 17, 78);
  o_schlachtfelder.p_feld (2, 16, 79);
  o_schlachtfelder.p_feld (2, 4, 80);
  o_schlachtfelder.p_feld (6, 3, 81);
  o_schlachtfelder.p_feld (13, 1, 82);

  //Levelwechsel
  //Lvl 0006
  if ((o_charakter.v_mxk == 19) && (o_charakter.v_myk == 19))
  {   
     o_engine.p_changeLvl (6, "d1", false, 19, 19);
  }

  //Lvl0008
  else if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 1))
  {   
     if (o_charakter.v_mlvl < 8) { o_charakter.v_mlvl = 8; }
    o_engine.p_changeLvl (8, "d1", false, 19, 1);
  }
}
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

function c_lvl0008 () {}

c_lvl0008.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (19, 4, 83);
  o_schlachtfelder.p_feld (17, 6, 84);
  o_schlachtfelder.p_feld (12, 6, 85);
  o_schlachtfelder.p_feld (10, 8, 86);
  o_schlachtfelder.p_feld (10, 11, 87);
  o_schlachtfelder.p_feld (10, 15, 88);

  //Levelwechsel
  //Lvl 0007
  if ((o_charakter.v_mxk == 19) && (o_charakter.v_myk == 1))
  {   
     o_engine.p_changeLvl (7, "d1", false, 18, 1);
  }

  //Lvl0009
  else if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 19))
  {   
    if (o_charakter.v_mlvl < 9) { o_charakter.v_mlvl = 9; }
    o_engine.p_changeLvl (9, "d1", false, 17, 19);
  }
}
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

function c_lvl0009 () {}

c_lvl0009.prototype.p_aktion = function ()
{
  //Truhe mit Rüstung
  if ((o_charakter.v_mxk == 12) && (o_charakter.v_myk == 9))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [10] == 0)
    {
      if (o_charakter.v_schlachtfelder >= 90)
      {
        if (o_charakter.v_klasse == "Krieger")
        {
          o_charakter.v_ruestung = v_ruestungsitemtexte [1];
        }
        else if (o_charakter.v_klasse == "Dieb")
        {
          o_charakter.v_ruestung = v_ruestungsitemtexte [3];
        }
        else if (o_charakter.v_klasse == "Zauberer")
        {
          o_charakter.v_ruestung = v_ruestungsitemtexte [3];
        }

        o_charakter.v_ruestungswert = 1;
        o_ausgabe.p_writeRuestung ();  
        o_fenster.p_writeText (v_truhentexte [1] + o_charakter.v_ruestung, "", "", "", "");
        o_truhen.v_status [10] = 1;
        o_truhen.p_status ();
      }
      else
      {
        o_fenster.p_writeText (v_truhentexte [7], "", "", "", "");
      }
    }
    else if (o_truhen.v_status [10] == 1)
    {
      o_fenster.p_writeText (v_truhentexte [0], "", "", "", "");
    }
  }

  //Schlachtfelder
  o_schlachtfelder.p_feld (12, 18, 89);
  o_schlachtfelder.p_feld (4, 18, 90);
  o_schlachtfelder.p_feld (1, 15, 91);
  o_schlachtfelder.p_feld (1, 12, 92);
  o_schlachtfelder.p_feld (5, 9, 93);
  o_schlachtfelder.p_feld (1, 7, 94);
  o_schlachtfelder.p_feld (1, 4, 95);
  o_schlachtfelder.p_feld (4, 2, 96);
  o_schlachtfelder.p_feld (12, 2, 97);
  
  //Levelwechsel
  //Lvl 0008
  if ((o_charakter.v_mxk == 17) && (o_charakter.v_myk == 19))
  {   
    o_engine.p_changeLvl (8, "d1", false, 10, 19);
  }

  //Lvl0010
  else if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 1))
  {  
    if (o_charakter.v_mlvl < 3) { o_charakter.v_mlvl = 3; }
    o_engine.p_changeLvl (10, "d1a", true, 18, 1);
  }
}
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

function c_lvl0010 () {}

c_lvl0010.prototype.p_aktion = function ()
{
  //Bosschlachtfeld
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 9))
  {
    if (o_schlachtfelder.v_erledigt [98] == 0)
    {
      v_schlachtfeld = 98;
      o_kampf.p_start ("Rattenmensch");

    }
    else if (o_schlachtfelder.v_erledigt [98] == 1)
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_kampftexte [3], "", "", "", "");
    }

  }

  //Levelwechsel
  //Lvl 0009
  if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 1))
  {   
      o_engine.p_changeLvl (9, "d1", true, 18, 1);
  }

  //Lvl0011
  else if ((o_charakter.v_mxk == 2) && (o_charakter.v_myk == 19))
  {  
    if (o_charakter.v_schluessel >= 3) 
    {
      if (o_charakter.v_mlvl < 11) { o_charakter.v_mlvl = 11; }
      //Portal aktiv schalten
      if (o_portale.v_portale [1] == 0) { o_portale.v_portale [1] = 1; }
      o_engine.p_changeLvl (11, "d2", true, 19, 1);
    }
    else 
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
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

function c_lvl0011 () {}

c_lvl0011.prototype.p_aktion = function ()
{
  //Schild
  o_schilder.p_set (17, 1, v_schildtexte [3]);

  //Schlachtfelder
  o_schlachtfelder.p_feld (17, 4, 99);
  o_schlachtfelder.p_feld (13, 7, 100);
  o_schlachtfelder.p_feld (17, 10, 101);
  o_schlachtfelder.p_feld (9, 12, 102);
  o_schlachtfelder.p_feld (12, 14, 103);
  o_schlachtfelder.p_feld (6, 15, 104);
  o_schlachtfelder.p_feld (3, 17, 105);

  //Levelwechsel
  //Lvl 0010
  if ((o_charakter.v_mxk == 19) && (o_charakter.v_myk == 1))
  {   
    o_engine.p_changeLvl (10, "d1a", true, 2, 19);
  }
  //Lvl0012
  else if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 19))
  {  
    if (o_charakter.v_mlvl < 12) { o_charakter.v_mlvl = 12; }
    o_engine.p_changeLvl (12, "d2", false, 19, 0);
  }

}
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

function c_lvl0012 () {}

c_lvl0012.prototype.p_aktion = function ()
{
  o_truhen.p_goldtruhe (10, 10, 11, 100);

  //Schlachtfelder
  o_schlachtfelder.p_feld (16, 3, 106);
  o_schlachtfelder.p_feld (10, 6, 107);
  o_schlachtfelder.p_feld (10, 13, 108);
  o_schlachtfelder.p_feld (17, 19, 109);
  
  //Levelwechsel
  //Lvl 0011
  if ((o_charakter.v_mxk == 19) && (o_charakter.v_myk == 0))
  {   
    o_engine.p_changeLvl (11, "d2", false, 0, 19);
  }
  //Lvl0013
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 19))
  {  
    if (o_charakter.v_mlvl < 13) { o_charakter.v_mlvl = 13; }
    o_engine.p_changeLvl (13, "d2", false, 0, 19); 
  }
}
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

function c_lvl0013 () {}

c_lvl0013.prototype.p_aktion = function ()
{
  //Truhe mit Holzschild 
  if ((o_charakter.v_mxk == 11) && (o_charakter.v_myk == 7))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [12] == 0)
    {
      if (o_charakter.v_klasse == "Krieger") {  o_charakter.v_schild =  v_schilditemtexte [1]; }
      else if (o_charakter.v_klasse == "Dieb") {  o_charakter.v_schild =  v_schilditemtexte [2]; }
      else if (o_charakter.v_klasse == "Zauberer") {  o_charakter.v_schild =  v_schilditemtexte [3]; }

      o_fenster.p_writeText (v_truhentexte  [1] + o_charakter.v_schild, "", "", "", "");
      
      o_charakter.v_schildwert = 1;
      o_ausgabe.p_writeSchild ();
      o_truhen.v_status [12] = 1;
      o_truhen.p_status ();
    }
    else
    {
      o_fenster.p_writeText (v_truhentexte  [0], "", "", "", "");
    }
  }

  //Truhe mit Blauschuppe - Quest 4
  if ((o_charakter.v_mxk == 17) && (o_charakter.v_myk == 10))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [13] == 0)
    {
      if (o_charakter.v_schlachtfelder >= 112)
      {
        o_questen.v_quest [4] = 1; o_charakter.v_quest = "true";
        o_charakter.v_queststand = v_questtexte [25];
        o_charakter.v_questitem = "Blauschuppe"
        o_ausgabe.p_writeQueststand ();  
        o_fenster.p_writeText (v_questtexte [26], "", "", "", "");
        o_truhen.v_status [13] = 1;
        o_truhen.p_status ();
      }
      else
      {
        o_fenster.p_writeText (v_questtexte [27], "", "", "", "");
      }
    }
    else if (o_truhen.v_status [13] == 1)
    {
      o_fenster.p_writeText ("Die Truhe ist geöffnet und leer.", "", "", "", "");     
    }
  }

  //Schlachtfelder
  o_schlachtfelder.p_feld (2, 19, 110);
  o_schlachtfelder.p_feld (4, 15, 111);
  o_schlachtfelder.p_feld (8, 17, 112);
  o_schlachtfelder.p_feld (11, 17, 113);
  o_schlachtfelder.p_feld (15, 14, 114);
  o_schlachtfelder.p_feld (18, 19, 115);
  
  //Levelwechsel
  //Lvl 0012
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 19))
  {   
    o_engine.p_changeLvl (12, "d2", false, 20, 19);
  }
  //Lvl0014
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 19))
  {  
    if (o_charakter.v_schluessel >= 4)
    {
      if (o_charakter.v_mlvl < 14) { o_charakter.v_mlvl = 14; }
      o_engine.p_changeLvl (14, "d2", false, 0, 19);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
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

function c_lvl0014 () {}

c_lvl0014.prototype.p_aktion = function ()
{
  //Truhe mit Zauber Regnen
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 3))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [14] == 0)
    {
      if (o_charakter.v_schlachtfelder >= 123)
      {
        o_truhen.v_status [14] = 1;
        o_fenster.p_writeText (v_truhentexte [11], "", "", "", "");
        o_charakter.v_regnen = "aktiv";
        document.getElementById("Zauberliste").options[1]  = new Option ("Regnen");
        o_truhen.p_status ();
      } 
      else
      {
        o_fenster.p_writeText (v_truhentexte [10], "", "", "", "");
      }
    }
    else 
    {
        o_fenster.p_writeText (v_truhentexte [0], "", "", "", ""); 
    }
  } 

  //Schlachtfelder
  o_schlachtfelder.p_feld (2, 19,116);
  o_schlachtfelder.p_feld (6, 19, 117);
  o_schlachtfelder.p_feld (10, 19, 118);
  o_schlachtfelder.p_feld (14, 19, 119);
  o_schlachtfelder.p_feld (18, 19, 120);
  o_schlachtfelder.p_feld (10, 15, 121);
  o_schlachtfelder.p_feld (10, 10, 122);
  
  //Levelwechsel
  //Lvl 0013
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 19))
  {   
    o_engine.p_changeLvl (13, "d2", false, 20, 19);
  }
  //Lvl0015
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 19))
  {  
    if (o_charakter.v_mlvl < 15) { o_charakter.v_mlvl = 15; }
    o_engine.p_changeLvl (15, "d2a", true, 0, 19);
  }
}
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

function c_lvl0015 () {}

c_lvl0015.prototype.p_aktion = function ()
{
  if ((o_charakter.v_mxk == 9) && (o_charakter.v_myk == 10))
  {
    if (o_schlachtfelder.v_erledigt [123] == 0)
    {
      v_schlachtfeld = 123;
      o_kampf.p_start ("Riesenkrake");

    }
    else if (o_schlachtfelder.v_erledigt [123] == 1)
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_kampftexte [3], "", "", "", "");
    }
  }

  //Levelwechsel
  //Lvl 0014
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 19))
  {   
      o_engine.p_changeLvl (14, "d2", true, 20, 19);
  }
  //Lvl0016
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 0))
  {  
    if (o_charakter.v_schluessel >= 5)
    {
      if (o_portale.v_portale [2] == 0) { o_portale.v_portale [2] = 1; } //Portal freigeben
      if (o_charakter.v_mlvl < 16) { o_charakter.v_mlvl = 16; }
      o_engine.p_changeLvl (16, "d3", true, 0, 20);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
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

function c_lvl0016 () {}

c_lvl0016.prototype.p_aktion = function ()
{
  //Schild
  o_schilder.p_set (6, 6, v_schildtexte [4]);

  //Schlachtfelder
  o_schlachtfelder.p_feld (6, 14, 124);
  o_schlachtfelder.p_feld (6, 8, 125);
  o_schlachtfelder.p_feld (9, 10, 126);
  o_schlachtfelder.p_feld (13, 10, 127);
  o_schlachtfelder.p_feld (17, 10, 128);

  //Levelwechsel
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 20))
  {   
      o_engine.p_changeLvl (15, "d2a", true, 20, 0);
  }
  if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 10))
  {   
      if (o_charakter.v_mlvl < 17) { o_charakter.v_mlvl = 17; }
      o_engine.p_changeLvl (17, "d3", false, 0, 10);
  }

}
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

function c_lvl0017 () {}

c_lvl0017.prototype.p_aktion = function ()
{
  //Truhe mit Heiltrank
  o_truhen.p_heiltranktruhe (18, 10, 15, 1);

  //Schlachtfelder
  o_schlachtfelder.p_feld (5, 10, 129);
  o_schlachtfelder.p_feld (14, 10, 130);
  o_schlachtfelder.p_feld (10, 7, 131);
  o_schlachtfelder.p_feld (10, 3, 132);
  o_schlachtfelder.p_feld (10, 13, 133);
  o_schlachtfelder.p_feld (10, 17, 134);

  //Levelwechsel
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 10))
  {   
    o_engine.p_changeLvl (16, "d3", false, 20, 10);
  }
  else if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 0))
  {   
    if (o_charakter.v_mlvl < 18) { o_charakter.v_mlvl = 18; }
    o_engine.p_changeLvl (18, "d3", false, 10, 20);
  }
  else if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 20))
  {   
    if (o_charakter.v_mlvl < 20) { o_charakter.v_mlvl = 20; }
    o_engine.p_changeLvl (20, "d3", false, 10, 0);
  }
  
}
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

function c_lvl0018 () {}

c_lvl0018.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (10, 17, 135);
  o_schlachtfelder.p_feld (10, 14, 136);
  o_schlachtfelder.p_feld (10, 10, 137);
  o_schlachtfelder.p_feld (14, 10, 138);
  o_schlachtfelder.p_feld (17, 10, 139);  

  //Levelwechsel
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 20))
  {   
    o_engine.p_changeLvl (17, "d3", false, 10, 0);
  }

  if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 10))
  {   
    if (o_charakter.v_mlvl < 19) { o_charakter.v_mlvl = 19; }
    o_engine.p_changeLvl (19, "d3", false, 0, 10);
  }
  
}
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

function c_lvl0019 () {}

c_lvl0019.prototype.p_aktion = function ()
{
  //Truhe mit Zauber Sporen
  if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 10))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [16] == 0)
    {
      if (o_charakter.v_schlachtfelder >= 156)
      {
        o_truhen.v_status [16] = 1;
        o_fenster.p_writeText (v_truhentexte [16], "", "", "", "");
        o_charakter.v_sporen = "aktiv";
        document.getElementById("Zauberliste").options[2]  = new Option ("Sporen");
        o_truhen.p_status ();
      } 
      else
      {
        o_fenster.p_writeText (v_truhentexte [17], "", "", "", "");
      }
    }
    else 
    {
        o_fenster.p_writeText (v_truhentexte [0], "", "", "", ""); 
    }
  } 

  //Schlachtfelder
  o_schlachtfelder.p_feld (2, 10, 140);
  o_schlachtfelder.p_feld (5, 10, 141);
  o_schlachtfelder.p_feld (9, 10, 142);
  o_schlachtfelder.p_feld (12, 10, 143);

  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 10))
  {   
    o_engine.p_changeLvl (18, "d3", false, 20, 10);
  }
}
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

function c_lvl0020 () {}

c_lvl0020.prototype.p_aktion = function ()
{
  o_schlachtfelder.p_feld (10, 2, 144);
  o_schlachtfelder.p_feld (10, 6, 145);
  o_schlachtfelder.p_feld (10, 10, 146);
  o_schlachtfelder.p_feld (14, 10, 147);
  o_schlachtfelder.p_feld (18, 10, 148);

  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 0))
  {   
    o_engine.p_changeLvl (17, "d3", false, 10, 20);
  }
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 10))
  {
    if (o_charakter.v_mlvl < 21) { o_charakter.v_mlvl = 21; }
    o_engine.p_changeLvl (21, "d3", false, 0, 10);
  }
}
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

function c_lvl0021 () {}

c_lvl0021.prototype.p_aktion = function ()
{
  //Truhe mit Eichensamen - Quest 6
  if ((o_charakter.v_mxk == 2) && (o_charakter.v_myk == 17))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [17] == 0)
    {
      o_questen.v_quest [6] = 1; o_charakter.v_quest = "true";
      o_charakter.v_queststand = v_questtexte [38];
      o_charakter.v_questitem = "Eichensamen"
      o_ausgabe.p_writeQueststand ();  
      o_fenster.p_writeText (v_questtexte [39], "", "", "", "");
      o_truhen.v_status [17] = 1;
      o_truhen.p_status ();
    }
    else if (o_truhen.v_status [17] == 1)
    {
      o_fenster.p_writeText (v_truhentexte [0], "", "", "", "");     
    }
  }

  //Truhe mit 60 Gold
  if ((o_charakter.v_mxk == 16) && (o_charakter.v_myk == 2))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [18] == 0)
    {
      o_fenster.p_writeText (v_truhentexte  [1] + v_truhentexte [18], "", "", "", "");
      o_charakter.v_gold += 60;
      o_ausgabe.p_writeGold ();
      o_truhen.v_status [18] = 1;
      o_truhen.p_status ();
    }
    else
    {
      o_fenster.p_writeText (v_truhentexte  [0], "", "", "", "");
    }
  }

  //Schlachtfelder
  o_schlachtfelder.p_feld (4, 10, 149);
  o_schlachtfelder.p_feld (7, 10, 150);
  o_schlachtfelder.p_feld (12, 10, 151);
  o_schlachtfelder.p_feld (9, 12, 152);
  o_schlachtfelder.p_feld (7, 15, 153);
  o_schlachtfelder.p_feld (16, 6, 154);
  o_schlachtfelder.p_feld (16, 13, 155);

  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 10))
  {   
    o_engine.p_changeLvl (20, "d3", false, 20, 10);
  }
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 16))
  {
    if (o_charakter.v_schluessel >= 6)
    {
      if (o_charakter.v_mlvl < 22) { o_charakter.v_mlvl = 22; }
      o_engine.p_changeLvl (22, "d3a", true, 0, 16);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
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

function c_lvl0022 () {}

c_lvl0022.prototype.p_aktion = function ()
{
  //Bossschlachtfeld
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 10))
  {
    if (o_schlachtfelder.v_erledigt [156] == 0)
    {
      v_schlachtfeld = 156;
      o_kampf.p_start ("Pilzmensch");

    }
    else if (o_schlachtfelder.v_erledigt [156] == 1)
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_kampftexte [3], "", "", "", "");
    }
  }

 //Levelwechsel
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 16))
  {   
    o_engine.p_changeLvl (21, "d3", true, 20, 16);
  }
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 16))
  {
    if (o_charakter.v_schluessel >= 7)
    {
      if (o_charakter.v_mlvl < 23) { o_charakter.v_mlvl = 23; }
      if (o_portale.v_portale [3] == 0) { o_portale.v_portale [3] = 1; }
      o_engine.p_changeLvl (23, "d4", true, 0, 16);
    }
    else 
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
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

function c_lvl0023 () {}

c_lvl0023.prototype.p_aktion = function ()
{
  //Schild
  o_schilder.p_set (12, 9, v_schildtexte [5]);

  //Truhe
  o_truhen.p_heiltranktruhe (7, 2, 19, 5); 

  //Schlachtfelder
  o_schlachtfelder.p_feld (3, 16, 157);
  o_schlachtfelder.p_feld (7, 5, 158);
  o_schlachtfelder.p_feld (10, 10, 159);
  o_schlachtfelder.p_feld (15, 10, 160);
  o_schlachtfelder.p_feld (16, 7, 161);
  o_schlachtfelder.p_feld (16, 12, 162);
  
  //Levelwechsel
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 16))
  {   
    o_engine.p_changeLvl (22, "d3a", true, 20, 16);
  }
  else if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 7))
  {   
    if (o_charakter.v_mlvl < 24) { o_charakter.v_mlvl = 24; }
    o_engine.p_changeLvl (24, "d4", false, 18, 7);
  }
}
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

function c_lvl0024 () {}

c_lvl0024.prototype.p_aktion = function ()
{
  //Truhe mit Waffe

  //Truhe neuer Waffe
  if ((o_charakter.v_mxk == 5) && (o_charakter.v_myk == 8))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [20] == 0)
    {
      if (o_charakter.v_klasse == "Krieger") 
      {
        o_charakter.v_waffe = v_waffenitemtexte [5]; 
      }
      else if (o_charakter.v_klasse == "Dieb") 
      {  
        o_charakter.v_waffe = v_waffenitemtexte [6]; 
      }

      else if (o_charakter.v_klasse == "Zauberer") 
      {  
        o_charakter.v_waffe = v_waffenitemtexte [7];
      }

      o_fenster.p_writeText (v_truhentexte [1] + o_charakter.v_waffe, "", "", "", "");
      o_charakter.v_trefferpunkte = 8;
      o_ausgabe.p_writeWaffe ();
      o_truhen.v_status [20] = 1;
      o_truhen.p_status ();
    }
    else
    {
      o_fenster.p_writeText (v_truhentexte  [0], "", "", "", "");
    }
  }

  //Schlachtfelder
  o_schlachtfelder.p_feld (15, 9, 163);
  o_schlachtfelder.p_feld (17, 11, 164);
  o_schlachtfelder.p_feld (16, 17, 165);
  o_schlachtfelder.p_feld (10, 18, 166);
  o_schlachtfelder.p_feld (5, 15, 167);
  o_schlachtfelder.p_feld (5,11, 168);

  //Levelwechsel
  if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 7))
  {   
    o_engine.p_changeLvl (23, "d4", false, 18, 7);
  }
  else if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 13))
  {   
    o_engine.p_changeLvl (25, "d4a", true, 18, 13);
  }
}
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

function c_lvl0025 () {}

c_lvl0025.prototype.p_aktion = function ()
{
  //Bossschlachtfeld
  if ((o_charakter.v_mxk == 17) && (o_charakter.v_myk == 8))
  {
    if (o_schlachtfelder.v_erledigt [169] == 0)
    {
      v_schlachtfeld = 169;
      o_kampf.p_start ("Puppengeist");

    }
    else if (o_schlachtfelder.v_erledigt [169] == 1)
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_kampftexte [3], "", "", "", "");
    }
  }
  //Levelwechsel
  if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 13))
  {   
    o_engine.p_changeLvl (24, "d4", true, 18, 13);
  }
  else if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 1))
  {   
    if (o_charakter.v_schluessel >= 8)
    {
      o_engine.p_changeLvl (26, "d5", true, 20, 1);
      if (o_portale.v_portale [4] == 0) { o_portale.v_portale [4] = 1; }
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
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

function c_lvl0026 () {}

c_lvl0026.prototype.p_aktion = function ()
{
   //Schild
   o_schilder.p_set (6, 6, "Die Ebene");

   //Schlachtfelder
   o_schlachtfelder.p_feld (16, 1, 170);
   o_schlachtfelder.p_feld (14, 1, 171);
   o_schlachtfelder.p_feld (10, 4, 172);
   o_schlachtfelder.p_feld (10, 6, 173);
   o_schlachtfelder.p_feld (8, 10, 174);
   o_schlachtfelder.p_feld (3, 10, 175);

   //Levelwechsel
   if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 1)) {   
    o_engine.p_changeLvl (25, "d4a", true, 0, 1);
   }
  else if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 10))
  {   
    o_engine.p_changeLvl (27, "d5", false, 20, 10);
  }
}
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

function c_lvl0027 () {}

c_lvl0027.prototype.p_aktion = function ()
{
  o_schlachtfelder.p_feld (16, 10, 176);
  o_schlachtfelder.p_feld (13, 10, 177);
  o_schlachtfelder.p_feld (10, 10, 178);
  o_schlachtfelder.p_feld (7, 10, 179);
  o_schlachtfelder.p_feld (4, 10, 180);

  //Levelwechsel
  if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 10)) 
  {   
    o_engine.p_changeLvl (26, "d5", false, 0, 10);
  }
  else if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 10))
  {   
    o_engine.p_changeLvl (28, "d5", false, 20, 10);
  }
}
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

function c_lvl0028 () {}

c_lvl0028.prototype.p_aktion = function ()
{
  //Truhe mit Rüstung
  o_truhen.p_ruestungstruhe (1, 10, 21, 185, "Lederüstung", "Feste Kleidung", "Kutte", 2);

  //Schlachtfelder
  o_schlachtfelder.p_feld (17, 10, 181);
  o_schlachtfelder.p_feld (12, 10, 182);
  o_schlachtfelder.p_feld (4, 10, 183);
  o_schlachtfelder.p_feld (10, 2, 184);
  o_schlachtfelder.p_feld (10, 5, 185);
  o_schlachtfelder.p_feld (10, 8, 186);
  o_schlachtfelder.p_feld (7, 12, 187);
  o_schlachtfelder.p_feld (7, 15, 188);
  o_schlachtfelder.p_feld (7, 18, 189);

  //Levelwechsel
  if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 10)) 
  {   
    o_engine.p_changeLvl (27, "d5", false, 0, 10);
  }
  else if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 0))
  {   
    o_engine.p_changeLvl (29, "d5", false, 10, 20);
  }
  else if ((o_charakter.v_mxk == 7) && (o_charakter.v_myk == 20))
  {   
    if (o_charakter.v_schluessel >= 9)
    {
      o_engine.p_changeLvl (31, "d5a", true, 7, 0);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
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

function c_lvl0029 () {}

c_lvl0029.prototype.p_aktion = function ()
{
  //Fundort Eisenstein - Quest 9
  if ((o_charakter.v_mxk == 5) && (o_charakter.v_myk == 2))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [22] == 0)
    {
      o_questen.v_quest [9] = 1; o_charakter.v_quest = "true";
      o_charakter.v_queststand = "Eisenstein abgeben";
      o_charakter.v_questitem = "Eisenstein";
      o_ausgabe.p_writeQueststand ();  
      o_fenster.p_writeText ("Eisenstein gefunden", "", "", "", "");
      o_truhen.v_status [22] = 1;
      o_truhen.p_status ();
    }
    else if (o_truhen.v_status [22] == 1)
    {
      o_fenster.p_writeText ("Hier ist nichts...", "", "", "", "");     
    }
  }

  //Schlachtfelder
  o_schlachtfelder.p_feld (10, 18, 190);
  o_schlachtfelder.p_feld (10, 15, 191);
  o_schlachtfelder.p_feld (10, 12, 192);
  o_schlachtfelder.p_feld (5, 5, 193);
  o_schlachtfelder.p_feld (12, 10, 194);
  o_schlachtfelder.p_feld (15, 10, 195);
  o_schlachtfelder.p_feld (18, 10, 196);

  //Levelwechsel
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 20)) 
  {   
    o_engine.p_changeLvl (28, "d5", false, 10, 0);
  }
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 10))
  {   
    o_engine.p_changeLvl (30, "d5", false, 0, 10);
  }
}
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

function c_lvl0030 () {}

c_lvl0030.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (2, 10, 197);
  o_schlachtfelder.p_feld (8, 5, 198);
  o_schlachtfelder.p_feld (11, 5, 199);
  o_schlachtfelder.p_feld (8, 15, 200);
  o_schlachtfelder.p_feld (11, 15, 201);
  o_schlachtfelder.p_feld (16, 10, 202);

  //Levelwechsel
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 10)) 
  {   
    o_engine.p_changeLvl (29, "d5", false, 20, 10);
  }
}
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

function c_lvl0031 () {}

c_lvl0031.prototype.p_aktion = function ()
{
  //Bossschlachtfeld
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 10))
  {
    if (o_schlachtfelder.v_erledigt [203] == 0)
    {
      v_schlachtfeld = 203;
      o_kampf.p_start ("Steinriese");

    }
    else if (o_schlachtfelder.v_erledigt [203] == 1)
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_kampftexte [3], "", "", "", "");
    }
  }

  //Levelwechsel
  if ((o_charakter.v_mxk == 7) && (o_charakter.v_myk == 0)) 
  {   
    o_engine.p_changeLvl (28, "d5", true, 7, 20);
  }
  else if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 20)) 
  {
    o_musik.p_stop (1)
    o_engine.p_changeLvl (32, "manabrunnen", true, 10, 0);
    v_zone = "Manabrunnen";
    o_musik.p_play (6);
  }
}
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

function c_lvl0032 () {}

c_lvl0032.prototype.p_aktion = function ()
{
  //Manabrunnen
  o_manabrunnen.p_manabrunnen (10, 10, 1);

  //Levelwechsel 
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 0)) 
  {   
    o_musik.p_stop (6);
    o_engine.p_changeLvl (31, "d5a", true, 10, 20);
    v_zone = "Gebiet";
    o_musik.p_play (1);
  }
  else if  ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 20))
  {
    o_musik.p_stop (6);
    o_portale.v_portale [5] = 1;
    o_engine.p_changeLvl (33, "d6", true, 10, 0);
    v_zone = "Gebiet";
    o_musik.p_play (1);
  }
}
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

function c_lvl0033 () {}


c_lvl0033.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (10, 2, 204);
  o_schlachtfelder.p_feld (10, 5, 205);
  o_schlachtfelder.p_feld (8, 7, 206);
  o_schlachtfelder.p_feld (6, 9, 207);
  o_schlachtfelder.p_feld (6, 11, 208);
  o_schlachtfelder.p_feld (6, 14, 209);
  o_schlachtfelder.p_feld (8, 16, 210);
  o_schlachtfelder.p_feld (10, 18, 211);
  o_schlachtfelder.p_feld (13, 14, 212);
  o_schlachtfelder.p_feld (13, 11, 213);
  o_schlachtfelder.p_feld (13, 9, 214);

  //Levelwechsel
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 0)) 
  { 
    o_musik.p_stop (1)
    o_engine.p_changeLvl (32, "manabrunnen", true, 10, 20);
    v_zone = "Manabrunnen";
    o_musik.p_play (6);
  }
  else if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 20)) 
  {
    o_engine.p_changeLvl (34, "d6", false, 10, 0);
  }
}
//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2018 Heiko Wolf
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

function c_lvl0034 () {}


c_lvl0034.prototype.p_aktion = function ()
{
  //Schild
  o_schilder.p_set (9, 1, "Die Globule");

  //Goldstruhe mit 350 Gold
  o_truhen.p_goldtruhe (10, 14, 23, 350);

  //Schlachtfelder
  o_schlachtfelder.p_feld (10, 3, 215);
  o_schlachtfelder.p_feld (10, 10, 216);
  o_schlachtfelder.p_feld (13, 6, 217);
  o_schlachtfelder.p_feld (17, 6, 218);

  //Levelwechsel
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 0)) 
  {   
    o_engine.p_changeLvl (33, "d6", false, 10, 20);
  }
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 6))
  {   
    o_engine.p_changeLvl (35, "d6", false, 0, 6);
  }
}
//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2018 Heiko Wolf
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

function c_lvl0035 () {}


c_lvl0035.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (2, 6, 219);
  o_schlachtfelder.p_feld (5, 6, 220);
  o_schlachtfelder.p_feld (10, 6, 221);
  o_schlachtfelder.p_feld (15, 6, 222);
  o_schlachtfelder.p_feld (18, 6, 223);

  //Levelwechsel
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 6)) 
  {   
    o_engine.p_changeLvl (34, "d6", false, 20, 6);
  }
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 6))
  {   
    o_engine.p_changeLvl (36, "d6", false, 0, 6);
  }
}
//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2018 Heiko Wolf
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

function c_lvl0036 () {}


c_lvl0036.prototype.p_aktion = function ()
{
  //Schild
  o_schilder.p_set (9, 7, "Wer sucht, der findet!");

  //Schlachtfelder
  o_schlachtfelder.p_feld (3, 6, 224);
  o_schlachtfelder.p_feld (7, 6, 225);
  o_schlachtfelder.p_feld (10, 3, 226);
  o_schlachtfelder.p_feld (10, 9, 227);
  o_schlachtfelder.p_feld (10, 13, 228);
  o_schlachtfelder.p_feld (10, 17, 229);

  //Levelwechsel
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 6)) 
  {   
    o_engine.p_changeLvl (35, "d6", false, 20, 6);
  }
  else if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 0))
  {   
    o_engine.p_changeLvl (37, "d6", false, 10, 20);
  }
  else if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 20))
  {   
    o_engine.p_changeLvl (39, "d6", false, 10, 0);
  }
}
//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2018 Heiko Wolf
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

function c_lvl0037 () {}


c_lvl0037.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (10, 18, 230);
  o_schlachtfelder.p_feld (7, 16, 231);
  o_schlachtfelder.p_feld (8, 14, 232);
  o_schlachtfelder.p_feld (8, 12, 233);
  o_schlachtfelder.p_feld (7, 10, 234);
  o_schlachtfelder.p_feld (7, 7, 235);
  o_schlachtfelder.p_feld (9, 5, 236);
  o_schlachtfelder.p_feld (12, 5, 237);
  o_schlachtfelder.p_feld (14, 6, 238);
  o_schlachtfelder.p_feld (16, 8, 239);
  o_schlachtfelder.p_feld (18, 10, 240);

  //Levelwechsel
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 20)) 
  {   
    o_engine.p_changeLvl (36, "d6", false, 10, 0);
  }
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 10))
  {   
    o_engine.p_changeLvl (38, "d6", false, 0, 10);
  }
}
//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2018 Heiko Wolf
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

function c_lvl0038 () {}

c_lvl0038.prototype.p_aktion = function ()
{
  //Truhe mit Zauber Umwandlung
  if ((o_charakter.v_mxk == 18) && (o_charakter.v_myk == 10))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [24] == 0)
    {
      if (o_charakter.v_schlachtfelder >= 130) 
      {
        o_truhen.v_status [24] = 1;
        o_fenster.p_writeText ("Ihr findet den Zauber Umwandlung!", "", "", "", "", "");
        o_charakter.v_umwandlung = "aktiv";
        document.getElementById("Zauberliste").options[3]  = new Option ("Umwandlung");
        o_truhen.p_status ();
      } 
      else
      {
        o_fenster.p_writeText ("Die Truhe ist verschlossen! Eine blauglühende 130 ist zu sehen.", "", "", "", "");
      }
    }
    else 
    {
        o_fenster.p_writeText (v_truhentexte [0], "", "", "", ""); 
    }
  } 
  
  //Schlachtfelder
  o_schlachtfelder.p_feld (2, 10, 241);
  o_schlachtfelder.p_feld (5, 10, 242);
  o_schlachtfelder.p_feld (12, 10, 243);
  o_schlachtfelder.p_feld (15, 10, 244);
  
  //Levelwechsel
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 10)) 
  {   
    o_engine.p_changeLvl (37, "d6", false, 20, 10);
  }
}
//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2018 Heiko Wolf
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

function c_lvl0039 () {}

c_lvl0039.prototype.p_aktion = function ()
{ 
  //Truhe mit Seherkugel
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 18))
  {
    o_fenster.p_drawWindow ();

    if (o_truhen.v_status [25] == 0)
    {
      o_questen.v_quest [11] = 1; o_charakter.v_quest = "true";
      o_charakter.v_queststand = v_questtexte [61];
      o_charakter.v_questitem = "Seherkugel";
      o_ausgabe.p_writeQueststand ();  
      o_fenster.p_writeText (v_questtexte [62], "", "", "", "");
      o_truhen.v_status [25] = 1;
      o_truhen.p_status ();
    }
    else if (o_truhen.v_status [25] == 1)
    {
      o_fenster.p_writeText (v_truhentexte [0], "", "", "", "");     
    }
  }

  //Schlachtfelder
  o_schlachtfelder.p_feld (10, 2, 245);
  o_schlachtfelder.p_feld (5, 3, 246);
  o_schlachtfelder.p_feld (10, 5, 247);
  o_schlachtfelder.p_feld (10, 10, 248);
  o_schlachtfelder.p_feld (10, 15, 249);
  
  //Levelwechsel
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 0)) 
  {   
    o_engine.p_changeLvl (36, "d6", false, 10, 20);
  }
  else if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 3))
  {
    if (o_charakter.v_schluessel >= 11)
    {
      o_engine.p_changeLvl (40, "d6a", true, 20, 3);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
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

//Startfunktion bei Neuem Spiel
function f_interaktion ()
{
  if ((v_lvl == 1) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) 
  {
    o_lvl0001.p_aktion ();
  }
  else if ((v_lvl == 2) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0002.p_aktion ();
  }
  else if ((v_lvl == 3) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0003.p_aktion ();
  }
  else if ((v_lvl == 4) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0004.p_aktion ();
  }
  else if ((v_lvl == 5) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0005.p_aktion ();
  }

  else if ((v_lvl == 6) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0006.p_aktion ();
  }

  else if ((v_lvl == 7) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0007.p_aktion ();
  }
  else if ((v_lvl == 8) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0008.p_aktion ();
  }
  else if ((v_lvl == 9) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0009.p_aktion ();
  }
  else if ((v_lvl == 10) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0010.p_aktion ();
  }
  else if ((v_lvl == 11) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0011.p_aktion ();
  }
  else if ((v_lvl == 12) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0012.p_aktion ();
  }
  else if ((v_lvl == 13) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0013.p_aktion ();
  }
  else if ((v_lvl == 14) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0014.p_aktion ();
  }
  else if ((v_lvl == 15) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0015.p_aktion ();
  }
  else if ((v_lvl == 16) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0016.p_aktion ();
  }
  else if ((v_lvl == 17) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0017.p_aktion ();
  }
  else if ((v_lvl == 18) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0018.p_aktion ();
  }
  else if ((v_lvl == 19) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0019.p_aktion ();
  }
  else if ((v_lvl == 20) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0020.p_aktion ();
  }
  else if ((v_lvl == 21) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0021.p_aktion ();
  }
  else if ((v_lvl == 22) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0022.p_aktion ();
  }
  else if ((v_lvl == 23) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0))
  {
    o_lvl0023.p_aktion ();
  }
  else if ((v_lvl == 24) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0024.p_aktion ();
  }
  else if ((v_lvl == 25) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0025.p_aktion ();
  }
  else if ((v_lvl == 26) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0026.p_aktion ();
  }
  else if ((v_lvl == 27) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0027.p_aktion ();
  }
   else if ((v_lvl == 28) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0028.p_aktion ();
  }
   else if ((v_lvl == 29) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0029.p_aktion ();
  }
  else if ((v_lvl == 30) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0030.p_aktion ();
  }
  else if ((v_lvl == 31) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0031.p_aktion ();
  }
  else if ((v_lvl == 32) && (v_zone == "Manabrunnen") && (o_fenster.v_aktiv == 0)) {
    o_lvl0032.p_aktion ();
  }
  else if ((v_lvl == 33) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0033.p_aktion ();
  }
  else if ((v_lvl == 34) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0034.p_aktion ();
  }
  else if ((v_lvl == 35) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0035.p_aktion ();
  }
  else if ((v_lvl == 36) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0036.p_aktion ();
  }
  else if ((v_lvl == 37) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0037.p_aktion ();
  }
  else if ((v_lvl == 38) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0038.p_aktion ();
  }
  else if ((v_lvl == 39) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0039.p_aktion ();
  }
  else if ((v_lvl == 40) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0040.p_aktion ();
  }
  else if ((v_lvl == 41) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0041.p_aktion ();
  }
  else if ((v_lvl == 42) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0042.p_aktion ();
  }
  else if ((v_lvl == 43) && (v_zone == "Gebiet") && (o_fenster.v_aktiv == 0)) {
    o_lvl0043.p_aktion ();
  }

  else if (o_fenster.v_aktiv == 1)
  {
    o_fenster.p_clearWindow (20, 260);
  }
  else if ((v_lvl == 1) && (v_zone == "Haendler")) 
  {
    o_haendler.p_kaufen ();
  }
  else if ((v_zone == "Kampf") || (v_zone == "Bosskampf"))
  {
    o_kampf.p_angriffSpieler ();
  }
}

//Tastatursteuerung
function f_taste_druecken (v_ereignis)
{
  var v_tasten_code = v_ereignis.keyCode

  if ((v_tasten_code == 87) && (v_keylock == false) && ((v_zone == "Gebiet")  || (v_zone == "Manabrunnen"))) //nord
  {
    if (!o_fenster.v_aktiv)
    {
      o_charakter.p_bewegNord ();
      o_ausgabe.p_writeKoords ();
      o_proviant.p_test ();
    }
  }

  if ((v_tasten_code == 83) && (v_keylock == false) && ((v_zone == "Gebiet") || (v_zone == "Manabrunnen"))) //süd
  {
    if (!o_fenster.v_aktiv)
    {
      o_charakter.p_bewegSued ();
      o_ausgabe.p_writeKoords ();
      o_proviant.p_test ();
    }
  }

  if ((v_tasten_code == 65) && (v_keylock == false) && ((v_zone == "Gebiet") || (v_zone == "Manabrunnen"))) //west
  {
    if (!o_fenster.v_aktiv)
    {
      o_charakter.p_bewegWest ();
      o_ausgabe.p_writeKoords ();
      o_proviant.p_test ();
    }
  }
  if ((v_tasten_code == 68) && (v_keylock == false) && ((v_zone == "Gebiet") || (v_zone == "Manabrunnen"))) //ost
  {
    if (!o_fenster.v_aktiv)
    {
      o_charakter.p_bewegOst ();
      o_ausgabe.p_writeKoords ();
      o_proviant.p_test ();
    }
  }

  if ((v_tasten_code == 69) && (v_keylock == false)) // E-Taste (Interaktion)
  {
    f_interaktion ();
  } 
  if ((v_tasten_code == 49) && (v_keylock == false) && (v_zone != "Haendler")) // 1-Taste Heiltrank benutzen
  {
    o_heiltrank.p_benutzHeiltrank ();
  }
  if ((v_tasten_code == 50) && (v_keylock == false) && (v_zone != "Haendler")) // 2-Taste Manatrank benutzen
  {
    o_manatrank.p_benutzManatrank ();
  }
  if ((v_tasten_code == 52) && (v_keylock == false) && (v_zone != "Haendler")) // 4-Taste Portalrolle benutzen
  {
    o_portalrolle.p_benutzPortalrolle ();    
  }    
}

//Steuerung über Buttons
function f_button_steuerung (v_id)
{
  //wenn Nordbutton gedrückt
  if ((v_id == 1) && (v_keylock == false))
  {
    if (!o_fenster.v_aktiv)
    {
      o_charakter.p_bewegNord ();
      o_ausgabe.p_writeKoords ();
      o_proviant.p_test ();
    }
  }

  //wenn Südbutton gedrückt
  if ((v_id == 2) && (v_keylock == false))
  {
    if (!o_fenster.v_aktiv)
    {
      o_charakter.p_bewegSued ();
      o_ausgabe.p_writeKoords ();
      o_proviant.p_test ();
    }
  }

  //wenn Westbutton gedrückt
  if ((v_id == 3) && (v_keylock == false))
  {
    if (!o_fenster.v_aktiv)
    {
      o_charakter.p_bewegWest ();
      o_ausgabe.p_writeKoords ();
      o_proviant.p_test ();
    }
  }

  // wenn Ostbutton gedrückt
  if ((v_id == 4) && (v_keylock == false))
  {
    if (!o_fenster.v_aktiv)
    {
      o_charakter.p_bewegOst ();
      o_ausgabe.p_writeKoords ();
      o_proviant.p_test ();
    }
  }

  //wenn Interaktionsbutton gedrückt
  if ((v_id == 5) && (v_keylock == false))
  {
    f_interaktion ();
  }

  //wenn Heiltrankbutton
  if ((v_id == 6) && (v_keylock == false))
  {
    o_heiltrank.p_benutzHeiltrank ();
  }

  //wenn Manatrankbutton
  if ((v_id == 7) && (v_keylock == false))
  {
    o_manatrank.p_benutzManatrank ();
  }

  //wenn Verlassen-Button gedrückt
  if ((v_id == 8) && (v_keylock == false))
  {
    if (v_zone == "Haendler")
    {
      v_zone = "Gebiet";
      o_gui.p_disableGuiHaendler ();
      document.getElementById ("ButtonVerlassen").style.left = "630px";
      document.getElementById ("spielersprite").style.visibility = "visible";
    }
    else if ((v_zone != "Kampf") && (v_zone != "Bosskampf"))
    {
      o_musik.p_stopAll ();
      o_gui.p_disableAllGame ();
      o_gui.p_enableStartscreen ();
      v_textName.value = "Hier Charakternamen eingeben";
      v_zone = "";
      v_lvl = 1;
      document.getElementById ("musik0").play ();
      
    }
    else if ((v_zone == "Kampf") || (v_zone == "Bosskampf"))
    {
      o_flucht.p_test ();
    }
  }
  //wenn Speichern-Button gedrückt
  if ((v_id == 9) && (v_keylock == false))
  {
     o_speichern.p_speichern ();
  }

  //wenn Zauber-Button gedrückt
  if ((v_id == 10) && (v_keylock == false))
  {
    if (document.getElementById("Zauberliste").options[document.getElementById ("Zauberliste").selectedIndex].value == "Regnen")
    {
      o_zauber.p_regnen ();
    }
    else if (document.getElementById("Zauberliste").options[document.getElementById ("Zauberliste").selectedIndex].value == "Sporen")
    {
      o_zauber.p_sporen ();
    }
    else if (document.getElementById("Zauberliste").options[document.getElementById ("Zauberliste").selectedIndex].value == "Umwandlung")
    {
      o_zauber.p_umwandlung ();
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [26], "", "", "", "");
    }
  }

  //wenn Portalrollenbutton gedrückt
  if ((v_id == 11) && (v_keylock == false) && (v_zone != "Haendler"))
  {
    o_portalrolle.p_benutzPortalrolle ();
  }

  if ((v_id == 12) && (v_keylock == false) && (v_zone != "Haendler"))
  {
    o_medizintrank.p_benutzMedizintrank ();
  }
  
  //Soundeffektkontrolle
  if (v_id == 13)
  {
    o_sound.p_kontroll ();
  }
  
  //Musikkontrolle
  if (v_id == 14)
  {
    o_musik.p_kontroll ();
  }

  //Vollbildkontrolle
  if (v_id == 15)
  {
    o_gfx.p_vollbild ();
  }
}

function f_clearTextName () { v_textName.value = ""; }
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

function c_laden () {}

c_laden.prototype.p_laden = function ()
{
  //Globale Werte
  v_version_old = localStorage.getItem ("unten_version");

  v_lvl = parseInt (localStorage.getItem ("unten_lvl"));
  o_engine.v_tileset = localStorage.getItem ("unten_tileset");

  //Charakterdaten
  o_charakter.v_name = localStorage.getItem ("unten_name");
  o_charakter.v_klasse = localStorage.getItem ("unten_klasse");

  o_charakter.v_klugheit = parseInt (localStorage.getItem ("unten_klugheit"));
  o_charakter.v_kraft = parseInt (localStorage.getItem ("unten_kraft"));
  o_charakter.v_geschick = parseInt (localStorage.getItem ("unten_geschick"));

  o_charakter.v_lebenspunkte = parseInt (localStorage.getItem ("unten_lebenspunkte"));
  o_charakter.v_mlebenspunkte = parseInt (localStorage.getItem ("unten_mlebenspunkte"));
  o_charakter.v_manapunkte = parseInt (localStorage.getItem ("unten_manapunkte"));
  o_charakter.v_mmanapunkte = parseInt (localStorage.getItem ("unten_mmanapunkte"));

  o_charakter.v_erfahrungspunkte = parseInt (localStorage.getItem ("unten_erfahrungspunkte"));
  o_charakter.v_stufe = parseInt (localStorage.getItem ("unten_stufe"));

  o_charakter.v_waffe = localStorage.getItem ("unten_waffe");
  o_charakter.v_ruestung = localStorage.getItem ("unten_ruestung");
  o_charakter.v_schild = localStorage.getItem ("unten_schild");
  o_charakter.v_trefferpunkte = parseInt (localStorage.getItem ("unten_trefferpunkte"));
  o_charakter.v_ruestungswert = parseInt (localStorage.getItem ("unten_ruestungswert"));
  o_charakter.v_schildwert = parseInt (localStorage.getItem ("unten_schildwert"));

  o_charakter.v_gold = parseInt (localStorage.getItem ("unten_gold"));
  o_charakter.v_heiltrank = parseInt (localStorage.getItem ("unten_heiltrank"));
  o_charakter.v_manatrank = parseInt (localStorage.getItem ("unten_manatrank"));
  o_charakter.v_portalrolle = parseInt (localStorage.getItem ("unten_portalrolle"));
  o_charakter.v_schluessel = parseInt (localStorage.getItem ("unten_schluessel"));
  o_charakter.v_proviant = parseInt (localStorage.getItem ("unten_proviant"));

  o_charakter.v_regnen = localStorage.getItem ("unten_regnen");
  o_charakter.v_sporen = localStorage.getItem ("unten_sporen");
  o_charakter.v_umwandlung = localStorage.getItem ("unten_umwandlung");

  o_charakter.v_schritte = parseInt (localStorage.getItem ("unten_schritte"));
  o_charakter.v_schlachtfelder = parseInt (localStorage.getItem ("unten_schlachtfelder"));
  o_charakter.v_quest = localStorage.getItem ("unten_quest");
  o_charakter.v_questitem = localStorage.getItem ("unten_questitem");
  o_charakter.v_queststand = localStorage.getItem ("unten_queststand");
  o_charakter.v_equest = parseInt (localStorage.getItem ("unten_equest"));

  o_charakter.v_xk = parseInt (localStorage.getItem ("unten_xk"));
  o_charakter.v_yk = parseInt (localStorage.getItem ("unten_yk"));
  o_charakter.v_mxk = parseInt (localStorage.getItem ("unten_mxk"));
  o_charakter.v_myk = parseInt (localStorage.getItem ("unten_myk"));

  o_charakter.v_mlvl = parseInt (localStorage.getItem ("unten_mlvl"));

  o_charakter.v_status = localStorage.getItem ("unten_status");
  o_charakter.v_zustand = localStorage.getItem ("unten_zustand");

  o_schlachtfelder.v_etage = JSON.parse (localStorage.getItem ("unten_schlachtfelder_etage"));
  o_schlachtfelder.v_erledigt = JSON.parse (localStorage.getItem ("unten_schlachtfelder_erledigt"));

  //Truhendaten
  o_truhen.v_status = JSON.parse (localStorage.getItem ("unten_truhen_status"));
  
  //Questdaten
  o_questen.v_quest = JSON.parse (localStorage.getItem ("unten_questen"));

  //Portaldaten
  o_portale.v_portale = JSON.parse (localStorage.getItem ("unten_portale"));

  //Manabrunnen
  if (v_version_old != "003")
  {
    o_manabrunnen.v_erledigt = JSON.parse (localStorage.getItem ("unten_manabrunnen"));
  }

  //Zauber
  if (o_charakter.v_regnen == "aktiv") {
    document.getElementById("Zauberliste").options[1]  = new Option ("Regnen");
  }

  if (o_charakter.v_sporen == "aktiv") {
    document.getElementById("Zauberliste").options[2]  = new Option ("Sporen");
  }
  if (o_charakter.v_umwandlung == "aktiv") {
    document.getElementById("Zauberliste").options[3]  = new Option ("Umwandlung");
  }

  if (v_version_old == "003")
  {
    o_charakter.v_mlvl = v_lvl;
    o_charakter.v_zustand = "Keiner";
    o_charakter.v_status = "Gesund";

    for (let v_i = 99; v_i < 106; v_i++) { o_schlachtfelder.v_etage [v_i] = 2; }
    for (let v_i = 106; v_i < 116; v_i++) { o_schlachtfelder.v_etage [v_i] = 3; }
    for (let v_i = 116; v_i < 123; v_i++) { o_schlachtfelder.v_etage [v_i] = 4; }
    o_schlachtfelder.v_etage [123] = 1;
    for (let v_i = 124; v_i < 149; v_i++) { o_schlachtfelder.v_etage [v_i] = 3; }
    for (let v_i = 149; v_i < 156; v_i++) { o_schlachtfelder.v_etage [v_i] = 4; }
    o_schlachtfelder.v_etage [156] = 1;
    for (let v_i = 157; v_i < 163; v_i++) { o_schlachtfelder.v_etage [v_i] = 3; }
    for (let v_i = 163; v_i < 169; v_i++) { o_schlachtfelder.v_etage [v_i] = 3; }
    o_schlachtfelder.v_etage [169] = 1;
    for (let v_i = 170; v_i < 176; v_i++) { o_schlachtfelder.v_etage [v_i] = 3; }
    for (let v_i = 176; v_i <= 180; v_i++) { o_schlachtfelder.v_etage [v_i] = 3; }
    for (let v_i = 181; v_i <= 189; v_i++) { o_schlachtfelder.v_etage [v_i] = 3; }
    for (let v_i = 190; v_i <= 196; v_i++) { o_schlachtfelder.v_etage [v_i] = 3; }
    for (let v_i = 197; v_i <= 202; v_i++) { o_schlachtfelder.v_etage [v_i] = 3; }
    o_schlachtfelder.v_etage [203] = 1;

    for (let v_i = 1; v_i <= 20; v_i++) { o_manabrunnen.v_erledigt [v_i] = 0; }
    
    if (o_charakter.v_lvl == 1)
    {
      o_engine.v_tileset = "dorf";
    }
    else if (o_charakter.v_lvl == 10)
    {
      o_engine.v_tileset = "d1a";
    } 
    else if (o_charakter.v_lvl <= 9)
    {
      o_engine.v_tileset = "d1";
    } 
  }   

  if ((v_version_old == "003") || (v_version_old == "004") ||  (v_version_old == "004a") ||  (v_version_old == "004b")) 
  {
    for (let v_i = 204; v_i <= 214; v_i++) { o_schlachtfelder.v_etage [v_i] = 2; }
    for (let v_i = 215; v_i <= 218; v_i++) { o_schlachtfelder.v_etage [v_i] = 3; }
    for (let v_i = 219; v_i <= 223; v_i++) { o_schlachtfelder.v_etage [v_i] = 3; }
    for (let v_i = 224; v_i <= 229; v_i++) { o_schlachtfelder.v_etage [v_i] = 3; }
    for (let v_i = 230; v_i <= 240; v_i++) { o_schlachtfelder.v_etage [v_i] = 3; }
    for (let v_i = 241; v_i <= 244; v_i++) { o_schlachtfelder.v_etage [v_i] = 3; }
    for (let v_i = 245; v_i <= 249; v_i++) { o_schlachtfelder.v_etage [v_i] = 4; }
    o_schlachtfelder.v_etage [250] = 1;
    for (let v_i = 251; v_i <= 263; v_i++) { o_schlachtfelder.v_etage [v_i] = 2; }
    for (let v_i = 264; v_i <= 274; v_i++) { o_schlachtfelder.v_etage [v_i] = 2; }
    for (let v_i = 264; v_i <= 274; v_i++) { o_schlachtfelder.v_etage [v_i] = 2; }
    for (let v_i = 275; v_i <= 289; v_i++) { o_schlachtfelder.v_etage [v_i] = 3; }
    
  }
}
//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2018 Heiko Wolf
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

function c_lvl0040 () {}

c_lvl0040.prototype.p_aktion = function ()
{ 
  //Bossschlachtfeld
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 9))
  {
    if (o_schlachtfelder.v_erledigt [250] == 0)
    {
      v_schlachtfeld = 250;
      o_kampf.p_start ("Basilisk");

    }
    else if (o_schlachtfelder.v_erledigt [250] == 1)
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_kampftexte [3], "", "", "", "");
    }
  }
  
  //Levelwechsel
  if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 3)) 
  {   
    o_engine.p_changeLvl (39, "d6", true, 0, 3);
  }
  else if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 18))
  {
    if (o_charakter.v_schluessel >= 12)
    {
      if (o_portale.v_portale [6] == 0) { o_portale.v_portale [6] = 1; }
      o_engine.p_changeLvl (41, "d7", true, 20, 17);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_texte [27], "", "", "", "");
    }
  }
}
//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2018 Heiko Wolf
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

function c_lvl0041 () {}

c_lvl0041.prototype.p_aktion = function ()
{ 
  //Schild
  o_schilder.p_set (19, 19, "Der Eistempel");
  
  //Schlachtfelder
  o_schlachtfelder.p_feld (19, 10, 251);
  o_schlachtfelder.p_feld (16, 3, 252);
  o_schlachtfelder.p_feld (14, 10, 253);
  o_schlachtfelder.p_feld (8, 1, 254);
  o_schlachtfelder.p_feld (8, 4, 255);
  o_schlachtfelder.p_feld (1, 5, 256);
  o_schlachtfelder.p_feld (9, 9, 257);
  o_schlachtfelder.p_feld (4, 11, 258);
  o_schlachtfelder.p_feld (10, 12, 259);
  o_schlachtfelder.p_feld (16, 15, 260);
  o_schlachtfelder.p_feld (13, 19, 261);
  o_schlachtfelder.p_feld (8, 14, 262);
  o_schlachtfelder.p_feld (4, 17, 263);
  
  //Levelwechsel
  if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 17)) 
  {   
    o_engine.p_changeLvl (40, "d6a", true, 0, 18);
  }
  else if ((o_charakter.v_mxk == 4) && (o_charakter.v_myk == 20)) 
  {
    o_engine.p_changeLvl (42, "d7", false, 4, 0);
  }
}
//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2018 Heiko Wolf
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

function c_lvl0042 () {}

c_lvl0042.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (1, 3, 264);
  o_schlachtfelder.p_feld (3, 6, 265);
  o_schlachtfelder.p_feld (6, 8, 266);
  o_schlachtfelder.p_feld (9, 6, 267);
  o_schlachtfelder.p_feld (14, 3, 268);
  o_schlachtfelder.p_feld (19, 6, 269);
  o_schlachtfelder.p_feld (14, 6, 270);
  o_schlachtfelder.p_feld (13, 9, 271);
  o_schlachtfelder.p_feld (8, 12, 272);
  o_schlachtfelder.p_feld (5, 14, 273);
  o_schlachtfelder.p_feld (8, 16, 274);
  
  //Levelwechsel
  if ((o_charakter.v_mxk == 4) && (o_charakter.v_myk == 0)) 
  {   
    o_engine.p_changeLvl (41, "d7", false, 4, 20);
  }
  else if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 20)) 
  {
    o_engine.p_changeLvl (43, "d7", false, 10, 0);
  }
}
//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2018 Heiko Wolf
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

function c_lvl0043 () {}

c_lvl0043.prototype.p_aktion = function ()
{
  //Truhe mit Manatrank
  o_truhen.p_manatranktruhe (3, 1, 26, 1);

  //Schlachtfelder
  o_schlachtfelder.p_feld (14, 2, 275);
  o_schlachtfelder.p_feld (18, 4, 276);
  o_schlachtfelder.p_feld (15, 6, 277);
  o_schlachtfelder.p_feld (11, 6, 278);
  o_schlachtfelder.p_feld (6, 6, 279);
  o_schlachtfelder.p_feld (3, 4, 280);
  o_schlachtfelder.p_feld (7, 9, 281);
  o_schlachtfelder.p_feld (10, 12, 282);
  o_schlachtfelder.p_feld (12, 15, 283);
  o_schlachtfelder.p_feld (16, 11, 284);
  o_schlachtfelder.p_feld (18, 14, 285);
  o_schlachtfelder.p_feld (16, 18, 286);
  o_schlachtfelder.p_feld (9, 18, 287);
  o_schlachtfelder.p_feld (7, 15, 288);
  o_schlachtfelder.p_feld (5, 16, 289);

  //Levelwechsel
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 0)) 
  {   
    o_engine.p_changeLvl (42, "d7", false, 10, 20);
  }
  else if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 18)) 
  {
    o_engine.p_changeLvl (44, "d7", false, 20, 18);
  }  
}//  Unten - ein Rollenspiel im Retrodesign
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

function c_speichern () {}

c_speichern.prototype.p_speichern = function ()
{
  //Globale Werte
  localStorage.setItem ("unten_version", v_version);
  localStorage.setItem ("unten_lvl", v_lvl);
  localStorage.setItem ("unten_tileset", o_engine.v_tileset);

  //Charakterdaten
  localStorage.setItem ("unten_name", o_charakter.v_name);
  localStorage.setItem ("unten_klasse", o_charakter.v_klasse);

  localStorage.setItem ("unten_klugheit", o_charakter.v_klugheit);
  localStorage.setItem ("unten_kraft", o_charakter.v_kraft);
  localStorage.setItem ("unten_geschick", o_charakter.v_geschick);

  localStorage.setItem ("unten_lebenspunkte", o_charakter.v_lebenspunkte);
  localStorage.setItem ("unten_mlebenspunkte", o_charakter.v_mlebenspunkte);
  localStorage.setItem ("unten_manapunkte", o_charakter.v_manapunkte);
  localStorage.setItem ("unten_mmanapunkte", o_charakter.v_mmanapunkte);

  localStorage.setItem ("unten_erfahrungspunkte", o_charakter.v_erfahrungspunkte);
  localStorage.setItem ("unten_stufe", o_charakter.v_stufe);

  localStorage.setItem ("unten_waffe", o_charakter.v_waffe);
  localStorage.setItem ("unten_ruestung", o_charakter.v_ruestung);
  localStorage.setItem ("unten_schild", o_charakter.v_schild);
  localStorage.setItem ("unten_trefferpunkte", o_charakter.v_trefferpunkte);
  localStorage.setItem ("unten_ruestungswert", o_charakter.v_ruestungswert);
  localStorage.setItem ("unten_schildwert", o_charakter.v_schildwert);

  localStorage.setItem ("unten_gold", o_charakter.v_gold);
  localStorage.setItem ("unten_heiltrank", o_charakter.v_heiltrank);
  localStorage.setItem ("unten_manatrank", o_charakter.v_manatrank);
  localStorage.setItem ("unten_portalrolle", o_charakter.v_portalrolle);
  localStorage.setItem ("unten_schluessel", o_charakter.v_schluessel);
  localStorage.setItem ("unten_proviant", o_charakter.v_proviant);

  localStorage.setItem ("unten_regnen", o_charakter.v_regnen);
  localStorage.setItem ("unten_sporen", o_charakter.v_sporen);
  localStorage.setItem ("unten_umwandlung", o_charakter.v_umwandlung);

  localStorage.setItem ("unten_schritte", o_charakter.v_schritte);
  localStorage.setItem ("unten_schlachtfelder", o_charakter.v_schlachtfelder);
  localStorage.setItem ("unten_quest", o_charakter.v_quest);
  localStorage.setItem ("unten_questitem", o_charakter.v_questitem);
  localStorage.setItem ("unten_queststand", o_charakter.v_queststand);
  localStorage.setItem ("unten_equest", o_charakter.v_equest);
  
  localStorage.setItem ("unten_xk", o_charakter.v_xk);
  localStorage.setItem ("unten_yk", o_charakter.v_yk);
  localStorage.setItem ("unten_mxk", o_charakter.v_mxk);
  localStorage.setItem ("unten_myk", o_charakter.v_myk);

  localStorage.setItem ("unten_mlvl", o_charakter.v_mlvl);

  localStorage.setItem ("unten_status", o_charakter.v_status);
  localStorage.setItem ("unten_zustand", o_charakter.v_zustand);

  //Schlachtfelddaten
  localStorage.setItem ("unten_schlachtfelder_etage", JSON.stringify (o_schlachtfelder.v_etage));
  localStorage.setItem ("unten_schlachtfelder_erledigt", JSON.stringify (o_schlachtfelder.v_erledigt));

  //Truhendaten
  localStorage.setItem ("unten_truhen_status", JSON.stringify (o_truhen.v_status)); 

  //Questdaten
  localStorage.setItem ("unten_questen", JSON.stringify (o_questen.v_quest));
  
  //Portale
  localStorage.setItem ("unten_portale", JSON.stringify (o_portale.v_portale));

  //Manabrunnen
  localStorage.setItem ("unten_manabrunnen", JSON.stringify (o_manabrunnen.v_erledigt));

  o_fenster.p_drawWindow ();
  o_fenster.p_writeText (v_texte [19], "", "", "", "");
}
