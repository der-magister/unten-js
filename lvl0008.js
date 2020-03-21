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

function c_lvl0008 () {}

c_lvl0008.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (19, 4, 83);
  o_schlachtfelder.p_feld (17, 6, 84);
  o_schlachtfelder.p_feld (12, 6, 85);
  o_schlachtfelder.p_feld (10, 8, 86);
  o_schlachtfelder.p_feld (10, 11, 87);
  o_schlachtfelder.p_feld (10, 15, 88);

  //Levelwechsel
  //Lvl 0007
  if ((o_charakter.v_mxk == 19) && (o_charakter.v_myk == 1))
  {   
     o_engine.p_changeLvl (7, "d1", false, 18, 1);
  }

  //Lvl0009
  else if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 19))
  {   
    if (o_charakter.v_mlvl < 9) { o_charakter.v_mlvl = 9; }
    o_engine.p_changeLvl (9, "d1", false, 17, 19);
  }
}
