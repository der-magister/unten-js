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
