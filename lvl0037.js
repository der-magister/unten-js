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

function c_lvl0037 () {}


c_lvl0037.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (10, 18, 230);
  o_schlachtfelder.p_feld (7, 16, 231);
  o_schlachtfelder.p_feld (8, 14, 232);
  o_schlachtfelder.p_feld (8, 12, 233);
  o_schlachtfelder.p_feld (7, 10, 234);
  o_schlachtfelder.p_feld (7, 7, 235);
  o_schlachtfelder.p_feld (9, 5, 236);
  o_schlachtfelder.p_feld (12, 5, 237);
  o_schlachtfelder.p_feld (14, 6, 238);
  o_schlachtfelder.p_feld (16, 8, 239);
  o_schlachtfelder.p_feld (18, 10, 240);

  //Levelwechsel
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 20)) 
  {   
    o_engine.p_changeLvl (36, "d6", false, 10, 0);
  }
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 10))
  {   
    o_engine.p_changeLvl (38, "d6", false, 0, 10);
  }
}
