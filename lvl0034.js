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

function c_lvl0034 () {}


c_lvl0034.prototype.p_aktion = function ()
{
  //Schild
  o_schilder.p_set (9, 1, "Die Globule");

  //Goldstruhe mit 350 Gold
  o_truhen.p_goldtruhe (10, 14, 23, 350);

  //Schlachtfelder
  o_schlachtfelder.p_feld (10, 3, 215);
  o_schlachtfelder.p_feld (10, 10, 216);
  o_schlachtfelder.p_feld (13, 6, 217);
  o_schlachtfelder.p_feld (17, 6, 218);

  //Levelwechsel
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 0)) 
  {   
    o_engine.p_changeLvl (33, "d6", false, 10, 20);
  }
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 6))
  {   
    o_engine.p_changeLvl (35, "d6", false, 0, 6);
  }
}
