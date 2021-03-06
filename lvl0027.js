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

function c_lvl0027 () {}

c_lvl0027.prototype.p_aktion = function ()
{
  o_schlachtfelder.p_feld (16, 10, 176);
  o_schlachtfelder.p_feld (13, 10, 177);
  o_schlachtfelder.p_feld (10, 10, 178);
  o_schlachtfelder.p_feld (7, 10, 179);
  o_schlachtfelder.p_feld (4, 10, 180);

  //Levelwechsel
  if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 10)) 
  {   
    o_engine.p_changeLvl (26, "d5", false, 0, 10);
  }
  else if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 10))
  {   
    o_engine.p_changeLvl (28, "d5", false, 20, 10);
  }
}
