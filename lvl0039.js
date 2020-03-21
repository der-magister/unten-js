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
