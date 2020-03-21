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

function c_lvl0033 () {}


c_lvl0033.prototype.p_aktion = function ()
{
  //Schlachtfelder
  o_schlachtfelder.p_feld (10, 2, 204);
  o_schlachtfelder.p_feld (10, 5, 205);
  o_schlachtfelder.p_feld (8, 7, 206);
  o_schlachtfelder.p_feld (6, 9, 207);
  o_schlachtfelder.p_feld (6, 11, 208);
  o_schlachtfelder.p_feld (6, 14, 209);
  o_schlachtfelder.p_feld (8, 16, 210);
  o_schlachtfelder.p_feld (10, 18, 211);
  o_schlachtfelder.p_feld (13, 14, 212);
  o_schlachtfelder.p_feld (13, 11, 213);
  o_schlachtfelder.p_feld (13, 9, 214);

  //Levelwechsel
  if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 0)) 
  { 
    o_musik.p_stop (1)
    o_engine.p_changeLvl (32, "manabrunnen", true, 10, 20);
    v_zone = "Manabrunnen";
    o_musik.p_play (6);
  }
  else if ((o_charakter.v_mxk == 10) && (o_charakter.v_myk == 20)) 
  {
    o_engine.p_changeLvl (34, "d6", false, 10, 0);
  }
}
