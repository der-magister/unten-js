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
