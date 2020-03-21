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
