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
