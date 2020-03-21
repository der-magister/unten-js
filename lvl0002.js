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
