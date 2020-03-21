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

function c_lvl0042 () {}

c_lvl0042.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (1, 3, 264);
  o_schlachtfelder.p_feld (3, 6, 265);
  o_schlachtfelder.p_feld (6, 8, 266);
  o_schlachtfelder.p_feld (9, 6, 267);
  o_schlachtfelder.p_feld (14, 3, 268);
  o_schlachtfelder.p_feld (19, 6, 269);
  o_schlachtfelder.p_feld (14, 6, 270);
  o_schlachtfelder.p_feld (13, 9, 271);
  o_schlachtfelder.p_feld (8, 12, 272);
  o_schlachtfelder.p_feld (5, 14, 273);
  o_schlachtfelder.p_feld (8, 16, 274);
  
  //Levelwechsel
  if ((o_charakter.v_mxk == 4) && (o_charakter.v_myk == 0)) 
  {   
    o_engine.p_changeLvl (41, "d7", false, 4, 20);
  }
  else if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 20)) 
  {
    o_engine.p_changeLvl (43, "d7", false, 10, 0);
  }
}
