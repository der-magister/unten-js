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
