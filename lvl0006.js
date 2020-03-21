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

function c_lvl0006 () {}

c_lvl0006.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (9, 1, 62);
  o_schlachtfelder.p_feld (9, 3, 63);
  o_schlachtfelder.p_feld (9, 5, 64);
  o_schlachtfelder.p_feld (9, 7, 65);
  o_schlachtfelder.p_feld (9, 9, 66);
  o_schlachtfelder.p_feld (9, 11, 67);
  o_schlachtfelder.p_feld (9, 13, 68);
  o_schlachtfelder.p_feld (9, 15, 69);
  o_schlachtfelder.p_feld (9, 17, 70);
  o_schlachtfelder.p_feld (9, 19, 71)

  //Levelwechsel
  //Lvl 0005
  if ((o_charakter.v_mxk == 19) && (o_charakter.v_myk == 1))
  {   
    o_engine.p_changeLvl (5, "d1", false, 18, 4);
  }

  //Lvl0007
  else if ((o_charakter.v_mxk == 19) && (o_charakter.v_myk == 19))
  {   
     if (o_charakter.v_mlvl < 7) { o_charakter.v_mlvl = 7; }
    o_engine.p_changeLvl (7, "d1", false, 19, 19);
  }
}
