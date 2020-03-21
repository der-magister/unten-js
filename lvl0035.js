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

function c_lvl0035 () {}


c_lvl0035.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (2, 6, 219);
  o_schlachtfelder.p_feld (5, 6, 220);
  o_schlachtfelder.p_feld (10, 6, 221);
  o_schlachtfelder.p_feld (15, 6, 222);
  o_schlachtfelder.p_feld (18, 6, 223);

  //Levelwechsel
  if ((o_charakter.v_mxk == 0) && (o_charakter.v_myk == 6)) 
  {   
    o_engine.p_changeLvl (34, "d6", false, 20, 6);
  }
  else if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 6))
  {   
    o_engine.p_changeLvl (36, "d6", false, 0, 6);
  }
}
