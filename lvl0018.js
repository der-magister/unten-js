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

function c_lvl0018 () {}

c_lvl0018.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (10, 17, 135);
  o_schlachtfelder.p_feld (10, 14, 136);
  o_schlachtfelder.p_feld (10, 10, 137);
  o_schlachtfelder.p_feld (14, 10, 138);
  o_schlachtfelder.p_feld (17, 10, 139);  

  //Levelwechsel
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 20))
  {   
    o_engine.p_changeLvl (17, "d3", false, 10, 0);
  }

  if ((o_charakter.v_mxk == 20) && (o_charakter.v_myk == 10))
  {   
    if (o_charakter.v_mlvl < 19) { o_charakter.v_mlvl = 19; }
    o_engine.p_changeLvl (19, "d3", false, 0, 10);
  }
  
}
