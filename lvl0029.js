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
