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
