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
